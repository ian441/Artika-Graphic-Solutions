// ─── DEFAULT DATA ─────────────────────────────────────────────────────────────
export const DEFAULT_PROJECTS = [
  { id: "01", title: "Luminos Brand Identity", category: "Brand Design", year: "2024", color: "#C8A97E", bg: "#0A0A08", desc: "Complete visual identity system for a luxury skincare house. Bespoke logotype, refined color palette, and editorial packaging.", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", tags: ["Identity","Packaging","Typography"], featured: true },
  { id: "02", title: "Vanta Motion Reel", category: "Motion Graphics", year: "2024", color: "#7E9EC8", bg: "#06080F", desc: "Kinetic typography campaign for a global tech launch. Frame-perfect transitions, 3D depth, and typographic choreography.", img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80", tags: ["Motion","3D","Campaign"], featured: true },
  { id: "03", title: "Sable Editorial System", category: "Publication Design", year: "2023", color: "#C87E9E", bg: "#0F0608", desc: "Annual report and editorial framework for a cultural institution. Grid-driven layouts with considered typographic hierarchy.", img: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80", tags: ["Editorial","Print","Grid"], featured: false },
  { id: "04", title: "Orin Digital Experience", category: "UI/UX Design", year: "2023", color: "#7EC8A9", bg: "#060F0B", desc: "Immersive web experience for a contemporary gallery. Scroll-driven narrative, generative textures, and spatial interaction.", img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80", tags: ["Web","UX","Interactive"], featured: true },
  { id: "05", title: "Mera Typeface", category: "Type Design", year: "2024", color: "#C8C87E", bg: "#0E0F06", desc: "Custom display typeface spanning 6 weights. Geometric foundations with humanist finishing — built for editorial impact.", img: "https://images.unsplash.com/photo-1518364538800-6bae3c2ea0f2?w=800&q=80", tags: ["Type","Lettering","System"], featured: false },
  { id: "06", title: "Kova Spatial Brand", category: "Brand Design", year: "2024", color: "#C87E7E", bg: "#0F0606", desc: "Spatial computing brand for an emerging hardware startup. Dimensional logotype, immersive guidelines, motion language.", img: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&q=80", tags: ["Brand","Spatial","Guidelines"], featured: false },
];

export const DEFAULT_GALLERY = [
  { id: 1, title: "Chromatic Study I", medium: "Digital Print", year: "2024", img: "https://images.unsplash.com/photo-1549490349-8643362247b5?w=900&q=85", color: "#C8A97E", visible: true },
  { id: 2, title: "Void Architecture", medium: "Generative Art", year: "2024", img: "https://images.unsplash.com/photo-1515405295579-ba7b45403062?w=600&q=85", color: "#7E9EC8", visible: true },
  { id: 3, title: "Typographic Meridian", medium: "Mixed Media", year: "2023", img: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=600&q=85", color: "#C87E9E", visible: true },
  { id: 4, title: "Structural Forms III", medium: "Photography", year: "2023", img: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=600&q=85", color: "#7EC8A9", visible: true },
  { id: 5, title: "Golden Ratio Series", medium: "Print", year: "2024", img: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=900&q=85", color: "#C8C87E", visible: true },
  { id: 6, title: "Nocturne in Ink", medium: "Illustration", year: "2023", img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=85", color: "#C87E7E", visible: true },
  { id: 7, title: "Minimalist Construct", medium: "Digital Art", year: "2024", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=85", color: "#A97EC8", visible: true },
  { id: 8, title: "Rhythm and Grid", medium: "Type Design", year: "2024", img: "https://images.unsplash.com/photo-1614850715649-1d0106293bd1?w=600&q=85", color: "#C8A97E", visible: true },
  { id: 9, title: "Geometry of Light", medium: "Photography", year: "2024", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=85", color: "#7EC8C8", visible: true },
];

export const DEFAULT_SERVICES = [
  { id: 1, num: "I",   name: "Brand Identity",      desc: "Logotype, visual systems, brand guidelines, and the full spectrum of a distinct, durable identity." },
  { id: 2, num: "II",  name: "Editorial Design",    desc: "Publications, annual reports, and print collateral with meticulous grid work and typographic precision." },
  { id: 3, num: "III", name: "Motion and Film",     desc: "Title sequences, motion graphics, and kinetic design that give ideas velocity and visual weight." },
  { id: 4, num: "IV",  name: "Digital Experiences", desc: "Web design, UI systems, and interactive interfaces engineered for beauty and clarity." },
  { id: 5, num: "V",   name: "Type Design",         desc: "Custom typefaces, lettering, and typographic systems crafted for singular, ownable expression." },
];

export const DEFAULT_SITE = {
  studioName: "Artika Graphics Solutions",
  tagline: "I design visual identities, editorial systems, and digital experiences that endure.",
  established: "Est. 2024",
  location: "Nairobi, Kenya",
  email: "hello@artika-gs.com",
  aboutShort: "Artika Graphics Solutions is a boutique design studio working at the intersection of identity, editorial, and experience design.",
  aboutLong: "Founded on the principle that restraint and precision outperform noise, we partner with brands who understand the long-term value of considered design.",
  stat1: "12+", stat1Label: "Years experience",
  stat2: "80+", stat2Label: "Projects delivered",
  stat3: "3",   stat3Label: "Continents served",
  stat4: "100%",stat4Label: "Client retention",
};

// Storage keys
export const STORE_KEY_PROJECTS = "artika_projects";
export const STORE_KEY_GALLERY  = "artika_gallery";
export const STORE_KEY_SERVICES = "artika_services";
export const STORE_KEY_SITE     = "artika_site";

// Admin password
export const ADMIN_PASS = "artika2024!";
