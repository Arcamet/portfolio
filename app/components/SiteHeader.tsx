"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState, useSyncExternalStore } from "react";
import { navigation, profile, socialLinks } from "../content/profile";
import { ExternalLink } from "./ExternalLink";

const subscribeToHydration = () => () => {};

export function SiteHeader() {
  const pathname = usePathname();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const hydrated = useSyncExternalStore(
    subscribeToHydration,
    () => true,
    () => false,
  );

  function openMenu() {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return;
    dialog.showModal();
    document.body.dataset.menuOpen = "true";
    setMenuOpen(true);
    closeButtonRef.current?.focus();
  }

  function closeMenu() {
    dialogRef.current?.close();
  }

  function handleClosed() {
    setMenuOpen(false);
    delete document.body.dataset.menuOpen;
    triggerRef.current?.focus();
  }

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link
          className="wordmark"
          href="/"
          aria-label={`${profile.name}, home`}
        >
          <span className="wordmark-mark" aria-hidden="true">
            {profile.initials}
          </span>
          <span>
            <strong>{profile.name}</strong>
            <small>Computer Engineering · Full-stack</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <Link className="header-resume" href="/resume">
            Résumé
          </Link>
          <button
            ref={triggerRef}
            className="menu-trigger"
            type="button"
            aria-haspopup="dialog"
            aria-expanded={menuOpen}
            disabled={!hydrated}
            data-ready={hydrated ? "true" : "false"}
            onClick={openMenu}
          >
            Menu
          </button>
        </div>

        <dialog
          ref={dialogRef}
          className="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-labelledby="menu-title"
          onClose={handleClosed}
          onCancel={(event) => {
            event.preventDefault();
            closeMenu();
          }}
        >
          <div className="mobile-menu-head">
            <p id="menu-title" className="meta-label">
              Navigation index
            </p>
            <button
              ref={closeButtonRef}
              className="menu-close"
              type="button"
              onClick={closeMenu}
            >
              Close
            </button>
          </div>
          <nav aria-label="Mobile navigation">
            {navigation.map((item, index) => (
              <Link key={item.href} href={item.href} onClick={closeMenu}>
                <span>0{index + 1}</span>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mobile-menu-utilities">
            <a href={`mailto:${profile.email}`}>Email Jose</a>
            {socialLinks.github ? (
              <ExternalLink href={socialLinks.github}>GitHub</ExternalLink>
            ) : null}
            {socialLinks.linkedin ? (
              <ExternalLink href={socialLinks.linkedin}>LinkedIn</ExternalLink>
            ) : null}
          </div>
        </dialog>
      </div>
    </header>
  );
}
