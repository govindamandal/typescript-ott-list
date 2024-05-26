import { Router } from 'express';
import { addItem, removeItem, listItems } from '../controllers/list.controller';

const listRoutes = Router();

listRoutes.get('/', listItems);
listRoutes.post('/add', addItem);
listRoutes.delete('/remove', removeItem);

export default listRoutes;

