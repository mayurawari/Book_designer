import { Schema, model } from "mongoose";

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  frontCover: { type: String, required: true },
  backCover: { type: String, required: true },
  pages: [{
    pageNumber: Number,
    content: String,
    backgroundImage: String
  }],
  createdAt: { type: Date, default: Date.now }
});

const bookmodel = model('Book', bookSchema);

export default bookmodel;