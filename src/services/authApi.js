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

  getUser(status) {
    return request.get(`/${status}`);
  },

  update(status, data) {
    return request.put(`/${status}`, data);
  }

};