import actions from './actions';
import User from '../store/models/user';

function loggedIn() {

    const user = new User(true, 'pera', 'lege', 'Per Antonsen');
    return {
        type: actions.LOGIN,
        user
    }
}

function signOut() {
    return (dispatch) => {
        setTimeout(() => {
            return dispatch({
                type: actions.SIGNOUT,
            });
        }, 500);
    }
}

function login() {
    return (dispatch) => {
        setTimeout(() => {
            return dispatch(loggedIn());
        }, 500);
    }
}

export { login, signOut };
