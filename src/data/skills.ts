import type { SkillGroup } from '../types';

export const skills: SkillGroup[] = [
  {
    group: { pt: 'Back-end', en: 'Back-end' },
    items: [
      { name: 'Java', level: 'Experiência prática' },
      { name: 'Spring Boot', level: 'Conhecimento intermediário' },
      { name: 'APIs REST', level: 'Experiência prática' },
      { name: 'Spring Security', level: 'Conhecimento intermediário' },
      { name: 'JWT', level: 'Conhecimento intermediário' },
      { name: 'JPA', level: 'Conhecimento intermediário' },
      { name: 'Hibernate', level: 'Conhecimento intermediário' },
      { name: 'Maven', level: 'Conhecimento intermediário' },
      { name: 'Flyway', level: 'Conhecimento básico' },
    ],
  },
  {
    group: { pt: 'Banco de dados', en: 'Databases' },
    items: [
      { name: 'MySQL', level: 'Experiência prática' },
      { name: 'SQL', level: 'Experiência prática' },
      { name: 'Supabase', level: 'Conhecimento intermediário' },
      { name: 'Modelagem de dados', level: 'Conhecimento intermediário' },
      { name: 'CRUD', level: 'Experiência prática' },
      { name: 'Relacionamentos', level: 'Conhecimento intermediário' },
    ],
  },
  {
    group: { pt: 'Front-end', en: 'Front-end' },
    items: [
      { name: 'HTML', level: 'Experiência prática' },
      { name: 'CSS', level: 'Experiência prática' },
      { name: 'JavaScript', level: 'Conhecimento intermediário' },
      { name: 'Thymeleaf', level: 'Conhecimento básico' },
      { name: 'Responsividade', level: 'Conhecimento intermediário' },
      { name: 'React', level: 'Em estudo' },
    ],
  },
  {
    group: { pt: 'Ferramentas', en: 'Tools' },
    items: [
      { name: 'Git', level: 'Experiência prática' },
      { name: 'GitHub', level: 'Experiência prática' },
      { name: 'Postman', level: 'Experiência prática' },
      { name: 'Figma', level: 'Conhecimento básico' },
      { name: 'Eclipse', level: 'Conhecimento intermediário' },
      { name: 'VS Code', level: 'Conhecimento intermediário' },
    ],
  },
  {
    group: { pt: 'Conceitos', en: 'Concepts' },
    items: [
      { name: 'Programação orientada a objetos', level: 'Experiência prática' },
      { name: 'Estruturas de dados', level: 'Conhecimento intermediário' },
      { name: 'Autenticação', level: 'Conhecimento intermediário' },
      { name: 'Segurança de aplicações', level: 'Conhecimento básico' },
      { name: 'Arquitetura de sistemas', level: 'Conhecimento básico' },
      { name: 'Integração front-end/back-end', level: 'Conhecimento intermediário' },
    ],
  },
];
