const ADMIN_UID = "cf842f14-dd7a-454e-a2cb-6d1e38ddedee";
const $ = selector => document.querySelector(selector);
const safe = value => String(value ?? "").replace(/[&<>'"]/g, char => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", "'":"&#39;", '"':"&quot;" })[char]);
const money = value => Number(value || 0).toLocaleString("pt-BR", { style:"currency", currency:"BRL" });
const slugify = value => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const displayImage = url => /^https?:\/\//i.test(url || "") ? url : `../${url || "assets/sem-foto.jpeg"}`;


let products = [];
let existingImages = [];

function message(element, text, type = "") {
  element.textContent = text;
  element.className = `message ${type}`.trim();
}

async function checkSession() {
  const { data:{ session } } = await supabaseClient.auth.getSession();
  if (session?.user?.id === ADMIN_UID) showDashboard();
  else showLogin();
}

function showLogin() {
  $("#loginView").classList.remove("hidden");
  $("#dashboard").classList.add("hidden");
}

async function showDashboard() {
  $("#loginView").classList.add("hidden");
  $("#dashboard").classList.remove("hidden");
  await loadProducts();
}

$("#loginForm").addEventListener("submit", async event => {
  event.preventDefault();
  message($("#loginMessage"), "Entrando...");
  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email:$("#loginEmail").value.trim(), password:$("#loginPassword").value
  });
  if (error) return message($("#loginMessage"), "E-mail ou senha incorretos.", "error");
  if (data.user.id !== ADMIN_UID) {
    await supabaseClient.auth.signOut();
    return message($("#loginMessage"), "Este usuário não possui acesso ao painel.", "error");
  }
  message($("#loginMessage"), "");
  showDashboard();
});

$("#logoutButton").addEventListener("click", async () => { await supabaseClient.auth.signOut(); showLogin(); });

async function loadProducts() {
  message($("#dashboardMessage"), "Carregando produtos...");
  const { data, error } = await supabaseClient.from("produtos").select("*").order("ordem").order("id");
  if (error) return message($("#dashboardMessage"), `Não foi possível carregar: ${error.message}`, "error");
  products = data || [];
  message($("#dashboardMessage"), products.length ? `${products.length} produto(s) cadastrado(s).` : "Nenhum produto cadastrado.");
  renderProducts();
}

function renderProducts() {
  const query = $("#adminSearch").value.trim().toLocaleLowerCase("pt-BR");
  const result = products.filter(product => `${product.nome} ${product.marca} ${product.colecao} ${product.modelo}`.toLocaleLowerCase("pt-BR").includes(query));
  $("#adminProductList").innerHTML = result.length ? result.map(product => `
    <article class="admin-product">
      <img src="${safe(displayImage(product.imagens?.[0]))}" alt="">
      <div><h3>${safe(product.nome)}</h3><p>${safe((product.cores || []).join(", "))} · ${safe(product.marca)}</p><p>${safe(product.colecao || "Sem coleção")}</p></div>
      <div class="admin-price">${money(product.preco)}<small> à vista</small>${product.preco_cartao ? `<br><small>${money(product.preco_cartao)} no cartão</small>` : ""}</div>
      <div class="admin-status"><span class="status ${product.disponivel ? "" : "off"}">${product.disponivel ? "Disponível" : "Oculta"}</span></div>
      <div class="row-actions"><button type="button" data-edit="${product.id}">Editar</button><button class="delete" type="button" data-delete="${product.id}">Excluir</button></div>
    </article>`).join("") : '<p class="muted">Nenhum produto encontrado.</p>';
}

$("#adminSearch").addEventListener("input", renderProducts);
$("#adminProductList").addEventListener("click", event => {
  const edit = event.target.closest("[data-edit]");
  const remove = event.target.closest("[data-delete]");
  if (edit) openDrawer(products.find(product => product.id === Number(edit.dataset.edit)));
  if (remove) deleteProduct(Number(remove.dataset.delete));
});

