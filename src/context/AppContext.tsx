import { ReactNode, createContext, useContext, useState } from 'react';

import { AppContextType } from './models';

const AppContext = createContext({} as AppContextType);

function AppContextProvider({ children }: { children: ReactNode }) {
  const [isHome, setIsHome] = useState<boolean>(true);
  const [isAddingEnterprises, setIsAddingEnterprises] = useState<boolean>(false);
  const [isEditingEnterprises, setIsEditingEnterprises] = useState<boolean>(false);

  return (
    <AppContext.Provider
      value={{
        isHome,
        isAddingEnterprises,
        isEditingEnterprises,
        setIsHome,
        setIsAddingEnterprises,
        setIsEditingEnterprises,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
    return useContext(AppContext);
};

export { useAppContext, AppContextProvider };