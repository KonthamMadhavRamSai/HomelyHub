HomelyHub – Resort & Lodge Booking Platform (MERN Stack)

HomelyHub is a full-stack accommodation booking platform built using the MERN stack.
It allows users to explore, search, and manage resort/lodge bookings with a modern, refined dark-themed UI designed for a premium experience.

🚀 Features
Frontend
Built with React + Vite for fast performance.
Clean and premium dark-themed UI for an elegant user experience.
Uses Ant Design (antd) components for professional styling.
Redux Toolkit for state management.
Fully responsive design for both desktop and mobile.
Axios integration for API communication.

Backend
Powered by Node.js and Express.js.
MongoDB + Mongoose for database modeling.
API routes for bookings, authentication, and data retrieval.
Secure environment variable usage with dotenv.
Image handling via ImageKit.

📁 Folder Structure
HomelyHub/
│── backend/              
│   ├── src/
│   ├── package.json
│   └── .env
│
└── Frontend/             
    ├── src/
    ├── public/
    ├── package.json
    └── .env

🛠️ Tech Stack
Frontend
React
Redux Toolkit
Ant Design (antd)
Axios
Vite

Backend
Node.js
Express.js
MongoDB
Mongoose
JSON Web Tokens (JWT)
bcrypt
ImageKit / Nodemailer / Razorpay (based on usage)

⚙️ Installation & Setup
1. Clone the repository
git clone https://github.com/your-username/HomelyHub.git
cd HomelyHub

2. Setup Backend
cd backend
npm install

Create a .env file:
MONGO_URL=your_mongodb_url
JWT_SECRET=your_secret
IMAGEKIT_PUBLIC_KEY=
IMAGEKIT_PRIVATE_KEY=
IMAGEKIT_URL_ENDPOINT=

Run backend:
npm run dev

3. Setup Frontend
cd ../Frontend
npm install
npm run dev

Frontend runs on default Vite port (usually 5173).

🧩 Core Functionalities
Add new resort/lodge listings
Store booking details in MongoDB
Search and filter bookings easily
Listing page for all available stays
Dark theme UI for a modern experience
Clean routing and API integration
Modular & reusable React components

🎨 UI Highlights
Fully dark-mode interface
Minimalistic & elegant card layouts
Smooth animations and transitions
Structured and intuitive navigation

📌 Future Enhancements
User login & authentication
Payment gateway integration
Advanced filtering (price, rating, location)
Admin panel for managing listings
Review & rating system

🤝 Contributing
Contributions are welcome!
Feel free to fork the repo and submit a PR.

📄 License
This project is licensed under the MIT License.
