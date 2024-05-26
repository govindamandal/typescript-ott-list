import { Schema, model } from 'mongoose';

const tvShowSchema = new Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  genres: { type: [String], required: true },
  episodes: [{
    episodeNumber: { type: Number, required: true },
    seasonNumber: { type: Number, required: true },
    releaseDate: { type: Date, required: true },
    director: { type: String, required: true },
    actors: { type: [String], required: true },
  }],
});

export const TvShowModel = model('tvshow', tvShowSchema);
