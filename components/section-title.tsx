type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  center = false,
}: SectionTitleProps) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-offmap-orange">{eyebrow}</p>
      ) : null}
      <h2 className="mt-2 font-heading text-3xl font-bold text-offmap-green sm:text-4xl">{title}</h2>
      {description ? <p className="mt-3 text-base text-offmap-gray">{description}</p> : null}
    </div>
  );
}
