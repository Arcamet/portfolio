import Link from "next/link";

export function NotFoundContent() {
  return (
    <main id="main-content" className="not-found shell">
      <p className="eyebrow">404 / Record not found</p>
      <h1>This page is outside the current archive.</h1>
      <p>
        The requested route does not match a project, profile, or résumé page.
      </p>
      <Link className="button button-primary" href="/">
        Return home
      </Link>
    </main>
  );
}
