const mongoose = require('mongoose')

// class Book(Model):
// name = models.TextField()
// isbn = models.TextField()
// author = models.ForeignKey(Author)

const bookSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },
  isbn: {
    type: String,
    required: true,
    unique: true
  },
  auther_id:{
      type: mongoose.Schema.ObjectId,
      require: true,
      ref :'authors'

},
  Create_on: {
    type: Date,
    required: true,
    default: Date.now
  }
})

module.exports = mongoose.model('books', bookSchema)