import Link from "next/link";
import { Container } from "@/components/container";

const links = [
  { href: "/", label: "Home" },
  { href: "/trips", label: "Trips" },
  { href: "/about", label: "A propos" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-offmap-sand/30 bg-white/90 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="font-heading text-lg font-bold tracking-tight text-offmap-green">
          OffMap Morocco
        </Link>
        <nav className="hidden items-center gap-5 md:flex" aria-label="Main navigation">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-offmap-gray transition hover:text-offmap-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offmap-orange focus-visible:ring-offset-2"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/booking"
          className="rounded-full bg-offmap-orange px-4 py-2 text-sm font-semibold text-white transition hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offmap-orange focus-visible:ring-offset-2"
        >
          Reserver
        </Link>
      </Container>
    </header>
  );
}
