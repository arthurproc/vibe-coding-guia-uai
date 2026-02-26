# Plano de Implementacao - Modernizacao de Design e UX

## Objetivo

Este pacote de documentos define uma implementacao completa para modernizar o frontend e a experiencia no admin de um projeto em Payload CMS, com foco em:

- design moderno e minimalista
- UX atual e responsiva
- consistencia visual e tecnica
- preservacao de seguranca e boas praticas do Payload

## Como usar estes arquivos com agentes de IA

1. Execute as fases em ordem (01 a 08).
2. Em cada fase, passe para o agente:
   - objetivo da fase
   - arquivos alvo
   - passos detalhados
   - criterios de aceite
3. Exija relatorio no fim de cada fase:
   - arquivos alterados
   - decisoes tomadas
   - comandos executados
   - pendencias e riscos
4. So avance para a fase seguinte se os criterios de aceite forem atendidos.

## Ordem de execucao recomendada

1. `01-fase-fundacao-visual.md`
2. `02-fase-primitivos-ui.md`
3. `03-fase-layout-global.md`
4. `04-fase-heros-cards-conteudo.md`
5. `05-fase-formularios-busca.md`
6. `06-fase-payload-cms-tema.md`
7. `07-fase-admin-payload.md`
8. `08-fase-qa-acessibilidade-performance.md`

## Regras obrigatorias para todos os agentes

- Manter TypeScript-first.
- Nao alterar arquivo gerado automaticamente: `src/app/(payload)/layout.tsx`.
- Em Local API com `user`, usar `overrideAccess: false`.
- Em nested operations dentro de hooks, sempre passar `req`.
- Evitar loops de hook com `context` flag quando necessario.
- Evitar mudancas destrutivas de dados e schema sem plano de migracao.
- Manter compatibilidade retroativa quando possivel.

## Regras de geracao Payload

- Se houver mudanca de schema (collections/globals/fields):
  - rodar `pnpm generate:types`
- Se houver criacao/alteracao de componentes de admin por path:
  - rodar `pnpm generate:importmap`

## Definition of Done global

- UI consistente entre paginas, posts, busca e blocos.
- Navegacao desktop/mobile clara e acessivel.
- Formularios com estados de sucesso, erro e loading claros.
- Layouts sem regressao visual em light/dark.
- Validacoes tecnicas aprovadas:
  - `pnpm lint`
  - `pnpm tsc --noEmit`
  - `pnpm build`

## Formato de relatorio por fase

```md
## Relatorio da Fase X

### Escopo entregue
- ...

### Arquivos alterados
- path/arquivo

### Decisoes tecnicas
- ...

### Validacoes executadas
- comando: resultado

### Riscos ou pendencias
- ...
```
