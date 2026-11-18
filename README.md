# Estúdio Web — landing-catalog

Base institucional em Next.js App Router, React, TypeScript e Tailwind CSS.

## Desenvolvimento

```bash
npm run dev
```

A aplicação fica em `src/app`. Os componentes reutilizáveis estão em
`src/components`, as tipagens em `src/types` e os dados em `src/data`.
Os arrays de serviços e modelos começam vazios.

## Validação

```bash
npm run lint
npx tsc --noEmit
npm run build
```

As fontes Geist e Geist Mono foram preservadas via `next/font/google`;
o build precisa conseguir baixar essas fontes.

## Exportação estática

`npm run build` gera a pasta `out/`, compatível com hospedagem estática.
Para uma futura publicação no Firebase Hosting, usar `out` como diretório
público, sem reescrita de todas as URLs para `index.html` (modo SPA).
A configuração mantém `output: "export"` e `trailingSlash: true`.
Os workflows de produção e preview validam a exportação antes de publicar.
As tarefas locais de correção não executam deploy automaticamente.

A rota `/modelos/[slug]` usa `generateStaticParams()` com os slugs de
`src/data/templates.ts`. Com o catálogo vazio, retorna o marcador técnico
`__empty__`, que resulta em `notFound()` e não representa um modelo.
O export desta versão exige ao menos um parâmetro mesmo sem modelos reais. Slugs sem modelo retornam 404.
Após cadastrar modelos, executar um novo build para gerar suas páginas.
`cacheComponents` e `partialPrefetching` foram removidos: o build com PPR
falha com `Invariant: PPR cannot be enabled in export mode`.

Próxima etapa: definir o design system e desenvolver a página inicial.

## Design System — Etapa 2

Tema claro monocromático com tokens em `src/app/globals.css`, integrados ao
Tailwind CSS 4 por `@theme inline`. Geist Sans é a fonte principal e Geist Mono
é reservada a referências técnicas. Não há alternância automática de tema.

- Cores: fundo branco, superfície `#FAFAFA`, texto `#171717`, bordas `#E5E5E5`,
  primário `#171717` com texto branco e hover `#333333`.
- Texto secundário: `#707070`, um pequeno ajuste sobre a referência `#737373`
  para manter contraste sobre a superfície e o fundo muted `#F5F5F5`.
- Títulos mobile/desktop: H1 36/56, H2 30/40, H3 24/28 e H4 18/22 px;
  a escala desktop entra em 1024 px. Texto normal 16, secundário 14, pequeno 12 px.
- Containers: `variant="default"` (1200 px), `narrow` (768 px), `wide` (1400 px).
  Larguras incluem padding lateral de 20/32/40 px.
- Seções: `spacing="sm"`, `md` ou `lg`. Padding por lado em mobile/tablet/desktop:
  40/56/64, 56/72/96 e 72/96/120 px, respectivamente.
- Button: variantes `primary`, `secondary`, `outline`, `ghost`; tamanhos `sm`,
  `md`, `lg`; alturas mínimas de 44/48/56 px. O tipo nativo padrão é `button`.
  Para navegação, usar `next/link` com `buttonStyles({ variant, size })`.
- Badge: rótulo neutro com borda opcional (`bordered`). Card: bloco estático,
  ou link semântico ao receber `href`; apenas a versão link tem hover.
- Divider: separador semântico `hr`. Heading mantém o nível HTML escolhido.
- Foco visível, link para pular ao conteúdo, alvos de navegação de pelo menos
  44 px e respeito a `prefers-reduced-motion`. No mobile, os links permanecem
  visíveis em linhas flexíveis, sem menu recolhido ou JavaScript adicional.

### Visualizar os componentes

```bash
npm run dev
```

Acessar `http://localhost:3000/design-system`. A página é uma demonstração
interna, sem conteúdo comercial definitivo. Os botões demonstrativos não
executam ações; os exemplos de links apontam para páginas existentes.

### Excluir a demonstração da versão comercial

```bash
npm run build
```

Esse é o build comercial padrão: `/design-system` **não é uma rota** nesse
modo e não deve aparecer em `out/design-system/`. O arquivo `page.demo.tsx`
só é reconhecido quando a configuração inclui a extensão `demo.tsx`.
`next.config.ts` habilita essa extensão no servidor de desenvolvimento ou
quando `INCLUDE_DESIGN_SYSTEM=true` é explicitamente definido.

