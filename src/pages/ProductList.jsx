import React, { useContext, useState, useEffect } from "react";
import AddProduct from "../components/AddProduct";
import EditProduct from "../components/EditProduct";
import Product from "../components/Product";
import RestaurantContext from "../context/restaurantContext";
import { Link } from "react-router-dom";

const ProductList = () => {
  const { activeTable, tables, saveTable } = useContext(RestaurantContext);
  const [tableOrder, setTableOrder] = useState([]);
  const [editElement, setEditElement] = useState();

  useEffect(() => {
    setTableOrder(tables.find((table) => table.id === activeTable).order);
  }, []);

  const addProductToList = (item) => {
    setTableOrder([...tableOrder, item]);
  };

  const editProductOnList = (item) => {
    setTableOrder(
      tableOrder.map((table, index) => (index === editElement ? item : table))
    );
    setEditElement();
  };

  const deleteProductOnList = (indexOfElement) => {
    setTableOrder(
      tableOrder.filter((table, index) => index !== indexOfElement)
    );
  };

  return (
    <div>
      <h4 className="mb-3 text-primary">Stolik nr {activeTable}</h4>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Pozycja menu</th>
            <th scope="col ">Ilość</th>
            <th scope="col ">Cena</th>
            <th scope="col ">Akcja</th>
          </tr>
        </thead>
        <tbody>
          {tableOrder.map((order, index) => {
            if (editElement == index) {
              // edit component
              return (
                <EditProduct
                  order={order}
                  key={index}
                  editProductOnList={editProductOnList}
                />
              );
            } else {
              // product component
              return (
                <Product
                  order={order}
                  key={index}
                  index={index}
                  setEditElement={setEditElement}
                  deleteProductOnList={deleteProductOnList}
                />
              );
            }
          })}
          {/* add component*/}
          <AddProduct addProductToList={addProductToList} />
        </tbody>
      </table>
      <button
        type="button"
        className="btn btn-primary mr-2"
        onClick={() => saveTable(activeTable, tableOrder)}
      >
        Zapisz stolik
      </button>
      <Link to="/table-summary">
        <button
          type="button"
          className="btn btn-success mr-2"
          onClick={() => saveTable(activeTable, tableOrder)}
        >
          Zapłać
        </button>
      </Link>
      <h4 className="mt-3 text-success text-right">Do zapłaty {activeTable}</h4>
    </div>
  );
};

export default ProductList;
