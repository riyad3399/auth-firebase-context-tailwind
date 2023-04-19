import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';


export const UserContext = createContext(null);

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        signOut(auth)
    }

    const signInGoogle = () => {
      return signInWithPopup(auth, googleProvider)
    }

    const signInGithub = () => {
        return signInWithPopup(auth, githubProvider)
    }

// observe auth state change
    useEffect(() => {
      const unsubscribe =  onAuthStateChanged(auth, currentUser => {
          console.log('auth state change', currentUser);
          setUser(currentUser)
          setLoading(false)
      })
        return () => {
            unsubscribe();
        }
    },[])


    const userInfo = {
        user,
        loading,
        createUser,
        signIn,
        signInGoogle,
        signInGithub,
        logOut
    }
    
    return (
        <UserContext.Provider value={userInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthProviders;