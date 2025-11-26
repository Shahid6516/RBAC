# RBAC
A simple Node.js + Express project demonstrating Role-Based Access Control (RBAC) using JWT authentication.
It allows users to log in, get a token, and access protected routes based on their assigned roles (like user, admin and manager.).

## 🚀 Features

### 🔐 JWT Authentication (Login & verify users)

### 👥 Role-based access (Admin/User)

### ⚙️ Express middleware for token & role verification

### 🧱 Modular structure for scalability

##🧾 Example routes:

/api/user → accessible by everyone

/api/manager → accessible by admin and manager

/api/admin → accessible by admin only

## 🧰 Tech Stack

### Node.js

### Express.js

### jsonwebtoken

### dotenv
