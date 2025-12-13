# Docker (Local Development)

โฟลเดอร์นี้ใช้สำหรับการตั้งค่า Docker Compose
เพื่อรันบริการที่จำเป็นสำหรับการพัฒนาในเครื่อง (local development)

## บริการที่มี

- **MongoDB 7.x**
  - ใช้เป็นฐานข้อมูลสำหรับ Backend API
  - ไม่มีการตั้งค่า authentication (ใช้เฉพาะ local เท่านั้น)

## ความต้องการเบื้องต้น

- Docker Desktop
- Docker Compose เวอร์ชัน 2 ขึ้นไป

## วิธีใช้งาน


## Run
```bash
docker compose up -d
docker compose down
ตรวจสอบ container ที่กำลังรัน
docker ps

