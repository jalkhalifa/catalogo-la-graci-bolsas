const WHATSAPP = "5564992323390";

const product = ({ id, name, price, cardPrice, colors, folder, imageCount = 2, extension = "webp", ...details }) => ({
  id, name, price, cardPrice, installments: 3, colors, color: colors.join(", "), brand: "La Graci",
  collection: "", badge: "", occasions: [], benefits: "", featured: false, order: id,
  images: Array.from({ length: imageCount }, (_, index) => `assets/produtos/${folder}/${index + 1}.${extension}`),
  ...details
});

// Catálogo oficial atualizado diretamente no código.
// Celeste, Valéria e Maya aguardam fotos das cores disponíveis.
const CATALOG_PRODUCTS = [
  product({
    id: 1, name: "Bolsa Any", price: 185, cardPrice: 189, colors: ["Caramelo", "Preto"], folder: "any",
    model: "Satchel", format: "Satchel estruturada", styles: ["Casual Chic", "Atemporal"],
    straps: ["Mão", "Transversal"], material: "Camurça e Sintético / PU", dimensions: "16 cm × 22 cm",
    compartments: "Bolso interno com zíper e divisória",
    description: "Design bicolor sofisticado que combina a textura aveludada da camurça em tom caramelo com base e alça pretas. Conta com fecho giratório em metal dourado e tamanho ideal para carregar seus itens essenciais com elegância."
  }),
  product({
    id: 2, name: "Bolsa Aria", price: 185, cardPrice: 189, colors: ["Caramelo"], folder: "aria",
    model: "Bauletto", format: "Bauletto estruturado", styles: ["Clássico Elegante"],
    straps: ["Mão", "Transversal"], material: "Sintético / PU", dimensions: "18 cm × 30 cm",
    compartments: "Bolso interno com zíper e divisória",
    description: "Com formato bauletto estruturado e brilho acetinado, destaca-se pelo detalhe em relevo no painel frontal e pelas ferragens douradas cilíndricas. Uma peça refinada e versátil com fechamento superior em zíper."
  }),
  product({
    id: 3, name: "Bolsa Camila", price: 229, cardPrice: 239, colors: ["Marrom Café"], folder: "camila", imageCount: 4,
    model: "Tote", format: "Tote ampla", styles: ["Casual Chic", "Atemporal"],
    straps: ["Mão", "Transversal"], material: "Sintético / PU", dimensions: "26 cm × 40 cm",
    compartments: "Bolso interno com zíper e divisória",
    description: "Modelo amplo e sofisticado que une o acabamento fosco com contornos lisos em tom terroso. As ferragens douradas nas alças e o espaço generoso fazem dela uma opção elegante para a rotina de trabalho."
  }),
  product({
    id: 4, name: "Bolsa Cléo", price: 180, cardPrice: 195, colors: ["Caramelo"], folder: "cleo", imageCount: 3,
    model: "Bucket", format: "Saco / Bucket", styles: ["Boho Minimalista", "Design Orgânico", "Casual Chic"],
    straps: ["Mão", "Transversal"], material: "Sintético / PU", dimensions: "15 cm × 18 cm",
    compartments: "Nécessaire interna",
    description: "Design moderno em formato saco, esculpido por gomos verticais marcantes que criam volume e fluidez."
  }),
  product({
    id: 5, name: "Bolsa Essence", price: 245, cardPrice: 265, colors: ["Café"], folder: "essence", extension: "jpeg",
    model: "Tote", format: "Tote estruturada", styles: ["Quiet Luxury", "Executivo Chic"],
    straps: ["Mão", "Transversal"], material: "Sintético / PU", dimensions: "24 cm × 33 cm",
    compartments: "Bolso interno com zíper e divisória",
    description: "Modelagem tote estruturada de linhas retas, com acabamento liso e detalhe metálico prateado no fecho superior."
  }),
  product({
    id: 6, name: "Bolsa Helena", price: 175, cardPrice: 187, colors: ["Caramelo", "Natural"], folder: "helena", imageCount: 1, extension: "jpeg",
    model: "Hobo", format: "Hobo compacta", styles: ["Vintage Moderno", "Casual Sofisticado"],
    straps: ["Ombro", "Transversal"], material: "Sintético / PU", dimensions: "21 cm × 28 cm",
    compartments: "Bolso frontal com zíper e bolso interno com zíper",
    description: "Modelo hobo compacto com design curvo, bolso frontal com zíper e alça de ombro com mosquetões dourados."
  }),
  product({
    id: 7, name: "Bolsa Isla", price: 229, cardPrice: 239, colors: ["Marrom Monograma"], folder: "isla", imageCount: 3,
    model: "Tote", format: "Tote espaçosa", styles: ["Executivo", "Clássico Urbano"],
    straps: ["Ombro"], material: "Sintético / PU", dimensions: "27 cm × 32 cm",
    compartments: "Bolso interno com zíper e divisória",
    description: "Modelagem clássica e espaçosa em padronagem monogramada, enriquecida por aba frontal em tom caramelo e tiras verticais estruturadas. Uma peça imponente e funcional para o dia a dia."
  }),
  product({
    id: 8, name: "Bolsa Satchel Lia", price: 185, cardPrice: 195, colors: ["Nude", "Caramelo"], folder: "lia",
    model: "Satchel", format: "Satchel estruturada", styles: ["Boho Chic", "Moderno Aconchegante", "Sofisticado"],
    straps: ["Mão", "Transversal"], material: "Sintético / PU e Suede", dimensions: "18 cm × 27 cm",
    compartments: "Bolso interno",
    description: "Combinação de texturas que mistura acabamento liso e camurça nas laterais. Apresenta alça tubular arredondada, logo delicado na frente e chaveiro em tom sobre tom, garantindo um toque artesanal refinado."
  }),
  product({
    id: 9, name: "Bolsa Lorena", price: 229, cardPrice: 239, colors: ["Café", "Preto"], folder: "lorena", extension: "jpeg",
    model: "Hobo", format: "Hobo ampla", styles: ["Boho Chic", "Urbano Moderno"],
    straps: ["Ombro"], material: "Sintético / PU", dimensions: "42 cm × 40 cm",
    compartments: "Bolso interno com zíper",
    description: "Modelagem hobo desconstruída em material macio, com caimento fluido e tachas metálicas nas laterais. Possui alça de ombro integrada e design amplo com toque boho moderno."
  }),
  product({
    id: 10, name: "Bolsa Lumière", price: 185, cardPrice: 195, colors: ["Caramelo"], folder: "lumiere", extension: "jpeg",
    model: "Shoulder Bag", format: "Meia-lua estruturada", styles: ["Modern Glam", "Urbano Chic"],
    straps: ["Corrente", "Transversal"], material: "Sintético / PU", dimensions: "14 cm × 21 cm",
    compartments: "Bolso interno com zíper",
    description: "Modelagem meia-lua estruturada com matelassê na parte inferior, aba superior suave e alça decorativa em corrente metálica dourada."
  }),
  product({
    id: 11, name: "Bolsa Milão", price: 249, cardPrice: 265, colors: ["Natural"], folder: "milao", imageCount: 3,
    model: "Satchel", format: "Satchel estruturada", styles: ["Casual Chic", "Atemporal"],
    straps: ["Ombro", "Transversal"], material: "Sintético / PU", dimensions: "21 cm × 32 cm",
    compartments: "Bolso interno com zíper e divisória",
    description: "Design clássico, toque macio e textura levemente envelhecida, com ferragens em banho dourado. Conta com excelente espaço interno e fechamento em zíper para manter seus pertences seguros."
  }),
  product({
    id: 12, name: "Bolsa Shoulder Nura", price: 175, cardPrice: 185, colors: ["Preto", "Café"], folder: "shoulder-nura",
    model: "Shoulder Bag", format: "Meia-lua", styles: ["Minimalista", "Urbano"],
    straps: ["Mão", "Transversal"], material: "Sintético / PU", dimensions: "18 cm × 25 cm",
    compartments: "Bolso interno com zíper e divisória",
    description: "Design meia-lua moderno com acabamentos marcantes. Conta com fecho metálico dourado sobre a tira central e formato anatômico para um visual urbano e sofisticado."
  }),
  product({
    id: 13, name: "Bolsa Solene", price: 185, cardPrice: 195, colors: ["Caramelo"], folder: "solene", imageCount: 1, extension: "jpeg",
    model: "Hobo", format: "Hobo curva", styles: ["Casual Chic", "Urbano Sofisticado"],
    straps: ["Mão", "Transversal"], material: "Sintético / PU", dimensions: "26 cm × 29 cm",
    compartments: "Bolso interno com zíper",
    description: "Design anatômico de silhueta curva em textura macia, com alça de ombro integrada, nó decorativo e chaveiro utilitário removível."
  }),
  product({
    id: 14, name: "Bolsa Sophia", price: 219, cardPrice: 229, colors: ["Off-white", "Caramelo"], folder: "sophia", imageCount: 3,
    model: "Satchel", format: "Satchel estruturada", styles: ["Casual Chic", "Atemporal"],
    straps: ["Mão", "Transversal"], material: "Sintético / PU", dimensions: "17 cm × 24 cm",
    compartments: "Bolso interno com zíper e divisória",
    description: "Design refinado em estampa geométrica monogramada com detalhes e alça em tom caramelo. O nó de cordão na alça e a estrutura firme unem elegância e praticidade."
  }),
  product({
    id: 15, name: "Bolsa Sublime", price: 179, cardPrice: 185, colors: ["Preto"], folder: "sublime", extension: "jpeg",
    model: "Tiracolo", format: "Tiracolo estruturada", styles: ["Classic Glam", "Sofisticado"],
    straps: ["Mão", "Transversal"], material: "Sintético / PU", dimensions: "13 cm × 22 cm",
    compartments: "Bolso interno com zíper",
    description: "Modelagem tiracolo estruturada com textura aveludada, aba dupla frontal e fecho giratório metálico dourado."
  }),
  product({
    id: 16, name: "Bolsa Valentina", price: 189, cardPrice: 195, colors: ["Preto"], folder: "valentina",
    model: "Flap Bag", format: "Flap bag estruturada", styles: ["Casual Chic", "Sofisticado", "Atemporal"],
    straps: ["Ombro", "Transversal"], material: "Sintético / PU", dimensions: "21 cm × 30 cm",
    compartments: "Bolso interno com zíper e divisória",
    description: "Elegante e atemporal, com textura granetada e lenço estampado na alça. Possui aba frontal com fivela dourada, ótimo espaço interno e design estruturado."
  }),
  product({
    id: 17, name: "Bolsa Hobo Zoe", price: 229, cardPrice: 239, colors: ["Caramelo"], folder: "hobo-zoe",
    model: "Hobo", format: "Hobo maleável", styles: ["Casual Sofisticado"],
    straps: ["Ombro", "Transversal"], material: "Sintético / PU", dimensions: "22 cm × 35 cm",
    compartments: "Bolso interno com zíper e divisória",
    description: "Modelagem hobo com caimento maleável e textura granetada encorpada. A alça larga integrada ao corpo e a aba com fecho oval dourado unem conforto, praticidade e refinamento."
  }),
  product({
    id: 18, name: "Bolsa Isadora", price: 229, cardPrice: 239, colors: ["Bege Monograma", "Caramelo"], folder: "isadora", extension: "jpeg", imageCount: 1,
    model: "Tote", format: "Tote trapezoidal estruturada", styles: ["Heritage Chic", "Casual Elegante"],
    straps: ["Ombro"], material: "Sintético / PU", dimensions: "28 cm × 41 cm",
    occasions: ["Trabalho", "Compromissos diurnos", "Viagens", "Passeios"],
    compartments: "Bolso interno com zíper e divisória",
    benefits: "Espaço interno amplo para o dia a dia, com alças duplas confortáveis para o ombro.",
    description: "Modelo tote estruturado com monograma em fundo bege, acabamentos verticais em caramelo e rebites metálicos. Possui alças duplas longas e fechamento superior por zíper."
  }),
  product({
    id: 19, name: "Bolsa Clarice", price: 229, cardPrice: 239, colors: ["Preto"], folder: "clarice", extension: "jpeg", imageCount: 1,
    model: "Hobo", format: "Hobo curva", styles: ["Vintage Chic", "Urbano"],
    straps: ["Ombro"], material: "Sintético / PU", dimensions: "14 cm × 34 cm",
    occasions: ["Passeios", "Jantares casuais", "Eventos"],
    compartments: "Bolso interno com zíper e divisória",
    benefits: "Encaixe confortável e visual marcante.",
    description: "Modelagem hobo em material macio com recortes pespontados e fivela metálica dourada. A alça larga de ombro tem argolas decorativas e combina toque retrô com praticidade."
  }),
  product({
    id: 20, name: "Bolsa Clarissa", price: 175, cardPrice: 185, colors: ["Marrom Monograma"], folder: "clarissa", extension: "jpeg",
    model: "Hobo", format: "Hobo estruturada", styles: ["Elegância Atemporal"],
    straps: ["Ombro", "Transversal"], material: "Sintético / PU", dimensions: "20 cm × 22 cm",
    occasions: ["Almoços", "Exposições", "Jantares", "Eventos"],
    compartments: "Bolso interno com zíper e divisória",
    description: "Modelo hobo estruturado com monograma geométrico em relevo e contorno em tom café."
  }),
  product({
    id: 21, name: "Bolsa Lavínia", price: 175, cardPrice: 187, colors: ["Marrom Café"], folder: "lavinia", extension: "jpeg",
    model: "Hobo", format: "Hobo curva / meia-lua", styles: ["Boho Chic", "Urbano Sofisticado"],
    straps: ["Ombro", "Transversal"], material: "Sintético / PU", dimensions: "13 cm × 26 cm",
    occasions: ["Almoços", "Passeios", "Encontros", "Eventos"],
    compartments: "Bolso interno com zíper",
    benefits: "Alça trançada e formato anatômico confortável para o ombro.",
    description: "Modelagem hobo compacta de acabamento suave, com tira central decorativa, medalhão em tom ouro velho e alça trançada."
  }),
  product({
    id: 22, name: "Bolsa Verona", price: 229, cardPrice: 239, colors: ["Nude"], folder: "verona", extension: "jpeg",
    model: "Tote", format: "Tote", styles: ["Casual Chic", "Resort Urbano"],
    straps: ["Ombro"], material: "Sintético / PU e Têxtil", dimensions: "25 cm × 35 cm",
    occasions: ["Passeios", "Trabalho", "Compromissos diurnos"],
    compartments: "Bolso interno com zíper",
    benefits: "Leveza e espaço interno amplo para o dia a dia.",
    description: "Design em trama têxtil respirável, com detalhes contrastantes em marrom e alças duplas de ombro."
  }),
  product({
    id: 23, name: "Bolsa Aura", price: 185, cardPrice: 195, colors: ["Café"], folder: "aura", extension: "jpeg", imageCount: 3,
    model: "Satchel", format: "Clássica estruturada", styles: ["Quiet Luxury", "Urbano Chic"],
    straps: ["Mão", "Transversal"], material: "Sintético / PU", dimensions: "18 cm × 25 cm",
    occasions: ["Trabalho", "Jantares", "Eventos sociais"],
    compartments: "Bolso interno com zíper e divisória",
    benefits: "Alça rígida de mão e corrente versátil para o ombro.",
    description: "Design em tom café com detalhes pretos, fecho giratório e alça de corrente dourada."
  }),
  product({
    id: 24, name: "Bolsa Cecília", price: 180, cardPrice: 189, colors: ["Marrom"], folder: "cecilia", extension: "jpeg",
    model: "Tote", format: "Tote", styles: ["Casual Elegante"],
    straps: ["Ombro", "Transversal"], material: "Sintético / PU", dimensions: "23 cm × 27 cm",
    compartments: "Bolso interno com zíper e divisória",
    description: "Modelagem tote em textura macia com pespontos artesanais e alças integradas."
  }),
  product({
    id: 25, name: "Bolsa Melina", price: 185, cardPrice: 189, colors: ["Preto", "Café"], folder: "melina", extension: "jpeg", imageCount: 1,
    model: "Hobo", format: "Hobo compacta", styles: ["Minimalista Elegante", "Urbano Chic"],
    straps: ["Ombro", "Mão", "Transversal"], material: "Sintético / PU", dimensions: "10 cm × 25 cm",
    compartments: "Bolso interno com zíper e divisória",
    description: "Design hobo compacto de curva fluida, textura lisa e costura em relevo. Possui alça de ombro com nós estruturados, corrente com medalhão dourado e zíper superior."
  }),
  product({
    id: 26, name: "Bolsa Milla", price: 229, cardPrice: 239, colors: ["Caqui"], folder: "milla",
    model: "Tote", format: "Tote ampla", styles: ["Casual Chic", "Atemporal"],
    straps: ["Ombro"], material: "Sintético / PU", dimensions: "27 cm × 40 cm",
    compartments: "Bolso interno com zíper e divisória",
    description: "Design marcante em tressê trançado com solapa frontal e detalhe trabalhado nas alças. Ampla e elegante para quem precisa de espaço no dia a dia."
  }),
  product({
    id: 27, name: "Bolsa Luna", price: 229, cardPrice: 239, colors: ["Caqui"], folder: "luna", imageCount: 3,
    model: "", format: "", styles: ["Urban Chic", "Elegante"],
    straps: ["Ombro"], material: "Sintético / PU", dimensions: "24 cm × 34 cm",
    occasions: ["Compromissos do dia a dia"],
    compartments: "Bolsos externos laterais, bolso interno com zíper e divisória",
    description: "Design imponente com alças de corrente e metal grafite envelhecido. A aba geométrica com fecho de torção, os bolsos laterais e o chaveiro medalhão unem sofisticação e praticidade."
  }),
  product({
    id: 28, name: "Bolsa Tote Sora", price: 229, cardPrice: 239, colors: ["Nude", "Marrom"], folder: "sora", imageCount: 3,
    model: "Tote", format: "Tote", styles: ["Casual Elegante"],
    straps: ["Ombro", "Transversal"], material: "Tricô / trama têxtil e Sintético / PU", dimensions: "25 cm × 35 cm",
    occasions: ["Passeios", "Viagens", "Almoços", "Uso diário"],
    compartments: "Bolso interno com zíper e divisória",
    description: "Modelo leve com trama telada nas laterais, painel frontal em tecido suave, solapa e alças em marrom terroso. A combinação de texturas cria um visual natural para o dia."
  })
];

