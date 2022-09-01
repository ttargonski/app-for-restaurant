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

  const [menu] = useState([
    {
      id: 1,
      name: "Margherita Pizza",
      price: 28.99,
    },
    { id: 2, name: "Pepperoni Pizza", price: 32.99 },
    { id: 3, name: "Carbonara Pizza", price: 36.99 },
    { id: 4, name: "Capriciosa Pizza", price: 38.99 },
    { id: 5, name: "Neapolitan Pizza", price: 34.99 },
    { id: 6, name: "Vegan Pizza", price: 35.99 },
  ]);

  const [activeTable, setActiveTable] = useState(Number);

  const saveTable = (tableId, tableOrder) => {
    setTables(
      tables.map((table) => {
        if (table.id === tableId) {
          return { ...table, order: tableOrder };
        } else {
          return table;
        }
      })
    );
  };

  return (
    <RestaurantContext.Provider
      value={{
        tables,
        setTables,
        activeTable,
        setActiveTable,
        menu,
        saveTable,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
}

export default RestaurantContext;
