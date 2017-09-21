/* SET API */
import { request } from './request';

export default {
  getSet(id) {
    return request.get(`/flashcardSet/${id}`);
  },
  addCards(setId, data) {
    return request.post(`/flashcardSet/${setId}/cards`, data);
  },
  deleteCards(setId, cardId) {
    return request.delete(`/flashcardSet/${setId}/cards/${cardId}`);
  }
};