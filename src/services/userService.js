import axios from 'axios';
import { errorsToast } from '../utils/errorsUtil';
import * as constants from '../constants/index';

export async function signUp(user) {
    let response;

    try {
        response = await axios.post(constants.SIGNUP_ENDPOINT, user)
    } catch (err) {
        response = err.response
        errorsToast(err.response.data)
    }

    return response.status
}

export async function signIn(user) {
    let response;

    try {
        response = await axios.post(constants.SIGNIN_ENDPOINT, user)
    } catch (err) {
        response = err.response
        errorsToast(err.response.data)
    }

    return { status: response.status, data: response.data }
}