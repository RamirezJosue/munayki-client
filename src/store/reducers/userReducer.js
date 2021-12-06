import { types } from "../types/types";


const initialState = {
    users: []
}

export const userReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case types.userLoaded:
            return {
                ...state,
                users: [ ...action.payload ]
            }
        default:
            return state;
    }
}