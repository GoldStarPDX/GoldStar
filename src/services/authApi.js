import { request } from './request';

export default {
  verify(status) {
    return request.get(`/auth${status}/verify`);
  },

  signin(credentials, status) {
    return request.post(`/auth${status}/signin`, credentials);
  },

  signup(user, status) {
    return request.post(`/auth${status}/signup`, user);
  },

  getUser() {
    // TODO: maybe change this shit to teach and student
    return request.get('/me');
  }
};