import Link from "next/link";
import { profile, socialLinks } from "../content/profile";
import { ExternalLink } from "./ExternalLink";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <p className="footer-name">{profile.name}</p>
          <p>{profile.identity}</p>
        </div>
        <div className="footer-meta">
          <span>McAllen, Texas</span>
          <span>English / Spanish</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
        <nav aria-label="Footer navigation">
          <a href={`mailto:${profile.email}`}>Email</a>
          <Link href="/resume">Résumé</Link>
          <Link href="/about">About</Link>
          {socialLinks.github ? (
            <ExternalLink href={socialLinks.github}>GitHub</ExternalLink>
          ) : null}
          {socialLinks.linkedin ? (
            <ExternalLink href={socialLinks.linkedin}>LinkedIn</ExternalLink>
          ) : null}
        </nav>
      </div>
    </footer>
  );
}
