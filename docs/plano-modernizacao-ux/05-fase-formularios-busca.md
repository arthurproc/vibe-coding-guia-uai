# Fase 05 - Formularios e Busca

## Objetivo

Melhorar a UX de captura de dados e busca com feedback claro, acessibilidade e consistencia visual.

## Arquivos alvo

- `src/blocks/Form/Component.tsx`
- `src/blocks/Form/fields.tsx`
- `src/blocks/Form/Text/index.tsx`
- `src/blocks/Form/Email/index.tsx`
- `src/blocks/Form/Textarea/index.tsx`
- `src/blocks/Form/Select/index.tsx`
- `src/blocks/Form/Checkbox/index.tsx`
- `src/blocks/Form/Error/index.tsx`
- `src/blocks/Form/Width/index.tsx`
- `src/search/Component.tsx`
- `src/app/(frontend)/search/page.tsx`

## Escopo detalhado

1. Form container
   - elevar visual do card de formulario
   - melhorar espacamento entre campos e secoes
2. Campos e labels
   - padronizar labels, required marker e ajuda contextual
   - garantir toque/click area adequada
3. Estados de feedback
   - loading com mensagem clara
   - sucesso com hierarquia visual
   - erro com texto acionavel e acessivel
4. Validacao
   - garantir mensagens consistentes por tipo de campo
   - revisar padrao de email e required
5. Busca
   - ajustar campo para UX mais moderna
   - sincronizar query string sem comportamento confuso
   - manter debounce com experiencia fluida

## Regras de implementacao

- Nao quebrar integracao com `@payloadcms/plugin-form-builder`.
- Manter semantica de formularios e labels para leitores de tela.
- Em mensagens de erro, evitar textos tecnicos sem contexto.

## Criterios de aceite

- Formulario claro, com estados previsiveis e sem ruido visual.
- Busca com feedback imediato e resultados coerentes.
- Acessibilidade basica de formulario atendida.

## Validacao

- Rodar `pnpm lint`
- Rodar `pnpm tsc --noEmit`
- Rodar `pnpm build`
- Testar fluxo de envio de formulario e fluxo de busca
