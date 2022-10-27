import { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../../firebase/firebase.config';
import {setToLocalStorage, getFromLocalStorage} from '../../utilities/utilities';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // themes
  const localTheme = getFromLocalStorage('theme') || "dark";
  const [theme, setTheme] = useState(localTheme);

  const createUser = ({email, password}) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser);
  }

  const login = ({email, password}) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

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
      if(currentUser == null || currentUser.emailVerified || currentUser.providerData[0].providerId === "github.com"){
        setUser(currentUser);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const themeChanger = (newTheme) => {
    setToLocalStorage('theme', newTheme);
    setTheme(newTheme);
  }

  const authInfo = {loading, setLoading, user, setUser, createUser, verifyEmail, login, providerLogin, updateUserData, logOut, theme, themeChanger};

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
