export interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function sanitizeInput(value: string) {
  return value.replace(/[<>]/g, '').trim();
}

export function validateContactForm(values: ContactFormValues) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return (
    sanitizeInput(values.name).length >= 2 &&
    emailPattern.test(sanitizeInput(values.email)) &&
    sanitizeInput(values.subject).length >= 3 &&
    sanitizeInput(values.message).length >= 10
  );
}
