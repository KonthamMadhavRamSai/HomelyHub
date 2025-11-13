<div align="center">🏨 HomelyHub – Resort & Lodge Booking Platform (MERN Stack)</div>
<div align="center">

A modern full-stack booking platform built with the MERN stack, featuring a polished dark-themed UI for a clean and premium user experience.

</div>
<div align="center">🎯 Project Objective</div>

To develop a fast, intuitive, and visually modern resort/lodge booking system using MERN architecture, offering streamlined listing, searching, and management of accommodation data through a premium, dark-mode interface.

<div align="center">🛡️ Tech & Tools Used</div>
<p align="center"> <img src="https://img.shields.io/badge/Frontend-React-blue?style=for-the-badge" /> <img src="https://img.shields.io/badge/Backend-Node.js-green?style=for-the-badge" /> <img src="https://img.shields.io/badge/Database-MongoDB-brightgreen?style=for-the-badge" /> <img src="https://img.shields.io/badge/State%20Management-Redux%20Toolkit-purple?style=for-the-badge" /> <img src="https://img.shields.io/badge/UI-Ant%20Design-orange?style=for-the-badge" /> <img src="https://img.shields.io/badge/Build-Vite-lightgrey?style=for-the-badge" /> <img src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge" /> </p>
🚀 Features
🌐 Frontend

Developed using React + Vite for faster load speeds

Clean and elegant dark-mode UI

Ant Design (antd) for professional UI components

Redux Toolkit for global state management

Fully responsive layout for all screen sizes

Backend API calls handled using Axios

🛠️ Backend

Built with Node.js and Express.js

MongoDB + Mongoose for database modeling

REST API routes for bookings and listings

Secure configuration using dotenv

Supports image handling using ImageKit

📸 Screenshots

Replace image-url-here with uploaded GitHub image links.

🌙 Home Page (Dark Theme)

🏨 Resort/Lodge Listing Page

➕ Add New Resort Page

📁 Folder Structure
HomelyHub/
│── backend/                    # Express.js Backend
│   ├── src/
│   ├── package.json
│   └── .env
│
└── Frontend/                   # React Frontend
    ├── src/
    ├── public/
    ├── package.json
    └── .env

🛠️ Installation & Setup
1. Clone the repository
git clone https://github.com/your-username/HomelyHub.git
cd HomelyHub

2. Setup Backend
cd backend
npm install


Create a .env file inside backend:

MONGO_URL=your_mongodb_url
JWT_SECRET=your_secret
IMAGEKIT_PUBLIC_KEY=
IMAGEKIT_PRIVATE_KEY=
IMAGEKIT_URL_ENDPOINT=


Start backend server:

npm run dev

3. Setup Frontend
cd ../Frontend
npm install
npm run dev


Frontend usually runs on:
👉 http://localhost:5173/

🧩 Core Functionalities

Add resort/lodge listings

Store booking details securely in MongoDB

Search and filter stays by criteria

Smooth interactions between frontend & backend

Reusable React components & clean routing

Fully dark-themed, modern UI

🎨 UI Highlights

Premium dark mode

Smooth animations & transitions

Minimalistic card-based listing design

Clean and intuitive navigation

Consistent spacing & typography for premium feel

📌 Future Enhancements

User login & authentication

Payment gateway integration (Razorpay)

Advanced filters (price range, location, rating)

Admin dashboard for managing listings

Review & rating system

🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to fork the repo and submit a pull request.

📄 License

This project is licensed under the MIT License.
