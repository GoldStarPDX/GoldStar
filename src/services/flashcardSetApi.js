import { request } from './request';

export default { 
  getflashcardSet(id){
    return request.get(`/search/set/${id}`);
  }
};