const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
const money = value => Number(value || 0).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
const safe = value => String(value ?? "").replace(/[&<>'"]/g, char => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"
})[char]);

let products = [];
let activeCategory = "all";
let currentProduct = null;
let currentImageIndex = 0;
const grid = $("#productGrid");
const modal = $("#productModal");
const CURATED_COLLECTIONS = {
  "Clássica": [1, 2, 7, 11, 14, 15, 16, 18, 20, 23, 26],
  "Essencial": [1, 3, 4, 6, 8, 9, 12, 13, 17, 19, 21, 22, 24, 25, 27, 28],
  "Elegance": [5, 10, 11, 14, 15, 16, 18, 20, 21, 23]
};

function mapProduct(row) {
  const colors = Array.isArray(row.cores) ? row.cores.filter(Boolean) : [];
  const rawModel = (row.modelo || "").trim();
  const knownModels = ["Hobo", "Tote", "Flap Bag", "Saddle", "Satchel", "Shoulder Bag", "Tiracolo", "Crossbody"];
  const validModel = knownModels.find(model => model.toLocaleLowerCase("pt-BR") === rawModel.toLocaleLowerCase("pt-BR"));
  const misplacedStyles = rawModel && !validModel ? rawModel.split(",").map(value => value.trim()).filter(Boolean) : [];
  const styles = [...new Set([...(Array.isArray(row.estilos) ? row.estilos : []), ...misplacedStyles])];
  return {
    id: row.id, name: row.nome, price: Number(row.preco), cardPrice: Number(row.preco_cartao || 0), installments: Number(row.parcelas || 3), colors,
    color: colors.join(", ") || "Não informada", brand: row.marca || "La Graci",
    collection: row.colecao || "", collections: Array.isArray(row.colecoes) ? row.colecoes : [], model: validModel || "", format: row.formato || "", badge: row.badge || "",
    styles: styles.filter(Boolean),
    occasions: Array.isArray(row.ocasioes) ? row.ocasioes.filter(Boolean) : [],
    straps: Array.isArray(row.tipos_alca) ? row.tipos_alca.filter(Boolean) : [],
    material: /^(couro sintético|sintético)\s*\/\s*pu$/i.test((row.material || "").trim()) ? "Sintético / PU" : (row.material || ""), dimensions: row.dimensoes || "",
    compartments: row.compartimentos || "", benefits: row.beneficios || "",
    description: row.descricao || "", images: Array.isArray(row.imagens) ? row.imagens.filter(Boolean) : [],
    featured: row.destaque, order: row.ordem || 0
  };
}

