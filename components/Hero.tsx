import Image from "next/image";
import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section className="relative pt-[14vh] sm:pt-[18vh] pb-20 sm:pb-28">
      <div className="relative">
        <FadeIn>
          <div className="bg-white/30 shadow-lg shadow-cream-dark/50 border border-white w-38 h-38 flex justify-center items-center mb-10 rounded-full">
            <div className="w-35 h-35 rounded-full bg-cream-mid overflow-hidden">
              <Image
                src="/images/me.png"
                alt="Miciah Henderson"
                width={144}
                height={144}
                className="object-cover w-full h-full"
                priority
              />
            </div>
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
