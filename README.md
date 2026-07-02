# ParagraphCMS Next.js Advanced

Ten README jest krótką dokumentacją projektu ParagraphCMS dla przykładu Next.js Advanced. Projekt rozwija App Router blog o lokalizowane trasy, RSS, `sitemap.xml`, `robots.txt`, `llms.txt` oraz generowanie metadanych przez `@paragraphcms/seo`.

Oficjalny kontekst: [ParagraphCMS Next.js Advanced](https://paragraphcms.com/docs/advanced/nextjs).

## Konfiguracja

1. Skopiuj `.env.example` do `.env`.
2. Ustaw `PARAGRAPH_API_KEY` kluczem API z ParagraphCMS.
3. W ParagraphCMS utwórz kolekcję `blog`, jeśli zostawiasz domyślną mapę tras.
4. Zmień `site.url` w `paragraph.config.ts` na produkcyjną domenę.

## Uruchomienie

```bash
pnpm install
pnpm dev
```

Build i start produkcyjny:

```bash
pnpm build
pnpm start
```

## Najważniejsze pliki

- `paragraph.config.ts` - klient ParagraphCMS i konfiguracja SEO.
- `app/blog/` - domyślne trasy bloga.
- `app/[locale]/blog/` - lokalizowane trasy bloga.
- `app/sitemap.xml/route.ts`, `robots.txt/route.ts`, `llms.txt/route.ts` - generowane dokumenty SEO.
