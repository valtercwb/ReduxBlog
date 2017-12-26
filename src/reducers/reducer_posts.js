import { FETCH_POSTS, FETCH_POST, DELETE_POST }  from '../actions';
import _ from 'lodash';

export default function (state= {},action){
    switch (action.type){
        case DELETE_POST:
        return _.omit(state,action.payload);

        case FETCH_POSTS:
        //console.log(_.toObject(action.payload.data));
        return _.mapKeys(action.payload.data,'id');

        case FETCH_POST:
        // const post = action.payload.data;
        // const newState =  {...state };
        // newState[post.id] = post;
        //return newState;

        //      by placing the square braces we doing key interpolation
        
        return { ...state, [action.payload.data.id]: action.payload.data };
       
        default:
        return state;   
    }
}