# mshrm.it

Sito di MSHRM, refresh identity 2026. Next.js (App Router) con export statico, pubblicato su Vercel.

## Avvio

Serve Node 22 (`.nvmrc`).

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # genera out/, il sito statico
```

## Dove stanno le cose

| Cosa | Dove |
|---|---|
| Testi | `lib/copy.ts`. Le note `DA DEFINIRE` e `DECISIONE APERTA` segnano ciò che manca. |
| Token (palette, scala, grana) e motion di Livello 1 | `app/globals.css` |
| Sezioni della home | `components/sections/` |
| Tipo "a scala" | `components/Staircase.tsx` |
| Marchi (pittogramma, wordmark, monogramma, lockup) | Sorgente in `brand/svg/`. Dopo un nuovo export si lancia `npm run brand`, che rigenera `components/brand/paths.ts`. |
| Tela persistente (Livello 2, WebGL) | `components/motion/Organism.tsx` |
| Transizione Passaggio | `components/motion/TransitionLink.tsx` |
| Gradienti | `public/gradients/` (provvisori) |

## Asse EXPO di Exposure

Exposure è una variable font con un asse personalizzato `EXPO`:

- `+100` sovraesposto, filo sottile
- `0` regular
- `-100` sottoesposto, blobby

Tutto il focus tipografico passa dall'asse, tramite `font-variation-settings: "EXPO" var(--expo-now)`. `--expo-now` è registrata con `@property`, quindi si anima con le transizioni CSS.

## Regole

- **Stato di riposo completo.** Senza JS, e con `prefers-reduced-motion`, la pagina è interamente leggibile. Gli stati "non ancora rivelato" si applicano solo sotto `html.reveal-ready`.
- **Niente server.** Niente SSR, server actions, middleware o API routes: deve restare un export statico.
- **Versioni fissate.** Le dipendenze sono bloccate in `package.json` e si aggiornano una alla volta.

## Font

I file di Exposure in `public/fonts/` sono **trial**: restano solo in locale (gitignored) e non si pubblicano. Senza quei file, le anteprime su Vercel mostrano il font di riserva. Quando arriva la licenza web:

1. si mettono in `public/fonts/` i WOFF2 variable (roman e italic) con il set completo di caratteri;
2. si toglie la regola `*Trial*` da `.gitignore`;
3. si aggiorna `@font-face` in `globals.css`, oppure si passa a `next/font/local`.
