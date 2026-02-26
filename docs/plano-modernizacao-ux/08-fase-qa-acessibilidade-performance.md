# Fase 08 - QA, Acessibilidade e Performance

## Objetivo

Garantir qualidade final antes de merge/deploy, sem regressao funcional e com UX robusta.

## Escopo de verificacao

1. QA visual
   - revisar consistencia de spacing, tipografia e estados
   - revisar paginas: home, interna, post, listagem, busca, 404
2. QA funcional
   - navegacao e links
   - menu mobile
   - envio de formulario
   - paginacao
   - busca
   - preview e admin bar
3. Acessibilidade
   - foco visivel em todos os elementos interativos
   - labels e nomes acessiveis
   - contraste minimo AA
   - navegacao por teclado sem bloqueios
4. Performance
   - revisar imagens em hero/cards
   - evitar sombras/filtros pesados em excesso
   - reduzir custo de rendering em listas

## Comandos obrigatorios

```bash
pnpm lint
pnpm tsc --noEmit
pnpm build
```

## Checklist final de aceite

- [ ] UI moderna e minimalista aplicada de ponta a ponta
- [ ] Sem regressao funcional em rotas e componentes criticos
- [ ] Contraste e foco adequados
- [ ] Build em producao sem erro
- [ ] Plano de rollback definido (se necessario)

## Entregaveis finais

1. Relatorio consolidado de todas as fases
2. Lista de arquivos alterados por fase
3. Lista de pendencias (se houver)
4. Sugestoes de evolucao futura (fase 2 de produto)
