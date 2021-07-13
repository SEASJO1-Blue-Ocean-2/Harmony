const express = require('express');
const app = express();
const PORT = 3000;


app.use("/", express.static('./client/dist/'));


// app.get("/users")


// app.get("/users")


app.listen(PORT, function() {
  console.log(`Server listening at http://localhost:${PORT}`);
});