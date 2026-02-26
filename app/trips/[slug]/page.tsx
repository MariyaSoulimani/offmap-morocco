import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { SectionTitle } from "@/components/section-title";
import { moroccoImageMap } from "@/data/morocco-images";
import { getTripBySlug, getTrips, formatDateRange } from "@/lib/trips";

type TripPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return getTrips().map((trip) => ({ slug: trip.slug }));
}

export function generateMetadata({ params }: TripPageProps): Metadata {
  const trip = getTripBySlug(params.slug);
  if (!trip) {
    return { title: "Trip introuvable" };
  }
  return {
    title: trip.title,
    description: trip.shortDescription,
  };
}

export default function TripDetailPage({ params }: TripPageProps) {
  const trip = getTripBySlug(params.slug);
  if (!trip) {
    notFound();
  }

  const hero = moroccoImageMap[trip.imageIds[0]];
  const second = moroccoImageMap[trip.imageIds[1]];

  return (
    <main className="bg-white">
      <section className="relative isolate min-h-[50vh] overflow-hidden">
        <Image src={hero.url} alt={hero.alt} fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10" />
        <Container className="relative z-10 flex min-h-[50vh] flex-col justify-end py-10 text-white">
          <p className="text-xs uppercase tracking-[0.2em] text-offmap-sand">{trip.theme}</p>
          <h1 className="mt-2 max-w-3xl font-heading text-4xl font-bold sm:text-5xl">{trip.title}</h1>
          <p className="mt-2 max-w-2xl text-base text-white/90">{trip.tagline}</p>
        </Container>
      </section>

      <section className="py-12">
        <Container className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="space-y-8">
            <SectionTitle title="Informations trip" description={trip.description} />
            <div className="grid gap-4 sm:grid-cols-2">
              <Info title="Dates" value={formatDateRange(trip.startDate, trip.endDate)} />
              <Info title="Duree" value={`${trip.durationDays} jours`} />
              <Info title="Niveau" value={trip.level} />
              <Info title="Lieu" value={trip.location} />
              <Info title="Places" value={`${trip.placesRemaining} / ${trip.placesTotal}`} />
              <Info title="Prix" value={`${trip.priceEur} EUR`} />
            </div>

            <InfoList title="Ce qui est inclus" items={trip.included} />
            <InfoList title="A apporter" items={trip.toBring} />
            <InfoList title="Programme (A a Z)" items={trip.itinerary} />
            <InfoList title="Securite et regles" items={trip.safetyRules} />
          </div>

          <aside className="space-y-5">
            {second ? (
              <div className="relative h-60 overflow-hidden rounded-2xl">
                <Image src={second.url} alt={second.alt} fill sizes="(max-width: 1024px) 100vw, 30vw" className="object-cover" />
              </div>
            ) : null}
            <div className="rounded-2xl border border-offmap-sand/30 bg-offmap-sand/10 p-5">
              <p className="text-sm text-offmap-gray">Tagline</p>
              <p className="mt-1 font-heading text-lg font-semibold text-offmap-green">{trip.tagline}</p>
              <p className="mt-4 text-sm text-offmap-gray">Theme: {trip.theme}</p>
              <p className="text-sm text-offmap-gray">Niveau: {trip.level}</p>
              <Link
                href={`/booking?trip=${trip.slug}`}
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-offmap-orange px-4 py-3 font-semibold text-white transition hover:brightness-95"
              >
                Reserver
              </Link>
            </div>
            <p className="text-xs text-offmap-gray">Image credit: {hero.credit}</p>
          </aside>
        </Container>
      </section>
    </main>
  );
}

function Info({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-xl border border-offmap-sand/30 bg-white p-4">
      <p className="text-xs uppercase tracking-wide text-offmap-gray">{title}</p>
      <p className="mt-1 font-medium text-offmap-green">{value}</p>
    </div>
  );
}

function InfoList({ title, items }: { title: string; items: string[] }) {
  return (
    <section>
      <h2 className="font-heading text-2xl font-bold text-offmap-green">{title}</h2>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className="rounded-xl border border-offmap-sand/30 bg-white p-3 text-offmap-gray">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
