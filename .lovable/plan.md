

# Plan: Culori roz + Meniu sidebar elegant

## Culori

Voi actualiza complet paleta de culori din `src/index.css`:
- **Background** (toate paginile): `#ffb1d8` (HSL: 336 100% 85%)
- **Primary / Butoane / Header / Meniu**: `#ff89c4` (HSL: 330 100% 77%)
- Card, popover, accent, border - toate derivate din aceste două nuanțe

## Meniu nou: Sidebar slide-in (Sheet)

Pentru un site de tip boutique/candle shop, cel mai potrivit meniu modern este un **sidebar slide-in din dreapta** (folosind componenta `Sheet` existentă). Motivul:

- Pe desktop, logo-ul stânga + icoane dreapta (coș, wishlist, cont) + buton hamburger animat care deschide sidebar-ul
- Sidebar-ul are navigarea completă cu categorii grupate vizual, iconițe, și link-uri rapide la coș/wishlist/cont
- Elimină dropdown-urile clasice - totul e în sidebar pentru un look premium, curat

Acest stil e popular pe site-urile luxury/boutique din 2025-2026.

## Fișiere modificate

1. **`src/index.css`** - Actualizare completă variabile CSS (background → `#ffb1d8`, primary → `#ff89c4`, card/accent/border derivate)
2. **`src/components/Header.tsx`** - Refacere completă:
   - Eliminare navigare desktop inline + dropdown-uri
   - Logo stânga, icoane (wishlist, coș, cont) + hamburger animat dreapta
   - Sheet sidebar din dreapta cu navigare completă, categorii grupate, animații framer-motion
   - Header glass cu nuanța `#ff89c4`
3. **Paginile** (`Index.tsx`, `Auth.tsx`, + toate categoriile) - Actualizare clase de background pentru a folosi noile variabile (majoritatea deja folosesc `bg-background`, deci se vor actualiza automat)

## Detalii tehnice

- `#ffb1d8` → HSL `336 100% 85%` → variabila `--background`
- `#ff89c4` → HSL `330 100% 77%` → variabila `--primary`
- Sidebar-ul folosește componenta `Sheet` (side="right") deja existentă în proiect
- Butonul hamburger va avea animație de tranziție între `Menu` și `X` cu framer-motion

