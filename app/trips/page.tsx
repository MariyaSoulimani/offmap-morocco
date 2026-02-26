import { Metadata } from "next";
import { Container } from "@/components/container";
import { SectionTitle } from "@/components/section-title";
import { TripFilters } from "@/components/trip-filters";
import { getTrips } from "@/lib/trips";

export const metadata: Metadata = {
  title: "Trips",
  description: "Liste des trips OffMap Morocco, filtres par theme, niveau et date.",
};

export default function TripsPage() {
  const trips = getTrips();

  return (
    <main className="bg-offmap-sand/10 py-12">
      <Container>
        <SectionTitle
          eyebrow="Trips"
          title="Tous les prochains departs"
          description="Filtrez par theme, niveau et mois de depart."
        />
        <div className="mt-8">
          <TripFilters trips={trips} />
        </div>
      </Container>
    </main>
  );
}
