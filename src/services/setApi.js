/* SET API */
import { request } from './request';

export default {
  getSet(id) {
    return request.get(`/flashcardSet/${id}`);
  },
  addCard() {
    return request.post('/flashcardSet');
  },
  deleteCard(id) {
    return request.delete(`/flashcardSet/${id}`);
  }
};