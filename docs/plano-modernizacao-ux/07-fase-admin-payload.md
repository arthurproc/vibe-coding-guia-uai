# Fase 07 - Experiencia do Admin no Payload

## Objetivo

Atualizar a experiencia visual do admin para alinhar onboarding e usabilidade com o novo frontend.

## Arquivos alvo

- `src/components/BeforeLogin/index.tsx`
- `src/components/BeforeDashboard/index.tsx`
- `src/components/BeforeDashboard/index.scss`
- `src/components/BeforeDashboard/SeedButton/index.tsx`
- `src/components/BeforeDashboard/SeedButton/index.scss`
- `src/components/AdminBar/index.tsx`
- `src/components/AdminBar/index.scss`
- `src/app/(payload)/custom.scss`

## Escopo detalhado

1. BeforeLogin
   - transformar mensagem em bloco de boas-vindas mais claro e util
   - incluir instrucoes objetivas para primeiro acesso
2. BeforeDashboard
   - substituir texto longo por checklist curto de onboarding
   - melhorar hierarquia visual e leitura
3. SeedButton
   - modernizar UX de loading/sucesso/erro
   - manter operacao segura e transparente
4. AdminBar
   - ajustar visual para maior integracao com o frontend
   - manter funcionalidade de preview e saida de preview
5. Custom SCSS do admin
   - adicionar refinamentos leves sem quebrar componentes nativos

## Regras de implementacao

- Nao remover funcionalidade de seed.
- Nao alterar fluxo de autenticacao.
- Nao hardcodar estilos que conflitam com tokens do Payload UI.

## Criterios de aceite

- Admin com onboarding mais claro para novos usuarios.
- Feedback visual consistente com novo design do frontend.
- Preview bar e seed continuam funcionais.

## Validacao

- Rodar `pnpm lint`
- Rodar `pnpm tsc --noEmit`
- Rodar `pnpm build`
- Testar login, dashboard, seed e preview manualmente
