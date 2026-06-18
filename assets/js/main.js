/* ============================================================
   SertãoVR – Acervo Digital Imersivo do Pajeú
   main.js — Lógica principal e dados do acervo

   ============================================================
   COMO ADICIONAR OU EDITAR UMA EXPERIÊNCIA:
   Basta editar o array "EXPERIENCIAS" abaixo.
   Cada objeto representa um card/página de experiência.

   Campos obrigatórios:
     id          → identificador único, usado na URL (/acervo/caatinga)
     titulo      → nome exibido no card e na página
     tag         → etiqueta curta exibida sobre a imagem
     imagem      → caminho da imagem de capa (ex: "assets/img/caatinga.jpg")
     descricaoCurta → texto exibido no card do acervo
     descricaoCompleta → texto exibido na página da experiência
     videoYouTube  → ID do vídeo no YouTube (apenas o código após ?v=)
                      Ex: para https://youtu.be/XXXXXXXXXXX use "XXXXXXXXXXX"
     duracao     → duração estimada da experiência (exibida no card)
     curiosidades → array de textos para a seção "Curiosidades"
   ============================================================ */

const EXPERIENCIAS = [
  {
    id: "caatinga",
    titulo: "Caatinga Viva",
    tag: "Natureza",
    imagem: "assets/img/caatinga.jpg",
    descricaoCurta: "Explore a biodiversidade única da Caatinga, o único bioma exclusivamente brasileiro, com fauna e flora adaptadas ao semiárido.",
    descricaoCompleta: "A Caatinga cobre cerca de 10% do território brasileiro e é o único bioma exclusivamente nacional. No Sertão do Pajeú, ela se revela em toda sua potência: mandacarus gigantes, xique-xiques, faveleiros e umbuzeiros compõem uma paisagem que parece árida mas pulsa de vida. Esta experiência imersiva foi capturada pelos estudantes da ETE Professora Célia Siqueira durante expedições de campo nas matas do município de São José do Egito.",
    videoYouTube: "o4ljE64LgaQ", /* ← SUBSTITUA pelo ID real do seu vídeo no YouTube */
    duracao: "~5 min",
    curiosidades: [
      "A palavra 'caatinga' vem do Tupi e significa 'mata branca' — referência ao aspecto das árvores na seca.",
      "Mais de 1.500 espécies de plantas vivem na Caatinga, com altíssimo grau de endemismo.",
      "O umbuzeiro pode armazenar até 3.000 litros de água em suas raízes tuberosas.",
      "A Caatinga abriga espécies exclusivas como a ararinha-azul e o gato-do-mato-pequeno."
    ]
  },
  {
    id: "rio-pajeu",
    titulo: "Rio Pajeú",
    tag: "Hidrografia",
    imagem: "assets/img/rio-pajeu.jpg",
    descricaoCurta: "Navegue virtualmente pelo Rio Pajeú, artéria hídrica que dá nome à região e sustenta comunidades ao longo de seus 340 km.",
    descricaoCompleta: "O Rio Pajeú nasce na Serra do Pereiro, em Pernambuco, e percorre cerca de 340 quilômetros antes de desaguar no Rio São Francisco. É o principal curso d'água da região e foi determinante para o surgimento e o desenvolvimento de todos os municípios do território. Nesta experiência imersiva, você acompanha as margens do rio em diferentes pontos, conhecendo a importância do ciclo hídrico para a agricultura familiar e para a cultura sertaneja.",
    videoYouTube: "o4ljE64LgaQ", /* ← SUBSTITUA pelo ID real do seu vídeo no YouTube */
    duracao: "~6 min",
    curiosidades: [
      "O Pajeú é afluente do Rio São Francisco, que é chamado de 'o rio da integração nacional'.",
      "Durante a seca, muitos trechos do rio secam completamente, mas o leito preserva sementes e vida.",
      "Ao longo do Pajeú existem mais de 50 açudes que garantem abastecimento às comunidades rurais.",
      "O nome 'Pajeú' tem origem indígena e está associado a uma planta medicinal da região."
    ]
  },
  {
    id: "agricultura-familiar",
    titulo: "Agricultura Familiar",
    tag: "Agroecologia",
    imagem: "assets/img/agricultura.jpg",
    descricaoCurta: "Conheça as práticas agroecológicas das famílias do Pajeú, que produzem alimentos em harmonia com o semiárido.",
    descricaoCompleta: "A agricultura familiar no Sertão do Pajeú é uma demonstração de resiliência e sabedoria. As famílias agricultoras desenvolveram ao longo de gerações técnicas de convivência com o semiárido que hoje são referência: captação de água de chuva, plantio consorciado, adubação orgânica e escolha de variedades nativas adaptadas. Esta experiência imersiva visita propriedades rurais do município e registra a relação profunda entre as pessoas e a terra.",
    videoYouTube: "o4ljE64LgaQ", /* ← SUBSTITUA pelo ID real do seu vídeo no YouTube */
    duracao: "~7 min",
    curiosidades: [
      "A cisterna de placa é uma das tecnologias sociais mais bem-sucedidas do semiárido: capta até 16 mil litros de água.",
      "O sistema de barragem subterrânea aproveita a água que fica retida no subsolo após as chuvas.",
      "O feijão, o milho e a mandioca formam a base da agricultura familiar do Pajeú.",
      "O Sertão de Pernambuco abriga uma das maiores diversidades de variedades crioulas de feijão do Brasil."
    ]
  },
  {
    id: "artesanato",
    titulo: "Artesanato do Pajeú",
    tag: "Cultura",
    imagem: "assets/img/artesanato.jpg",
    descricaoCurta: "Descubra as técnicas e histórias por trás do artesanato sertanejo: bordados, cerâmica, trabalhos em couro e muito mais.",
    descricaoCompleta: "O artesanato do Sertão do Pajeú é um patrimônio vivo que atravessa gerações. Cada peça carrega histórias, técnicas aprendidas com avós e uma visão de mundo única sobre a vida no semiárido. Os bordados de renda, as cerâmicas decorativas, os trabalhos em couro e as esculturas em madeira são expressões artísticas reconhecidas além das fronteiras do estado. Nesta experiência, você visita ateliês e conversa com artesãs e artesãos que mantêm essa tradição viva.",
    videoYouTube: "o4ljE64LgaQ", /* ← SUBSTITUA pelo ID real do seu vídeo no YouTube */
    duracao: "~5 min",
    curiosidades: [
      "A renda renascença é uma técnica de origem portuguesa adaptada pelas mulheres do semiárido nordestino.",
      "Artesãos do Pajeú utilizam a palha de ouricuri, nativa da Caatinga, em chapéus e cestos tradicionais.",
      "A cerâmica sertaneja remonta a tradições indígenas milenares reinventadas pelo povo local.",
      "São José do Egito é reconhecida como capital dos repentistas — outra forma de artesanato: o da palavra."
    ]
  },
  {
    id: "cultura-local",
    titulo: "Cultura e Tradições",
    tag: "Patrimônio",
    imagem: "assets/img/cultura.jpg",
    descricaoCurta: "Imergir na cultura do Pajeú é encontrar forró, repente, cangaço, São João e saberes que resistem ao tempo.",
    descricaoCompleta: "São José do Egito é conhecida como 'a terra dos poetas' e capital do repentismo nordestino. A cultura do Pajeú é uma tapeçaria rica: o forró pé-de-serra, o coco-de-roda, os cordéis, os festejos de São João, as procissões e as histórias do cangaço se entrelaçam com as práticas religiosas e com as festas comunitárias. Esta experiência imersiva registra momentos de celebração e memória viva do território.",
    videoYouTube: "o4ljE64LgaQ", /* ← SUBSTITUA pelo ID real do seu vídeo no YouTube */
    duracao: "~6 min",
    curiosidades: [
      "São José do Egito sedia todos os anos o Festival de Repentistas, um dos maiores do Brasil.",
      "O cordel é uma literatura popular nordestina reconhecida como patrimônio imaterial da humanidade pela UNESCO.",
      "O forró pé-de-serra original usa apenas três instrumentos: sanfona, zabumba e triângulo.",
      "A região do Pajeú inspirou obras de grandes escritores como Ariano Suassuna."
    ]
  },
  {
    id: "economia-local",
    titulo: "Economia do Sertão",
    tag: "Economia",
    imagem: "assets/img/economia.jpg",
    descricaoCurta: "Entenda como a economia criativa, o comércio local e a agroindústria movem o Sertão do Pajeú e criam oportunidades.",
    descricaoCompleta: "A economia do Sertão do Pajeú vai muito além do que aparece à primeira vista. Além da agricultura familiar, a região conta com comércio ativo, artesanato com potencial exportador, turismo rural em crescimento e uma jovem geração empreendedora que enxerga no território oportunidades de negócios sustentáveis. Esta experiência foi produzida pelos estudantes do curso técnico em Administração da ETE Professora Célia Siqueira, que mapearam as dinâmicas econômicas locais com foco no potencial de desenvolvimento territorial.",
    videoYouTube: "o4ljE64LgaQ", /* ← SUBSTITUA pelo ID real do seu vídeo no YouTube */
    duracao: "~7 min",
    curiosidades: [
      "O Pajeú concentra uma das maiores produções de mel do semiárido pernambucano.",
      "A cajucultura gera renda para centenas de famílias na região durante a safra do caju.",
      "O turismo de experiência rural está crescendo como alternativa econômica sustentável no sertão.",
      "Cooperativas de agricultores familiares já acessam mercados institucionais via PNAE e PAA."
    ]
  }
];

