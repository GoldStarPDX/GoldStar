import store from '../store/index';
import superagent from 'superagent';

let token = '';
let status = '';

const storage = localStorage;

store.subscribe(() => {
  const { token: newToken, user } = store.getState().auth;

  if (newToken !== token) {
    token = newToken;
    token ? storage.token = token : storage.clear('token');
    
  }
  if (user && user.status !== status ) {
    status = user.status;
    status ? storage.status = status : storage.clear('status');

  } 
});

export const getStoredToken = () => ({ token: storage.token, status: storage.status });

export const API_URL = '/api';

const wrap = cmd => cmd
  .set('Authorization', token)
  .then(
    r => r.body, 
    ({ response }) => {
      const { body, text } = response;
      const error = body ? body.message || body.error || body : text;
      throw error;
    }
  );

export const request = {
  get(url) {
    return wrap(superagent.get(`${API_URL}${url}`));
  },
  post(url, data) {
    return wrap(superagent.post(`${API_URL}${url}`).send(data));
  },
  delete(url) {
    return wrap(superagent.delete(`${API_URL}${url}`));
  },
  put(url,data) {
    return wrap(superagent.put(`${API_URL}${url}`).send(data));
  }
};