const express = require("express");
const { connect } = require("./config/db");
const bcrypt = require("bcrypt");
const { RegisterModel } = require("./models/register.model");
const { GlassModel } = require("./models/glass.model");
const { KidsModel } = require("./models/kids.model");
const { MenModel } = require("./models/men.model");
const { TshirtModel } = require("./models/tshirt.model");
const { WatchModel } = require("./models/watch.model");
const { WomenModel } = require("./models/women.model");
const { CartModel } = require("./models/cart.model");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const server = express();
server.use(express.json());

server.use(cors());

server.get("/", (req, res) => {
  res.send("welcome");
});
server.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    bcrypt.hash(password, 5, async (err, hash) => {
      // Store hash in your password DB.
      if (err) {
        console.log(err);
      } else {
        const newData = new RegisterModel({
          name,
          email,
          password: hash,
        });
        await newData.save();
        res.send("registered");
      }
    });
  } catch (error) {
    console.log(error);
    res.send("enter all the details");
  }
});
server.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await RegisterModel.find({ email });
    if (user.length > 0) {
      bcrypt.compare(password, user[0].password, (err, result) => {
        // result == true
        if (result) {
          const token = jwt.sign({ name: "masai" }, "masai");
          res.send({ status: "login successful", token: token });
        } else {
          res.send("wrong entry");
        }
      });
    }
  } catch (error) {
    console.log(error);
    res.send("wrong entry");
  }
});
server.get("/user", async (req, res) => {
  try {
    const data = await RegisterModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});
server.get("/user/:id", async (req, res) => {
  const ID = req.params.id;
  try {
    const data = await RegisterModel.find({ _id: ID });
    res.send(data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});
server.delete("/user/:id", async (req, res) => {
  const ID = req.params.id;
  try {
    const data = await RegisterModel.findByIdAndDelete({ _id: ID });
    res.send(data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});
server.get("/cart", async (req, res) => {
  try {
    const data = await CartModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});
server.post("/post/cart", async (req, res) => {
  const data = req.body;
  try {
    await CartModel.insertMany(data);

    res.send("data has been sent");
  } catch (error) {
    res.send("error");
  }
});
server.delete("/cart/:id", async (req, res) => {
  const ID = req.params.id;
  try {
    const data = await CartModel.findByIdAndDelete({ _id: ID });
    res.send(data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});
server.post("/post/glass", async (req, res) => {
  const data = req.body;
  try {
    await GlassModel.insertMany(data);

    res.send("data has been sent");
  } catch (error) {
    res.send("error");
  }
});
server.get("/glass", async (req, res) => {
  try {
    const data = await GlassModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});
server.get("/glass/:id", async (req, res) => {
  const ID = req.params.id;
  try {
    const data = await GlassModel.find({ _id: ID });
    res.send(data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});
server.delete("/glass/:id", async (req, res) => {
  const ID = req.params.id;
  try {
    const data = await GlassModel.findByIdAndDelete({ _id: ID });
    res.send(data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});
server.post("/post/kids", async (req, res) => {
  const data = req.body;
  try {
    await KidsModel.insertMany(data);

    res.send("data has been sent");
  } catch (error) {
    res.send("error");
  }
});
server.get("/kids", async (req, res) => {
  try {
    const data = await KidsModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});
server.get("/kids/:id", async (req, res) => {
  const ID = req.params.id;
  try {
    const data = await KidsModel.find({ _id: ID });
    res.send(data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});
server.delete("/kids/:id", async (req, res) => {
  const ID = req.params.id;
  try {
    const data = await KidsModel.findByIdAndDelete({ _id: ID });
    res.send(data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});
server.post("/post/men", async (req, res) => {
  const data = req.body;
  try {
    await MenModel.insertMany(data);

    res.send("data has been sent");
  } catch (error) {
    res.send("error");
  }
});
server.get("/men", async (req, res) => {
  try {
    const data = await MenModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});
server.get("/men/:id", async (req, res) => {
  const ID = req.params.id;
  try {
    const data = await MenModel.find({ _id: ID });
    res.send(data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});
server.delete("/men/:id", async (req, res) => {
  const ID = req.params.id;
  try {
    const data = await MenModel.findByIdAndDelete({ _id: ID });
    res.send(data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});
server.post("/post/tshirt", async (req, res) => {
  const data = req.body;
  try {
    await TshirtModel.insertMany(data);

    res.send("data has been sent");
  } catch (error) {
    res.send("error");
  }
});
server.get("/tshirt", async (req, res) => {
  try {
    const data = await TshirtModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});
server.get("/tshirt/:id", async (req, res) => {
  const ID = req.params.id;
  try {
    const data = await TshirtModel.find({ _id: ID });
    res.send(data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});
server.delete("/tshirt/:id", async (req, res) => {
  const ID = req.params.id;
  try {
    const data = await TshirtModel.findByIdAndDelete({ _id: ID });
    res.send(data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});
server.post("/post/watch", async (req, res) => {
  const data = req.body;
  try {
    await WatchModel.insertMany(data);

    res.send("data has been sent");
  } catch (error) {
    res.send("error");
  }
});
server.get("/watch", async (req, res) => {
  try {
    const data = await WatchModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});
server.get("/watch/:id", async (req, res) => {
  const ID = req.params.id;
  try {
    const data = await WatchModel.find({ _id: ID });
    res.send(data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});
server.delete("/watch/:id", async (req, res) => {
  const ID = req.params.id;
  try {
    const data = await WatchModel.findByIdAndDelete({ _id: ID });
    res.send(data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});
server.post("/post/women", async (req, res) => {
  const data = req.body;
  try {
    await WomenModel.insertMany(data);

    res.send("data has been sent");
  } catch (error) {
    res.send("error");
  }
});
server.get("/women", async (req, res) => {
  try {
    const data = await WomenModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});
server.get("/women/:id", async (req, res) => {
  const ID = req.params.id;
  try {
    const data = await WomenModel.find({ _id: ID });
    res.send(data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});
server.delete("/women/:id", async (req, res) => {
  const ID = req.params.id;
  try {
    const data = await WomenModel.findByIdAndDelete({ _id: ID });
    res.send(data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});
server.listen(3500, async () => {
  try {
    await connect;
    console.log("mongoDb connected");
  } catch (error) {
    console.log(error);
  }
  console.log(`server running at port 3500`);
});
