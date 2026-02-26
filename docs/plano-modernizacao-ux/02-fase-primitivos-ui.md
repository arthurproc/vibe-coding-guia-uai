# Fase 02 - Primitivos de UI

## Objetivo

Padronizar todos os componentes base de interface para garantir consistencia de UX e manutencao escalavel.

## Arquivos alvo

- `src/components/ui/button.tsx`
- `src/components/ui/input.tsx`
- `src/components/ui/textarea.tsx`
- `src/components/ui/select.tsx`
- `src/components/ui/checkbox.tsx`
- `src/components/ui/card.tsx`
- `src/components/ui/pagination.tsx`
- `src/components/Link/index.tsx`

## Escopo detalhado

1. Buttons
   - revisar variantes: `default`, `secondary`, `outline`, `ghost`, `link`, `destructive`
   - garantir pesos, paddings e raios coerentes
   - ajustar foco, hover e disabled
2. Inputs/Textarea
   - unificar altura, borda, placeholder e feedback de erro
   - melhorar estados `aria-invalid` e foco
3. Select e Checkbox
   - alinhar semantica visual com Input
   - revisar contraste e estado ativo
4. Card
   - ajustar sombra, borda, espacamento interno e titulo
   - remover visual generico de template
5. Pagination
   - melhorar legibilidade e tamanho de alvos de clique
   - padronizar estilo com botao
6. Link component (`CMSLink`)
   - manter API atual
   - garantir consistencia visual entre `inline`, `link` e variacoes de botao

## Regras de implementacao

- Preservar contratos publicos dos componentes (props e variants existentes).
- Se criar nova variant, atualizar tipos sem quebrar usos existentes.
- Evitar estilos duplicados: centralizar em primitivas.

## Criterios de aceite

- Todos os componentes base compartilham linguagem visual unica.
- Estados de interacao estao claros e acessiveis.
- Sem regressao funcional em links internos/externos e botoes asChild.

## Validacao

- Rodar `pnpm lint`
- Rodar `pnpm tsc --noEmit`
- Rodar `pnpm build`
- Testar interacoes com teclado nos componentes base