Para gerar uma exportação de validação com a demonstração:

```bash
INCLUDE_DESIGN_SYSTEM=true npm run build
```

Não publicar esse artefato no Firebase. Antes de publicar, garantir que a
variável está ausente e executar novamente `npm run build`, que recria `out/`
sem a demonstração. A exclusão é feita no roteamento, não por `noindex`,
ocultação de links, renderização vazia ou remoção manual de arquivos exportados.

O Footer é síncrono e calcula o copyright durante a geração estática, sem
`use cache`. O ano é atualizado em cada novo build.

## Páginas institucionais — Etapa 4

- `/servicos`: três categorias em seções verticais, com público ou aplicações,
  funcionalidades possíveis e links de orçamento específicos por serviço.
- `/como-funciona`: cinco etapas, materiais necessários, manutenção opcional
  e chamada para contato.
- `/contato`: formulário visual com validação ao sair dos campos. Campos
  obrigatórios vazios (inclusive só espaços) e e-mail inválido geram mensagens
  associadas aos campos. A correção do valor remove a mensagem de erro.

O formulário é um Client Component isolado em `Suspense`. O parâmetro
`servico` é lido no cliente e aceita somente `profissionais`, `empresas` e
`campanhas`. Valores desconhecidos ou ausentes mantêm o select sem seleção.
A opção “Ainda não sei” pode ser escolhida manualmente. A navegação para outro
serviço reinicia o formulário, sem persistir os dados preenchidos.

O envio permanece desabilitado e o evento de submit é bloqueado. Não há
integração externa, armazenamento de dados, registro de informações pessoais
no console ou mensagem de sucesso. A validação atual serve para a demonstração;
a integração futura deve adicionar envio real e validação no serviço receptor
antes de habilitar o botão.

Para testar manualmente, executar `npm run dev` e abrir:

```text
http://localhost:3000/servicos
http://localhost:3000/como-funciona
http://localhost:3000/contato
http://localhost:3000/contato?servico=profissionais
http://localhost:3000/contato?servico=empresas
http://localhost:3000/contato?servico=campanhas
http://localhost:3000/contato?servico=desconhecido
```

Conferir a opção selecionada, navegar com Tab e sair dos campos obrigatórios
vazios ou com e-mail inválido para verificar os erros. O botão deve continuar
desabilitado mesmo com dados válidos. Conferir também as larguras de 375, 768,
1280 e 1440 px e executar `npm run build` para validar a exportação estática.

## Catálogo de modelos — Etapa 5

O cadastro permanece vazio: nenhum modelo comercial ou imagem fictícia foi
publicado. `/modelos` exibe filtros e um convite para contato enquanto a seleção
estiver em preparação. A Home permanece sem catálogo.

### Cadastrar um modelo

1. Adicionar imagens aprovadas em `public/images/templates/<slug>/`.
2. Adicionar um objeto ao array de `src/data/templates.ts`. O arquivo contém
   um exemplo **comentado e fictício**, que não aparece no catálogo.
3. Preencher `id` e `slug` únicos (slug simples, sem espaços ou barras), `name`,
   `description`, `category`, `thumbnail`, `images`, `features` e `active`.
   Categorias aceitas: `profissionais`, `empresas` e `campanhas`.
4. Informar caminhos locais como `/images/templates/<slug>/capa.webp`.
   `images` pode ser vazio; a imagem principal aparece sempre. Repetições da
   imagem principal na galeria são ignoradas. Imagens usam `next/image` com
   `unoptimized`, sem depender do otimizador de imagens em tempo de execução.
5. Informar `demoUrl` somente quando existir uma demonstração HTTP(S) real.
   Se o campo for omitido, o botão de demonstração não aparece.
6. Definir `active: true` somente quando os dados estiverem prontos. Modelos
   inativos ficam fora do catálogo, dos slugs estáticos e da seleção no contato.
7. Executar lint, TypeScript e `npm run build` novamente para gerar as páginas.
   Para remover um modelo já publicado, publicar novamente a exportação completa
   após desativá-lo, removendo também os artefatos antigos da hospedagem.

