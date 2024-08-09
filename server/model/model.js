const mongoose=require('mongoose');


///helper function 
function isDateInPast(date) {
    return new Date(date) < new Date();
  }
var schema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true,
        unique:true,
        match: [/.+@.+\..+/, 'Invalid email address']
    },
    gender:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true,
        min:[1,'age must be atleast 1 '],
        max:[70,'age must be at most 70'],
        validate: {
            validator: function(value) {
              return Number.isInteger(value);
            },
            message: '{VALUE} is not an integer value'
    }
},
dob:{
    type: Date,
    required: true,
    validate: {
      validator: function(value) {
        return !isNaN(new Date(value)) && isDateInPast(value);
      },
      message: 'Invalid date of birth. Ensure the date is valid'
    }
  },
  contact: {
    type: String,
    required: true,
    match: [
      /^[0-9]{10}$/, // Regex for a 10-digit number
      'Invalid contact number. It should be exactly 10 digits.'
    ],
    validate: {
      validator: function(value) {
        return /^[0-9]{10}$/.test(value);
      },
      message: 'Invalid contact number. It should be exactly 10 digits.'
    }
  },
  qualification:{
    type: String,
    required: true
  }
})
const Userdb=mongoose.model('userdb',schema);
module.exports=Userdb;