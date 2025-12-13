
---

# 📄 `apps/api/README.md`

```md
# Backend API

Backend API พัฒนาด้วย Elysia บน Bun Runtime
ใช้ Prisma เป็น ORM และ MongoDB เป็นฐานข้อมูล

## Tech Stack

- Runtime: Bun
- Framework: Elysia
- ORM: Prisma
- Database: MongoDB

# install 

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

### Environment Variables

ไฟล์ .env จะอยู่ในโฟลเดอร์นี้

DATABASE_URL=

แนวทางการพัฒนา

แยก route, service และ repository ออกจากกัน

หลีกเลี่ยงการเรียก Prisma โดยตรงจาก route

Infrastructure (เช่น Docker) ไม่ควรถูกอ้างอิงโดยตรงในโค้ด

## โครงสร้างภายใน

```txt
src/
├─ app.ts          # สร้างและ config Elysia app
├─ index.ts        # Entry point
├─ routes/         # HTTP routes
├─ services/       # Business logic
├─ repositories/   # Database access (Prisma)
└─ lib/            # Helper / shared utilities

