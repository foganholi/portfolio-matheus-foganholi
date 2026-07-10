import type { Profile } from '../types';

export const profile: Profile = {
  name: 'Matheus Foganholi',
  role: {
    pt: 'Estudante de Sistemas de Informação e desenvolvedor focado em aplicações web, APIs e sistemas seguros.',
    en: 'Information Systems student and developer focused on web applications, APIs, and secure systems.',
  },
  location: {
    pt: 'São Paulo, Brasil',
    en: 'São Paulo, Brazil',
  },
  summary: {
    pt: 'Sou estudante de Sistemas de Informação e desenvolvedor em formação, com foco em Java, Spring Boot, APIs REST e banco de dados. Gosto de transformar ideias em sistemas funcionais, organizados e seguros. Tenho experiência acadêmica e prática na construção de aplicações web, sistemas desktop, autenticação com JWT, integração com bancos de dados e publicação de projetos. Estou sempre buscando melhorar meus conhecimentos, desenvolver novos projetos e aprender tecnologias que possam gerar soluções úteis para pessoas e empresas.',
    en: 'I am an Information Systems student and developer in training, focused on Java, Spring Boot, REST APIs, and databases. I enjoy turning ideas into functional, organized, and secure systems. I have academic and practical experience building web applications, desktop systems, JWT authentication, database integrations, and publishing projects. I am constantly improving my skills, building new projects, and learning technologies that can create useful solutions for people and companies.',
  },
  highlights: [
    {
      label: { pt: 'Curso atual', en: 'Current course' },
      value: { pt: 'Sistemas de Informação', en: 'Information Systems' },
    },
    {
      label: { pt: 'Área de interesse', en: 'Area of interest' },
      value: { pt: 'Desenvolvimento de Software / TI', en: 'Software Development / IT' },
    },
    {
      label: { pt: 'Principais tecnologias', en: 'Main technologies' },
      value: { pt: 'Java, Spring Boot, APIs REST, SQL', en: 'Java, Spring Boot, REST APIs, SQL' },
    },
    {
      label: { pt: 'Disponibilidade', en: 'Availability' },
      value: { pt: 'Estágio e oportunidades de aprendizado', en: 'Internships and learning opportunities' },
    },
  ],
  resumePath: '/documents/curriculo-matheus-foganholi.pdf',
  contactEmail: 'matheus.foganholi@email.com',
};
