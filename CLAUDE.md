# Motel Owners of America

## Project overview
Public-facing website that visualizes hotel/motel ownership across the USA on an interactive map. Monetized via Google AdSense on `motelownersofamerica.com`.

## Tech stack
- **Client**: Next.js 15 (App Router) + React 19 + TypeScript (strict) + MUI v7 + react-map-gl v8 (Mapbox GL JS)
- **State management**: Zustand (UI state) + React Query (server state)
- **Maps**: react-map-gl/mapbox with TopoJSON boundaries from Census Bureau
- **Backend** (planned): FastAPI + Beanie + MongoDB
- **Scraper** (planned): Standalone Python CLI with ETL pipeline

## Commands
- `cd client && npm run dev` — Start Next.js dev server
- `cd client && npm run build` — Production build
- Node version: 20 (use `nvm use 20`)

## Conventions
- Import from `react-map-gl/mapbox` (not `react-map-gl` — v8 breaking change)
- Use `MapGL` as import alias for the Map component (avoids collision with built-in `Map`)
- Use `LayerProps` type for layer definitions (not `FillLayerSpecification` which requires `source`)
- MUI v7: Use `Grid` (not `Grid2`)
- Feature-based folder structure: pages → components → hooks → stores
- Path alias: `@/` → `src/`
- One component per file, named exports
- Dark theme is default
