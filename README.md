# Resource Management Frontend Microservice

Standalone frontend replica extracted from your Laravel/Inertia app and built as a separately deployable microservice.

## Backend Base URL (single edit point)

Primary single edit point:
- `resources/js/microservice/backend.ts`
- `BACKEND_BASE_URL`

Optional env override:
- `.env` with `VITE_BACKEND_BASE_URL=https://your-backend-domain.com`

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Docker deploy

```bash
docker build -t rms-frontend-ms .
docker run --rm -p 8080:80 rms-frontend-ms
```

## Notes

- This replica runs independently from Laravel and is intended to be hosted separately.
- Routing is handled client-side with React Router.
- Existing pages/components are preserved as much as possible with an Inertia-compatibility layer.
- Make sure CORS, Sanctum/session cookie settings, and allowed origins are configured on your backend for your frontend host domain.
# RMS-Fontend
