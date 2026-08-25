import type { Project } from '../types';

export const projectCategories = [
  'Todos',
  'Back-end',
  'Full Stack',
  'Java',
  'Banco de dados',
  'Mobile',
  'Estudos',
] as const;

export const projects: Project[] = [
  {
    id: 'nutriflow-ai',
    name: 'NutriFlow AI',
    category: ['Full Stack', 'Banco de dados'],
    description: {
      pt: 'Plataforma web de educação alimentar, planejamento de rotina e acompanhamento de hábitos.',
      en: 'Web platform for food education, routine planning, and habit tracking.',
    },
    problem: {
      pt: 'Organizar alimentação, hábitos e progresso em uma experiência simples, com atenção à privacidade e aos limites de orientação em saúde.',
      en: 'Organize food, habits, and progress in a simple experience while respecting privacy and health-guidance boundaries.',
    },
    solution: {
      pt: 'Aplicação Next.js com autenticação, dashboard, plano alimentar por regras, favoritos, exportação de dados e controles de segurança.',
      en: 'Next.js application with authentication, dashboard, rule-based meal planning, favorites, data export, and security controls.',
    },
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'RLS', 'Vitest', 'Playwright'],
    features: [
      { pt: 'Cadastro, login e recuperação de senha', en: 'Sign-up, login, and password recovery' },
      { pt: 'Dashboard, plano alimentar e acompanhamento de hábitos', en: 'Dashboard, meal planning, and habit tracking' },
      { pt: 'Exportação de dados e exclusão de conta', en: 'Data export and account deletion' },
      { pt: 'Testes automatizados e documentação de segurança', en: 'Automated tests and security documentation' },
    ],
    status: { pt: 'Em evolução', en: 'In progress' },
    period: '2026',
    image: '/images/projects/nutriflow-ai.svg',
    githubUrl: 'https://github.com/foganholi/nutriflow-ai',
    liveUrl: '',
    architecture: {
      pt: 'Aplicação Next.js integrada ao Supabase Auth, PostgreSQL e políticas de acesso RLS.',
      en: 'Next.js application integrated with Supabase Auth, PostgreSQL, and RLS access policies.',
    },
    challenges: {
      pt: 'Proteger dados pessoais, separar conteúdo educativo de orientação clínica e manter as áreas privadas testáveis.',
      en: 'Protecting personal data, separating educational content from clinical guidance, and keeping private areas testable.',
    },
    learnings: {
      pt: 'Autenticação, modelagem PostgreSQL, RLS, validação, testes E2E e práticas de privacidade.',
      en: 'Authentication, PostgreSQL modeling, RLS, validation, E2E testing, and privacy practices.',
    },
    nextSteps: [
      { pt: 'Publicar uma demonstração controlada', en: 'Publish a controlled demo' },
      { pt: 'Adicionar monitoramento e revisão de acessibilidade', en: 'Add monitoring and accessibility review' },
    ],
  },
  {
    id: 'marques-autodetail',
    name: 'Marques AutoDetail',
    category: ['Back-end', 'Java', 'Banco de dados', 'Mobile'],
    description: {
      pt: 'Aplicativo Android em Kotlin integrado a uma API Spring Boot para uma empresa de estética automotiva.',
      en: 'Kotlin Android app integrated with a Spring Boot API for an automotive detailing company.',
    },
    problem: {
      pt: 'Centralizar autenticação, clientes, serviços e agendamentos em uma solução móvel conectada a um backend seguro.',
      en: 'Centralize authentication, customers, services, and appointments in a mobile solution connected to a secure backend.',
    },
    solution: {
      pt: 'Aplicativo Android nativo consumindo uma API REST com Spring Security, JWT, JPA e PostgreSQL.',
      en: 'Native Android app consuming a REST API with Spring Security, JWT, JPA, and PostgreSQL.',
    },
    technologies: ['Kotlin', 'Android', 'Java', 'Spring Boot', 'JWT', 'PostgreSQL', 'Supabase'],
    features: [
      { pt: 'Cadastro de usuários e autenticação', en: 'User registration and authentication' },
      { pt: 'Gestão de clientes, serviços e agendamentos', en: 'Customer, service, and appointment management' },
      { pt: 'Integração Android com API via Retrofit', en: 'Android-to-API integration with Retrofit' },
      { pt: 'Banco PostgreSQL com permissões controladas', en: 'PostgreSQL database with controlled permissions' },
    ],
    status: { pt: 'Projeto acadêmico/prático', en: 'Academic/practical project' },
    period: '2025 - 2026',
    image: '/images/projects/marques-autodetail.svg',
    githubUrl: 'https://github.com/foganholi/marques-autodetail',
    liveUrl: '',
    architecture: {
      pt: 'Aplicativo Android, API Spring Boot em camadas e banco PostgreSQL no Supabase.',
      en: 'Android app, layered Spring Boot API, and PostgreSQL database on Supabase.',
    },
    challenges: {
      pt: 'Integrar o aplicativo ao backend e manter credenciais e configurações fora do repositório.',
      en: 'Integrating the app with the backend while keeping credentials and configuration out of the repository.',
    },
    learnings: {
      pt: 'APIs REST, autenticação JWT, Retrofit, JPA/Hibernate, PostgreSQL e configuração por ambiente.',
      en: 'REST APIs, JWT authentication, Retrofit, JPA/Hibernate, PostgreSQL, and environment configuration.',
    },
    nextSteps: [
      { pt: 'Ampliar os testes automatizados', en: 'Expand automated testing' },
      { pt: 'Publicar uma API de demonstração', en: 'Publish a demo API' },
    ],
  },
  {
    id: 'sistema-chamados-api',
    name: 'Sistema de Chamados API',
    category: ['Back-end', 'Java', 'Banco de dados', 'Estudos'],
    description: {
      pt: 'API REST para abertura e acompanhamento de solicitações de suporte técnico.',
      en: 'REST API for opening and tracking technical support requests.',
    },
    problem: {
      pt: 'Organizar chamados, prioridades, responsáveis e andamento de solicitações de suporte.',
      en: 'Organize tickets, priorities, assignees, and the progress of support requests.',
    },
    solution: {
      pt: 'API Java com regras de negócio, validação, filtros e operações CRUD para usuários e chamados.',
      en: 'Java API with business rules, validation, filters, and CRUD operations for users and tickets.',
    },
    technologies: ['Java 17', 'Spring Boot', 'Spring Data JPA', 'Bean Validation', 'H2', 'Maven'],
    features: [
      { pt: 'Cadastro de clientes, técnicos e administradores', en: 'Registration of customers, technicians, and administrators' },
      { pt: 'CRUD completo de chamados', en: 'Complete ticket CRUD' },
      { pt: 'Alteração de status e atribuição de responsáveis', en: 'Status changes and assignee management' },
      { pt: 'Filtros por prioridade, status e responsável', en: 'Filters by priority, status, and assignee' },
    ],
    status: { pt: 'Concluído para estudos', en: 'Completed for study' },
    period: '2026',
    image: '/images/projects/sistema-chamados-api.svg',
    githubUrl: 'https://github.com/foganholi/sistema-chamados-api',
    liveUrl: '',
    architecture: {
      pt: 'API organizada em controller, service, repository, DTOs, modelos e tratamento de exceções.',
      en: 'API organized into controllers, services, repositories, DTOs, models, and exception handling.',
    },
    challenges: {
      pt: 'Aplicar validações e regras de atribuição mantendo as responsabilidades das camadas separadas.',
      en: 'Applying validation and assignment rules while keeping layer responsibilities separated.',
    },
    learnings: {
      pt: 'Modelagem de APIs REST, validação, filtros, tratamento de erros e persistência com JPA.',
      en: 'REST API design, validation, filters, error handling, and persistence with JPA.',
    },
    nextSteps: [
      { pt: 'Adicionar autenticação e autorização', en: 'Add authentication and authorization' },
      { pt: 'Documentar a API com OpenAPI', en: 'Document the API with OpenAPI' },
    ],
  },
];
