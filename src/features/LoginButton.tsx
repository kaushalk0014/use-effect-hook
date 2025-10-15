import React, {useContext} from "react";

import AuthProvider from "./AuthProvider";


const LoginButton = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthProvider as any);
    return (
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
            {isLoggedIn ? 'Logout' : 'Login'}
        </button>
    );
}
export default LoginButton;