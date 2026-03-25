"use client";

import {
  useState,
  useRef,
  useCallback,
  useEffect,
  useLayoutEffect,
} from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import type { Project } from "@/data/projects";

type Props = {
  project: Project;
  children: React.ReactNode;
};

export default function ProjectLink({ project, children }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const hoverMq = window.matchMedia("(hover: none)");
    const widthMq = window.matchMedia("(max-width: 640px)");
    const update = () => setIsMobile(hoverMq.matches || widthMq.matches);
    update();
    hoverMq.addEventListener("change", update);
    widthMq.addEventListener("change", update);
    return () => {
      hoverMq.removeEventListener("change", update);
      widthMq.removeEventListener("change", update);
    };
  }, []);

  const open = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  }, []);

  const closeWithDelay = useCallback(() => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 150);
  }, []);

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      if (isMobile) {
        // On mobile, first tap opens the sheet, don't navigate
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      // On desktop, the link navigates normally (hover shows tooltip)
    },
    [isMobile],
  );

  // close on escape
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen]);

  // lock body scroll when mobile sheet is open
  useEffect(() => {
    if (!isMobile || !isOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobile, isOpen]);

  return (
    <>
      <a
        ref={linkRef}
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="project-link relative inline cursor-pointer group/link"
        onMouseEnter={isMobile ? undefined : open}
        onMouseLeave={isMobile ? undefined : closeWithDelay}
        onFocus={isMobile ? undefined : open}
        onBlur={isMobile ? undefined : closeWithDelay}
        onClick={handleClick}
      >
        <span className="project-link-text text-terracotta font-medium transition-colors duration-200 group-hover/link:text-terracotta-hover">
          {children}
        </span>
      </a>

      {/* Desktop tooltip — portaled to body to avoid p > div nesting */}
      {!isMobile && (
        <DesktopTooltipPortal
          project={project}
          isOpen={isOpen}
          anchorRef={linkRef}
          tooltipRef={tooltipRef}
          onMouseEnter={open}
          onMouseLeave={closeWithDelay}
        />
      )}

      {/* Mobile bottom sheet */}
      {isMobile && (
        <MobileSheet
          project={project}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

function MobileSheet({
  project,
  isOpen,
  onClose,
}: {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-ink/20"
            onClick={onClose}
          />

          {/* Sheet */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 30,
              mass: 0.8,
            }}
            className="fixed bottom-2 left-2 right-2 z-[101] max-h-[85vh] overflow-y-auto"
          >
            <div className="bg-card rounded-t-3xl rounded-b-xl border-t border-x border-card-border p-5 pb-8">
              <SheetContent project={project} />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body,
  );
}

function DesktopTooltipPortal({
  project,
  isOpen,
  anchorRef,
  tooltipRef,
  onMouseEnter,
  onMouseLeave,
}: {
  project: Project;
  isOpen: boolean;
  anchorRef: React.RefObject<HTMLAnchorElement | null>;
  tooltipRef: React.RefObject<HTMLDivElement | null>;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <DesktopTooltip
          project={project}
          anchorRef={anchorRef}
          tooltipRef={tooltipRef}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      )}
    </AnimatePresence>,
    document.body,
  );
}

function DesktopTooltip({
  project,
  anchorRef,
  tooltipRef,
  onMouseEnter,
  onMouseLeave,
}: {
  project: Project;
  anchorRef: React.RefObject<HTMLAnchorElement | null>;
  tooltipRef: React.RefObject<HTMLDivElement | null>;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const [measured, setMeasured] = useState(false);

  useLayoutEffect(() => {
    if (!anchorRef.current || !tooltipRef.current) return;

    const anchor = anchorRef.current.getBoundingClientRect();
    const tooltip = tooltipRef.current.getBoundingClientRect();
    const gap = 16;
    const pad = 20;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const tw = tooltip.width;
    const th = tooltip.height;

    let top: number;
    let left: number;

    const fitsRight = anchor.right + gap + tw + pad < vw;
    const fitsLeft = anchor.left - gap - tw - pad > 0;

    if (fitsRight) {
      left = anchor.right + gap;
      top = anchor.top + anchor.height / 2 - th / 2;
    } else if (fitsLeft) {
      left = anchor.left - gap - tw;
      top = anchor.top + anchor.height / 2 - th / 2;
    } else {
      // Neither side fits — place below or above, centered on the link
      left = Math.max(
        pad,
        Math.min(anchor.left + anchor.width / 2 - tw / 2, vw - tw - pad),
      );
      const fitsBelow = anchor.bottom + gap + th + pad < vh;
      if (fitsBelow) {
        top = anchor.bottom + gap;
      } else {
        top = anchor.top - gap - th;
      }
    }

    // Clamp vertically
    top = Math.max(pad, Math.min(top, vh - th - pad));

    setPos({ top, left });
    setMeasured(true);
  }, [anchorRef, tooltipRef]);

  return (
    <motion.div
      ref={tooltipRef}
      initial={{ opacity: 0, scale: 0.9, pointerEvents: "none" as const }}
      animate={measured ? { opacity: 1, scale: 1, pointerEvents: "auto" as const } : { opacity: 0, scale: 0.9, pointerEvents: "none" as const }}
      exit={{ opacity: 0, scale: 0.95, pointerEvents: "none" as const }}
      transition={
        measured
          ? { type: "spring", stiffness: 500, damping: 17, mass: 0.7 }
          : { duration: 0 }
      }
      className="fixed z-50 w-[320px]"
      style={{ top: pos.top, left: pos.left }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <TooltipCard project={project} />
    </motion.div>
  );
}

function TooltipCard({ project }: { project: Project }) {
  return (
    <div
      className="rounded-2xl bg-card border border-card-border p-4"
      style={{
        boxShadow:
          "0 1px 2px oklch(20% 0.01 50 / 0.04), 0 4px 16px oklch(20% 0.01 50 / 0.05), 0 12px 40px -8px oklch(20% 0.01 50 / 0.06)",
      }}
    >
      <ProjectImage project={project} />

      <p className="font-display text-[1.0625rem] font-semibold text-ink leading-snug">
        {project.name}
      </p>
      <p className="mt-1.5 text-ink-light text-[0.8125rem] leading-[1.6]">
        {project.description}
      </p>

      <TechTags tech={project.tech} />

      {project.url && (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group/visit inline-flex items-center gap-1 mt-3.5 text-[0.8125rem] font-medium text-terracotta hover:text-terracotta-hover transition-colors duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          Visit
          <span className="inline-block transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/visit:translate-x-0.5">
            →
          </span>
        </a>
      )}
    </div>
  );
}

function SheetContent({ project }: { project: Project }) {
  return (
    <>
      <ProjectImage project={project} />

      <p className="font-display text-lg font-semibold text-ink leading-snug">
        {project.name}
      </p>
      <p className="mt-1.5 text-ink-light text-[0.875rem] leading-[1.6]">
        {project.description}
      </p>

      <TechTags tech={project.tech} />

      {project.url && (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 mt-4 text-[0.875rem] font-medium text-terracotta"
        >
          Visit
          <span>→</span>
        </a>
      )}
    </>
  );
}

function ProjectImage({ project }: { project: Project }) {
  return (
    <div className="rounded-lg bg-cream-mid aspect-[16/10] mb-3.5 flex items-center justify-center overflow-hidden">
      {project.image ? (
        <Image
          src={project.image}
          alt={project.imageAlt ?? project.name}
          width={576}
          height={360}
          className="w-full h-full object-cover"
        />
      ) : (
        <span className="text-ink-ghost text-[0.8125rem] select-none">
          {project.imageAlt ?? "Screenshot"}
        </span>
      )}
    </div>
  );
}

function TechTags({ tech }: { tech: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5 mt-3">
      {tech.map((t) => (
        <span
          key={t}
          className="inline-block text-[0.6875rem] font-medium tracking-wide px-2 py-[3px] rounded-md bg-terracotta-faint text-sienna"
        >
          {t}
        </span>
      ))}
    </div>
  );
}
