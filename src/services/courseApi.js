import { request } from './request';

export default {
  getCourse(id) {
    return request.get(`/courses/${id}`);
  },

  addStudent(courseId, data) {
    return request.post(`/courses/${courseId}/students`, data);
  },

  removeStudent(courseId, studentId) {
    return request.delete(`/courses/${courseId}/students/${studentId}`);
  },

  addSet(courseId, data) {
    return request.post(`/courses/${courseId}/sets`, data);
  },

  removeSet(courseId, setId) {
    return request.delete(`/courses/${courseId}/sets/${setId}`);
  }
};