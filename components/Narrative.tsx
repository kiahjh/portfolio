import FadeIn from "./FadeIn";
import ProjectLink from "./ProjectLink";
import { projects } from "@/data/projects";

export default function Narrative() {
  return (
    <div>
      <FadeIn>
        <p className="text-fluid-lg text-ink leading-[1.7]">
          Hi! I&apos;m Kiah. I&apos;m a software dev living in Holland,
          Michigan. I discovered programming at thirteen, and thought it was the
          neatest thing ever. That never changed, and I&apos;ve stuck with it
          since.
        </p>
      </FadeIn>

      <FadeIn className="mt-6">
        <p className="text-fluid-lg text-ink leading-[1.7]">
          I graduated from the University of Akron with a B.S. in Applied
          Mathematics and a minor in Physics when I was eighteen. A year before
          that I started working at{" "}
          <ProjectLink project={projects.gertrude}>Gertrude</ProjectLink>, a
          small company building powerful parental controls for Apple platforms.
          I built all the frontends across the web, iOS, and macOS (React,
          SwiftUI, and native webviews, respectively), dipped my toes in some
          backend work, and learned a lot about what it means to deliver a
          polished, performant, and intuitive experience to real users.
        </p>
      </FadeIn>

      <FadeIn className="mt-6">
        <p className="text-fluid-lg text-ink leading-[1.7]">
          I left Gertrude in the summer of 2025 after working there 3 years to
          spend some time branching out, building my own products, and trying
          new and different technology. I built{" "}
          <ProjectLink project={projects.resolve}>Resolve</ProjectLink>, a
          native iOS app written in Rust + SwiftUI on the client with a Rust
          (Axum) backend for tracking and sticking with resolutions. I&apos;m
          just about ready to ship{" "}
          <ProjectLink project={projects.replist}>Replist</ProjectLink>, another
          iOS app for musicians written with pure native SwiftUI.
        </p>
      </FadeIn>

      <FadeIn className="mt-6">
        <p className="text-fluid-lg text-ink leading-[1.7]">
          In my spare time I&apos;m always learning and tinkering with new
          things. I&apos;m fascinated by every layer of tech stacks, from caring
          deeply about every pixel and crafting delightful and intuitive UIs to
          how optimized compilers are written, and have dipped my toes in a
          whole lot of different areas. Last year I spent a bunch of time
          streaming on YouTube, writing my own statically-typed systems
          programming language called{" "}
          <ProjectLink project={projects.lovely}>Lovely</ProjectLink>, that
          compiled straight to x64 NASM. No vibes, no llvm, just pure authentic
          grass-fed free-range artisinal Rust. The VODs are a pretty good window
          into how I think and work on my own, with the caveat that this was an
          area in which I was entirely learning as I went and had no prior
          experience in.
        </p>
      </FadeIn>

      <FadeIn className="mt-6">
        <p className="text-fluid-lg text-ink leading-[1.7]">
          I&apos;ve toyed with a whole bunch of other learning projects, as the
          genuinely curious tend to. I wrote{" "}
          <ProjectLink project={projects["type-codegen"]}>
            a custom type definition language
          </ProjectLink>{" "}
          for an app I was working on at one point, a{" "}
          <ProjectLink project={projects["terrain-gen"]}>
            3D terrain generation algorithm in OCaml
          </ProjectLink>
          , an{" "}
          <ProjectLink project={projects["next-bg-image"]}>
            open source optimized background image component for Next.js
          </ProjectLink>{" "}
          with a friend back in the day that we ended using in production at
          Gertrude, a{" "}
          <ProjectLink project={projects.rejoice}>
            custom web framework written in Rust
          </ProjectLink>{" "}
          built on Axum that I still chip away at on occasion, and a whole lot
          more.
        </p>
      </FadeIn>

      <FadeIn className="mt-12">
        <p className="text-fluid-lg text-ink leading-[1.7]">
          When I&apos;m not programming, I play a whole lot of music (piano and
          banjo, mostly improvisation and composition focused), enjoy spending
          meaningful time with friends (relationships are immensely important to
          me), and spend lots of time outside (I&apos;ve run a couple trail
          marathons, backpacked 84 miles in four nights, led canoe trips at
          summer camps, helped lead group rappelling trips down 120-foot cliffs,
          stayed up all night in a rowboat catching catfish, etc.).
        </p>
      </FadeIn>

      <FadeIn className="mt-6">
        <p className="text-fluid-lg text-ink leading-[1.7]">
          I value integrity, humility, and craft a whole lot, and am really
          interested in working at a company where those three things are
          promoted and sought after in every decision. Beauty is in the details,
          and I thoroughly enjoy sweating those details and making sure software
          is truly delightful and elegantly constructed before shipping to the
          end user.
        </p>
      </FadeIn>
    </div>
  );
}
