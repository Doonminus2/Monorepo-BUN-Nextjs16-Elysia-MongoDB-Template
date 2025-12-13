
---

# 📄 `apps/web/README.md`

## 
แนวทางการพัฒนา

ใช้ Server Components เป็นค่าเริ่มต้น

แยก UI ตาม feature เพื่อรองรับการขยายในอนาคต

หลีกเลี่ยงการผูก frontend กับ implementation ของ backend โดยตรง

```md
# Frontend Web

Frontend พัฒนาด้วย Next.js 16 (App Router)
ใช้ Tailwind CSS และ shadcn/ui สำหรับ UI

## Tech Stack

- Framework: Next.js 16
- Styling: Tailwind CSS
- UI Components: shadcn/ui


## Getting Started

First, run the development server:

```bash
bun dev
```



## โครงสร้างภายใน

```txt
app/            # App Router
components/     # Reusable components
features/       # Feature-based UI
lib/            # Utilities / helpers

