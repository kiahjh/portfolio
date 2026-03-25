import Hero from "@/components/Hero";
import Narrative from "@/components/Narrative";
import Contact from "@/components/Contact";
import CraftedDetail from "@/components/CraftedDetail";

export default function Home() {
  return (
    <main className="relative flex-1">
      {/* Blob — absolutely positioned, top-right, scrolls with the page.
          Extends beyond the viewport on small screens, so the container
          must not clip overflow. */}
      <div
        className="absolute top-0 left-0 right-0 h-[100vh] pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute top-0 right-[-15vw] sm:right-0 w-[120vw] sm:w-[85vw] h-full">
          <CraftedDetail />
        </div>
      </div>

      {/* Narrow left-aligned column */}
      <div className="relative mx-6 sm:ml-[12vw] sm:mr-12 lg:ml-[17vw] max-w-[540px]">
        <Hero />
        <Narrative />
        <Contact />
      </div>
    </main>
  );
}
