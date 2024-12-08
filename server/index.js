const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const route = require('./Routes/userRoutes');
const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", route);

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connection Successful");
  })
  .catch((err) => {
    console.log("DB Connection Error:", err.message);
  });

const PORT = process.env.PORT || 5000; // Default to 5000 if PORT is not set
const server = app.listen(PORT, () => {
  console.log(`Server is connected on port ${PORT}`);
});

// Optional: Handle server errors
server.on('error', (err) => {
  console.error("Server error:", err);
});