# Fase 01 - Fundacao Visual

## Objetivo

Criar uma base visual forte e consistente, orientada por design tokens, para suportar todo o redesign.

## Arquivos alvo

- `src/app/(frontend)/globals.css`
- `src/app/(frontend)/layout.tsx`
- `src/components/Logo/Logo.tsx`

## Escopo detalhado

1. Definir direcao de marca minimalista
   - escolher familia tipografica principal e secundaria
   - definir personalidade visual (editorial, limpa, premium)
2. Revisar e padronizar tokens em `:root` e `[data-theme='dark']`
   - `--background`, `--foreground`, `--card`, `--border`, `--muted`
   - `--primary` e `--accent` sem exagero de saturacao
   - garantir contraste AA para texto principal e secundario
3. Ajustar escala tipografica global
   - padronizar `h1` a `h6`, `p`, `small`, `lead`
   - garantir ritmo vertical consistente (line-height e margins)
4. Definir espacos e raios globais
   - revisar `--radius` e derivados
   - revisar classe `.container` e paddings por breakpoint
5. Refinar base de interacao visual
   - foco visivel padrao
   - transicoes curtas e consistentes
6. Aplicar fundo com profundidade sutil
   - gradiente muito leve ou textura discreta
   - evitar fundo plano e sem identidade
7. Rever marca/logo
   - manter componente `Logo` responsivo e nitido
   - garantir legibilidade em temas claro/escuro

## Regras de implementacao

- Nao quebrar classes e tokens ja consumidos pelos componentes existentes.
- Se novo token for criado, mapear tambem em `@theme inline`.
- Evitar hardcode de cor em componentes; usar variaveis globais.

## Criterios de aceite

- Base visual coerente entre light e dark.
- Tipografia com hierarquia clara em todas as paginas principais.
- Contraste de texto e botoes sem pontos criticos.
- Nenhum componente depende de cor fixa fora dos tokens.

## Validacao

- Rodar `pnpm lint`
- Rodar `pnpm tsc --noEmit`
- Rodar `pnpm build`
- Validar manualmente:
  - Home
  - Pagina interna
  - Lista de posts
  - Busca
