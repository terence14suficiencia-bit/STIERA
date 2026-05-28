# 🎓 STIERA LMS (Learning Management System)

A full-stack Learning Management System (LMS) built using **Next.js, Express.js, and MySQL**, with a **separate frontend and backend server architecture**.

---

## 📌 Overview

**STIERA LMS** is a web-based learning platform designed to manage users, courses, and educational content.

It includes:
- Authentication system
- Role-based access (Admin & Student)
- Admin dashboard for user management
- MySQL database integration

This project demonstrates a **real-world full-stack system** with a clear separation between frontend and backend.

---

## 🏗️ System Architecture

```
Frontend (Next.js - React)
        ↓
API Requests (HTTP - Fetch)
        ↓
Backend Server (Express.js)
        ↓
Database (MySQL)
```

✅ The system uses a **separate server architecture**:

- Frontend → `http://localhost:3000`
- Backend → `http://localhost:5000`

The frontend communicates with the backend via API requests, while the backend handles business logic and database operations.

---

## 🛠️ Technologies Used

### Frontend
- Next.js (React)
- Tailwind CSS
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MySQL

---

## 🔐 Features

### ✅ Authentication System
- User login using email and password
- Backend validation using Express API
- MySQL-based user authentication

---

### ✅ Role-Based Access
- Admin and Student roles
- Different dashboards based on user role
- Protected routes and access control

---

### ✅ Admin Dashboard
- View pending users
- Approve or reject user accounts
- Manage system users
- Monitor system activity

---

### ✅ Student Dashboard
- Access LMS interface
- View learning materials
- Navigate available content

---

### ✅ API Integration
- Frontend communicates with backend via REST API
- Backend processes requests and interacts with MySQL
- Real-time data handling

---

### ✅ Database System
- Users stored in MySQL database
- Query-based login validation
- Status-based access control (`pending`, `approved`)

---

### ✅ Separate Backend & Frontend Servers
- Frontend and backend run independently
- Backend handles logic and database
- Frontend handles UI and user interaction
- Connected via HTTP API requests

---

## 📂 Project Structure

```
STIERA/
├── backend/       # Express API and MySQL logic
│   ├── server.js
│   ├── db.js
│
├── frontend/      # Next.js frontend
│   ├── src/app/
│   ├── public/
│
└── README.md
```

---

## 🚀 How to Run the Project

### 1️⃣ Backend Setup

```bash
cd backend
npm install
node server.js
```

Backend runs on:
```
http://localhost:5000
```

---

### 2️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:
```
http://localhost:3000
```

---

## 🔄 System Workflow

1. User enters login credentials in frontend  
2. Frontend sends API request to Express backend  
3. Backend validates user using MySQL database  
4. System checks role and account status  
5. User is redirected:
   - Admin → Admin Dashboard  
   - Student → Student Dashboard  

---

## 🧠 Learning Highlights

This project demonstrates:

- Full-stack development (Frontend + Backend)
- Separation of frontend and backend architecture
- REST API development using Express.js
- MySQL database integration
- Role-based authentication system
- Debugging API and backend issues

---

## 🔮 Future Improvements

- JWT Authentication (secure login)
- Course management system
- File uploads (learning materials)
- Notification system
- Deployment (Vercel + Render)

---

## 👨‍💻 Author

**Terence Suficiencia**

---

## 📌 Note

This is a personal project created to practice full-stack development using modern web technologies.

---

## ⭐ Highlights

✅ Full-stack LMS system  
✅ Separate frontend and backend servers  
✅ MySQL database integration  
✅ Admin & Student role-based system  
✅ Functional authentication system  

---

🔥 *This project showcases real-world development using Next.js, Express, and MySQL.*
``
