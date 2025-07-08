# 🌐 Sachin's Full Stack Portfolio Website

Welcome to my Full Stack Developer Portfolio, built with **HTML, CSS, JavaScript, Node.js, Express, and MongoDB**. This project showcases my personal profile, skills, certifications, and includes a contact form connected to a backend server and database, with an admin dashboard to view incoming messages.

🌟 **Live Preview**: [View Portfolio Website](https://sachin-0109-yadav.github.io/Personal-Portfolio/)

---

## 🚀 Features

- 🧑‍💼 **About Me**, **Skills**, **Projects**, and **Certifications**
- 📬 **Contact Form** – stores messages in MongoDB
- 🔐 **Admin Dashboard** to view user messages
- 💡 Responsive and interactive frontend
- 🌍 Full Stack integration: **Frontend + Backend + Database**

---

## 🧰 Tech Stack

| Layer       | Technologies Used                     |
|-------------|----------------------------------------|
| Frontend    | HTML5, CSS3, JavaScript               |
| Backend     | Node.js, Express.js                   |
| Database    | MongoDB (local or MongoDB Atlas)      |

---

## 📁 Folder Structure

/port
│
├── index.html # Portfolio homepage
├── admin.html # Admin dashboard (view messages)
├── css/ # Stylesheets
├── js/ # JavaScript files (frontend logic)
├── models/ # MongoDB Mongoose schema
├── server.js # Express backend + MongoDB connection
├── package.json # Node project metadata
└── README.md # This file


---

## 🛠️ Getting Started

### 🔗 Prerequisites

- Node.js installed
- MongoDB (local or MongoDB Atlas)
- Code editor (VS Code recommended)

---

### ⚙️ Installation & Setup

1. **Clone the Repository**

```bash
git clone https://github.com/Sachin-0109-yadav/Personal-Portfolio.git
cd Personal-Portfolio


Install Dependencies
npm install

Start MongoDB

If local:

mongod

Run the Backend Server
node server.js
✅ Server will run at: http://localhost:3000/

Access Your Project

Section	URL
Frontend (static)	file:///C:/Users/SACHIN/Desktop/port/index.html
Admin Dashboard	http://localhost:3000/admin.html

 Contact Form Integration
➤ Sending Data (Frontend)
fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, email, message })
});


Displaying Data (Admin Dashboard)
fetch('/api/messages')
  .then(res => res.json())
  .then(data => {
    // Render messages on the admin.html page
  });

---

## 📸 Screenshots

### 🏠 Homepage
![Homepage](./screenshots/homepage.png)

### 📬 Contact Form
![Contact Form](./screenshots/contact-form.png)

### 🔐 Admin Dashboard
![Admin Dashboard](./screenshots/admin-dashboard.png)

git add .
git commit -m "📸 Added screenshots to README"
git push


🧑‍💻 Author
Sachin Yadav

🔗 GitHub: @Sachin-0109-yadav

💼 LinkedIn: linkedin.com/in/sachin-yadav-0109

📄 License
This project is open-source and free to use for learning purposes. 🚀

