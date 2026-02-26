import Link from "next/link";
import { Container } from "@/components/container";

export function Footer() {
  return (
    <footer className="border-t border-offmap-sand/30 bg-offmap-green text-white">
      <Container className="grid gap-10 py-12 md:grid-cols-3">
        <div>
          <p className="font-heading text-xl font-semibold">OffMap Morocco</p>
          <p className="mt-2 text-sm text-white/80">Not on Google. Not for everyone.</p>
        </div>
        <div>
          <p className="font-heading text-sm font-semibold uppercase tracking-wide">Reseaux</p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-white/85">
            <Link href="#" className="hover:text-white">
              Instagram
            </Link>
            <Link href="#" className="hover:text-white">
              YouTube
            </Link>
            <Link href="#" className="hover:text-white">
              TikTok
            </Link>
          </div>
        </div>
        <div>
          <p className="font-heading text-sm font-semibold uppercase tracking-wide">Newsletter</p>
          <form className="mt-3 flex gap-2" action="#">
            <label htmlFor="newsletter-email" className="sr-only">
              Email
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Votre email"
              className="w-full rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm placeholder:text-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offmap-orange"
            />
            <button
              type="submit"
              className="rounded-full bg-offmap-orange px-4 py-2 text-sm font-semibold text-white hover:brightness-95"
            >
              OK
            </button>
          </form>
          <p className="mt-3 text-xs text-white/70">contact@offmapmorocco.com</p>
        </div>
      </Container>
    </footer>
  );
}
