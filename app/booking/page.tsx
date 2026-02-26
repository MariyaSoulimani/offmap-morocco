import { Metadata } from "next";
import { BookingForm } from "@/components/booking-form";
import { Container } from "@/components/container";
import { SectionTitle } from "@/components/section-title";
import { getTrips } from "@/lib/trips";

type BookingPageProps = {
  searchParams?: {
    trip?: string;
  };
};

export const metadata: Metadata = {
  title: "Reservation",
  description: "Reservez votre place OffMap Morocco. Paiement a venir (MVP).",
};

export default function BookingPage({ searchParams }: BookingPageProps) {
  const trips = getTrips();
  const requestedTrip = searchParams?.trip;
  const initialTrip = trips.some((trip) => trip.slug === requestedTrip) ? requestedTrip : undefined;

  return (
    <main className="bg-offmap-sand/10 py-12">
      <Container>
        <SectionTitle
          eyebrow="Reservation"
          title="Reservez votre place"
          description="Le paiement sera ajoute dans une prochaine version. Pour l instant, vous recevez une confirmation et notre equipe vous contacte."
        />
        <div className="mt-8 max-w-3xl">
          <BookingForm trips={trips} initialTrip={initialTrip} />
        </div>
      </Container>
    </main>
  );
}
