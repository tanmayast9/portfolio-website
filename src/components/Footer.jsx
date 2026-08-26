import { contact } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 md:flex-row md:items-center md:px-10">
        {/* EDIT: Footer text in content.js */}
        <p className="label text-muted">{contact.footer}</p>
        <a
          href="#home"
          className="label text-muted transition-colors hover:text-accent"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
