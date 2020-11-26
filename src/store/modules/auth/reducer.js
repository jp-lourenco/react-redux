const initialState = {
    loadingSignInRequest: false,
    isSignedIn: false,
    token: null,
    error: false,
};

export default function auth(state = initialState, action) {
    switch (action.type) {
        case '@auth/SIGN_IN_REQUEST':
            return {
                ...state,
                loadingSignInRequest: true,
            };
        case '@auth/SIGN_IN_SUCCESS':
            return {
                ...state,
                loadingSignInRequest: false,
                isSignedIn: true,
                token: action.payload.token,
            };
        case '@auth/SIGN_IN_FAILURE':
            return {
                ...state,
                error: true,
            };

        default:
            return state;
    }
}
