# Fase 03 - Layout Global (Header, Footer, Estrutura)

## Objetivo

Modernizar a estrutura global de navegacao e composicao de pagina para UX clara em desktop e mobile.

## Arquivos alvo

- `src/Header/Component.client.tsx`
- `src/Header/Nav/index.tsx`
- `src/Footer/Component.tsx`
- `src/app/(frontend)/layout.tsx`
- `src/app/(frontend)/[slug]/page.tsx`
- `src/app/(frontend)/posts/page.tsx`
- `src/app/(frontend)/posts/page/[pageNumber]/page.tsx`
- `src/app/(frontend)/search/page.tsx`
- `src/app/(frontend)/not-found.tsx`

## Escopo detalhado

1. Header
   - criar comportamento mais limpo e legivel
   - melhorar espacamento e alinhamento de logo/nav
   - adicionar menu mobile (drawer ou dropdown) com foco em acessibilidade
2. Navegacao
   - destacar pagina ativa
   - melhorar icone de busca e area de clique
3. Footer
   - evoluir composicao visual e hierarquia
   - manter `ThemeSelector`, mas com melhor encaixe visual
4. Estrutura de pagina
   - padronizar top/bottom spacing em rotas
   - melhorar largura de leitura e alinhamento de conteudo
5. Estado de erro 404
   - modernizar layout e CTA de retorno

## Regras de implementacao

- Manter compatibilidade com dados de Header/Footer vindos de Globals.
- Nao hardcodar links que ja sao configurados no Payload.
- Garantir navegacao por teclado no menu mobile.

## Criterios de aceite

- Header e footer consistentes em todas as rotas principais.
- Menu mobile funcional e acessivel.
- Sem quebra de preview bar e componentes de providers.

## Validacao

- Rodar `pnpm lint`
- Rodar `pnpm tsc --noEmit`
- Rodar `pnpm build`
- Testar responsividade em 375px, 768px e 1440px
