# Portfólio Matheus Foganholi

Portfólio profissional em formato de catálogo interativo, criado para apresentar projetos, habilidades, formação, trajetória e contato de Matheus Foganholi com uma experiência visual diferente dos portfólios tradicionais.

## Tecnologias

- React, TypeScript e Vite
- Tailwind CSS e CSS customizado
- Framer Motion
- Lucide Icons
- Vitest e React Testing Library

## Como executar

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
npm run preview
```

Testes e auditoria:

```bash
npm run lint
npm run test
npm run audit
```

## Estrutura principal

```text
src/
  components/       componentes reutilizáveis
  data/             perfil, links, projetos, habilidades, formação e timeline
  hooks/            estado persistente e verificação do currículo
  sections/         seções visuais do portfólio
  translations/     textos de interface em português e inglês
  types/            tipos TypeScript compartilhados
  utils/            terminal e validação do formulário
public/
  documents/        currículo em PDF
  images/projects/  imagens dos projetos
```

## Como alterar dados

- Perfil: `src/data/profile.ts`
- Links profissionais: `src/data/socialLinks.ts`
- Projetos: `src/data/projects.ts`
- Habilidades e níveis: `src/data/skills.ts`
- Linha do tempo: `src/data/timeline.ts`
- Formação: `src/data/education.ts`
- Textos de interface: `src/translations/ui.ts`

## Como adicionar projetos

Inclua um novo objeto no array `projects` em `src/data/projects.ts`. Use uma imagem em `public/images/projects/` e informe o caminho em `image`. Os links `githubUrl` e `liveUrl` podem ficar vazios até existirem.

## Currículo

Coloque o PDF em:

```text
public/documents/curriculo-matheus-foganholi.pdf
```

Enquanto o arquivo não existir, o botão de download aparece desativado e não quebra o site.

## Formulário de contato

O formulário valida e sanitiza os campos no front-end. Para envio real, configure um endpoint gratuito do Formspree, EmailJS ou Web3Forms:

```env
VITE_CONTACT_FORM_ENDPOINT=https://seu-endpoint
```

Nunca coloque chaves secretas no código do front-end.

## Publicação na Vercel

1. Crie um repositório no GitHub.
2. Envie este projeto para o repositório.
3. Importe o repositório na Vercel.
4. Use as configurações padrão de Vite:
   - Build command: `npm run build`
   - Output directory: `dist`
5. Configure `VITE_SITE_URL` e `VITE_CONTACT_FORM_ENDPOINT` se necessário.

Para domínio próprio, adicione o domínio no painel da Vercel e siga as instruções de DNS exibidas pela plataforma.

## Decisões de design

- Interface inspirada em catálogos de conteúdo e prateleiras de navegação, sem copiar marcas ou serviços existentes.
- Paleta neutra com preto, grafite, cinza quente, marfim e destaque discreto.
- Tema escuro como padrão e tema claro persistido no navegador.
- Idioma principal em português, com base preparada para inglês.
- Projetos como itens de coleção exploráveis com busca, filtros e modal de detalhes.
- Busca rápida simulada, sem execução real de comandos.
- Dados pessoais centralizados em arquivos editáveis.

## Melhorias futuras

- Substituir imagens ilustrativas por capturas reais dos projetos.
- Adicionar o currículo final em PDF.
- Revisar URLs definitivas do GitHub, LinkedIn e projetos publicados.
- Adicionar screenshots no README após publicar.
- Expandir testes de acessibilidade automatizados.