/* ============================================================
   DADOS DA EQUIPE
   COMO EDITAR: altere nome, papel, descrição e emoji abaixo.
   Para usar foto real: substitua o emoji pela tag <img>.
   ============================================================ */
const EQUIPE = [
  {
    avatar: "👩‍💼",
    nome: "Estudante 1",
    papel: "Silas Emmanoel Leandro Lima de Brito",
    descricao: "Responsável pelo planejamento, cronograma, relatórios e organização da Mostra Tecnológica."
  },
  {
    avatar: "🔍",
    nome: "Ramon José Lima da Silva",
    papel: "Pesquisa e Conteúdo",
    descricao: "Coordena a pesquisa territorial, captura das cenas 360° e curadoria do acervo digital."
  },
  {
    avatar: "⚙️",
    nome: "Pietro Bruno Nunes Leite da Silva",
    papel: "Tecnologia e Fabricação",
    descricao: "Cuida da modelagem 3D, impressão dos componentes e montagem dos Kits Educacionais."
  },
  {
    avatar: "🎓",
    nome: "Coordenadora",
    papel: "Coordenação Geral",
    descricao: "Maria José Leite Brasiliano — orienta os bolsistas e gerencia o projeto junto à FACEPE."
  }
];

/* ============================================================
   DADOS DOS PARCEIROS
   COMO EDITAR: altere emoji, nome abaixo.
   ============================================================ */
