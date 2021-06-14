const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  age: {
    type: Number,
  },
  email: {
    type: String,
    required: true,
    unique: [true, 'Email id already present'],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email")
      }
    }
  },
  profilePicURL: {
    type: String
  },
  password: {
    type: String,
    required: true
  },
  dateCreation: {
    type: Date,
    default: Date.now
  }
},
  password: {
  type: String,
  required: true
},
  dateCreation: {
  type: Date,
  default: Date.now
}
});

userSchema.pre("save", function (next) {
  const user = this

  if (this.isModified("password") || this.isNew) {
    bcrypt.genSalt(10, function (saltError, salt) {
      if (saltError) {
        return next(saltError);
      } else {
        bcrypt.hash(user.password, salt, function (hashError, hash) {
          if (hashError) {
            return next(hashError);
          }
          user.password = hash;
          next();
        })
      }
    })
  } else {
    return next();
  }
})


const User = new mongoose.model('User', userSchema);
module.exports = User;