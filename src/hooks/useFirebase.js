import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import initializeAuth from '../firebase/firebase.init'
import { useState } from 'react';
import { useEffect } from 'react';

initializeAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();

    const signInUsingGoogle = () =>{
        setIsLoading(true);

        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
        // .finally(setIsLoading(false));
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user);
            }
            else{
                setUser({});
            }
            setIsLoading(false)
        })
        return () => unsubscribed;
    }, [])

    const logOut = () =>{
        setIsLoading(true)
        signOut(auth)
        .then(() => {})
        .finally((setIsLoading(false)));
    }

    return (
        {
            user,
            signInUsingGoogle,
            logOut,
            isLoading
        }
    );
};

export default useFirebase;