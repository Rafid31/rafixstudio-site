# Rafid Portfolio CMS (fixed)

This package was patched so the app can install against current Payload / Next compatibility requirements.

## What was fixed
- Updated `next`, `react`, `react-dom`, and Payload packages to compatible versions
- Added the missing `(payload)/layout.tsx` required for the Payload admin route group
- Added `sharp` to the Payload config for image processing
- Added `admin.importMap.baseDir` to the Payload config
- Added `baseUrl` to `tsconfig.json`
- Added `next-env.d.ts`

## Run locally
```bash
cd ~/Desktop/Rafid-Portfolio-CMS-fixed
npm install
npm run dev
```

Then open:
- http://localhost:3000
- http://localhost:3000/admin

## First admin login
Open `/admin` and create your first admin user.

## Requirements
- Node.js 20.9+
