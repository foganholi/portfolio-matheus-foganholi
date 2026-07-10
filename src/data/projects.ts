import type { Project } from '../types';

export const projectCategories = [
  'Todos',
  'Back-end',
  'Full Stack',
  'Java',
  'Banco de dados',
  'Desktop',
  'Estudos',
] as const;

export const projects: Project[] = [
  {
    id: 'car-hunter-fast',
    name: 'Car Hunter Fast',
    category: ['Full Stack', 'Banco de dados', 'Estudos'],
    description: {
      pt: 'Sistema voltado para gerenciamento de informações de veículos, documentos e organização operacional.',
      en: 'System focused on managing vehicle information, documents, and operational organization.',
    },
    problem: {
      pt: 'Centralizar dados de veículos, arquivos e histórico para reduzir perda de informações e facilitar o acesso da equipe.',
      en: 'Centralize vehicle data, files, and history to reduce information loss and make team access easier.',
    },
    solution: {
      pt: 'Interface web com módulos de cadastro, armazenamento de imagens/documentos e painel administrativo editável.',
      en: 'Web interface with registration modules, image/document storage, and an editable admin panel.',
    },
    technologies: ['Front-end web', 'API', 'Supabase', 'Render', 'Banco de dados'],
    features: [
      { pt: 'Cadastro e organização de veículos', en: 'Vehicle registration and organization' },
      { pt: 'Upload de imagens e documentos', en: 'Image and document upload' },
      { pt: 'Histórico de informações', en: 'Information history' },
      { pt: 'Acesso de funcionários e painel administrativo', en: 'Employee access and admin panel' },
    ],
    status: { pt: 'Em evolução', en: 'In progress' },
    period: '2026',
    image: '/images/projects/car-hunter-fast.svg',
    githubUrl: 'https://github.com/foganholi/car-hunter-fast',
    liveUrl: '',
    architecture: {
      pt: 'Aplicação web com separação entre interface, serviços de API, armazenamento e banco de dados.',
      en: 'Web application separated into interface, API services, storage, and database.',
    },
    challenges: {
      pt: 'Organizar uploads e dados administrativos sem expor informações sensíveis.',
      en: 'Organizing uploads and administrative data without exposing sensitive information.',
    },
    learnings: {
      pt: 'Integração entre front-end, banco de dados, storage e publicação em serviços cloud.',
      en: 'Integration between front-end, database, storage, and cloud deployment services.',
    },
    nextSteps: [
      { pt: 'Adicionar imagens reais do projeto', en: 'Add real project images' },
      { pt: 'Revisar links definitivos de produção', en: 'Review final production links' },
    ],
    codeSnippet: `const vehiclePayload = {\n  model: form.model.trim(),\n  plate: form.plate.toUpperCase(),\n  status: 'available',\n};`,
  },
  {
    id: 'marques-autodetail',
    name: 'Marques AutoDetail',
    category: ['Back-end', 'Full Stack', 'Java', 'Banco de dados'],
    description: {
      pt: 'Sistema para uma empresa de estética automotiva com autenticação, gestão de clientes e agendamentos.',
      en: 'System for an automotive detailing company with authentication, customer management, and scheduling.',
    },
    problem: {
      pt: 'Apoiar o controle de clientes, usuários, agenda e confirmação de comunicação por e-mail.',
      en: 'Support customer, user, schedule, and email confirmation management.',
    },
    solution: {
      pt: 'Aplicação Java com Spring Boot, segurança por JWT, persistência em MySQL e telas com Thymeleaf.',
      en: 'Java application with Spring Boot, JWT security, MySQL persistence, and Thymeleaf views.',
    },
    technologies: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'JWT',
      'MySQL',
      'JPA',
      'Hibernate',
      'Flyway',
      'Thymeleaf',
      'JavaMailSender',
    ],
    features: [
      { pt: 'Cadastro de usuários e login', en: 'User registration and login' },
      { pt: 'Autenticação por JWT', en: 'JWT authentication' },
      { pt: 'Gerenciamento de clientes e agendamentos', en: 'Customer and schedule management' },
      { pt: 'Confirmação por e-mail', en: 'Email confirmation' },
    ],
    status: { pt: 'Projeto acadêmico/prático', en: 'Academic/practical project' },
    period: '2025 - 2026',
    image: '/images/projects/marques-autodetail.svg',
    githubUrl: 'https://github.com/foganholi/marques-autodetail',
    liveUrl: '',
    architecture: {
      pt: 'Back-end Spring Boot com camadas de controller, service, repository e migrações de banco via Flyway.',
      en: 'Spring Boot back-end with controller, service, repository layers, and database migrations via Flyway.',
    },
    challenges: {
      pt: 'Integrar autenticação, regras de negócio e envio de e-mails mantendo organização das camadas.',
      en: 'Integrating authentication, business rules, and email delivery while keeping layers organized.',
    },
    learnings: {
      pt: 'Boas práticas com Spring Security, JWT, JPA/Hibernate e versionamento de schema.',
      en: 'Best practices with Spring Security, JWT, JPA/Hibernate, and schema versioning.',
    },
    nextSteps: [
      { pt: 'Adicionar documentação de endpoints', en: 'Add endpoint documentation' },
      { pt: 'Melhorar testes automatizados', en: 'Improve automated tests' },
    ],
  },
  {
    id: 'projeto-oficina',
    name: 'Projeto Oficina',
    category: ['Desktop', 'Java', 'Banco de dados', 'Estudos'],
    description: {
      pt: 'Aplicação desktop em Java Swing para controlar cadastros e estoque de uma oficina.',
      en: 'Java Swing desktop application for managing workshop records and inventory.',
    },
    problem: {
      pt: 'Manter registros de clientes, funcionários, peças e estoque em uma interface desktop simples.',
      en: 'Keep customer, employee, parts, and inventory records in a simple desktop interface.',
    },
    solution: {
      pt: 'Sistema Swing com JDBC, MySQL e telas de CRUD com tabelas para consulta e manutenção.',
      en: 'Swing system with JDBC, MySQL, and CRUD screens with tables for consultation and maintenance.',
    },
    technologies: ['Java', 'Java Swing', 'JDBC', 'MySQL', 'POO'],
    features: [
      { pt: 'Cadastro de clientes e funcionários', en: 'Customer and employee registration' },
      { pt: 'Cadastro de peças', en: 'Parts registration' },
      { pt: 'Controle de estoque', en: 'Inventory control' },
      { pt: 'Atualização, exclusão e exibição em tabelas', en: 'Update, delete, and table display' },
    ],
    status: { pt: 'Concluído para estudos', en: 'Completed for study' },
    period: '2025',
    image: '/images/projects/projeto-oficina.svg',
    githubUrl: 'https://github.com/foganholi/projeto-oficina',
    liveUrl: '',
    architecture: {
      pt: 'Aplicação desktop com telas Swing, classes de domínio e acesso ao banco por JDBC.',
      en: 'Desktop application with Swing screens, domain classes, and JDBC database access.',
    },
    challenges: {
      pt: 'Criar fluxos de CRUD consistentes e manter sincronização entre tabelas e banco.',
      en: 'Creating consistent CRUD flows and keeping tables synchronized with the database.',
    },
    learnings: {
      pt: 'Programação orientada a objetos, conexão com MySQL e construção de interfaces desktop.',
      en: 'Object-oriented programming, MySQL connection, and desktop interface building.',
    },
    nextSteps: [
      { pt: 'Adicionar documentação visual das telas', en: 'Add visual documentation of screens' },
      { pt: 'Revisar tratamento de erros', en: 'Review error handling' },
    ],
  },
];
