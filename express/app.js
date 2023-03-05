const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

// CRUD
let car= [
  { name: "buggatti", author: "Martin", price: 112, id: 1 },
  { name: "ferreari", author: "Tom", price: 695, id: 2 },
  { name: "Chevrolet", author: "Carl", price: 3, id: 3 },
  { name: "Ford", author: "Kevin", price: 984, id: 4 },
  { name: "Toyato", author: "Garry", price: 109, id: 5 },
  { name: "Tesla", author: "Henk", price: 583, id: 6 },
  { name: "Malibu", author: "Bob", price: 381, id: 7 },
  { name: "Mersades", author: "Uilyam", price: 694, id: 8 },
  { name: "Lamborghini", author: "Gates", price: 848, id: 9 },
];

// Get method
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/car", (req, res) => {
  res.send(car);
});

app.get("/car/:id/", (req, res) => {
  const car = car.filter((val) => {
    return val.id === +req.params.id;
  })[0];

  res.send(book);
});

// Post
app.post("/create", (req, res) => {
  const length = books.length;

  if (!req.body.name) {
    res.status(403).send("Error name validation is not true");
    return;
  }

  if (typeof req.body.name !== "string") {
    res.status(403).send("Error name validation is not true. must have string");
    return;
  }

  if (typeof req.body.price !== "number") {
    res
      .status(403)
      .send("Error price validation is not true. must have number");
    return;
  }

  const car = {
    name: req.body.name,
    author: req.body.author,
    id: length + 1,
  };

  car.push(car);

  res.send("Success");
});

// Put
app.put("/update/:id", (req, res) => {
  let idx = car.findIndex((car) => car.id === +req.params.id);

  let car = car[idx];

car.name = req.body.name || car.name;
car.author = req.body.author || car.author;
car.price = req.body.price || car.price;

car[idx] = car;

  res.status(200).send("success");
});

// Delete
app.delete("/car/:id", (req, res) => {
car = car.filter((car) => {
    return car.id !== +req.params.id;
  });

  res.send("Deleted successfull");
});

app.listen(port, () => {
  console.log("Server working on port " + port);
});