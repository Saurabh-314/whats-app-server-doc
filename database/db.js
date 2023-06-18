const mongoose = require("mongoose");

const Connection = async () => {
  // const URL = "mongodb://127.0.0.1:27017/whats-app-doc";
  const URL = `mongodb+srv://saurabh-314:saurabh123@cluster0.jfrinjg.mongodb.net/whats-app-doc?retryWrites=true&w=majority`
  try {
    await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
    console.log("database connection successfull");
  } catch (error) {
    console.log("Error : ", error.message);
  }
}

module.exports = Connection;