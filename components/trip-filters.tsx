"use client";

import { useMemo, useState } from "react";
import { tripLevels, tripThemes } from "@/data/trips";
import { Trip } from "@/lib/types";
import { TripCard } from "@/components/trip-card";

type TripFiltersProps = {
  trips: Trip[];
};

function monthKey(date: string) {
  return date.slice(0, 7);
}

function monthLabel(isoMonth: string) {
  const [year, month] = isoMonth.split("-");
  const dt = new Date(Number(year), Number(month) - 1, 1);
  return new Intl.DateTimeFormat("fr-FR", { month: "long", year: "numeric" }).format(dt);
}

export function TripFilters({ trips }: TripFiltersProps) {
  const [theme, setTheme] = useState<string>("all");
  const [level, setLevel] = useState<string>("all");
  const [date, setDate] = useState<string>("all");

  const months = useMemo(() => {
    const unique = new Set(trips.map((trip) => monthKey(trip.startDate)));
    return [...unique].sort();
  }, [trips]);

  const filteredTrips = useMemo(() => {
    return trips.filter((trip) => {
      const themeOk = theme === "all" || trip.theme === theme;
      const levelOk = level === "all" || trip.level === level;
      const dateOk = date === "all" || monthKey(trip.startDate) === date;
      return themeOk && levelOk && dateOk;
    });
  }, [date, level, theme, trips]);

  return (
    <div className="space-y-6">
      <form className="grid gap-4 rounded-2xl border border-offmap-sand/30 bg-white p-4 sm:grid-cols-3">
        <div>
          <label htmlFor="theme" className="mb-1 block text-sm font-medium text-offmap-green">
            Theme
          </label>
          <select
            id="theme"
            value={theme}
            onChange={(event) => setTheme(event.target.value)}
            className="w-full rounded-xl border border-offmap-sand/40 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offmap-orange"
          >
            <option value="all">Tous</option>
            {tripThemes.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="level" className="mb-1 block text-sm font-medium text-offmap-green">
            Niveau
          </label>
          <select
            id="level"
            value={level}
            onChange={(event) => setLevel(event.target.value)}
            className="w-full rounded-xl border border-offmap-sand/40 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offmap-orange"
          >
            <option value="all">Tous</option>
            {tripLevels.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="date" className="mb-1 block text-sm font-medium text-offmap-green">
            Date
          </label>
          <select
            id="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
            className="w-full rounded-xl border border-offmap-sand/40 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offmap-orange"
          >
            <option value="all">Toutes</option>
            {months.map((month) => (
              <option key={month} value={month}>
                {monthLabel(month)}
              </option>
            ))}
          </select>
        </div>
      </form>
      {filteredTrips.length ? (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredTrips.map((trip) => (
            <TripCard key={trip.slug} trip={trip} />
          ))}
        </div>
      ) : (
        <p className="rounded-2xl border border-offmap-sand/30 bg-white p-6 text-offmap-gray">
          Aucun trip ne correspond a ces filtres.
        </p>
      )}
    </div>
  );
}
