import React, { useContext, useState } from "react";
import RestaurantContext from "../context/restaurantContext";

const AddOrder = () => {
  // tables array
  const { tables, setTables } = useContext(RestaurantContext);
  // current number of table
  const [selectedTable, setSelectedTable] = useState(Number);

  // add table to order list
  const onAdd = () => {
    setTables(
      tables.map((table) => {
        if (table.id == selectedTable) {
          return { ...table, isBusy: true };
        }
        return table;
      })
    );
  };

  return (
    <div className="col-md-5 col-lg-4 ">
      <h4 className="mb-3 text-primary">Lista dostępnych stolików</h4>
      <div className="mb-3">
        <select
          onChange={(e) => setSelectedTable(e.target.value)}
          className="mb-3 form-control form-select"
        >
          <option defaultValue="" selected>
            Wybierz stolik z listy
          </option>
          {tables &&
            tables.map(
              (table) =>
                !table.isBusy && (
                  <option key={table.id} value={table.id}>
                    Stolik nr {table.id}
                  </option>
                )
            )}
        </select>
        <div className="mb-3">
          <button
            onClick={() => onAdd()}
            className="btn btn-primary w-100"
            type="submit"
          >
            Dodaj stolik do zamówienia
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddOrder;
