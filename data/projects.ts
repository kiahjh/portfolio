export type Project = {
  slug: string;
  name: string;
  description: string;
  tech: string[];
  url?: string;
  image?: string;
  imageAlt?: string;
  featured: boolean;
};

export const projects: Record<string, Project> = {
  gertrude: {
    slug: "gertrude",
    name: "Gertrude",
    description:
      "Parental controls for Apple platforms. Lead frontend engineer for 3 years on a team of 2–3, owning all frontends — web, macOS, and iOS.",
    tech: ["React", "SwiftUI", "TypeScript"],
    url: "https://gertrude.app",
    image: "/images/gertrude.png",
    imageAlt: "Gertrude app interface",
    featured: true,
  },
  resolve: {
    slug: "resolve",
    name: "Resolve",
    description:
      "A published native iOS app. SwiftUI and Rust on the client, pure Rust (Axum) on the backend.",
    tech: ["SwiftUI", "Rust", "Axum"],
    url: "https://resolveapp.net",
    image: "/images/resolve.png",
    imageAlt: "Resolve app screenshot",
    featured: true,
  },
  replist: {
    slug: "replist",
    name: "Replist",
    description:
      "A native iOS app nearing release. SwiftUI frontend with a Supabase backend.",
    tech: ["SwiftUI", "Supabase"],
    url: "https://replistapp.com",
    image: "/images/replist.png",
    imageAlt: "Replist app screenshot",
    featured: true,
  },
  rejoice: {
    slug: "rejoice",
    name: "Rejoice",
    description:
      "A simple and delightful Rust web framework. File-based routing, type-safe templates, and Solid.js islands.",
    tech: ["Rust", "Axum", "SQLite", "Maud", "SQLx", "Solid.js"],
    url: "https://rejoice.kiahjh.com",
    image: "/images/rejoice.png",
    imageAlt: "Rejoice framework code snippet",
    featured: true,
  },
  lovely: {
    slug: "lovely",
    name: "Lovely",
    description:
      "A statically-typed systems programming language that compiles straight to x64 NASM. Built from scratch on YouTube livestreams.",
    tech: ["Rust", "x64 Assembly"],
    url: "https://www.youtube.com/playlist?list=PLDeRIkiONWGt4hqLUVu41-VEHZlXuzt8Z",
    image: "/images/lovely.png",
    imageAlt: "Lovely language stream thumbnail",
    featured: false,
  },
  "next-bg-image": {
    slug: "next-bg-image",
    name: "next-bg-image",
    description:
      "Open source Next.js utility that applies Next's image optimizations to CSS background images. Used in production at Gertrude.",
    tech: ["Next.js", "TypeScript", "React"],
    url: "https://github.com/kiahjh/next-bg-image",
    image: "/images/next-bg-image.png",
    imageAlt: "next-bg-image GitHub page",
    featured: false,
  },
  "terrain-gen": {
    slug: "terrain-gen",
    name: "3D Terrain Generation",
    description:
      "Procedural 3D terrain generation built as a learning project.",
    tech: ["OCaml", "RayLib"],
    url: "https://github.com/kiahjh/world",
    image: "/images/world.png",
    imageAlt: "Procedural terrain generation output",
    featured: false,
  },
  "type-codegen": {
    slug: "type-codegen",
    name: "Fen",
    description:
      "A custom language for type definitions that generated types in both Swift and Rust, for sharing types between frontends and backends.",
    tech: ["Rust", "Swift"],
    url: "https://github.com/kiahjh/fen",
    image: "/images/fen.png",
    featured: false,
  },
};
