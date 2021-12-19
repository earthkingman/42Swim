import express, { Router } from 'express';
import { authRouter } from './auth';
import { postRouter } from './post';
import { pageRouter } from './page';
import { userRouter } from './user';
import { rankRouter } from './rank';
import { hashTagRouter } from './hashtag';

const router: Router = express.Router();
router.use('/api/auth', authRouter);
router.use('/api/posts', postRouter);
router.use('/api/pages', pageRouter);
router.use('/api/hashtags', hashTagRouter);
router.use('/api/users', userRouter);
router.use('/api/ranking', rankRouter);
export const applicationRouter: Router = router;