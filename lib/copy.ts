// All site copy lives here until the MDX content layer arrives.
// Notes use fixed labels: DA DEFINIRE (missing/provisional), DECISIONE APERTA (needs a call).
// Source: Framework dei testi di brand, ott 2026.

export const mantra = "More to reveal.";

export const descriptor = ["a creative", "strategy", "organism"] as const;

// DECISIONE APERTA: script line says "studio", definition says "collective".
// Kept both for now (agreed 11/10): script = accent, definition = approved text.
export const scriptLine = "Not an agency, not a studio";

export const definition = [
  "Not an agency, not a collective either. MSHRM is an interconnected entity made of independent energies. A living practice, where strategy and creativity are a single motion.",
  "Small at the core, fluid by design: we mold ourselves around every project, activating the right people, skills and perspectives the brand actually needs. Nothing more, nothing less.",
];

// Approved manifesto. The opening "There it is." is the hero; the rest follows.
// DECISIONE APERTA: "lucid vision" conflicts with the lexicon rules. Kept as approved.
export const manifestoOpening = "There it is.";

export const manifesto = [
  "That truth, that connection, that one path among the infinite possibilities.",
  "The living matter of your brand was already there. Just beneath the surface, in the dark or even hiding in plain sight.",
  "Enter creative strategy: the mind widens, the hidden patterns become obvious, words hold more than a second ago. More focus, less noise.",
  "There it is, the lucid vision you were looking for. Side effect? Once you see what was there all along, you cannot unsee it.",
  "So we keep looking, wondering, creating. There’s always more to reveal.",
];

// DA DEFINIRE: pillar texts are empty slots. Shown only in development builds.
// Pillar 1 must not repeat "revelation" from the mantra.
export const pillars = [
  { name: "Revelation", text: null },
  { name: "Fluidity", text: null },
  { name: "Closeness", text: null },
] as const;

// "mind", not "thinking": Silvia's shortlist, agreed 11/10.
export const claim = ["come for the mind.", "stay for the magic."] as const;

// DA DEFINIRE: confirm which names can be shown (permissions, NDA).
export const clients = [
  "Škoda",
  "Engie",
  "Lavazza",
  "DAZN",
  "A2A",
  "Perfetti Van Melle",
  "Decathlon",
] as const;

// Contesto: case images passing behind the symbol mask.
// DA DEFINIRE: all placeholders from the credential deck (low-res, mostly mood
// images). Replace with 4–6 launch cases and high-res originals; check NDAs.
// `client: null` = image not tied to a case yet, caption shows a placeholder.
export const cases = [
  { client: "Coppini Arte Olearia", image: "/work/placeholder-01.jpg" },
  { client: null, image: "/work/placeholder-02.jpg" },
  { client: null, image: "/work/placeholder-03.jpg" },
  { client: null, image: "/work/placeholder-04.jpg" },
  { client: null, image: "/work/placeholder-05.jpg" },
] as const;

// DA DEFINIRE: public contact address. The credential deck is in Italian and
// in the old identity, so "Selected work" goes through email until the case pages exist.
export const contactEmail = "hello@mshrm.it";
export const selectedWorkHref = `mailto:${contactEmail}?subject=Selected%20work`;

export const meta = {
  title: "MSHRM · A Creative Strategy Organism",
  description:
    "Not an agency, not a collective either. A living practice, where strategy and creativity are a single motion.",
};
