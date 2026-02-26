# Checklist de Execucao por Fase

## Antes de iniciar

- [ ] Ler `00-README-EXECUCAO.md`
- [ ] Confirmar branch de trabalho
- [ ] Confirmar escopo da fase atual

## Fase 01 - Fundacao Visual

- [ ] Tokens revisados em `globals.css`
- [ ] Tipografia e espacamentos globais definidos
- [ ] Contraste validado

## Fase 02 - Primitivos UI

- [ ] Button/Input/Select/Textarea/Checkbox padronizados
- [ ] Card e Pagination alinhados ao novo sistema
- [ ] Sem quebra de API nos componentes

## Fase 03 - Layout Global

- [ ] Header moderno com menu mobile acessivel
- [ ] Footer revisado
- [ ] Estrutura de rotas com spacing consistente

## Fase 04 - Conteudo

- [ ] Heros modernizados
- [ ] Cards e grids refinados
- [ ] Blocos com spacing e visual coerentes

## Fase 05 - Formularios e Busca

- [ ] Estados de formulario (loading/sucesso/erro) claros
- [ ] Campos com acessibilidade adequada
- [ ] Busca fluida com query string correta

## Fase 06 - Payload Tema

- [ ] Global `theme-settings` criado e integrado
- [ ] `pnpm generate:types` executado
- [ ] `pnpm generate:importmap` executado (se aplicavel)

## Fase 07 - Admin Payload

- [ ] BeforeLogin e BeforeDashboard atualizados
- [ ] SeedButton e AdminBar revisados
- [ ] custom.scss aplicado sem conflitos

## Fase 08 - QA Final

- [ ] `pnpm lint`
- [ ] `pnpm tsc --noEmit`
- [ ] `pnpm build`
- [ ] Revisao manual desktop/mobile
- [ ] Relatorio final consolidado
