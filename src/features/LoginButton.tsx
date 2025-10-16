import React, {useContext, createContext} from "react";
 

const AuthContext = createContext(true as any);

const LoginButton = () => {


    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
    return (
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
            {isLoggedIn ? 'Logout' : 'Login'}
        </button>
    );
}
export default LoginButton;