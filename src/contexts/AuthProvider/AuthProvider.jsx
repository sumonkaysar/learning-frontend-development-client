import {getAuth} from 'firebase/auth';
import { createContext, useState } from 'react';
import app from '../../../../dragon-news-client/src/firebase/firebase.config';

export const AuthContext = createContext();
// const auth = getAuth(app);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState({ photoURL: 'logo.png', displayName: 'Sumon Kaysar' });
  const authInfo = {user};

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
