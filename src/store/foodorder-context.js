import { createContext, useState } from "react";

export const FoodOrderContext = createContext();

const FoodorderContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <FoodOrderContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </FoodOrderContext.Provider>
  );
};

export default FoodorderContextProvider;
