import {
    PROCESS_TEXT,
    PROCESS_FAIL, 
    CLEAR_DATA
} from '../actions/types';

const initialState = {
    text: '',
    analysis: null
}

export default function(state = initialState, action) {
    const {type, payload} = action; 

    switch(type) {
        case PROCESS_TEXT:
            return {
                text: payload.text, 
                analysis: payload.analysis
            }
        case PROCESS_FAIL: 
        case CLEAR_DATA:
            return {
                text: '',
                analysis: null
            }
        default: 
            return state; 
    }
}