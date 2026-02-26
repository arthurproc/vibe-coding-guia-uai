# Fase 04 - Heros, Cards e Blocos de Conteudo

## Objetivo

Elevar a apresentacao do conteudo principal com composicoes modernas, limpas e orientadas a leitura.

## Arquivos alvo

- `src/heros/HighImpact/index.tsx`
- `src/heros/MediumImpact/index.tsx`
- `src/heros/LowImpact/index.tsx`
- `src/heros/PostHero/index.tsx`
- `src/components/Card/index.tsx`
- `src/components/CollectionArchive/index.tsx`
- `src/components/PageRange/index.tsx`
- `src/components/Pagination/index.tsx`
- `src/blocks/RenderBlocks.tsx`
- `src/blocks/ArchiveBlock/Component.tsx`
- `src/blocks/Content/Component.tsx`
- `src/blocks/MediaBlock/Component.tsx`
- `src/blocks/CallToAction/Component.tsx`
- `src/blocks/Banner/Component.tsx`
- `src/blocks/RelatedPosts/Component.tsx`
- `src/components/RichText/index.tsx`

## Escopo detalhado

1. Heros
   - melhorar composicao de titulo, subtitulo, metadata e CTA
   - usar overlays e contraste para legibilidade em imagem
   - reduzir aspecto de template padrao
2. Cards de post
   - melhorar proporcao de imagem, titulo, categorias e resumo
   - padronizar altura e densidade de informacao
   - reforcar hover/focus de forma discreta
3. Grid de colecao
   - revisar colunas e gaps por breakpoint
   - maximizar leitura e escaneabilidade
4. Pagina de listagem
   - revisar `PageRange` para copy mais clara
   - modernizar paginacao
5. Blocos de conteudo
   - harmonizar espacamento vertical entre blocos
   - melhorar visual de CTA, banner e media caption
   - garantir que RichText mantenha hierarquia tipografica

## Regras de implementacao

- Preservar estrutura de dados dos blocos vindos do Payload.
- Nao introduzir variacoes visuais sem token base.
- Nao remover suporte aos tipos de hero existentes.

## Criterios de aceite

- Heros e cards com visual premium e legibilidade alta.
- Blocos com spacing uniforme e consistencia visual.
- Layout responsivo sem quebras em telas pequenas.

## Validacao

- Rodar `pnpm lint`
- Rodar `pnpm tsc --noEmit`
- Rodar `pnpm build`
- Revisar manualmente:
  - home com hero
  - pagina interna com blocos
  - post individual com related posts
  - listagem de posts e paginacao
