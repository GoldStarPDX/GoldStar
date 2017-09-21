/* SET API */
import { request } from './request';

export default {
  getSet(id) {
    return request.get(`/flashcardSet/${id}`);
  },
  addCards(setId) {
    return request.post(`/flashcardSet/${setId}/cards`);
  },
  deleteCards(setId) {
    return request.delete(`/flashcardSet/${setId}/cards`);
  }
};