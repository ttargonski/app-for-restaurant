import React, { useContext } from "react";
import { Link } from "react-router-dom";
import RestaurantContext from "../context/restaurantContext";

const TableList = () => {
  const { tables, setTables, setActiveTable, saveOrder } =
    useContext(RestaurantContext);

  const onDelete = (id) => {
    setTables(
      tables.map((table) => {
        if (table.id === id) {
          return { ...table, isBusy: false, inOrder: false, order: [] };
        }
        return table;
      })
    );
  };

  return (
    <div className="col-md-7 col-lg-8">
      <h4 className="mb-3 text-primary">Zamówienie</h4>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">Numer stolika</th>
            <th scope="col ">Akcje</th>
          </tr>
        </thead>
        <tbody>
          {tables.map(
            (table) =>
              table.isBusy &&
              !table.inOrder && (
                <tr key={table.id}>
                  <th scope="row">Stolik nr {table.id}</th>
                  <td>
                    <Link to={"/list-of-products"}>
                      {table.order.length === 0 ? (
                        <button
                          type="button"
                          className="btn btn-outline-success mr-2"
                          onClick={() => setActiveTable(table.id)}
                        >
                          Dodaj produkty
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="btn btn-outline-primary mr-2"
                          onClick={() => setActiveTable(table.id)}
                        >
                          Edytuj produkty
                        </button>
                      )}
                    </Link>

                    <button
                      type="button"
                      className="btn btn-outline-danger"
                      onClick={() => onDelete(table.id)}
                    >
                      Usuń
                    </button>
                  </td>
                </tr>
              )
          )}
        </tbody>
      </table>
      {tables.filter((table) => table.isBusy && !table.inOrder).length > 0 && (
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => saveOrder()}
        >
          Zapisz zamówienie
        </button>
      )}
    </div>
  );
};

export default TableList;
