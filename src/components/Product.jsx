import React from "react";

const Product = ({ order, setEditElement, index, deleteProductOnList }) => {
  return (
    <tr>
      <td>{order.name}</td>
      <td>{order.amount}</td>
      <td>{order.totalPrice}</td>
      <td>
        <div className="row">
          <button
            type="button"
            className="mr-1 btn btn-outline-primary"
            onClick={() => setEditElement(index)}
          >
            Edytuj
          </button>
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={() => deleteProductOnList(index)}
          >
            Usuń
          </button>
        </div>
      </td>
    </tr>
  );
};

export default Product;
