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

  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mnjbwpzn";

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
    if (values.phone.trim().length < 8) nextErrors.phone = "Téléphone invalide";
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
        preferences:
          values.preferences || "Aucune préférence spécifique",
      };

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Formspree error");

      const params = new URLSearchParams({
        name: values.name,
        email: values.email,
        phone: values.phone,
        seats: values.seats,
        trip: values.trip,
        preferences:
          values.preferences || "Aucune préférence spécifique",
      });

      router.push(`/booking/thanks?${params.toString()}`);
    } catch {
      setSubmitError(
        "Impossible d’envoyer la réservation. Réessaie dans quelques instants.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-5 rounded-2xl border border-offmap-sand/30 bg-white p-6 shadow-soft"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-offmap-green">
            Nom complet
          </label>
          <input
            value={values.name}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, name: e.target.value }))
            }
            className="w-full rounded-xl border border-offmap-sand/40 px-3 py-2"
          />
          {errors.name && (
            <p className="text-xs text-red-600">{errors.name}</p>
          )}
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-offmap-green">
            Email
          </label>
          <input
            type="email"
            value={values.email}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, email: e.target.value }))
            }
            className="w-full rounded-xl border border-offmap-sand/40 px-3 py-2"
          />
          {errors.email && (
            <p className="text-xs text-red-600">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-offmap-green">
            Téléphone
          </label>
          <input
            value={values.phone}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, phone: e.target.value }))
            }
            className="w-full rounded-xl border border-offmap-sand/40 px-3 py-2"
          />
          {errors.phone && (
            <p className="text-xs text-red-600">{errors.phone}</p>
          )}
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-offmap-green">
            Nombre de places
          </label>
          <input
            type="number"
            min={1}
            max={8}
            value={values.seats}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, seats: e.target.value }))
            }
            className="w-full rounded-xl border border-offmap-sand/40 px-3 py-2"
          />
        </div>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-offmap-green">
          Trip choisi
        </label>
        <select
          value={values.trip}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, trip: e.target.value }))
          }
          className="w-full rounded-xl border border-offmap-sand/40 px-3 py-2"
        >
          <option value="">Sélectionner un trip</option>
          {trips.map((trip) => (
            <option key={trip.slug} value={trip.slug}>
              {trip.title}
            </option>
          ))}
        </select>
        {errors.trip && (
          <p className="text-xs text-red-600">{errors.trip}</p>
        )}
      </div>

      <textarea
        rows={4}
        value={values.preferences}
        onChange={(e) =>
          setValues((prev) => ({ ...prev, preferences: e.target.value }))
        }
        className="w-full rounded-xl border border-offmap-sand/40 px-3 py-2"
      />

      <label className="flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          checked={values.terms}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, terms: e.target.checked }))
          }
        />
        J’accepte les conditions
      </label>
      {errors.terms && (
        <p className="text-xs text-red-600">{errors.terms}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-full bg-offmap-orange px-6 py-3 font-semibold text-white disabled:opacity-60"
      >
        {isSubmitting ? "Envoi en cours..." : "Envoyer la réservation"}
      </button>

      {submitError && (
        <p className="text-sm text-red-600">{submitError}</p>
      )}
    </form>
  );
}