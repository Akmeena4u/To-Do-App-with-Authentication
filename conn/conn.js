const mongoose = require("mongoose");

const conn = async (req, res) => {
  try {
    await mongoose
      .connect(
        "mongodb://Ak:Bybv9090@ac-fbrea7z-shard-00-00.lhtjqvk.mongodb.net:27017,ac-fbrea7z-shard-00-01.lhtjqvk.mongodb.net:27017,ac-fbrea7z-shard-00-02.lhtjqvk.mongodb.net:27017/?ssl=true&replicaSet=atlas-nou7o0-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"
      )
      .then(() => {
        console.log("Connected");
      });
  } catch (error) {
    console.log(error);
  }
};
conn();
