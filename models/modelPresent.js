const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const { Schema } = mongoose;
const presentSchema = new Schema({
  name: {
  type: String,
  required: [true, 'You must introduce a title to insert new show']
  },
  image: String,
  price: Number,
  recipient: String,
  description: String
});

const Present = mongoose.model('Present', presentSchema);

module.exports = Present;
