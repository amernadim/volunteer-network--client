import React, { useEffect } from 'react';
import { createContext } from 'react';
import app from '../firebase/firebase.config';
import {getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth'
import { useState } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
  const [user,setUser] = useState(null);
  const [loading, setLoading] = useState(true)

  const googleProvider = new GoogleAuthProvider()

  
  const googleSingIn = () => { 
    setLoading(true)  
    return signInWithPopup(auth, googleProvider)
  }

  const logOut = () => { 
    localStorage.removeItem('volunteer-token') 
    setLoading(true) 
    return signOut(auth)
  }
  
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth,(currentUser)=> { 
         setLoading(false)  
         setUser(currentUser)
     })
     return () => unSubscribe()
   },[])

   const authInfo = {
    user,
    googleSingIn,
    logOut,
    loading
  }
 
  return (
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>         
  );
};

export default AuthProvider;