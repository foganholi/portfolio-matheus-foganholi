import type { Education } from '../types';

export const education: Education = {
  course: { pt: 'Sistemas de Informação', en: 'Information Systems' },
  institution: {
    pt: 'Instituição configurável em src/data/education.ts',
    en: 'Configurable institution in src/data/education.ts',
  },
  status: { pt: 'Cursando', en: 'In progress' },
  extras: [
    {
      title: { pt: 'Cursos complementares', en: 'Complementary courses' },
      description: {
        pt: 'Espaço reservado para cursos concluídos ou em andamento.',
        en: 'Reserved space for completed or ongoing courses.',
      },
    },
    {
      title: { pt: 'Certificados', en: 'Certificates' },
      description: {
        pt: 'Adicione apenas certificados reais quando estiverem disponíveis.',
        en: 'Add only real certificates when available.',
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
