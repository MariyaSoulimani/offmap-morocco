import { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { SectionTitle } from "@/components/section-title";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez OffMap Morocco pour vos questions et collaborations.",
};

export default function ContactPage() {
  return (
    <main className="bg-white py-12">
      <Container className="grid gap-8 lg:grid-cols-2">
        <div>
          <SectionTitle
            eyebrow="Contact"
            title="Parlons de votre prochain depart"
            description="Un message suffit pour preparer le bon trip au bon moment."
          />
          <p className="mt-5 text-offmap-gray">
            OffMap Morocco - voyages en petits groupes au Maroc, construits pour ceux qui cherchent
            une aventure authentique et responsable.
          </p>
          <div className="mt-6 space-y-2 text-sm text-offmap-gray">
            <p>Email: contact@offmapmorocco.com</p>
            <p>Instagram: @offmapmorocco</p>
            <p>WhatsApp: +212 6 00 00 00 00</p>
          </div>
        </div>
        <ContactForm />
      </Container>
    </main>
  );
}
