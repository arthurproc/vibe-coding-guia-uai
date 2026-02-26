# Fase 06 - Payload CMS como Fonte de Tema

## Objetivo

Permitir personalizacao visual a partir do admin do Payload, reduzindo dependencia de deploy para ajustes de branding.

## Arquivos alvo (novos e existentes)

- `src/globals/ThemeSettings/config.ts` (novo)
- `src/payload.config.ts`
- `src/payload-types.ts` (gerado)
- `src/app/(payload)/admin/importMap.js` (gerado, se necessario)
- `src/app/(frontend)/layout.tsx`
- `src/app/(frontend)/globals.css`
- `src/utilities/*` (helpers para leitura de global, se necessario)

## Escopo detalhado

1. Criar global `theme-settings`
   - campos sugeridos:
     - `brandName` (text)
     - `accentColor` (text ou select)
     - `surfaceStyle` (select: clean, soft, contrast)
     - `radiusScale` (select)
     - `density` (select: comfortable, compact)
     - `heroOverlay` (select)
   - incluir defaults seguros
2. Registrar global no `payload.config.ts`
   - adicionar em `globals: [...]`
3. Consumir configuracao no frontend
   - carregar `theme-settings` no layout
   - aplicar tokens dinamicos de forma segura
4. Fallbacks
   - se global estiver vazio, usar defaults de codigo
5. Documentar mapeamento de campos -> tokens
   - manter previsibilidade para editores de conteudo

## Regras de implementacao Payload

- Se usar Local API com `user`, obrigatorio `overrideAccess: false`.
- Se hooks fizerem nested operation, passar `req`.
- Evitar acesso por role sem garantir existencia de `roles` no schema de `users`.
- Nao alterar `src/payload-types.ts` manualmente.

## Passos obrigatorios apos schema change

1. Rodar `pnpm generate:types`
2. Se componentes do admin por path forem alterados, rodar `pnpm generate:importmap`

## Criterios de aceite

- Editor consegue ajustar parametros de tema sem tocar codigo.
- Frontend reflete alteracoes do global com fallback seguro.
- Tipos gerados sem erro e sem quebrar build.

## Validacao

- Rodar `pnpm generate:types`
- Rodar `pnpm generate:importmap` (se aplicavel)
- Rodar `pnpm lint`
- Rodar `pnpm tsc --noEmit`
- Rodar `pnpm build`
