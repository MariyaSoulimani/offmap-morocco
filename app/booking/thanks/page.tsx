import Link from "next/link";
import { Metadata } from "next";
import { Container } from "@/components/container";
import { SectionTitle } from "@/components/section-title";
import { getTripBySlug } from "@/lib/trips";

type ThanksPageProps = {
  searchParams?: {
    name?: string;
    email?: string;
    phone?: string;
    seats?: string;
    trip?: string;
    preferences?: string;
  };
};

export const metadata: Metadata = {
  title: "Merci",
  description: "Confirmation de reservation OffMap Morocco.",
};

export default function ThanksPage({ searchParams }: ThanksPageProps) {
  const trip = searchParams?.trip ? getTripBySlug(searchParams.trip) : undefined;

  return (
    <main className="bg-white py-12">
      <Container className="max-w-3xl">
        <SectionTitle
          eyebrow="Merci"
          title="Votre demande est bien recue"
          description="Un membre OffMap Morocco vous contacte rapidement pour la validation finale et le paiement."
          center
        />
        <div className="mt-8 space-y-3 rounded-2xl border border-offmap-sand/30 bg-offmap-sand/10 p-6">
          <Summary label="Nom" value={searchParams?.name} />
          <Summary label="Email" value={searchParams?.email} />
          <Summary label="Telephone" value={searchParams?.phone} />
          <Summary label="Places" value={searchParams?.seats} />
          <Summary label="Trip" value={trip?.title ?? searchParams?.trip} />
          <Summary label="Preferences" value={searchParams?.preferences} />
          <p className="rounded-xl bg-white p-3 text-sm font-medium text-offmap-green">
            Paiement a venir: cette etape est simulee dans le MVP.
          </p>
        </div>
        <div className="mt-6 flex gap-3">
          <Link href="/trips" className="rounded-full bg-offmap-orange px-5 py-3 font-semibold text-white">
            Retour aux trips
          </Link>
          <Link href="/" className="rounded-full border border-offmap-sand/50 px-5 py-3 font-semibold text-offmap-green">
            Accueil
          </Link>
        </div>
      </Container>
    </main>
  );
}

function Summary({ label, value }: { label: string; value?: string }) {
  return (
    <p className="rounded-xl bg-white p-3 text-sm text-offmap-gray">
      <span className="font-semibold text-offmap-green">{label}: </span>
      {value || "-"}
    </p>
  );
}
