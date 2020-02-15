import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    ADD_CONTACT
} from '../actions/types';

const initialState = {
    user: null
}

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: payload
            }
        case REGISTER_FAIL:
        case LOGIN_FAIL:
        case LOGOUT:
            return {
                ...state,
                user: null
            }
        case ADD_CONTACT:
            return {
                ...state, 
                user: {...state.user, contacts: [...state.user.contacts, payload]}
            }
        default:
            return state;
    }
}