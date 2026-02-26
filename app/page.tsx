import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { SectionTitle } from "@/components/section-title";
import { TripCard } from "@/components/trip-card";
import { getTrips } from "@/lib/trips";
import { moroccoImageMap } from "@/data/morocco-images";

const pillars = ["Discover", "Feel free", "Belong", "Heal", "Remember"];

export default function HomePage() {
  const trips = getTrips().slice(0, 6);
  const hero = moroccoImageMap["merzouga-dunes"];

  return (
    <main>
      <section className="relative isolate overflow-hidden bg-offmap-green text-white">
        <Image
          src={hero.url}
          alt={hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <Container className="relative z-10 py-24 sm:py-32">
          <p className="text-sm uppercase tracking-[0.2em] text-offmap-sand">OffMap Morocco</p>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-extrabold leading-tight sm:text-6xl">
            Not on Google.
            <br />
            Not for everyone.
          </h1>
          <p className="mt-5 max-w-2xl text-base text-white/90 sm:text-lg">
            Voyages hors-carte au Maroc pour ceux qui veulent autre chose que le deja-vu. Petits
            groupes, aventure humaine, et securite solide.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/trips"
              className="rounded-full bg-offmap-orange px-6 py-3 font-semibold text-white transition hover:brightness-95"
            >
              Voir les prochains trips
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-white/70 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-offmap-green"
            >
              Notre histoire
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionTitle
            eyebrow="Le probleme"
            title="Le tourisme repetitif a vide l aventure."
            description="Memes stops, memes photos, memes itineraires. On veut redonner de la place au vrai voyage."
          />
          <div className="mt-6 rounded-2xl border border-offmap-sand/30 bg-offmap-sand/10 p-6 text-offmap-gray">
            OffMap ne vend pas des checklists. On construit des moments rares avec des guides
            locaux, du temps lent, et des routes qui respectent les lieux.
          </div>
        </Container>
      </section>

      <section className="bg-offmap-sand/10 py-16 sm:py-20">
        <Container>
          <SectionTitle
            eyebrow="La promesse OffMap"
            title="Hors-carte, humain, premium, simple."
            description="Petits groupes, encadrement clair, immersion locale et logistique propre du debut a la fin."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {["Hors-carte", "Petits groupes", "Securite active"].map((item) => (
              <div key={item} className="rounded-2xl bg-white p-5 shadow-soft">
                <h3 className="font-heading text-lg font-semibold text-offmap-green">{item}</h3>
                <p className="mt-2 text-sm text-offmap-gray">
                  Une experience maitrisee, sans surcharge, avec un tempo adapte a chaque groupe.
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionTitle eyebrow="5 piliers" title="L ADN OffMap" />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {pillars.map((pillar) => (
              <div
                key={pillar}
                className="rounded-2xl border border-offmap-sand/30 bg-white p-4 text-center font-heading font-semibold text-offmap-green"
              >
                {pillar}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="mb-8 flex items-end justify-between gap-4">
            <SectionTitle
              eyebrow="Prochains trips"
              title="Les departs ouverts"
              description="Selection 2026. Places limitees."
            />
            <Link href="/trips" className="text-sm font-semibold text-offmap-orange hover:underline">
              Tout voir
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {trips.map((trip) => (
              <TripCard key={trip.slug} trip={trip} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-offmap-green py-16 text-white sm:py-20">
        <Container className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/20 bg-white/10 p-6">
            <h3 className="font-heading text-2xl font-bold">Temoignages</h3>
            <div className="mt-5 space-y-4 text-sm text-white/90">
              <p>&ldquo;Je pensais connaitre le desert. OffMap m a montre autre chose.&rdquo;</p>
              <p>&ldquo;Petit groupe, tres safe, et aucune sensation de tourisme de masse.&rdquo;</p>
              <p>&ldquo;Tu repars plus calme que quand tu arrives.&rdquo;</p>
            </div>
          </div>
          <div className="rounded-2xl border border-white/20 bg-white/10 p-6">
            <h3 className="font-heading text-2xl font-bold">Mini vlogs</h3>
            <div className="mt-5 grid gap-3 text-sm">
              <div className="rounded-xl border border-white/20 p-3">Vlog #01 - Sahara sunrise (placeholder)</div>
              <div className="rounded-xl border border-white/20 p-3">Vlog #02 - Atlas ridge day (placeholder)</div>
              <div className="rounded-xl border border-white/20 p-3">Vlog #03 - Wild coast reset (placeholder)</div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
