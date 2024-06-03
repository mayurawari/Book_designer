
import express from 'express';
import multer from 'multer';
import { createBook, getBooks, getBookById } from '../controllers/bookcontroller.js';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/books', upload.fields([{ name: 'frontCover' }, { name: 'backCover' }]), createBook);
router.get('/books', getBooks);
router.get('/books/:id', getBookById);

export default router;