function openDrawer(product = null) {
  $("#productForm").reset();
  $("#productAvailable").checked = true;
  existingImages = product?.imagens ? [...product.imagens] : [];
  $("#formTitle").textContent = product ? "Editar bolsa" : "Nova bolsa";
  $("#productId").value = product?.id || "";
  $("#productSlug").value = product?.slug || "";
  $("#productName").value = product?.nome || "";
  $("#productPrice").value = product?.preco ?? "";
  $("#productCardPrice").value = product?.preco_cartao ?? "";
  $("#productInstallments").value = product?.parcelas ?? 3;
  $("#productOrder").value = product?.ordem ?? products.length + 1;
  $("#productBrand").value = product?.marca || "La Graci";
  $("#productCollection").value = product?.colecao || "";
  $("#productModel").value = product?.modelo || "";
  $("#productFormat").value = product?.formato || "";
  $("#productBadge").value = product?.badge || "";
  $("#productColors").value = (product?.cores || []).join(", ");
  $("#productStyles").value = (product?.estilos || []).join(", ");
  $("#productOccasions").value = (product?.ocasioes || []).join(", ");
  $("#productStraps").value = (product?.tipos_alca || []).join(", ");
  $("#productMaterial").value = product?.material || "";
  $("#productDimensions").value = product?.dimensoes || "";
  $("#productCompartments").value = product?.compartimentos || "";
  $("#productBenefits").value = product?.beneficios || "";
  $("#productDescription").value = product?.descricao || "";
  $("#productAvailable").checked = product?.disponivel ?? true;
  $("#productFeatured").checked = product?.destaque ?? false;
  message($("#formMessage"), "");
  renderImagePreview();
  $("#productDrawer").classList.remove("hidden");
  $("#productDrawer").setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeDrawer() {
  $("#productDrawer").classList.add("hidden");
  $("#productDrawer").setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

$("#newProductButton").addEventListener("click", () => openDrawer());
$("#closeDrawer").addEventListener("click", closeDrawer);
$("#drawerBackdrop").addEventListener("click", closeDrawer);
$("#cancelProduct").addEventListener("click", closeDrawer);

function renderImagePreview() {
  $("#imagePreview").innerHTML = existingImages.map((image,index) => `
    <div class="preview-item"><img src="${safe(displayImage(image))}" alt="Foto ${index + 1}"><button type="button" data-remove-image="${index}" aria-label="Remover foto">×</button></div>`).join("");
}

$("#imagePreview").addEventListener("click", event => {
  const button = event.target.closest("[data-remove-image]");
  if (!button) return;
  existingImages.splice(Number(button.dataset.removeImage), 1);
  renderImagePreview();
});

async function uploadImages(files, slug) {
  const uploaded = [];
  for (const file of files) {
    if (!file.type.startsWith("image/") || /heic|heif/i.test(file.type + file.name)) throw new Error("Converta imagens HEIC para WebP ou JPEG antes de enviar.");
    const extension = file.name.split(".").pop().toLowerCase();
    const path = `${slug}/${Date.now()}-${crypto.randomUUID()}.${extension}`;
    const { error } = await supabaseClient.storage.from("produtos").upload(path, file, { cacheControl:"3600", upsert:false });
    if (error) throw error;
    uploaded.push(supabaseClient.storage.from("produtos").getPublicUrl(path).data.publicUrl);
  }
  return uploaded;
}

$("#productForm").addEventListener("submit", async event => {
  event.preventDefault();
  const saveButton = $("#saveProduct");
  saveButton.disabled = true;
  message($("#formMessage"), "Salvando produto e enviando fotos...");
  try {
    const id = Number($("#productId").value) || null;
    const nome = $("#productName").value.trim();
    const slug = $("#productSlug").value || `${slugify(nome)}-${Date.now()}`;
    const uploaded = await uploadImages([...$("#productImages").files], slug);
    const payload = {
      nome, slug, preco:Number($("#productPrice").value),
      preco_cartao:$("#productCardPrice").value ? Number($("#productCardPrice").value) : null,
      parcelas:Number($("#productInstallments").value) || 3,
      cores:$("#productColors").value.split(",").map(item => item.trim()).filter(Boolean),
      marca:$("#productBrand").value.trim(), colecao:$("#productCollection").value,
      colecoes: (() => {
        const selected = $("#productCollection").value;
        const previous = products.find(item => item.id === id);
        return previous?.colecao === selected ? (previous.colecoes || []) : (selected ? [selected] : []);
      })(),
      modelo:$("#productModel").value.trim(), formato:$("#productFormat").value.trim(), badge:$("#productBadge").value.trim(),
      estilos:listValue("#productStyles"), ocasioes:listValue("#productOccasions"),
      tipos_alca:listValue("#productStraps"), material:$("#productMaterial").value.trim(),
      dimensoes:$("#productDimensions").value.trim(), compartimentos:$("#productCompartments").value.trim(),
      beneficios:$("#productBenefits").value.trim(),
      descricao:$("#productDescription").value.trim(), imagens:[...existingImages,...uploaded],
      disponivel:$("#productAvailable").checked, destaque:$("#productFeatured").checked,
      ordem:Number($("#productOrder").value) || 0, atualizado_em:new Date().toISOString()
    };
    const query = id ? supabaseClient.from("produtos").update(payload).eq("id", id) : supabaseClient.from("produtos").insert(payload);
    const { error } = await query;
    if (error) throw error;
    message($("#formMessage"), "Produto salvo com sucesso.", "success");
    await loadProducts();
    setTimeout(closeDrawer, 450);
  } catch (error) {
    message($("#formMessage"), `Não foi possível salvar: ${error.message}`, "error");
  } finally { saveButton.disabled = false; }
});

function listValue(selector) {
  return $(selector).value.split(",").map(item => item.trim()).filter(Boolean);
}

async function deleteProduct(id) {
  const product = products.find(item => item.id === id);
  if (!product || !confirm(`Excluir “${product.nome}”? Esta ação não pode ser desfeita.`)) return;
  const { error } = await supabaseClient.from("produtos").delete().eq("id", id);
  if (error) return message($("#dashboardMessage"), `Não foi possível excluir: ${error.message}`, "error");
  const paths = (product.imagens || []).map(url => url.split("/storage/v1/object/public/produtos/")[1]).filter(Boolean);
  if (paths.length) await supabaseClient.storage.from("produtos").remove(paths);
  await loadProducts();
  message($("#dashboardMessage"), "Produto excluído.", "success");
}


checkSession();
