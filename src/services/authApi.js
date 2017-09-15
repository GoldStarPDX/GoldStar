import { request } from './request';

export default {
  verify() {
    return request.get('/auth/verify');
  },

  signin(credentials) {
    return request.post('/auth/signin', credentials);
  },

  signup(user) {
    return request.post('/auth/signup', user);
  },

  getUser() {
    // TODO: maybe change this shit to teach and student
    return request.get('/me');
  }
};