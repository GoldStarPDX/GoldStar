import { request } from './request';

const URL = '/courses';

export default {
  get() {
    return request.get(URL);
  },

  add(course) {
    return request.post(URL, course);
  },

  remove(id) {
    return request.delete(`${URL}/${id}`);
  }
};