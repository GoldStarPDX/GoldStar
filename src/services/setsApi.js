import { request } from './request';

export default {
  getAllSets() {
    return request.get('/flashcardSet');
  },
  addSet(set) {
    return request.post('/flashcardSet', set);
  },
  updateSet(id) {
    return request.put(`/flashcardSet/${id}`);
  },
  deleteSet(id) {
    return request.delete(`/flashcardSet/${id}`);
  }
};