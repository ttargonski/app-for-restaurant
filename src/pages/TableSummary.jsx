import React, { useContext, useState, useEffect } from "react";
import RestaurantContext from "../context/restaurantContext";

const TableSummary = () => {
  const { activeTable, tables } = useContext(RestaurantContext);
  const [tableOrder, setTableOrder] = useState([]);

  useEffect(() => {
    setTableOrder(tables.find((table) => table.id === activeTable).order);
  }, []);

  const getTotalPrice = () => {
    let price = 0;
    tableOrder.map((order) => (price += order.price * order.amount));
    let totalPrice = Number(getTip()) + price;
    return totalPrice.toFixed(2);
  };

  const getTip = () => {
    let price = 0;
    tableOrder.map((order) => (price += order.price * order.amount));
    let priceTip = price * 0.05;
    return priceTip.toFixed(2);
  };

  return (
    <div className="col-10 m-auto">
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-primary">
          Podsumowanie zamówienia dla stolika nr {activeTable}
        </span>
      </h4>
      <ul className="list-group mb-3 p-0">
        {tableOrder.map((order, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between lh-sm"
          >
            <div>
              <h6 className="my-0">{order.name}</h6>
              <small className="text-muted mr-2">Ilość: {order.amount}</small>
              <small className="text-muted">
                Cena jednostkowa: {order.price} zł
              </small>
            </div>
            <span className="text-muted">{order.totalPrice} zł</span>
          </li>
        ))}
        <li
          key="tip5%"
          className="list-group-item d-flex justify-content-between bg-light"
        >
          <div className="text-success">
            <h6 className="my-0">Napiwek</h6>
            <small>Napiwek 5%</small>
          </div>
          <span className="text-success">{getTip()} zł</span>
        </li>
        <li
          key="totalPrice"
          className="list-group-item d-flex justify-content-between"
        >
          <strong>Do zapłaty</strong>
          <strong>{getTotalPrice()} zł</strong>
        </li>
      </ul>
    </div>
  );
};

export default TableSummary;
