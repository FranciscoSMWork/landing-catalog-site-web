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
Nenhuma publicação foi configurada nesta etapa.

A rota `/modelos/[slug]` usa `generateStaticParams()` com os slugs de
`src/data/templates.ts`. Com o catálogo vazio, retorna o marcador técnico
`__empty__`, que resulta em `notFound()` e não representa um modelo.
A documentação desta versão recomenda esse recurso para validar rotas com
Cache Components sem parâmetros reais. Slugs sem modelo retornam 404.
Após cadastrar modelos, executar um novo build para gerar suas páginas.
As opções originais `cacheComponents` e `partialPrefetching` foram preservadas.

Próxima etapa: definir o design system e desenvolver a página inicial.