async function loadProducts() {
  if (!grid) return;
  const { data, error } = await supabaseClient.from("produtos")
    .select("*").eq("disponivel", true).order("ordem").order("id");
  if (error) {
    console.error("Não foi possível carregar o catálogo:", error);
    grid.textContent = "Catálogo temporariamente indisponível. Tente novamente em instantes.";
    return;
  }
  products = (data || []).map(mapProduct);
  buildFilters();
  renderProducts();
}

function productImages(product) {
  return product.images?.length ? product.images : ["assets/sem-foto.jpeg"];
}

function interestLink(product) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Olá! Vi a ${product.name} no catálogo da La Graci e gostaria de mais informações.`)}`;
}

function productCard(product) {
  return `<article class="product-card" data-id="${product.id}">
    <div class="product-photo" data-open-product="${product.id}" role="button" tabindex="0" aria-label="Ver ${safe(product.name)}">
      <img src="${safe(productImages(product)[0])}" alt="${safe(product.name)}" loading="lazy">
      ${product.badge ? `<span class="product-badge">${safe(product.badge)}</span>` : ""}
      <button class="favorite" type="button" data-favorite="${product.id}" aria-label="Favoritar">♡</button>
    </div>
    <div class="product-copy"><h3>${safe(product.name)}</h3>
      <p class="product-description">${safe(product.description)}</p>
      <p class="product-meta">${safe(product.color)} · ${safe(product.brand)}</p>
      <div class="price-line"><div><strong>${money(product.price)} à vista</strong><small>PIX ou dinheiro${product.cardPrice ? ` · ${money(product.cardPrice)} em até ${product.installments}x no cartão` : ""}</small></div>
      <a class="buy-link" href="${interestLink(product)}" target="_blank" rel="noopener">Comprar</a></div>
    </div></article>`;
}

