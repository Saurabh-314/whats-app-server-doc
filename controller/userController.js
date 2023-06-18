const User = require("../model/userModel.js");

module.exports.addUser = async (req, res) => {
  try {
    let exist = await User.findOne({ sub: req.body.sub })
    if (exist) {
      return res.status(200).json({ msg: "user already exists" })
    }
    const newUser = new User(req.body);
    await newUser.save();
    return res.status(201).json(newUser);

  } catch (error) {
    res.status(500), json(error)
  }
}
module.exports.getUser = async (req, res) => {
  try {
    const user = await User.find({});
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
}
