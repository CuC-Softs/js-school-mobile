import React from 'react';
import {createContext, useCallback, useMemo, useState} from 'react';

type AuthContextData = {
  user: any;
  signIn(data: any): Promise<void>;
  signOut(): void;
  isSigned: boolean;
};

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const [user, setUser] = useState<any>(null);

  const signIn = useCallback(async (data: any) => {
    // const user = await signInAsync();
    console.log(data);
    setUser({});
  }, []);

  const signOut = useCallback(() => {
    setUser(null);
  }, []);

  const isSigned = useMemo(() => !!user, [user]);

  return (
    <AuthContext.Provider value={{user, signIn, signOut, isSigned}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};
