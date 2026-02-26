import Link from "next/link";
import { Container } from "@/components/container";

export default function NotFound() {
  return (
    <main className="bg-white py-20">
      <Container className="text-center">
        <h1 className="font-heading text-4xl font-bold text-offmap-green">Page introuvable</h1>
        <p className="mt-3 text-offmap-gray">Cette route n existe pas ou n est plus disponible.</p>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-full bg-offmap-orange px-5 py-3 font-semibold text-white"
        >
          Retour accueil
        </Link>
      </Container>
    </main>
  );
}
