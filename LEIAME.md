# SertãoVR — Guia Completo para Estudantes

## O que é esta plataforma?

Este é o site do **Museu Virtual Imersivo do Sertão do Pajeú**. Ele foi construído com apenas três arquivos principais (HTML, CSS e JavaScript) e pode ser editado por qualquer estudante usando um editor de texto simples como o **Bloco de Notas** ou o **VS Code**.

---

## Estrutura de Arquivos

```
sertaovr/
├── index.html              ← Página principal (raramente precisa editar)
└── assets/
    ├── css/
    │   └── style.css       ← Visual: cores, fontes, tamanhos
    ├── js/
    │   └── main.js         ← DADOS: textos, vídeos, imagens, equipe
    └── img/
        ├── placeholder.jpg ← Imagem padrão (quando falta foto)
        ├── caatinga.jpg    ← ← Adicione suas fotos aqui
        ├── rio-pajeu.jpg
        ├── agricultura.jpg
        ├── artesanato.jpg
        ├── cultura.jpg
        └── economia.jpg
```

---

## Como adicionar ou editar uma experiência

Abra o arquivo `assets/js/main.js` e encontre a seção `const EXPERIENCIAS = [...]`.

Cada experiência é um bloco assim:

```javascript
{
  id: "caatinga",              // ← ID único, usado na URL
  titulo: "Caatinga Viva",     // ← Título do card e da página
  tag: "Natureza",             // ← Etiqueta colorida no card
  imagem: "assets/img/caatinga.jpg",  // ← Foto de capa
  descricaoCurta: "...",       // ← Texto curto (aparece no card)
  descricaoCompleta: "...",    // ← Texto longo (aparece na página)
  videoYouTube: "CODIGO_AQUI", // ← ID do vídeo no YouTube (veja abaixo)
  duracao: "~5 min",           // ← Duração estimada
  curiosidades: [
    "Primeira curiosidade...",
    "Segunda curiosidade...",
  ]
}
```

### Como achar o ID do vídeo no YouTube

Se o seu vídeo está em:
`https://www.youtube.com/watch?v=ABC123XYZ`

O ID é a parte depois de `?v=`, ou seja: **`ABC123XYZ`**

Coloque esse código no campo `videoYouTube`:
```javascript
videoYouTube: "ABC123XYZ",
```

---

## Como adicionar imagens

1. Salve a foto em `assets/img/` com o nome que você definiu no campo `imagem`.
2. Imagens recomendadas: formato **JPG ou WebP**, tamanho **800×533 pixels** ou maior.
3. Se a imagem não carregar, o site exibe automaticamente a imagem padrão (`placeholder.jpg`).

---

## Como mudar as cores do site

Abra `assets/css/style.css` e edite a seção `:root { ... }` no topo do arquivo:

```css
:root {
  --terra:       #8B5E3C;   /* ← Cor principal dos botões */
  --verde:       #4A7C59;   /* ← Cor secundária (caatinga) */
  --branco:      #FAF8F4;   /* ← Fundo da página */
  --preto-suave: #1C1209;   /* ← Cor do texto */
}
```

---

## Como editar a equipe

No mesmo arquivo `main.js`, encontre `const EQUIPE = [...]`:

```javascript
{
  avatar: "👩‍💼",                    // ← Emoji ou <img> com foto
  nome: "Maria Silva",              // ← Nome do estudante
  papel: "Gestão e Administração",  // ← Eixo de liderança
  descricao: "Responsável por..."   // ← Descrição breve
}
```

---

## Como publicar no GitHub Pages (gratuito)

### Passo 1 — Criar conta no GitHub
Acesse [github.com](https://github.com) e crie uma conta gratuita.

### Passo 2 — Criar repositório
1. Clique em **"New repository"**
2. Nome sugerido: `sertaovr`
3. Marque: **Public** (obrigatório para GitHub Pages gratuito)
4. Clique em **"Create repository"**

### Passo 3 — Enviar os arquivos
1. Na página do repositório criado, clique em **"uploading an existing file"**
2. Arraste todos os arquivos e pastas do projeto
3. Clique em **"Commit changes"**

### Passo 4 — Ativar o GitHub Pages
1. No repositório, clique em **"Settings"**
2. No menu lateral, clique em **"Pages"**
3. Em **"Source"**, selecione: **"Deploy from a branch"**
4. Em **"Branch"**, selecione: **"main"** e a pasta **"/ (root)"**
5. Clique em **"Save"**

### Passo 5 — Acessar o site
Após alguns minutos, seu site estará disponível em:
```
https://SEU-USUARIO.github.io/sertaovr/
```

---

## Como gerar os QR Codes

Cada experiência tem uma URL própria automaticamente:

| Experiência | URL |
|-------------|-----|
| Caatinga | `https://SEU-USUARIO.github.io/sertaovr/#/acervo/caatinga` |
| Rio Pajeú | `https://SEU-USUARIO.github.io/sertaovr/#/acervo/rio-pajeu` |
| Agricultura | `https://SEU-USUARIO.github.io/sertaovr/#/acervo/agricultura-familiar` |
| Artesanato | `https://SEU-USUARIO.github.io/sertaovr/#/acervo/artesanato` |
| Cultura | `https://SEU-USUARIO.github.io/sertaovr/#/acervo/cultura-local` |
| Economia | `https://SEU-USUARIO.github.io/sertaovr/#/acervo/economia-local` |

Para gerar o QR Code gratuitamente, acesse:
- [qr-code-generator.com](https://www.qr-code-generator.com)
- Cole a URL completa da experiência
- Baixe o QR Code em PNG e imprima nos Kits Educacionais

---

## Dicas para a Mostra Tecnológica

1. **Deixe o site aberto em vários dispositivos** antes de a mostra começar.
2. **Teste os vídeos com antecedência** — YouTube exige conexão com internet.
3. **Imprima os QR Codes** e cole nos Kits Educacionais para facilitar o acesso.
4. **Mostre a URL** no projetor para que visitantes possam acessar depois.

---

## Precisa de ajuda?

- O código é totalmente comentado em português.
- Cada seção do `main.js` tem um comentário explicando o que fazer.
- Para qualquer dúvida técnica, abra uma **"Issue"** no repositório do GitHub.
