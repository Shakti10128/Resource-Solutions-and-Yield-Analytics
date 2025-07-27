# 🪑 Table Reservation Lock API

A simple Node.js + Express backend system that simulates **temporary table reservation** using in-memory storage. This prevents double-booking of the same table by locking it for a specific user and time duration.

---

## ⚙️ Tech Stack

- Node.js  
- Express.js  
- In-Memory Storage (JavaScript object, no database)

---

## 🚀 Completed Endpoints

### ✅ 1. POST /api/tables/lock

🔒 Temporarily locks a table for a specific user and duration.

📍 URL:  
{{localUrl}}/api/tables/lock

📥 Request Body:
{
  "tableId": "table-123",
  "userId": "user-abc",
  "duration": 600
}

Fields:
- tableId: string – Unique ID of the table  
- userId: string – ID of the user trying to lock the table  
- duration: number – Lock duration in **seconds**

✅ Success Response (200 OK):
{
  "success": true,
  "message": "Table locked successfully."
}

❌ Conflict Response (409 Conflict):
{
  "success": false,
  "message": "Table is currently locked by another user."
}

🔐 Request Validation:
- tableId and userId must be present and must be strings  
- duration must be a positive number (in seconds)

---

## 🧠 Important Notes

- This API uses in-memory storage, so all data resets when the server restarts.  
- Expiry is handled using timestamps: expiryTime = Date.now() + duration * 1000  
- A lock is allowed only if no current lock exists or the previous lock has expired.  
- For testing in Postman, use the environment variable {{localUrl}} (e.g., http://localhost:3000)

---

## ✅ Project Milestones

Feature | Status | Commit Message  
------- | ------ | ------------------------------  
Lock Route | ✅ Done | feat: implement /lock route with validation  
Unlock Route | ⏳ Pending |   
Status Check Route | ⏳ Pending |  
Seeder Route | ✅ Done | feat: add /seed route to create sample locks  
Debug View All Locks | ✅ Done | feat: add /locks route to get all current locks  

---

## 📂 Folder Structure

project-root/  
├── index.js  
├── routes/  
│   └── tableRoutes.js  
│   └── seedRoutes.js  
├── controllers/  
│   └── tableController.js  
│   └── seedController.js  
├── middlewares/  
│   └── validateLockRequest.js  
├── utils/  
│   ├── memoryStore.js  
│   ├── successResponse.js  
│   └── errorResponse.js  
├── seed/  
│   └── lockSeeder.js  
├── README.md  

---

## 📬 Author

Built by Shakti Kumar  
Node.js Backend Developer Assignment
