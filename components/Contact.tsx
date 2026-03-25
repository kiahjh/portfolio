import FadeIn from "./FadeIn";

export default function Contact() {
  return (
    <FadeIn as="footer" className="pt-20 sm:pt-28 pb-20 sm:pb-32">
      <div
        className="w-10 h-px bg-sand-dark mb-14"
        aria-hidden="true"
      />

      <p className="text-fluid-lg text-ink-light leading-[1.7] mb-2">
        If any of this resonates, I&apos;d love to hear from you! Thanks for
        making it this far.
      </p>

      <p className="text-fluid-lg text-ink-light leading-[1.7] mb-10">
        - Kiah 👋
      </p>

      <div className="flex flex-col gap-4">
        <a
          href="mailto:me@kiahjh.com"
          className="group/email text-fluid-base font-medium text-terracotta hover:text-terracotta-hover transition-colors duration-200 w-fit"
        >
          {/* TODO: Replace with real email */}
          <span className="email-link-text">
            me@kiahjh.com
          </span>
        </a>

        <div className="flex gap-6 text-fluid-sm text-ink-faint">
          <a
            href="https://github.com/kiahjh"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href="https://x.com/kiahjh"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink transition-colors duration-200"
          >
            X
          </a>
        </div>
      </div>
    </FadeIn>
  );
}
