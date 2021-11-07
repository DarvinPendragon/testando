import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

export const APIContext = createContext();

export const APIProvider = ({ children }) => {
  const [assets, setAssets] = useState('');

  useEffect(() => {
    async function GET_ASSETS() {
      const api = await axios.get(
        `https://my-json-server.typicode.com/tractian/fake-api/assets/`,
      );
      setAssets(api);
    }
    GET_ASSETS();
  }, []);

  return (
    <APIContext.Provider
      value={{
        assets,
      }}
    >
      {children}
    </APIContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(APIContext);
  const { id, setID } = context;
  return { id, setID };
}
