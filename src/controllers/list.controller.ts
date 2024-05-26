import { Request, Response } from 'express';
import { ListService } from '../services/list.service';

const listService = new ListService();

export const addItem = async (req: Request, res: Response) => {
  try {
    const { userId, itemId } = req.body;
    await listService.addItem(userId, itemId);
    res.status(200).send('Item added to list');
  } catch (err: any) {
    res.status(500).send(err.message);
  }
};

export const removeItem = async (req: Request, res: Response) => {
  try {
    const { userId, itemId } = req.body;
    await listService.removeItem(userId, itemId);
    res.status(200).send('Item removed from list');
  } catch (err: any) {
    res.status(500).send(err.message);
  }
};

export const listItems = async (req: Request, res: Response) => {
  try {
    const { userId, page = 1, limit = 10 } = req.query;
    const items = await listService.listItems(userId as string, Number(page), Number(limit));
    res.status(200).json(items);
  } catch (err: any) {
    res.status(500).send(err.message);
  }
};
