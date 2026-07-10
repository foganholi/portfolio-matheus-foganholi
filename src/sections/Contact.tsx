import { Github, Linkedin, Mail } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { ExternalLink } from '../components/ExternalLink';
import { SectionHeading } from '../components/SectionHeading';
import { profile } from '../data/profile';
import { socialLinks } from '../data/socialLinks';
import type { Locale } from '../types';
import { sanitizeInput, validateContactForm, type ContactFormValues } from '../utils/contact';

interface ContactProps {
  locale: Locale;
  title: string;
  t: {
    name: string;
    email: string;
    subject: string;
    message: string;
    send: string;
    disabled: string;
    success: string;
    invalid: string;
  };
}

const icons = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
};

const initialValues: ContactFormValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export function Contact({ locale, title, t }: ContactProps) {
  const [values, setValues] = useState(initialValues);
  const [feedback, setFeedback] = useState('');

  const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT as string | undefined;

  const updateField = (field: keyof ContactFormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const sanitized = {
      name: sanitizeInput(values.name),
      email: sanitizeInput(values.email),
      subject: sanitizeInput(values.subject),
      message: sanitizeInput(values.message),
    };

    if (!validateContactForm(sanitized)) {
      setFeedback(t.invalid);
      return;
    }

    if (!endpoint) {
      setFeedback(t.disabled);
      return;
    }

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(sanitized),
    });

    setFeedback(response.ok ? t.success : t.disabled);
    if (response.ok) {
      setValues(initialValues);
    }
  };

  return (
    <section id="contact" className="content-section">
      <SectionHeading eyebrow="contact.channel" title={title} description={profile.location[locale]} />
      <div className="contact-grid">
        <div className="contact-links">
          {socialLinks.map((link) => {
            const Icon = icons[link.kind];
            return (
              <ExternalLink key={link.kind} href={link.href} className="contact-link">
                <Icon aria-hidden="true" />
                <span>{link.label}</span>
              </ExternalLink>
            );
          })}
        </div>
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <label>
            {t.name}
            <input value={values.name} onChange={(event) => updateField('name', event.target.value)} required />
          </label>
          <label>
            {t.email}
            <input
              type="email"
              value={values.email}
              onChange={(event) => updateField('email', event.target.value)}
              required
            />
          </label>
          <label>
            {t.subject}
            <input value={values.subject} onChange={(event) => updateField('subject', event.target.value)} required />
          </label>
          <label>
            {t.message}
            <textarea
              value={values.message}
              onChange={(event) => updateField('message', event.target.value)}
              required
              rows={5}
            />
          </label>
          <button className="button primary" type="submit">
            {t.send}
          </button>
          {feedback ? <p role="status">{feedback}</p> : null}
        </form>
      </div>
    </section>
  );
}
