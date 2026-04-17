import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-interior.jpg";
import bathroomImg from "@/assets/work-bathroom.jpg";
import kitchenImg from "@/assets/work-kitchen.jpg";
import livingImg from "@/assets/work-living.jpg";
import loftImg from "@/assets/work-loft.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "S A Decorating & Property Maintenance — Manchester | 5★ Rated" },
      {
        name: "description",
        content:
          "Manchester's trusted decorator & property maintenance specialist. 14+ years experience. Painting, kitchens, bathrooms, flooring, lofts. 163 five-star reviews. Get a free quote today.",
      },
    ],
  }),
});

const services = [
  { title: "Painting & Decorating", desc: "Flawless finishes, inside and out." },
  { title: "Kitchen Fitting", desc: "Full installs, from rip-out to reveal." },
  { title: "Bathroom Fitting", desc: "Tiling, plumbing, the lot." },
  { title: "Flooring", desc: "Laminate, vinyl, lino, hardwood." },
  { title: "Loft Conversions", desc: "Storage spaces, fully insulated." },
  { title: "Plumbing & Electrics", desc: "Reliable repairs and upgrades." },
  { title: "Tiling", desc: "Walls, floors, splashbacks." },
  { title: "Joinery", desc: "Custom carpentry, built to last." },
];

