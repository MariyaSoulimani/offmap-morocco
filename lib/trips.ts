import { moroccoImageMap } from "@/data/morocco-images";
import { trips } from "@/data/trips";

export function getTrips() {
  return trips;
}

export function getTripBySlug(slug: string) {
  return trips.find((trip) => trip.slug === slug);
}

export function getTripImage(slug: string, index = 0) {
  const trip = getTripBySlug(slug);
  const imageId = trip?.imageIds[index] ?? trip?.imageIds[0];
  if (!imageId) {
    return null;
  }
  return moroccoImageMap[imageId];
}

export function formatTripDate(date: string) {
  return new Intl.DateTimeFormat("fr-FR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

export function formatDateRange(startDate: string, endDate: string) {
  return `${formatTripDate(startDate)} - ${formatTripDate(endDate)}`;
}
