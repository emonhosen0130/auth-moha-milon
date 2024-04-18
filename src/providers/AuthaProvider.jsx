import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthaContext = createContext(null);

const AuthaProvider = ({ children }) => {

    const [user, setUser]= useState(null);

const createUser = (email, password)=>{
   return createUserWithEmailAndPassword(auth, email, password );
}
    const authInfo = { user,createUser }
    return (
        <AuthaContext.Provider value={authInfo}>
            {children}
        </AuthaContext.Provider>

    );
};

export default AuthaProvider;
AuthaProvider.propTypes = {
    children: PropTypes.none
}


/**
 * 1.create context and export it
 * 2.set provider with value
 * 3.use the Auth provider in the main.jsx file
 * 4.access children in the AuthProvider component as children and use it in the middle of the provider
 * 
 * */ 