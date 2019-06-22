const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

// Set up Socket io
const server = require("http").createServer(app)
const io = require("socket.io")(server)

io.on("connection", socket => {
  console.log("New client connected.")
  socket.on("incoming data", data => {
    socket.broadcast.emit("broadcast", data)
  })
  socket.on("disconnect", () => console.log("Client disconnected."))
})

server.listen(PORT, () => console.log(`Socket/Express Sever now listening on PORT ${PORT}!`))
