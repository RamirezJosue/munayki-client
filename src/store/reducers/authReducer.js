import { types } from '../types/types';


const initialState = {
    isLoggedIn: false
}

export const authReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case types.authLogin:
            return {
                ...state,
                ...action.payload,
                isLoggedIn: true
            }
        default:
            return state;
    }
}
