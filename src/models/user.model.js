const mongoose = require('mongoose');

const { Schema } = mongoose;

const SchemaDefinition = {
  userName: {
    type: String,
    require: true,
  },
  userId: {
    type: Number,
    require: true,
  },
  photo: {
    type: String,
  },
  allowView: {
    type: Number,
    default: 0,
  },
  bloodType: {
    type: Number,
    default: 8,
  },
  diseases: [{
    title: String,
    dateStart: Date,
    dateEnd: Date,
    color: Number,
  }],
  allergens: [{
    title: String,
    date: Date,
    color: Number,
  }],
  birthday: {
    type: Date,
  },
  sex: {
    type: Number,
  },
};

const UserSchema = new Schema(SchemaDefinition, {
  timestamps: { createdAt: 'createdAt' },
  versionKey: false,
});

// UserSchema.pre(/update|save/i, (next) => {
//   this.updatedAt = Date.now();
//   return next();
// });

UserSchema.index({ vk_user_id: 1 });

const User = mongoose.model('user', UserSchema);

module.exports = { SchemaDefinition, UserSchema, User };
