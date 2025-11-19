import { profile } from "../data/profile";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#archive", label: "Archive" },
  { href: "#contact", label: "Contact" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-20 w-full border-b border-gray-200/70 bg-fog/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3 md:px-8">
        <a
          href="#top"
          className="text-sm font-semibold tracking-tight hover:text-ink"
        >
          {profile.name}
        </a>
        <div className="flex items-center gap-4 text-sm text-gray-700">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-ink">
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
