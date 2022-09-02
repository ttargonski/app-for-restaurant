import React from "react";

const OrderList = () => {
  return (
    <div className="col-10 m-auto">
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-primary">Lista aktualnych zamówień</span>
      </h4>
      <ul className="list-group">
        <li
          key="tip5%"
          className="list-group-item d-flex justify-content-between mb-3"
        >
          <div className="text">
            <h5 className="text-success mb-2 my-0">Zamówienie nr</h5>
            <p className="my-0">Stolik nr 1 - wartość: 38zł</p>
            <p className="my-0">Stolik nr 1 - wartość: 38zł</p>
          </div>
          <strong className="text-success"> zł</strong>
        </li>
      </ul>
    </div>
  );
};

export default OrderList;
