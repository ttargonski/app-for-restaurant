import React, { useContext, useState } from "react";
import RestaurantContext from "../context/restaurantContext";

const TableList = () => {
  const { tables } = useContext(RestaurantContext);

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
                    <button
                      type="button"
                      className="btn btn-outline-success mr-2"
                    >
                      Dodaj produkty
                    </button>
                    <button type="button" className="btn btn-outline-danger">
                      Usuń
                    </button>
                  </td>
                </tr>
              )
          )}
        </tbody>
      </table>
      <button type="button" className="btn btn-secondary">
        Zapisz zamówienie
      </button>
    </div>
  );
};

export default TableList;
