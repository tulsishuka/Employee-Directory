🧑‍💻 Full-Stack Project | Next.js + Node.js + GraphQL + MongoDB

📋 Overview
```
A Full-Stack Employee Directory that lets you:
✅ View all employees
✅ Filter them by department
✅ Add new employees with validation
✅ View detailed information for each employee
```
Built with a clean architecture — Next.js (frontend) and Node.js + Apollo Server (backend) connected to MongoDB.

🗂️ Project Structure
```
Employee-Directory-Application/
│
├── backend/
│   ├── db.js
│   ├── index.js
│   ├── schema.js
│   ├── seed.js
│   ├── package.json
│   └── .env
│
└── frontend/
    ├── app/
    ├── components/
    ├── lib/
    ├── package.json
    └── tailwind.config.js
```
⚙️ Tech Stack
```
Layer	Technology
Frontend	Next.js, Apollo Client, Tailwind CSS
Backend	Node.js, Apollo Server
Database	MongoDB (Atlas)
Communication	GraphQL Queries & Mutations
```
🚀 Features
```
🔍 View all employees in a table

🧭 Filter by department

➕ Add new employee (form validation)

📑 View detailed employee information

💾 MongoDB data storage

🖼️ Responsive layout with Tailwind CSS
```
🧰 Installation & Setup
```
1️⃣ Clone the repository
git clone https://github.com/tulsishuka/Employee-Directory.git

2️⃣ Setup the Backend
cd backend
npm install

Create a .env file in /backend folder:

MONGO_URI=your_mongodb_connection_string

Seed initial data

node seed.js

Run the backend server:

node/nodemon index.js

📡 Server runs at:
👉 http://localhost:4000/graphql

3️⃣ Setup the Frontend

Open a new terminal:

cd frontend
npm install
npm run dev


🌐 Open your app:
👉 http://localhost:3000
```

Make sure your MongoDB cluster allows access from your current IP (0.0.0.0/0 for testing).

Backend and frontend should run simultaneously.

Apollo Client is configured in /frontend/lib/apolloClient.js.

👩‍💻 Author
Tulasi Shukla
💻 Full-Stack Developer | 🚀 Self-Learner | 💡 Problem Solver
🔗 https://www.linkedin.com/in/tulsishukla/

✨ “Build something today that your future self will thank you for.” ✨