function buildFilters() {
  const colors = [...new Set(products.flatMap(product => product.colors))].sort((a, b) => a.localeCompare(b, "pt-BR"));
  const styles = unique(products.flatMap(product => product.styles));
  const straps = unique(products.flatMap(product => product.straps));
  const materials = unique(products.map(product => product.material));
  const group = (title, name, values, open = false, limit = 0) => values.length ? `<details class="filter-section" ${open ? "open" : ""}>
    <summary>${title}<span>+</span></summary><div class="filter-options">${values.map((value, index) => `<label class="${limit && index >= limit ? "extra-option" : ""}"><input type="checkbox" name="${name}" value="${safe(value)}"><span>${safe(value)}</span><b data-count-for="${name}|${safe(value)}">0</b></label>`).join("")}${limit && values.length > limit ? `<button class="see-more" type="button" data-see-more>Ver mais ${values.length - limit} opções</button>` : ""}</div></details>` : "";
  $("#filterGroups").innerHTML = [
    group("Cores", "color", colors, true),
    `<details class="filter-section"><summary>Preços<span>+</span></summary><div class="filter-options">
      <label><input type="radio" name="price" value="all" checked><span>Todos os preços</span></label>
      <label><input type="radio" name="price" value="0-179.99"><span>Até R$ 179,99</span></label>
      <label><input type="radio" name="price" value="180-199.99"><span>R$ 180 a R$ 199,99</span></label>
      <label><input type="radio" name="price" value="200-229.99"><span>R$ 200 a R$ 229,99</span></label>
      <label><input type="radio" name="price" value="230-9999"><span>A partir de R$ 230</span></label></div></details>`,
    group("Tipos de alça", "strap", straps), group("Estilos", "style", styles, false, 5),
    group("Materiais", "material", materials)
  ].join("");
  if ($("#categoryTabs")) $("#categoryTabs").innerHTML = "";
  $$("#filters input").forEach(input => input.addEventListener("change", renderProducts));
  $$('[data-see-more]').forEach(button => button.addEventListener("click", () => {
    const options = button.closest(".filter-options");
    options.classList.toggle("expanded");
    button.textContent = options.classList.contains("expanded") ? "Ver menos" : `Ver mais ${options.querySelectorAll(".extra-option").length} opções`;
  }));
  bindCategoryButtons();
}

