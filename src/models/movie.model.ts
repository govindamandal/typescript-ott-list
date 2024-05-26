import { Schema, model } from 'mongoose';

const movieSchema = new Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  genres: { type: [String], required: true },
  releaseDate: { type: Date, required: true },
  director: { type: String, required: true },
  actors: { type: [String], required: true },
});

export const MovieModel = model('movie', movieSchema);
