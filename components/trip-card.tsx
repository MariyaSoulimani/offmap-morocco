import Image from "next/image";
import Link from "next/link";
import { moroccoImageMap } from "@/data/morocco-images";
import { formatDateRange } from "@/lib/trips";
import { Trip } from "@/lib/types";

type TripCardProps = {
  trip: Trip;
};

export function TripCard({ trip }: TripCardProps) {
  const image = moroccoImageMap[trip.imageIds[0]];

  return (
    <article className="group overflow-hidden rounded-2xl border border-offmap-sand/30 bg-white shadow-soft transition hover:-translate-y-1">
      {image ? (
        <div className="relative h-56 overflow-hidden">
          <Image
            src={image.url}
            alt={image.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
        </div>
      ) : null}
      <div className="space-y-3 p-5">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="rounded-full bg-offmap-sand/20 px-2 py-1 font-medium text-offmap-green">
            {trip.theme}
          </span>
          <span className="rounded-full bg-offmap-green/10 px-2 py-1 font-medium text-offmap-green">
            {trip.level}
          </span>
        </div>
        <h3 className="font-heading text-xl font-semibold text-offmap-green">{trip.title}</h3>
        <p className="text-sm text-offmap-gray">{trip.shortDescription}</p>
        <ul className="space-y-1 text-sm text-offmap-gray">
          <li>{formatDateRange(trip.startDate, trip.endDate)}</li>
          <li>{trip.durationDays} jours</li>
          <li>{trip.placesRemaining} places restantes</li>
        </ul>
        <div className="flex items-center justify-between pt-2">
          <p className="font-semibold text-offmap-orange">{trip.priceEur} EUR</p>
          <Link
            href={`/trips/${trip.slug}`}
            className="rounded-full border border-offmap-orange px-4 py-2 text-sm font-semibold text-offmap-orange transition hover:bg-offmap-orange hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offmap-orange focus-visible:ring-offset-2"
          >
            Details
          </Link>
        </div>
      </div>
    </article>
  );
}
