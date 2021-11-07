import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [login, setLogin] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [log, setLog] = useState(false);

  function catchEmail(event) {
    setEmail(event.target.value);
  }

  function catchPassword(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (email === 'teste@hotmail.com' && password === '123456') {
      console.log('logado');
      setLog(true);
    } else {
      setError('Verifique se as informações estão corretas e tente novamente');
    }
  }

  return (
    <AuthContext.Provider
      value={{
        login,
        setLogin,
        handleSubmit,
        catchEmail,
        catchPassword,
        error,
        log,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  const { login, setLogin } = context;
  return { login, setLogin };
}
