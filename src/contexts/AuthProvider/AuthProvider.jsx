import { createContext, useEffect, useState } from 'react';
import {getAuth, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const providerLogin = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  
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

  const authInfo = {user, setUser, providerLogin, logOut};

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
