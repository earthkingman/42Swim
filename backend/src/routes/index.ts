import express, { Router } from 'express';
import { authRouter } from './auth';
import { postRouter } from './post';
import { pageRouter } from './page';
import { userRouter } from './user';
import { hashTagRouter } from './hashtag';

const router: Router = express.Router();
router.use('/auth', authRouter);
router.use('/posts', postRouter);
router.use('/pages', pageRouter);
router.use('/hashtags', hashTagRouter);
router.use('/users', userRouter);
export const applicationRouter: Router = router;