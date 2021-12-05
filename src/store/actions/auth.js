import { fetchConToken, fetchSinToken } from '../../utils/fetch';
import { types } from '../types/types';

export const startLogin = (cedula, password) => {
    return async (dispatch) => {
        const resp = await fetchSinToken('login', { cedula, password }, 'POST');
        const { token, name, uid, msg, ok } = await resp.json();
        if (ok) {
            localStorage.setItem('token', token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(login({
                uid,
                name
            }))
        } else {
            console.log(msg)
        }
    }
}

export const startChecking = () => {
    return async (dispatch) => {
        const resp = await fetchConToken('login/renew');
        const body = await resp.json();
        if (body.ok) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch(login({
                uid: body.uid,
                name: body.name
            }))
        } else {
            dispatch(checkingFinish());
        }
    }
}

const checkingFinish = () => ({ type: types.authCheckingFinish });

const login = (user) => ({
    type: types.authLogin,
    payload: user
});

export const startLogout = () => {
    return (dispatch) => {
        localStorage.clear();
        dispatch(logout())
    }
}

const logout = () => ({ type: types.authLogout })