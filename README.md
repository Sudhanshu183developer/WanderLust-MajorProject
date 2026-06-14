# 🌍 WanderLust

A full-stack Airbnb-inspired travel listing platform where users can discover, create, and review unique stays around the world.

## 🔗 Live Demo
👉 [wanderlust-majorproject-fbc9.onrender.com](https://wanderlust-majorproject-fbc9.onrender.com)

---

## ✨ Features

- 🔐 User Authentication (Register, Login, Logout) with Passport.js
- 🏠 Full CRUD for Listings (Create, Read, Update, Delete)
- 🖼️ Image Upload via Cloudinary
- ⭐ Reviews & Star Ratings system
- 🗺️ Interactive Map using Leaflet.js + OpenStreetMap (no API key required)
- 📍 Auto-geocoding of listing locations using Nominatim API
- 🔒 Authorization (only owners can edit/delete their listings)
- 💬 Flash messages for user feedback
- ✅ Server-side & client-side form validation using Joi

---

## 🛠️ Tech Stack

**Frontend:**
- EJS (Embedded JavaScript Templates)
- Bootstrap 5
- Leaflet.js
- CSS3

**Backend:**
- Node.js
- Express.js
- MongoDB + Mongoose
- Passport.js (passport-local, passport-local-mongoose)

**Services:**
- Cloudinary (image storage)
- Nominatim API (geocoding)
- OpenStreetMap (map tiles)

---


---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/Sudhanshu183developer/WanderLust-MajorProject.git
cd WanderLust-MajorProject
```

### 2. Install dependencies
```bash
npm install
```

### 3. Create `.env` file in root directory
```env
ATLASDB_URL=your_mongodb_connection_string
SECRET=your_session_secret
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
```

### 4. Run the app
```bash
node app.js
```

### 5. Open in browser
```
http://localhost:8080
```
---

## 🔑 Environment Variables

| Variable | Description |
|---|---|
| `ATLASDB_URL` | MongoDB connection URL |
| `SECRET` | Express session secret key |
| `CLOUD_NAME` | Cloudinary cloud name |
| `CLOUD_API_KEY` | Cloudinary API key |
| `CLOUD_API_SECRET` | Cloudinary API secret |

---

## 🚀 Future Improvements

- [ ] Add search and filter functionality
- [ ] Add booking/reservation system
- [ ] Add user profile pages
- [ ] Add category filters (beach, mountains, etc.)
- [ ] Add payment integration

---

## 👨‍💻 Author

**Sudhanshu Sachan**
- GitHub: [@Sudhanshu183developer](https://github.com/Sudhanshu183developer)
- LinkedIn: [Sudhanshu Sachan](https://www.linkedin.com/in/sudhanshu-sachan-b26ab4349/)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
