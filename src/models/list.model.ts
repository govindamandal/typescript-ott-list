import { Schema, model } from 'mongoose';

const listSchema = new Schema({
  userId: { type: String, required: true, unique: true },
  items: [{ type: String, unique: true }],
});

export const ListModel = model('list', listSchema);
