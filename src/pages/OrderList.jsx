import React, { useContext } from "react";
import { Link } from "react-router-dom";
import RestaurantContext from "../context/restaurantContext";

const OrderList = () => {
  const { setActiveTable, orders } = useContext(RestaurantContext);
  return (
    <div className="col-10 m-auto">
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-primary">Lista aktualnych zamówień</span>
      </h4>
      <ul className="list-group">
        {orders.length > 0 ? (
          orders.map((order) => (
            <li className="list-group-item d-flex justify-content-between mb-3 bg-light">
              <div className="text">
                <h5 className="text-success mb-3 my-0">
                  Zamówienie nr {order.id}
                </h5>
                <div className="form-group">
                  {order.tables.map((table) => (
                    <Link to={"/table-summary"}>
                      <button
                        type="button"
                        className="btn btn-outline-secondary mr-2 mb-2"
                        onClick={() => setActiveTable(table.id)}
                      >
                        Stolik nr {table.id} - Wartość {table.totalPrice} zł
                      </button>
                    </Link>
                  ))}
                </div>
              </div>
              <strong className="text-success"> {order.orderPrice} zł</strong>
            </li>
          ))
        ) : (
          <p>Brak zamówień</p>
        )}
      </ul>
    </div>
  );
};

export default OrderList;
