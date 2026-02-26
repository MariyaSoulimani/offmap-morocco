import { Metadata } from "next";
import { Container } from "@/components/container";
import { SectionTitle } from "@/components/section-title";

export const metadata: Metadata = {
  title: "A propos",
  description: "Pourquoi OffMap Morocco existe et ce que la marque defend.",
};

const values = [
  "Authenticite",
  "Securite",
  "Communaute",
  "Respect des lieux",
];

export default function AboutPage() {
  return (
    <main className="bg-white py-12">
      <Container className="space-y-12">
        <SectionTitle
          eyebrow="A propos"
          title="Pourquoi OffMap existe"
          description="OffMap Morocco est ne d une conviction: le voyage peut rester simple, profond et sincere sans tomber dans le tourisme standardise."
        />
        <section className="rounded-2xl border border-offmap-sand/30 bg-offmap-sand/10 p-6">
          <h2 className="font-heading text-2xl font-bold text-offmap-green">Notre histoire</h2>
          <p className="mt-3 text-offmap-gray">
            Nous avons vu les memes routes, les memes arrets et les memes photos se repeter. OffMap
            construit des itineraire plus humains, avec des partenaires locaux et une logistique
            claire.
          </p>
        </section>
        <section>
          <h2 className="font-heading text-2xl font-bold text-offmap-green">Nos valeurs</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value} className="rounded-2xl border border-offmap-sand/30 bg-white p-4 text-center">
                <p className="font-heading font-semibold text-offmap-green">{value}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="rounded-2xl bg-offmap-green p-6 text-white">
          <h2 className="font-heading text-2xl font-bold">Not on Google. Not for everyone.</h2>
          <p className="mt-3 text-white/90">
            Le slogan signifie que nous ne cherchons pas a plaire a tout le monde. Nous privilegions
            la qualite du groupe, la coherence du trip et le respect des lieux.
          </p>
        </section>
      </Container>
    </main>
  );
}
