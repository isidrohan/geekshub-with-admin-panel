require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')

const path = require("path");

const authRouter = require("./router/auth-route")
const connectDB = require("./utills/db")
const errorMiddleware = require('./middleware/error-middleware')
const contactRouter = require('./router/contact-route')
const serviceRouter = require('./router/service-route')
const adminRouter = require('./router/admin-route')
const deleteUserById = require('./router/admin-route')
const port = 5000

const corsOptions = {
  origin: 'http://localhost:5173',
  methods: 'PUT, GET, POST, DELETE, PATCH, HEAD',
  credentials: true
}
app.use(cors(corsOptions))
app.use(express.json());
app.use("/api/auth",authRouter);
app.use("/api/contact",contactRouter);
app.use("/api/services",serviceRouter);
app.use("/api/admin",adminRouter);



app.use(errorMiddleware);

app.get("/", (req, res) => {
  
  app.use(express.static(path.resolve(__dirname, "client", "dist")));
  res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
  });
  
connectDB().then(()=>{
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

});