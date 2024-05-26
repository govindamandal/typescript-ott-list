import { ListModel } from '../models/list.model';

export class ListService {
  async addItem(userId: string, itemId: string) {
    await ListModel.findOneAndUpdate(
      { userId },
      { $addToSet: { items: itemId } },
      { upsert: true, new: true }
    );
  }

  async removeItem(userId: string, itemId: string) {
    await ListModel.findOneAndUpdate(
      { userId },
      { $pull: { items: itemId } },
      { new: true }
    );
  }

  async listItems(userId: string, page: number, limit: number) {
    const list = await ListModel.findOne({ userId })
      .select({ items: { $slice: [(page - 1) * limit, limit] } })
      .exec();

    return list?.items || [];
  }
}