function unique(values) { return [...new Set(values.filter(Boolean))].sort((a, b) => a.localeCompare(b, "pt-BR")); }
function checked(name) { return $$(`input[name="${name}"]:checked`).map(input => input.value); }

function filterState() {
  return { colors:checked("color"), styles:checked("style"), straps:checked("strap"), materials:checked("material") };
}

function productMatches(product, state, ignore = "") {
  const price = $('input[name="price"]:checked')?.value || "all";
  const [min, max] = price === "all" ? [0, Infinity] : price.split("-").map(Number);
  const search = ($("#searchInput")?.value || "").trim().toLocaleLowerCase("pt-BR");
  const text = `${product.name} ${product.color} ${product.collection} ${product.model} ${product.format} ${product.styles.join(" ")} ${product.occasions.join(" ")} ${product.straps.join(" ")} ${product.material}`.toLocaleLowerCase("pt-BR");
  return (ignore === "color" || !state.colors.length || state.colors.some(value => product.colors.includes(value))) &&
      (ignore === "style" || !state.styles.length || state.styles.some(value => product.styles.includes(value))) &&
      (ignore === "strap" || !state.straps.length || state.straps.some(value => product.straps.includes(value))) &&
      (ignore === "material" || !state.materials.length || state.materials.includes(product.material)) &&
      (activeCategory === "all" || product.collections.includes(activeCategory) || product.collection === activeCategory) &&
      product.price >= min && product.price <= max && (!search || text.includes(search));
}

