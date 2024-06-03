
import pdfkit from 'pdfkit';
import fs from 'fs';
import Book from '../model/bookschema.js';

const createBook = async (req, res) => {
  try {
    const { title, author, pages } = req.body;
    const frontCover = req.files.frontCover[0].path;
    const backCover = req.files.backCover[0].path;

    const newBook = new Book({
      title,
      author,
      frontCover,
      backCover,
      pages: JSON.parse(pages)
    });

    await newBook.save();

    const doc = new pdfkit();
    const pdfPath = `uploads/${newBook._id}.pdf`;

    doc.pipe(fs.createWriteStream(pdfPath));

    doc.image(frontCover, 0, 0, { width: doc.page.width, height: doc.page.height });
    doc.fontSize(30).text(title, 100, 100);
    doc.fontSize(20).text(author, 100, 150);
    doc.addPage();

    newBook.pages.forEach(page => {
      if (page.backgroundImage) {
        doc.image(page.backgroundImage, 0, 0, { width: doc.page.width, height: doc.page.height });
      }
      doc.fontSize(15).text(page.content, 100, 100);
      doc.addPage();
    });

    doc.image(backCover, 0, 0, { width: doc.page.width, height: doc.page.height });

    doc.end();

    res.status(201).json(newBook);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });

    res.json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export { createBook, getBooks, getBookById };
