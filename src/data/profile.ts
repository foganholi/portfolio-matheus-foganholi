import type { Profile } from '../types';

export const profile: Profile = {
  name: 'Matheus Foganholi',
  role: {
    pt: 'Estudante de Sistemas de Informação com foco em desenvolvimento backend, Java, Spring Boot e APIs REST.',
    en: 'Information Systems student focused on backend development, Java, Spring Boot, and REST APIs.',
  },
  location: {
    pt: 'São Paulo, Brasil',
    en: 'São Paulo, Brazil',
  },
  summary: {
    pt: 'Sou estudante de Sistemas de Informação no Centro Universitário Senac, com formação técnica em Tecnologia da Informação e foco em desenvolvimento backend com Java. Desenvolvo projetos com Spring Boot, APIs REST, SQL, autenticação JWT, testes e controle de versão com Git. Também tenho experiência prática com Kotlin, React, TypeScript, PostgreSQL e Supabase. Busco uma oportunidade de estágio em desenvolvimento de software para contribuir com projetos reais e continuar evoluindo tecnicamente.',
    en: 'I am an Information Systems student at Centro Universitário Senac with a technical background in Information Technology and a focus on Java backend development. I build projects with Spring Boot, REST APIs, SQL, JWT authentication, testing, and Git. I also have practical experience with Kotlin, React, TypeScript, PostgreSQL, and Supabase. I am looking for a software development internship where I can contribute to real projects and continue growing technically.',
  },
  highlights: [
    {
      label: { pt: 'Curso atual', en: 'Current course' },
      value: { pt: 'Sistemas de Informação', en: 'Information Systems' },
    },
    {
      label: { pt: 'Objetivo', en: 'Goal' },
      value: { pt: 'Estágio em desenvolvimento backend', en: 'Backend development internship' },
    },
    {
      label: { pt: 'Principais tecnologias', en: 'Main technologies' },
      value: { pt: 'Java, Spring Boot, APIs REST, SQL', en: 'Java, Spring Boot, REST APIs, SQL' },
    },
    {
      label: { pt: 'Localização', en: 'Location' },
      value: { pt: 'São Paulo, Brasil', en: 'São Paulo, Brazil' },
    },
  ],
  resumePath: `${import.meta.env.BASE_URL}documents/curriculo-matheus-foganholi.pdf`,
  contactEmail: 'matheus.foganholi67@gmail.com',
};