const PARCEIROS = [
  { emoji: "🏫", nome: "ETE Professora Célia Siqueira" },
  { emoji: "🔬", nome: "FACEPE" },
  { emoji: "🌱", nome: "Espaço CRIA" },
  { emoji: "🏛️", nome: "SEC-PE" }
];

/* ============================================================
   ROTEADOR SIMPLES (SPA — Single Page Application)
   Lê o hash da URL (#/acervo/caatinga) e renderiza a página
   correta sem precisar de servidor.
   ============================================================ */

function router() {
  const hash = window.location.hash || "#/";
  const partes = hash.replace("#", "").split("/").filter(Boolean);

  if (partes.length === 0 || partes[0] === "") {
    renderInicio();
  } else if (partes[0] === "acervo" && partes.length === 1) {
    renderAcervo();
  } else if (partes[0] === "acervo" && partes.length === 2) {
    const exp = EXPERIENCIAS.find(e => e.id === partes[1]);
    if (exp) {
      renderExperiencia(exp);
    } else {
      renderErro();
    }
  } else {
    renderErro();
  }

  // Volta ao topo a cada navegação
  window.scrollTo({ top: 0, behavior: "instant" });
}

/* Navegar para uma rota */
function navegar(rota) {
  window.location.hash = rota;
}

/* ============================================================
   RENDERIZADORES DE PÁGINA
   ============================================================ */

