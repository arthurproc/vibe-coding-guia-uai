# Prompts Operacionais para Agentes de IA

Use os templates abaixo para executar cada fase com qualidade e rastreabilidade.

## Prompt base (orquestrador)

```text
Voce vai executar a fase <NOME_DA_FASE> do plano em docs/plano-modernizacao-ux.

Objetivo:
<OBJETIVO_DA_FASE>

Arquivos alvo:
<LISTA_DE_ARQUIVOS>

Instrucoes:
1) Leia o arquivo da fase correspondente e siga todos os passos.
2) Implemente sem quebrar contratos publicos existentes.
3) Se alterar schema Payload, rode generate:types.
4) Se alterar componentes de admin por path, rode generate:importmap.
5) Execute validacoes tecnicas (lint, tsc, build).
6) Entregue relatorio no formato:

## Relatorio da Fase
### Escopo entregue
### Arquivos alterados
### Decisoes tecnicas
### Validacoes executadas
### Riscos e pendencias

Importante:
- Nao altere arquivos gerados automaticamente manualmente.
- Respeite praticas de seguranca do Payload.
```

## Prompt fase 01

```text
Execute a fase 01 usando docs/plano-modernizacao-ux/01-fase-fundacao-visual.md.
Priorize design tokens, tipografia, contraste e base visual minimalista.
Nao hardcode cores em componentes quando houver token equivalente.
```

## Prompt fase 02

```text
Execute a fase 02 usando docs/plano-modernizacao-ux/02-fase-primitivos-ui.md.
Padronize button/input/select/textarea/checkbox/card/pagination mantendo compatibilidade de API.
```

## Prompt fase 03

```text
Execute a fase 03 usando docs/plano-modernizacao-ux/03-fase-layout-global.md.
Entregue header e footer modernos, incluindo menu mobile acessivel.
```

## Prompt fase 04

```text
Execute a fase 04 usando docs/plano-modernizacao-ux/04-fase-heros-cards-conteudo.md.
Eleve hero, cards e blocos para linguagem visual premium e legivel.
```

## Prompt fase 05

```text
Execute a fase 05 usando docs/plano-modernizacao-ux/05-fase-formularios-busca.md.
Melhore UX de formularios e busca com estados claros e acessibilidade.
```

## Prompt fase 06

```text
Execute a fase 06 usando docs/plano-modernizacao-ux/06-fase-payload-cms-tema.md.
Crie e integre global de tema no Payload com fallback seguro no frontend.
```

## Prompt fase 07

```text
Execute a fase 07 usando docs/plano-modernizacao-ux/07-fase-admin-payload.md.
Atualize onboarding e experiencia visual do admin sem perder funcionalidade.
```

## Prompt fase 08

```text
Execute a fase 08 usando docs/plano-modernizacao-ux/08-fase-qa-acessibilidade-performance.md.
Finalize com validacao completa e relatorio consolidado.
```
