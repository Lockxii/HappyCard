const logos = [
  "Maison Moka",
  "Atelier Nord",
  "Boulangerie 38",
  "Club Forma",
  "Maison Sora",
  "Nova Retail",
];

export function LogoCloud() {
  return (
    <section className="px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.28em] text-[#8d735b]">
          Utilisé par des commerçants ambitieux
        </p>
        <div className="mt-8 grid grid-cols-2 gap-4 text-center text-sm font-semibold text-[#8d735b] sm:grid-cols-3 lg:grid-cols-6">
          {logos.map((logo) => (
            <div
              key={logo}
              className="rounded-full border border-[#2b1e14] bg-[#111111]/94 px-4 py-4 backdrop-blur"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
