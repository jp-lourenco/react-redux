import React from 'react';
import logo from '../../assets/logo.svg';
import { useSelector, useDispatch } from 'react-redux';
import { signInRequest } from '../../store/modules/auth/actions';

import './styles.css';

const SignIn = () => {
    const { token, loadingSignInRequest } = useSelector(({ auth }) => auth);
    const dispatch = useDispatch();

    console.log('TOKEN: ', token);

    return (
        <div className="sign-in-page">
            <img src={logo} alt="React Logo" />
            <input type="text" defaultValue="test@email.com" />
            <input type="password" defaultValue="12345678" />
            <button
                onClick={() =>
                    dispatch(
                        signInRequest({
                            email: 'test@email.com',
                            password: '12345',
                        }),
                    )
                }
            >
                {loadingSignInRequest ? 'Carregando' : 'Entrar'}
            </button>
        </div>
    );
};

export default SignIn;