function renderProducts() {
  const state = filterState();
  let result = products.filter(product => productMatches(product, state));
  const sort = $("#sortProducts")?.value;
  if (sort === "lowest") result.sort((a, b) => a.price - b.price);
  if (sort === "highest") result.sort((a, b) => b.price - a.price);
  if (sort === "name") result.sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
  if (sort === "featured") result.sort((a, b) => Number(b.featured) - Number(a.featured) || a.order - b.order);
  grid.innerHTML = result.map(productCard).join("");
  if ($("#productCount")) $("#productCount").textContent = result.length;
  if ($("#filterResultCount")) $("#filterResultCount").textContent = result.length;
  $("#emptyState")?.classList.toggle("visible", !result.length);
  updateFilterCounts(state);
  updateActiveFilters();
  restoreFavorites();
}

function updateFilterCounts(state) {
  $$('[data-count-for]').forEach(counter => {
    const [name, value] = counter.dataset.countFor.split("|");
    const key = `${name}s`;
    const count = products.filter(product => productMatches(product, state, name) && ({color:product.colors, style:product.styles, strap:product.straps, material:[product.material]}[name] || []).includes(value)).length;
    counter.textContent = count;
    const input = counter.closest("label").querySelector("input");
    input.disabled = count === 0 && !input.checked;
  });
}

