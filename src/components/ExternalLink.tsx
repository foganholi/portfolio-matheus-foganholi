import type { ReactNode } from 'react';

interface ExternalLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
}

export function ExternalLink({ href, children, className, ariaLabel }: ExternalLinkProps) {
  const disabled = !href;

  if (disabled) {
    return (
      <span className={className} aria-disabled="true">
        {children}
      </span>
    );
  }

  return (
    <a className={className} href={href} aria-label={ariaLabel} target="_blank" rel="noreferrer noopener">
      {children}
    </a>
  );
}
