# Project Startup Checklist (BE + FE)

This checklist is based on current repo scripts and avoids port conflicts.

## 0) One-time setup (per machine)

- Install Node.js 20 LTS.
- Ensure PostgreSQL and Redis are installed or available.
- Copy backend .env.example to .env and fill values:
  - backend/api/.env

## 1) Start infrastructure

- Start PostgreSQL.
- Start Redis.

## 2) Backend API

```bash
cd backend/api
npm install
npm run prisma:generate
npm run prisma:migrate
npm run prisma:seed
npm run dev
```

- Backend port is from backend/api/.env (PORT).

## 3) Frontend Main (public + tutor)

```bash
cd frontend/main
npm install
npm run dev
```

- Default port: 3001.

## 4) Frontend Admin

```bash
cd frontend/admin/next-app
npm install
npm run dev
```

- Default port: 3002.

## 5) Frontend User

```bash
cd frontend/user/next-app
npm install
npm run dev
```

- Default port: 3003.

## 6) Start all dev servers (optional)

After dependencies and env are ready, you can start all dev servers at once:

```bash
powershell -ExecutionPolicy Bypass -File scripts/run-dev.ps1
```

## Quick verify

- API health: http://localhost:<PORT>/health
- Main FE: http://localhost:3001
- Admin FE: http://localhost:3002
- User FE: http://localhost:3003

## Troubleshooting

- Backend fails to start: check backend/api/.env (PORT, DATABASE_URL, REDIS_URL).
- Prisma errors: rerun `npm run prisma:generate` and `npm run prisma:migrate`.
- DB not reachable: confirm PostgreSQL is running and DATABASE_URL is valid.
- Redis not reachable: confirm Redis is running and REDIS_URL is valid.
- Port in use: change the port in the relevant package.json script or start with `-p`.
- Module not found: run `npm install` in the corresponding folder.
