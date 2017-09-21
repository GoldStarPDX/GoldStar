import { request } from './request';

export default {
  getAllSets() {
    return request.get('/flashcardSet');
  },
  getTeacherSet(id) {
    return request.get(`/flashcardSet/${id}`);
  },
  addTeacherSet() {
    return request.post('/flashcardSet');
  },
  updateTeacherSet(id) {
    return request.put(`/flashcardSet/${id}`);
  },
  deleteTeacherSet(id) {
    return request.delete(`/flashcardSet/${id}`);
  }
};