/* --- PÁGINA INICIAL --- */
function renderInicio() {
  document.title = "SertãoVR – Acervo Digital Imersivo do Pajeú";
  atualizarNavAtivo("inicio");

  const app = document.getElementById("app");
  app.innerHTML = `
    <!-- HERO -->
    <section class="hero">
      <div class="container">
        <p class="hero-eyebrow">Sertão do Pajeú · Pernambuco · Brasil</p>
        <h1>
          <em>SertãoVR</em><br>
          Acervo Digital Imersivo do Pajeú
        </h1>
        <p class="hero-descricao">
          Explore o patrimônio natural, cultural e socioeconômico do Sertão do Pajeú
          através de experiências imersivas em 360° produzidas por estudantes
          da ETE Professora Célia Siqueira.
        </p>
        <div class="hero-botoes">
          <button class="btn btn-primario" onclick="navegar('#/acervo')">
            🌵 Explorar Acervo
          </button>
          <button class="btn btn-secundario" onclick="document.getElementById('sobre').scrollIntoView({behavior:'smooth'})">
            Saiba mais
          </button>
        </div>
      </div>
    </section>

    <!-- SOBRE O PROJETO -->
    <section class="secao secao-terra" id="sobre">
      <div class="container">
        <h2 class="secao-titulo">Sobre o Projeto</h2>
        <div class="divisor"></div>
        <div class="sobre-grid">
          <div class="sobre-texto">
            <p>
              O <strong>SertãoVR</strong> é um projeto educacional desenvolvido por estudantes
              do curso técnico em Administração da ETE Professora Célia Siqueira, em
              São José do Egito (PE), com apoio da FACEPE.
            </p>
            <p>
              Nosso objetivo é usar a Realidade Virtual como ferramenta para registrar,
              preservar e compartilhar o patrimônio do Sertão do Pajeú — da Caatinga
              ao artesanato, do Rio Pajeú à economia local.
            </p>
            <p>
              Todo o acervo é produzido pelos próprios estudantes: a pesquisa de campo,
              a captura das cenas em 360°, a fabricação dos Kits Educacionais e a
              organização deste museu virtual.
            </p>
            <button class="btn btn-primario" onclick="navegar('#/acervo')" style="margin-top:8px">
              Ver experiências →
            </button>
          </div>
          <div class="sobre-destaque">
            <span class="numero">6 a 8</span>
            <p>Cenas Imersivas 360°</p>
            <div class="sobre-stats">
              <div class="stat-item">
                <span class="stat-numero">10</span>
                <span class="stat-label">Kits Educacionais fabricados</span>
              </div>
              <div class="stat-item">
                <span class="stat-numero">3</span>
                <span class="stat-label">Estudantes bolsistas protagonistas</span>
              </div>
              <div class="stat-item">
                <span class="stat-numero">6</span>
                <span class="stat-label">Meses de produção</span>
              </div>
              <div class="stat-item">
                <span class="stat-numero">∞</span>
                <span class="stat-label">Acesso gratuito permanente</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PREVIEW DO ACERVO -->
    <section class="secao" id="acervo-preview">
      <div class="container">
        <h2 class="secao-titulo">Experiências em Destaque</h2>
        <p class="secao-subtitulo">
          Escolha uma experiência e mergulhe no Sertão do Pajeú com seu smartphone e o Kit VR.
        </p>
        <div class="divisor"></div>
        <div class="acervo-grid">
          ${EXPERIENCIAS.slice(0, 3).map(renderCardHTML).join("")}
        </div>
        <div style="text-align:center; margin-top:40px">
          <button class="btn btn-primario" onclick="navegar('#/acervo')">
            Ver todo o acervo →
          </button>
        </div>
      </div>
    </section>

    <!-- EQUIPE -->
    <section class="secao secao-alternada" id="equipe">
      <div class="container">
        <h2 class="secao-titulo">Nossa Equipe</h2>
        <p class="secao-subtitulo">
          Estudantes e orientadores da ETE Professora Célia Siqueira que tornaram este projeto possível.
        </p>
        <div class="divisor"></div>
        <div class="equipe-grid">
          ${EQUIPE.map(renderMembroHTML).join("")}
        </div>
      </div>
    </section>

    <!-- PARCEIROS -->
    <section class="secao secao-terra" id="parceiros">
      <div class="container">
        <h2 class="secao-titulo">Parceiros e Apoiadores</h2>
        <div class="divisor"></div>
        <div class="parceiros-grid">
          ${PARCEIROS.map(renderParceiroHTML).join("")}
        </div>
      </div>
    </section>
  `;
}

/* --- PÁGINA DO ACERVO (LISTAGEM) --- */
function renderAcervo() {
  document.title = "Acervo – SertãoVR";
  atualizarNavAtivo("acervo");

  const app = document.getElementById("app");
  app.innerHTML = `
    <div class="acervo-header">
      <div class="container">
        <h1>Acervo Digital Imersivo</h1>
        <p>Seis experiências em 360° sobre o patrimônio do Sertão do Pajeú</p>
      </div>
    </div>
    <section class="secao">
      <div class="container">
        <div class="acervo-grid">
          ${EXPERIENCIAS.map(renderCardHTML).join("")}
        </div>
      </div>
    </section>
  `;
}