const portfolio = [
  { src: bathroomImg, label: "Bathroom Fit" },
  { src: kitchenImg, label: "Kitchen Install" },
  { src: livingImg, label: "Decorating" },
  { src: loftImg, label: "Loft Conversion" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-ink font-sans">
      {/* NAV */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-black">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-lg sm:text-xl tracking-tight uppercase">
            S A Decorating
          </a>
          <a
            href="#contact"
            className="font-display uppercase text-sm sm:text-base bg-ink text-background px-5 py-2.5 hover:bg-brand transition-colors"
          >
            Get a Quote
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="border-b border-black">
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-20 sm:pt-24 sm:pb-28 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 border-2 border-ink px-3 py-1 mb-8 font-display text-xs uppercase tracking-wider">
              <span className="text-brand">★★★★★</span>
              <span>163 Reviews · Manchester</span>
            </div>
            <h1 className="font-display uppercase leading-[0.9] tracking-tight text-[14vw] sm:text-[10vw] lg:text-[7.5rem] xl:text-[9rem]">
              Your home.
              <br />
              <span className="text-brand">Done right.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg sm:text-xl font-medium text-ink/80">
              14+ years renovating Manchester homes. Painting, kitchens, bathrooms, flooring, lofts
              — one trusted tradesman, top-to-bottom.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="font-display uppercase text-base sm:text-lg bg-ink text-background px-8 py-5 text-center hover:bg-brand transition-colors"
              >
                Book a Free Quote →
              </a>
              <a
                href="tel:+447000000000"
                className="font-display uppercase text-base sm:text-lg border-2 border-ink px-8 py-5 text-center hover:bg-ink hover:text-background transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <img
              src={heroImg}
              alt="Renovated bright modern home interior"
              width={1600}
              height={1200}
              className="w-full aspect-[4/3] object-cover border-2 border-ink"
            />
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-b border-black bg-ink text-background">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            ["14+", "Years Experience"],
            ["5.0", "Average Rating"],
            ["163", "Reviews"],
            ["✓", "Verified by MyBuilder"],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="font-display text-3xl sm:text-4xl text-brand">{n}</div>
              <div className="font-display uppercase text-xs tracking-wider mt-1">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-b border-black">
        <div className="max-w-7xl mx-auto px-6 py-20 sm:py-28">
          <h2 className="font-display uppercase text-5xl sm:text-7xl leading-none tracking-tight mb-4">
            Everything,
            <br />
            <span className="text-brand">under one roof.</span>
          </h2>
          <p className="text-lg text-ink/70 mb-14 max-w-2xl">
            One tradesman. One point of contact. No subcontractors, no excuses.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink border-2 border-ink">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="bg-background p-7 hover:bg-brand hover:text-brand-foreground transition-colors group"
              >
                <div className="font-display text-3xl text-brand group-hover:text-brand-foreground mb-3">
                  0{i + 1}
                </div>
                <h3 className="font-display uppercase text-lg mb-2">{s.title}</h3>
                <p className="text-sm font-medium opacity-80">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="work" className="border-b border-black bg-ink text-background">
        <div className="max-w-7xl mx-auto px-6 py-20 sm:py-28">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
            <h2 className="font-display uppercase text-5xl sm:text-7xl leading-none tracking-tight">
              Recent Work
            </h2>
            <p className="text-lg max-w-sm opacity-80">
              Real jobs. Real finishes. Built by hand in Manchester.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {portfolio.map((p) => (
              <figure key={p.label} className="group">
                <div className="overflow-hidden border-2 border-background">
                  <img
                    src={p.src}
                    alt={p.label}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <figcaption className="font-display uppercase text-sm tracking-wider mt-3 text-brand">
                  {p.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEW QUOTE */}
      <section className="border-b border-black">
        <div className="max-w-5xl mx-auto px-6 py-20 sm:py-28 text-center">
          <div className="font-display text-3xl text-brand mb-6">★★★★★</div>
          <blockquote className="font-display uppercase text-3xl sm:text-5xl leading-tight tracking-tight">
            “14 years experience. Mainly works alone. Quality you can trust.”
          </blockquote>
          <p className="mt-8 font-display uppercase text-sm tracking-widest text-ink/60">
            163 verified reviews · 5.0 average
          </p>
        </div>
      </section>

      {/* CONTACT / CTA */}
      <section id="contact" className="bg-brand text-brand-foreground">
        <div className="max-w-7xl mx-auto px-6 py-20 sm:py-28 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-display uppercase text-6xl sm:text-8xl leading-[0.9] tracking-tight">
              Let's get
              <br />
              started.
            </h2>
            <p className="mt-6 text-lg max-w-md font-medium">
              Tell me about your project. I'll come take a look and give you an honest, no-pressure
              quote — free of charge.
            </p>
            <div className="mt-10 space-y-3 font-display uppercase text-sm tracking-wider">
              <div>📍 Manchester & surrounding areas</div>
              <div>📞 Call or message anytime</div>
              <div>✓ Workmanship warranty offered</div>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks! I'll get back to you within 24 hours.");
            }}
            className="bg-background text-ink p-8 sm:p-10 border-2 border-ink space-y-5"
          >
            <h3 className="font-display uppercase text-2xl">Request a free quote</h3>
            <div>
              <label className="font-display uppercase text-xs tracking-wider block mb-2">
                Name
              </label>
              <input
                required
                className="w-full border-2 border-ink px-4 py-3 font-medium focus:outline-none focus:bg-brand/10"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="font-display uppercase text-xs tracking-wider block mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  required
                  className="w-full border-2 border-ink px-4 py-3 font-medium focus:outline-none focus:bg-brand/10"
                />
              </div>
              <div>
                <label className="font-display uppercase text-xs tracking-wider block mb-2">
                  Postcode
                </label>
                <input
                  required
                  className="w-full border-2 border-ink px-4 py-3 font-medium focus:outline-none focus:bg-brand/10"
                />
              </div>
            </div>
            <div>
              <label className="font-display uppercase text-xs tracking-wider block mb-2">
                Tell me about the job
              </label>
              <textarea
                rows={4}
                required
                className="w-full border-2 border-ink px-4 py-3 font-medium focus:outline-none focus:bg-brand/10 resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full font-display uppercase text-lg bg-ink text-background py-5 hover:bg-brand transition-colors"
            >
              Send Request →
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink text-background">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-display uppercase text-sm tracking-wider">
            S A Decorating & Property Maintenance
          </div>
          <div className="text-xs opacity-70">
            © {new Date().getFullYear()} · Manchester · Verified by MyBuilder
          </div>
        </div>
      </footer>
    </div>
  );
}
