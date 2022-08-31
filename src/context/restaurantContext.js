import { createContext, useState } from "react";

const RestaurantContext = createContext();

export function RestaurantProvider({ children }) {
  const [tables, setTables] = useState([
    { id: 1, isBusy: false, inOrder: false, order: [] },
    { id: 2, isBusy: false, inOrder: false, order: [] },
    { id: 3, isBusy: false, inOrder: false, order: [] },
    { id: 4, isBusy: false, inOrder: false, order: [] },
    { id: 5, isBusy: false, inOrder: false, order: [] },
    { id: 6, isBusy: false, inOrder: false, order: [] },
    { id: 7, isBusy: false, inOrder: false, order: [] },
  ]);

  const [menu, setMenu] = useState([]);

  return (
    <RestaurantContext.Provider value={{ tables, setTables }}>
      {children}
    </RestaurantContext.Provider>
  );
}

export default RestaurantContext;
