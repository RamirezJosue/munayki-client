import { fetchConToken } from "../../utils/fetch"
import { types } from "../types/types";


export const userStartLoading = () => {
    return async(dispatch) => {
        try {
            const resp = await fetchConToken('users');
            const body = await resp.json();
            dispatch(userLoaded(body.users))
        } catch (error) {   
            console.log(error)
        }
    }
}

const userLoaded = (users) => ({
    type: types.userLoaded,
    payload: users
})