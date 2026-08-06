import type { AnchorHTMLAttributes, ReactNode } from "react";

export function ExternalLink({
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { children: ReactNode }) {
  return (
    <a {...props} target="_blank" rel="noreferrer">
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
