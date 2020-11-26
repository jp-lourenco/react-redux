import { takeLatest, call, put, all, delay } from 'redux-saga/effects';
import api from '../../../services/api';
import * as actions from './actions';

export function* signIn({ payload }) {
    try {
        const { email, password } = payload;

        const { data } = yield call(api.post, '', { email, password });
        yield delay(500);

        yield put(actions.signInSuccess({ token: data.token }));
    } catch (err) {
        yield put(actions.signInFailure());
    }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
