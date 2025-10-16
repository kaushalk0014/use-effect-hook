import React from "react";
import AuthProvider from "./AuthProvider";
import LoginButton from "./LoginButton";

const ExampleOfUseContext = () => {

    return (
        <div>
            <h3> Example Of Use Context </h3>

            <AuthProvider>
                <LoginButton />
            </AuthProvider>
        </div>
    );
}

export default ExampleOfUseContext;