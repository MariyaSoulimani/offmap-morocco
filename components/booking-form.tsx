"use client";

import { FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Trip } from "@/lib/types";

type BookingFormProps = {
  trips: Trip[];
  initialTrip?: string;
};

type BookingState = {
  name: string;
  email: string;
  phone: string;
  seats: string;
  trip: string;
  preferences: string;
  terms: boolean;
};

const initialState: BookingState = {
  name: "",
  email: "",
  phone: "",
  seats: "1",
  trip: "",
  preferences: "",
  terms: false,
};

export function BookingForm({ trips, initialTrip }: BookingFormProps) {
  const router = useRouter();
  const [values, setValues] = useState<BookingState>({
    ...initialState,
    trip: initialTrip ?? "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mnjbwpzn"; // بدّليها بالـ endpoint ديالك
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const selectedTrip = useMemo(
    () => trips.find((trip) => trip.slug === values.trip),
    [trips, values.trip],
  );

  function validate() {
    const nextErrors: Record<string, string> = {};
    if (!values.name.trim()) nextErrors.name = "Nom requis";
    if (!values.email.includes("@")) nextErrors.email = "Email invalide";
    if (values.phone.trim().length < 8) nextErrors.phone = "Telephone invalide";
    if (!values.trip) nextErrors.trip = "Trip requis";
    if (!values.terms) nextErrors.terms = "Vous devez accepter les conditions";
    return nextErrors;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  setSubmitError(null);

  const nextErrors = validate();
  setErrors(nextErrors);
  if (Object.keys(nextErrors).length > 0) return;

  setIsSubmitting(true);

  try {
    const payload = {
      name: values.name,
      email: values.email,
      phone: values.phone,
      seats: values.seats,
      trip: values.trip,
      tripTitle: selectedTrip?.title ?? values.trip,
      preferences: values.preferences || "Aucune preference specifique",
    };

    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) throw new Error("Formspree error");

    const params = new URLSearchParams({
      name: values.name,
      email: values.email,
      phone: values.phone,
      seats: values.seats,
      trip: values.trip,
      preferences: values.preferences || "Aucune preference specifique",
    });

    router.push(`/booking/thanks?${params.toString()}`);
  } catch {
    setSubmitError("Impossible d’envoyer la réservation. Réessaie dans quelques instants.");
  } finally {
    setIsSubmitting(false);
  }
}

  return (
    <form onSubmit={onSubmit} className="space-y-5 rounded-2xl border border-offmap-sand/30 bg-white p-6 shadow-soft">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-offmap-green">
            Nom complet
          </label>
          <input
            id="name"
            value={values.name}
            onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))}
            className="w-full rounded-xl border border-offmap-sand/40 px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offmap-orange"
          />
          {errors.name ? <p className="mt-1 text-xs text-red-600">{errors.name}</p> : null}
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-offmap-green">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={values.email}
            onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))}
            className="w-full rounded-xl border border-offmap-sand/40 px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offmap-orange"
          />
          {errors.email ? <p className="mt-1 text-xs text-red-600">{errors.email}</p> : null}
        </div>
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium text-offmap-green">
            Telephone
          </label>
          <input
            id="phone"
            value={values.phone}
            onChange={(event) => setValues((prev) => ({ ...prev, phone: event.target.value }))}
            className="w-full rounded-xl border border-offmap-sand/40 px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offmap-orange"
          />
          {errors.phone ? <p className="mt-1 text-xs text-red-600">{errors.phone}</p> : null}
        </div>
        <div>
          <label htmlFor="seats" className="mb-1 block text-sm font-medium text-offmap-green">
            Nombre de places
          </label>
          <input
            id="seats"
            type="number"
            min={1}
            max={8}
            value={values.seats}
            onChange={(event) => setValues((prev) => ({ ...prev, seats: event.target.value }))}
            className="w-full rounded-xl border border-offmap-sand/40 px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offmap-orange"
          />
        </div>
      </div>

      <div>
        <label htmlFor="trip" className="mb-1 block text-sm font-medium text-offmap-green">
          Trip choisi
        </label>
        <select
          id="trip"
          value={values.trip}
          onChange={(event) => setValues((prev) => ({ ...prev, trip: event.target.value }))}
          className="w-full rounded-xl border border-offmap-sand/40 px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offmap-orange"
        >
          <option value="">Selectionner un trip</option>
          {trips.map((trip) => (
            <option key={trip.slug} value={trip.slug}>
              {trip.title}
            </option>
          ))}
        </select>
        {errors.trip ? <p className="mt-1 text-xs text-red-600">{errors.trip}</p> : null}
      </div>

      <div>
        <label htmlFor="preferences" className="mb-1 block text-sm font-medium text-offmap-green">
          Preferences ou besoins specifiques
        </label>
        <textarea
          id="preferences"
          rows={4}
          value={values.preferences}
          onChange={(event) => setValues((prev) => ({ ...prev, preferences: event.target.value }))}
          className="w-full rounded-xl border border-offmap-sand/40 px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offmap-orange"
        />
      </div>

      <div className="rounded-xl bg-offmap-sand/15 p-4 text-sm text-offmap-green">
        Paiement a venir: ce MVP confirme la demande puis un membre OffMap vous contacte pour finaliser.
        {selectedTrip ? <p className="mt-2 font-semibold">Trip selectionne: {selectedTrip.title}</p> : null}
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm text-offmap-gray">
          <input
            type="checkbox"
            checked={values.terms}
            onChange={(event) => setValues((prev) => ({ ...prev, terms: event.target.checked }))}
            className="mt-1 h-4 w-4 rounded border-offmap-sand/50 text-offmap-orange focus:ring-offmap-orange"
          />
          <span>J accepte les conditions OffMap Morocco et les regles de securite groupe.</span>
        </label>
        {errors.terms ? <p className="mt-1 text-xs text-red-600">{errors.terms}</p> : null}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-full bg-offmap-orange px-6 py-3 font-semibold text-white transition hover:brightness-95 disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offmap-orange focus-visible:ring-offset-2"
      >
        {isSubmitting ? "Envoi en cours..." : "Envoyer la reservation"}
      </button>
    </form>
  );
}