function updateActiveFilters() {
  const selected = $$('#filters input[type="checkbox"]:checked');
  const price = $('input[name="price"]:checked');
  const chips = selected.map(input => `<button type="button" data-remove-filter="${safe(input.name)}|${safe(input.value)}">${safe(input.value)} ×</button>`);
  if (price && price.value !== "all") chips.push(`<button type="button" data-remove-filter="price|${safe(price.value)}">${safe(price.closest("label").querySelector("span").textContent)} ×</button>`);
  $("#activeFilters").innerHTML = chips.length ? `<span>Filtros ativos:</span>${chips.join("")}<button class="clear-chip" type="button" data-clear-all>Limpar tudo</button>` : "";
}

function favorites() { try { return JSON.parse(localStorage.getItem("laGraciFavorites") || "[]").map(String); } catch { return []; } }
function restoreFavorites() {
  const saved = favorites();
  $$('[data-favorite]').forEach(button => {
    const active = saved.includes(String(button.dataset.favorite));
    button.classList.toggle("active", active); button.textContent = active ? "♥" : "♡";
  });
}

function showModalImage(index) {
  if (!currentProduct) return;
  const images = productImages(currentProduct);
  currentImageIndex = (index + images.length) % images.length;
  $("#modalImage").src = images[currentImageIndex];
  $("#modalImage").alt = `${currentProduct.name} — foto ${currentImageIndex + 1}`;
  $$('[data-modal-thumb]').forEach((thumb, i) => thumb.classList.toggle("active", i === currentImageIndex));
  if ($("#modalImageCounter")) $("#modalImageCounter").textContent = `${currentImageIndex + 1} / ${images.length}`;
}

function openProduct(id) {
  const product = products.find(item => String(item.id) === String(id));
  if (!product || !modal) return;
  currentProduct = product;
  const images = productImages(product);
  $("#modalThumbnails").innerHTML = images.map((image, index) =>
    `<button type="button" class="modal-thumb" data-modal-thumb="${index}"><img src="${safe(image)}" alt=""></button>`).join("");
  ["#modalPrev", "#modalNext", "#modalImageCounter"].forEach(selector => $(selector)?.classList.toggle("hidden", images.length < 2));
  showModalImage(0);
  $("#modalBrand").textContent = `${product.brand} · ${product.color}`;
  $("#modalTitle").textContent = product.name;
  $("#modalDescription").textContent = product.description;
  $("#modalColors").textContent = `Cor: ${product.color}${product.collection ? ` · Coleção: ${product.collection}` : ""}`;
  const details = [
    ["Formato", product.format || product.model], ["Estilo", product.styles.join(" / ")],
    ["Ocasião", product.occasions.join(", ")], ["Material", product.material],
    ["Dimensões", product.dimensions], ["Tipo de alça", product.straps.join(" / ")],
    ["Compartimentos", product.compartments], ["Benefícios", product.benefits]
  ].filter(([, value]) => value);
  $("#modalDetails").innerHTML = details.map(([label, value]) => `<div><dt>${safe(label)}</dt><dd>${safe(value)}</dd></div>`).join("");
  $("#modalPrice").innerHTML = `<strong>${money(product.price)} à vista</strong><small>PIX ou dinheiro</small>${product.cardPrice ? `<span>${money(product.cardPrice)} em até ${product.installments}x no cartão</span>` : ""}`;
  $("#modalWhatsApp").href = interestLink(product);
  modal.classList.add("open"); modal.setAttribute("aria-hidden", "false"); document.body.classList.add("locked");
}

function closeModal() { modal?.classList.remove("open"); modal?.setAttribute("aria-hidden", "true"); document.body.classList.remove("locked"); }
function setFilters(open) { $("#filters")?.classList.toggle("open", open); document.body.classList.toggle("locked", open); }

