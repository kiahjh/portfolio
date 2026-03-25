import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section className="relative pt-[14vh] sm:pt-[18vh] pb-20 sm:pb-28">
      <div className="relative">
        <FadeIn>
          {/* Photo placeholder */}
          <div className="w-[4.5rem] h-[4.5rem] rounded-full bg-cream-mid ring-1 ring-sand-dark/40 mb-10 flex items-center justify-center overflow-hidden">
            {/* TODO: Replace with <Image src="/images/kiah.jpg" ... /> */}
            <svg
              className="w-7 h-7 text-ink-ghost"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0"
              />
            </svg>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <h1
            className="font-display text-fluid-hero font-semibold text-ink"
            style={{ marginLeft: "-0.04em" }}
          >
            Miciah
            <br />
            Henderson
          </h1>
        </FadeIn>

        <FadeIn delay={0.16}>
          <p className="mt-5 text-ink-faint text-fluid-sm tracking-[0.08em] font-sans">
            @kiahjh
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
