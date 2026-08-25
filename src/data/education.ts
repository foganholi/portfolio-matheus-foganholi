import type { Education } from '../types';

export const education: Education = {
  course: { pt: 'Bacharelado em Sistemas de Informação', en: "Bachelor's Degree in Information Systems" },
  institution: {
    pt: 'Centro Universitário Senac',
    en: 'Centro Universitário Senac',
  },
  status: { pt: 'Cursando desde 2023', en: 'In progress since 2023' },
  extras: [
    {
      title: { pt: 'Formação técnica', en: 'Technical education' },
      description: {
        pt: 'Ensino Médio Técnico em Tecnologia da Informação.',
        en: 'Technical High School Diploma in Information Technology.',
      },
    },
    {
      title: { pt: 'Estudos independentes', en: 'Independent studies' },
      description: {
        pt: 'Java, Spring Boot, segurança, banco de dados e desenvolvimento web.',
        en: 'Java, Spring Boot, security, databases, and web development.',
      },
    },
  ],
};
