import { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../../firebase/firebase.config';
import {setToLocalStorage, getFromLocalStorage} from '../../utilities/utilities';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // get local storage theme and set to state
  const localTheme = getFromLocalStorage('theme') || "dark";
  const [theme, setTheme] = useState(localTheme);

  // create user with email and password
  const createUser = ({email, password}) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // email verification link
  const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser);
  }

  // Login with email and password
  const login = ({email, password}) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  // login with provider(Google and github)
  const providerLogin = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // update user info
  const updateUserData = (data) => {
    return updateProfile(auth.currentUser, data)
  }
  
  // logout
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // on auth change set the user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if(currentUser == null || currentUser.emailVerified || currentUser.providerData[0].providerId === "github.com"){
        setUser(currentUser);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // theme controller
  const themeChanger = (newTheme) => {
    setToLocalStorage('theme', newTheme);
    setTheme(newTheme);
  }

  // auth values
  const authInfo = {loading, setLoading, user, setUser, createUser, verifyEmail, login, providerLogin, updateUserData, logOut, theme, themeChanger};

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
