import React,{useReducer} from 'react';
import createDataContext from './createDataContext'

const newsReducer = (state, action) => {
    switch (action.type) {
        case 'top_headline':
            
            break;
    
        default:
            break;
    }
}

const topHeadline = (dispatch) => {
    return () => {
        dispatch({type: 'top_headline'})
    }
}

export const {Context, Provider } = createDataContext(
    newsReducer,
    { topHeadline },
    []
    
);
