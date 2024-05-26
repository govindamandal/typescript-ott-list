import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  id: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  preferences: {
    favoriteGenres: { type: [String], enum: ['Action', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Romance', 'SciFi'] },
    dislikedGenres: { type: [String], enum: ['Action', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Romance', 'SciFi'] },
  },
  watchHistory: [{
    contentId: { type: String },
    watchedOn: { type: Date },
    rating: { type: Number },
  }],
});

export const UserModel = model('user', userSchema);
