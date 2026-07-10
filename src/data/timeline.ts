import type { TimelineItem } from '../types';

export const timeline: TimelineItem[] = [
  {
    id: 'start',
    title: { pt: 'Início dos estudos em programação', en: 'Started programming studies' },
    description: {
      pt: 'Primeiro contato com lógica, algoritmos e fundamentos de desenvolvimento.',
      en: 'First contact with logic, algorithms, and development fundamentals.',
    },
  },
  {
    id: 'college',
    title: { pt: 'Entrada em Sistemas de Informação', en: 'Joined Information Systems' },
    description: {
      pt: 'Aprofundamento em tecnologia, sistemas, banco de dados e engenharia de software.',
      en: 'Deepened studies in technology, systems, databases, and software engineering.',
    },
  },
  {
    id: 'java',
    title: { pt: 'Projetos em Java', en: 'Java projects' },
    description: {
      pt: 'Criação de aplicações desktop e prática com orientação a objetos.',
      en: 'Desktop application building and object-oriented practice.',
    },
  },
  {
    id: 'database',
    title: { pt: 'Banco de dados', en: 'Databases' },
    description: {
      pt: 'Modelagem, SQL, CRUD, relacionamentos e integração com sistemas.',
      en: 'Modeling, SQL, CRUD, relationships, and system integration.',
    },
  },
  {
    id: 'apis',
    title: { pt: 'APIs com Spring Boot', en: 'APIs with Spring Boot' },
    description: {
      pt: 'Desenvolvimento de serviços REST, camadas de aplicação e persistência.',
      en: 'REST services, application layers, and persistence development.',
    },
  },
  {
    id: 'security',
    title: { pt: 'Autenticação com JWT', en: 'JWT authentication' },
    description: {
      pt: 'Implementação de fluxos seguros de login, autorização e proteção de rotas.',
      en: 'Secure login, authorization, and route protection flows.',
    },
  },
  {
    id: 'current',
    title: { pt: 'Estudos atuais', en: 'Current studies' },
    description: {
      pt: 'Evolução em projetos completos, publicação e boas práticas de qualidade.',
      en: 'Growth in complete projects, deployment, and quality practices.',
    },
  },
];
