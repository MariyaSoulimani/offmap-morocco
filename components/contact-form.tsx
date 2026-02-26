"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-offmap-sand/30 bg-white p-6 shadow-soft">
      <div>
        <label htmlFor="contact-name" className="mb-1 block text-sm font-medium text-offmap-green">
          Nom
        </label>
        <input
          id="contact-name"
          required
          className="w-full rounded-xl border border-offmap-sand/40 px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offmap-orange"
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="mb-1 block text-sm font-medium text-offmap-green">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          required
          className="w-full rounded-xl border border-offmap-sand/40 px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offmap-orange"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="mb-1 block text-sm font-medium text-offmap-green">
          Message
        </label>
        <textarea
          id="contact-message"
          rows={5}
          required
          className="w-full rounded-xl border border-offmap-sand/40 px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offmap-orange"
        />
      </div>
      <button
        type="submit"
        className="rounded-full bg-offmap-orange px-6 py-3 font-semibold text-white transition hover:brightness-95"
      >
        Envoyer
      </button>
      {sent ? (
        <p className="rounded-xl bg-offmap-sand/15 p-3 text-sm text-offmap-green">
          Message envoye. Nous revenons vers vous rapidement.
        </p>
      ) : null}
    </form>
  );
}
