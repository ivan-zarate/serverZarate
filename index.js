const express = require("express");

const router = require("./Routes/products");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.use('/api', router)

app.use(express.static('public'))


const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(`Listening on port: ${server.address().port}`);
});

server.on("error", (error) => {
  console.log(`An error ocurred on the server ${error.message}`);
});