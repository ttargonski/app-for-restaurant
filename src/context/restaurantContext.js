import { createContext, useState } from "react";

const RestaurantContext = createContext();

export function RestaurantProvider({ children }) {
  const [tables, setTables] = useState([
    { id: 1, isBusy: false, inOrder: false, order: [], totalPrice: 0 },
    { id: 2, isBusy: false, inOrder: false, order: [], totalPrice: 0 },
    { id: 3, isBusy: false, inOrder: false, order: [], totalPrice: 0 },
    { id: 4, isBusy: false, inOrder: false, order: [], totalPrice: 0 },
    { id: 5, isBusy: false, inOrder: false, order: [], totalPrice: 0 },
    { id: 6, isBusy: false, inOrder: false, order: [], totalPrice: 0 },
    { id: 7, isBusy: false, inOrder: false, order: [], totalPrice: 0 },
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

  const [orders, setOrders] = useState([]);

  const [activeTable, setActiveTable] = useState(Number);

  const saveTable = (tableId, tableOrder, totalPrice) => {
    setTables(
      tables.map((table) => {
        if (table.id === tableId) {
          return { ...table, order: tableOrder, totalPrice: totalPrice };
        } else {
          return table;
        }
      })
    );
  };

  const saveOrder = () => {
    const tablesWithOrder = tables.filter(
      (table) => table.isBusy && !table.inOrder
    );
    const id = Math.floor(1000 + Math.random() * 9000);
    let orderPrice = 0;
    tablesWithOrder.map((table) => (orderPrice += Number(table.totalPrice)));
    setOrders([
      ...orders,
      { id: id, tables: tablesWithOrder, orderPrice: orderPrice },
    ]);
    setTables(
      tables.map((table) => {
        if (table.isBusy && !table.inOrder) {
          return { ...table, inOrder: true };
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
        saveOrder,
        orders,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
}

export default RestaurantContext;
