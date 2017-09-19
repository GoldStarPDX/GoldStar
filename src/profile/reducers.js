import * as actions from './constants';

export function profile(state={}, { type, payload }){
    switch(type){
        case actions.FETCHED_PROFILE:
            return payload;
        case actions.UPDATED_IMAGE:
        case actions.UPDATED_TEXT:
            return payload;
        default:
            return state;
    }
}

export function profileError(state=null, { type, payload }){
    switch(type){
        case actions.FETCHED_PROFILE_ERROR:
        case actions.UPDATED_IMAGE_ERROR:
        case actions.UPDATED_TEXT_ERROR:
            return payload;
        case actions.FETCHING_PROFILE:
        case actions.UPDATING_IMAGE:
        case actions.UPDATING_TEXT:
            return null;
        default:    
            return state;
    }
}

export function profileLoading(state=false, { type, payload }){
    switch(type){
        case actions.FETCHING_PROFILE:
        case actions.UPDATING_IMAGE:
        case actions.UPDATING_TEXT:
            return true;
        case actions.FETCHED_PROFILE:
        case actions.UPDATED_IMAGE:
        case actions.UPDATED_TEXT:
        case actions.FETCHED_PROFILE_ERROR:
        case actions.UPDATED_IMAGE_ERROR:
        case actions.UPDATED_TEXT_ERROR:
            return false;
        default:
            return state;
    }
}