import { request } from './request';

export default { 
  getSearch(query){
    return request.get(`/search/${query.search}`);
  }
};