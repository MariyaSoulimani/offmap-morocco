import { Metadata } from "next";
import { Container } from "@/components/container";
import { SectionTitle } from "@/components/section-title";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Questions frequentes sur les trips OffMap Morocco.",
};

const faqs = [
  {
    q: "Quel niveau physique faut-il ?",
    a: "Les trips sont classes Easy ou Medium. Chaque fiche detaille la duree, le rythme et le terrain.",
  },
  {
    q: "Comment gerez-vous la securite ?",
    a: "Guides locaux, briefings quotidiens, protocoles meteo et regles groupe claires.",
  },
  {
    q: "Que faut-il emporter ?",
    a: "Chaque trip a sa liste. En general: bonnes chaussures, couche chaude, eau, lampe frontale.",
  },
  {
    q: "Les femmes peuvent-elles venir seules ?",
    a: "Oui. Les groupes sont encadres, les regles sont strictes, et l accompagnement est continu.",
  },
  {
    q: "Quelle est la politique d annulation ?",
    a: "Les conditions detaillees sont partagees a la confirmation. Nous proposons des reports selon les cas.",
  },
  {
    q: "Que se passe-t-il en cas de mauvaise meteo ?",
    a: "Le staff adapte l itineraire ou reporte une etape. La securite prime toujours.",
  },
];

export default function FaqPage() {
  return (
    <main className="bg-offmap-sand/10 py-12">
      <Container className="max-w-4xl">
        <SectionTitle
          eyebrow="FAQ"
          title="Questions frequentes"
          description="Si vous avez un doute avant de reserver, vous etes au bon endroit."
        />
        <div className="mt-8 space-y-4">
          {faqs.map((item) => (
            <details key={item.q} className="rounded-2xl border border-offmap-sand/30 bg-white p-5">
              <summary className="cursor-pointer list-none font-heading text-lg font-semibold text-offmap-green">
                {item.q}
              </summary>
              <p className="mt-3 text-offmap-gray">{item.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </main>
  );
}
