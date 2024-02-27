const express = require("express");
const app = express();
app.use(express.json())
require('dotenv').config()

const mongoose = require('mongoose')
const connectToMongoDB = require('./config/db')
connectToMongoDB()

app.use(require('./routes/giverRoutes'))
app.use(require('./routes/neederRoutes'))
app.use(require('./routes/authRoutes'))

app.get('/', (req, res) => {
  res.status(200).send(`Server is live`)
})
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})