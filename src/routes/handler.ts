import { Router } from 'express';
import { logger } from '../middlewares/logger';
import router from './api/routes';

const handler = Router();

handler.use('/api', logger, router);

export default handler;
