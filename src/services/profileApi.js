import { request } from './request';

export default {
  get(status) {
    return request.get(`/${status}`);
  },
  update(status, data){
    return request.put(`/${status}`, data);
  }
};