import { request } from './request';

export default { 
  getSearch(query){
    console.log('IM A QUERY', query.search);
    return request.get(`/search/${query.search}`);
  }
};