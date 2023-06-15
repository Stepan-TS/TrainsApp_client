import React, { useMemo, useState } from "react";
import { useMatch } from "react-router-dom";

type Props = {
  children: React.ReactNode,
};

interface IContextValue {
  startCity: string,
  setStartCity: React.Dispatch<React.SetStateAction<string>>,
  finishCity: string,
  setFinishCity:  React.Dispatch<React.SetStateAction<string>>,
}

export const AppContext = React.createContext<IContextValue>({
  startCity: '',
  setStartCity: () => {},
  finishCity: '',
  setFinishCity:  () => {},
})

export const AppProvider: React.FC<Props> = ({ children }) => {
  const [startCity, setStartCity] = useState('');
  const [finishCity, setFinishCity] = useState('');

  const contextValue = useMemo(() => {
    return {
      startCity,
      setStartCity,
      finishCity,
      setFinishCity
    };
  }, [startCity, finishCity]);

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  )
}
