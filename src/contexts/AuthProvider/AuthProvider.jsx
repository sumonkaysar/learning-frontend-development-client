import { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = ({email, password}) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const providerLogin = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const updateUserData = (data) => {
    return updateProfile(auth.currentUser, data)
  }
  
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log('user', currentUser);
      // if(currentUser == null || currentUser.emailVerified){
        setUser(currentUser);
      // }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {user, setUser, createUser, providerLogin, updateUserData, logOut};

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
