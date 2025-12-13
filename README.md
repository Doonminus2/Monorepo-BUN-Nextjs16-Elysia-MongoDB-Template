# Monorepo

Repository นี้เป็น Monorepo สำหรับพัฒนาแอปพลิเคชันแบบ Full-stack
โดยแยก frontend, backend, shared config และ infrastructure ออกจากกันอย่างชัดเจน

## Tech Stack

- Runtime / Package Manager: Bun
- Frontend: Next.js 16, Tailwind CSS, shadcn/ui
- Backend: Elysia
- Database: MongoDB
- ORM: Prisma
- Infrastructure: Docker (local development)

## โครงสร้าง Repository

apps/        # แอปพลิเคชันที่สามารถรันได้จริง
packages/    # Shared configuration และ utility
infra/       # Infrastructure (Docker, services)

### แนวคิดการออกแบบ

แยก concerns ระหว่าง application, shared config และ infrastructure

แต่ละแอปดูแล runtime และ environment ของตัวเอง

Shared code ใช้เฉพาะกรณีที่จำเป็นจริงเท่านั้น

### Development Flow (ภาพรวม)

เริ่ม infrastructure ที่จำเป็น (ดูใน infra/)

รัน backend API

รัน frontend web application

### install 
```bash
-git clone <repo>
-cd monorepo
-bun install
```


### run Project จาก root ทั้งหมด
```bash
bun run dev:web   
bun run infra:up
bun run infra:down
bun run dev:api

bun run build
```

### Production TYPE
```bash
bun run build
bun run infra:up   
bun run start:api
bun run start:web
```
thx to use