`src/lib/templates.ts` concentra a consulta de ativos, filtro por categoria,
busca por slug, slugs disponíveis e nomes de categorias. Os helpers recebem
os dados como argumento; os arquivos de cadastro não são importados pelo filtro
cliente. Os cards são renderizados no servidor e passados ao filtro como conteúdo.

A rota `/modelos/[slug]` gera parâmetros somente dos modelos ativos. Quando não
há nenhum, mantém o marcador técnico `__empty__` com retorno 404 exigido por esta
versão do export. Não usar esse slug em um cadastro. O marcador não
representa um modelo nem conteúdo comercial. Slugs desconhecidos ou inativos
são tratados por `notFound()`, incluindo na geração de metadados.

### Testar localmente

Executar `npm run dev` e abrir `/modelos`. Com o cadastro vazio, deve aparecer
“Novos modelos em preparação”. Após cadastrar modelos reais aprovados:

- Alternar Todos, Profissionais, Empresas e Campanhas e vendas, inclusive com
  Tab/Enter/Espaço. A categoria selecionada usa `aria-pressed` e a contagem tem
  anúncio acessível. Categorias sem resultados oferecem retorno para Todos.
- Abrir um card, conferir imagens, características e o botão opcional de demo.
- Usar “Solicitar orçamento”: `/contato?modelo=<slug>` mostra o nome do modelo
  e pré-seleciona sua categoria. O select continua editável e o envio desabilitado.
- Se `modelo` e `servico` forem válidos simultaneamente, a categoria do modelo
  tem prioridade. Modelo inválido ou inativo é ignorado, preservando `servico`
  quando válido. A navegação para outro modelo reinicia os campos sem persistência.
- Conferir o grid e a galeria em 375, 768, 1280 e 1440 px. O grid usa uma coluna
  no mobile, duas a partir de 768 px e três a partir de 1024 px.
- Confirmar no build a geração das páginas apenas dos modelos ativos e o 404
  para slugs inexistentes. Não publicar a demonstração do Design System.


## Build de produção e Firebase Hosting

O build comercial usa `next build --webpack`, opção oficial do Next.js 16.
O desenvolvimento (`npm run dev`) mantém Turbopack. O fallback de produção
permite validar a exportação neste ambiente, onde Turbopack não consegue abrir
uma porta interna para executar o processador CSS (`EPERM`).

O Tailwind CSS 4 é processado por `@tailwindcss/postcss` em `postcss.config.mjs`,
com versões alinhadas em 4.3.5. O loader `@tailwindcss/turbopack` foi removido;
não se deve processar Tailwind simultaneamente pelos dois caminhos. Os tokens
`@theme` permanecem no código-fonte e são transformados em CSS padrão no build.

A configuração mantém apenas exportação, barras finais, imagens não otimizadas
e a seleção de extensões da demonstração. `cacheComponents` e
`partialPrefetching` não são necessários: a combinação anterior reproduziu
`Invariant: PPR cannot be enabled in export mode` ao final do build, impedindo
a conclusão da exportação. `agentFeedback` é uma ferramenta de desenvolvimento,
não uma exigência do site, e permanece ausente. O Footer não depende de cache.
As funções de página que aguardam `params` continuam assíncronas, como exige
a API desta versão. `dynamicParams = false` impede novos slugs em execução.

Validação antes de publicar:

```bash
npm ci
npm run lint
npx next typegen
npx tsc --noEmit
npm run build
npm run check:export
```

`check:export` falha se faltar ou estiver vazio qualquer HTML obrigatório
(`index`, `404`, `servicos`, `modelos`, `como-funciona`, `contato`), se faltarem
assets referenciados, CSS/JS, utilitários do design system ou se `@theme` não
estiver processado. Também impede a presença da rota de demonstração no build
comercial. Os dois workflows executam essa checagem **antes** da ação Firebase.
O build no CI define `INCLUDE_DESIGN_SYSTEM=false` explicitamente.

O Firebase Hosting continua servindo `out`, sem SSR e sem rewrite SPA.
Para testar os arquivos diretamente (sem usar `next start`):

```bash
python3 -m http.server 3100 --bind 127.0.0.1 --directory out
```

Abrir `http://localhost:3100/` e as rotas institucionais com barra final.
O `404.html` é usado pelo Firebase para rotas desconhecidas.
