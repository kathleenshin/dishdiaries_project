import express from 'express';

import { getPosts } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts) => {
    res.send('THIS WORKS!');
};

export default router;