const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);
// class Author(Model):
// first_name = models.TextField()
// last_name = models.TextField()

const authorSchema = new mongoose.Schema({
  seq:{type:Number,unique:true},
  
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  Create_on: {
    type: Date,
    required: true,
    default: Date.now
  }
})

authorSchema.plugin(AutoIncrement, {inc_field: 'seq'});


module.exports = mongoose.model('authors', authorSchema)