function initializeCatalog() {
  $("#searchInput")?.addEventListener("input", renderProducts);
  $("#sortProducts")?.addEventListener("change", renderProducts);
  $$('[data-collection]').forEach(button => button.addEventListener("click", () => {
    activeCategory = button.dataset.collection; renderProducts(); $("#catalogo")?.scrollIntoView({ behavior: "smooth" });
  }));
  $$('[data-collection-count]').forEach(counter => {
    const total = (CURATED_COLLECTIONS[counter.dataset.collectionCount] || []).length;
    counter.textContent = `${total} ${total === 1 ? "modelo" : "modelos"}`;
  });
  $("#clearFilters")?.addEventListener("click", () => {
    $$('#filters input[type="checkbox"]').forEach(input => { input.checked = false; });
    if ($('input[name="price"][value="all"]')) $('input[name="price"][value="all"]').checked = true;
    $("#searchInput").value = ""; activeCategory = "all"; renderProducts();
  });
  $("#showResults")?.addEventListener("click", () => setFilters(false));
  $("#activeFilters")?.addEventListener("click", event => {
    if (event.target.closest("[data-clear-all]")) return $("#clearFilters")?.click();
    const button = event.target.closest("[data-remove-filter]");
    if (!button) return;
    const [name, value] = button.dataset.removeFilter.split("|");
    const input = $(`input[name="${CSS.escape(name)}"][value="${CSS.escape(value)}"]`);
    if (name === "price") { const all = $('input[name="price"][value="all"]'); if (all) all.checked = true; }
    else if (input) input.checked = false;
    renderProducts();
  });
  grid?.addEventListener("click", event => {
    const favorite = event.target.closest("[data-favorite]");
    if (favorite) {
      event.stopPropagation(); const id = String(favorite.dataset.favorite); const saved = favorites();
      localStorage.setItem("laGraciFavorites", JSON.stringify(saved.includes(id) ? saved.filter(item => item !== id) : [...saved, id])); restoreFavorites(); return;
    }
    const opener = event.target.closest("[data-open-product]"); if (opener) openProduct(opener.dataset.openProduct);
  });
}

function bindCategoryButtons() {
  $$('[data-category]').forEach(button => button.addEventListener("click", () => {
    activeCategory = button.dataset.category;
    $$('[data-category]').forEach(item => item.classList.toggle("active", item === button));
    renderProducts();
  }));
}

function initializeMenus() {
  const toggle = $("#menuToggle"), nav = $("#mainNav");
  toggle?.addEventListener("click", () => { const open = nav?.classList.toggle("open"); toggle.setAttribute("aria-expanded", String(open)); });
  $$("#mainNav a").forEach(link => link.addEventListener("click", () => nav?.classList.remove("open")));
  $("#filterToggle")?.addEventListener("click", () => setFilters(true));
  $("#closeFilters")?.addEventListener("click", () => setFilters(false));
}

function initializeHero() {
  const track = $("#heroTrack"), slides = $$(".hero-slide"), dots = $("#heroDots");
  if (!track || !slides.length || !dots) return;
  let index = 0, timer;
  dots.innerHTML = slides.map((_, i) => `<button data-hero-dot="${i}" aria-label="Banner ${i + 1}"></button>`).join("");
  const show = next => { index = (next + slides.length) % slides.length; track.style.transform = `translateX(-${index * 100}%)`; $$('[data-hero-dot]').forEach((dot, i) => dot.classList.toggle("active", i === index)); };
  const restart = () => { clearInterval(timer); timer = setInterval(() => show(index + 1), 6000); };
  $("#heroPrev")?.addEventListener("click", () => { show(index - 1); restart(); });
  $("#heroNext")?.addEventListener("click", () => { show(index + 1); restart(); });
  dots.addEventListener("click", event => { const dot = event.target.closest("[data-hero-dot]"); if (dot) { show(Number(dot.dataset.heroDot)); restart(); } });
  show(0); restart();
}

$$('[data-close-modal]').forEach(item => item.addEventListener("click", closeModal));
$("#modalPrev")?.addEventListener("click", () => showModalImage(currentImageIndex - 1));
$("#modalNext")?.addEventListener("click", () => showModalImage(currentImageIndex + 1));
$("#modalThumbnails")?.addEventListener("click", event => { const thumb = event.target.closest("[data-modal-thumb]"); if (thumb) showModalImage(Number(thumb.dataset.modalThumb)); });
document.addEventListener("keydown", event => { if (event.key === "Escape") { closeModal(); setFilters(false); } });
initializeCatalog(); initializeMenus(); initializeHero();
if ($("#currentYear")) $("#currentYear").textContent = new Date().getFullYear();
loadProducts();
