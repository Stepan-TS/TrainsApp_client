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
  shouldShowForm: boolean,
  setShouldShowForm: React.Dispatch<React.SetStateAction<boolean>>
}

export const AppContext = React.createContext<IContextValue>({
  startCity: '',
  setStartCity: () => {},
  finishCity: '',
  setFinishCity:  () => {},
  shouldShowForm: false,
  setShouldShowForm: () => {}
})

export const AppProvider: React.FC<Props> = ({ children }) => {
  const [startCity, setStartCity] = useState('');
  const [finishCity, setFinishCity] = useState('');
  const [shouldShowForm, setShouldShowForm] = useState(false);

  const contextValue = useMemo(() => {
    return {
      startCity,
      setStartCity,
      finishCity,
      setFinishCity,
      shouldShowForm,
      setShouldShowForm
    };
  }, [startCity, finishCity, shouldShowForm]);

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  )
}
