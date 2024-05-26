import { Router } from 'express';
import listRoutes from './list.route';

const router = Router();

router.use('/list', listRoutes);

export default router;

