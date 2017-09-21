/* SETS API */
import { request } from './request';

export default {
  getAllSets() {
    return request.get('/flashcardSet');
  },
  addSet() {
    return request.post('/flashcardSet');
  },
  updateSet(id) {
    return request.put(`/flashcardSet/${id}`);
  },
  deleteSet(id) {
    return request.delete(`/flashcardSet/${id}`);
  }
};