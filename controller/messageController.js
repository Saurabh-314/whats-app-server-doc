const Message = require("../model/messageModel.js");


module.exports.newMessage = async (request, response) => {
  const newMessage = new Message(request.body);
  try {
    await newMessage.save();
    response.status(200).json("Message has been sent successfully");
  } catch (error) {
    response.status(500).json(error);
  }

}

module.exports.getMessage = async (request, response) => {
  try {
    const messages = await Message.find();
    response.status(200).json(messages);
  } catch (error) {
    response.status(500).json(error);
  }
}