/* --- PÁGINA DE UMA EXPERIÊNCIA --- */
function renderExperiencia(exp) {
  document.title = `${exp.titulo} – SertãoVR`;
  atualizarNavAtivo("acervo");

  /* URL amigável para QR Code */
  const urlQR = `${window.location.origin}${window.location.pathname}#/acervo/${exp.id}`;

  const app = document.getElementById("app");
  app.innerHTML = `
    <div class="qr-aviso">
      📱 Acesse esta experiência pelo QR Code do Kit ou pelo link:
      <strong>${urlQR}</strong>
    </div>

    <div class="experiencia-header">
      <div class="container">
        <h1>${exp.titulo}</h1>
        <p>${exp.descricaoCurta}</p>
      </div>
    </div>

    <div class="experiencia-conteudo">
      <!-- VÍDEO 360° -->
      <div class="video-wrapper" style="margin-bottom:36px">
        <iframe
          src="https://www.youtube.com/embed/${exp.videoYouTube}?rel=0&modestbranding=1"
          title="${exp.titulo} – Experiência 360°"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen>
        </iframe>
      </div>

      <!-- DESCRIÇÃO COMPLETA -->
      <p class="experiencia-descricao">${exp.descricaoCompleta}</p>

      <!-- CURIOSIDADES -->
      <div class="curiosidades">
        <h3>🌵 Você Sabia?</h3>
        <ul>
          ${exp.curiosidades.map(c => `<li>${c}</li>`).join("")}
        </ul>
      </div>

      <!-- NAVEGAÇÃO -->
      <div class="nav-experiencia">
        <button class="btn btn-secundario" onclick="navegar('#/acervo')">
          ← Voltar ao Acervo
        </button>
        <button class="btn btn-verde" onclick="navegar('#/')">
          🏠 Página Inicial
        </button>
      </div>
    </div>
  `;
}

/* --- PÁGINA DE ERRO 404 --- */
function renderErro() {
  document.title = "Página não encontrada – SertãoVR";
  const app = document.getElementById("app");
  app.innerHTML = `
    <section class="secao" style="text-align:center; min-height:60vh; display:flex; align-items:center">
      <div class="container">
        <p style="font-size:4rem; margin-bottom:16px">🌵</p>
        <h2 style="font-family:var(--fonte-titulo); color:var(--terra-escura); font-size:2rem; margin-bottom:12px">
          Página não encontrada
        </h2>
        <p style="color:var(--cinza-texto); margin-bottom:32px">
          Esta experiência ainda não existe no acervo — ou o endereço está errado.
        </p>
        <button class="btn btn-primario" onclick="navegar('#/acervo')">
          Ir para o Acervo
        </button>
      </div>
    </section>
  `;
}

/* ============================================================
   HELPERS DE RENDERIZAÇÃO
   ============================================================ */

/* Gera HTML de um card de experiência */
function renderCardHTML(exp) {
  return `
    <div class="card" onclick="navegar('#/acervo/${exp.id}')" role="button" tabindex="0"
         onkeypress="if(event.key==='Enter') navegar('#/acervo/${exp.id}')">
      <div class="card-imagem">
        <img
          src="${exp.imagem}"
          alt="${exp.titulo}"
          loading="lazy"
          onerror="this.src='assets/img/placeholder.jpg'; this.alt='Imagem indisponível'"
        >
        <span class="card-tag">${exp.tag}</span>
      </div>
      <div class="card-corpo">
        <h3 class="card-titulo">${exp.titulo}</h3>
        <p class="card-descricao">${exp.descricaoCurta}</p>
        <div class="card-rodape">
          <span class="card-duracao">⏱ ${exp.duracao}</span>
          <button class="btn btn-primario" style="padding:8px 18px; font-size:0.85rem">
            Explorar →
          </button>
        </div>
      </div>
    </div>
  `;
}

/* Gera HTML de um membro da equipe */
function renderMembroHTML(m) {
  return `
    <div class="membro">
      <div class="membro-avatar">${m.avatar}</div>
      <p class="membro-nome">${m.nome}</p>
      <p class="membro-papel">${m.papel}</p>
      <p class="membro-descricao">${m.descricao}</p>
    </div>
  `;
}

/* Gera HTML de um parceiro */
function renderParceiroHTML(p) {
  return `
    <div class="parceiro">
      <div class="parceiro-logo">${p.emoji}</div>
      <p class="parceiro-nome">${p.nome}</p>
    </div>
  `;
}

/* Atualiza qual link do navbar está ativo */
function atualizarNavAtivo(pagina) {
  document.querySelectorAll(".navbar-links a").forEach(el => {
    el.classList.remove("ativo");
    if (el.dataset.pagina === pagina) el.classList.add("ativo");
  });
}

/* ============================================================
   INICIALIZAÇÃO
   ============================================================ */
window.addEventListener("hashchange", router);
window.addEventListener("DOMContentLoaded", () => {
  /* Menu hamburguer */
  const toggle = document.getElementById("menu-toggle");
  const links = document.getElementById("navbar-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      links.classList.toggle("aberto");
    });
    /* Fechar menu ao clicar num link */
    links.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => links.classList.remove("aberto"));
    });
  }

  /* Iniciar roteamento */
  router();
});
