import React, { useContext, useState, useEffect } from "react";
import RestaurantContext from "../context/restaurantContext";

const EditProduct = ({ order, editProductOnList }) => {
  const { menu } = useContext(RestaurantContext);
  const [selectedValue, setSelectedValue] = useState({
    name: "",
    price: 0,
    amount: 0,
  });

  useEffect(() => {
    setSelectedValue({
      name: order.name,
      price: order.price,
      amount: order.amount,
    });
  }, []);

  const getPrice = () => {
    const price = selectedValue.amount * selectedValue.price;
    return price.toFixed(2);
  };

  const onEdit = () => {
    if (selectedValue.name !== "") {
      editProductOnList({ ...selectedValue, totalPrice: getPrice() });
    } else {
      alert("wybierz produkt z listy");
    }
  };

  return (
    <tr className="table-warning">
      <td>
        <select
          onChange={(e) =>
            setSelectedValue({
              ...selectedValue,
              name: menu[e.target.value].name,
              price: menu[e.target.value].price,
            })
          }
          className=" form-control form-select"
        >
          {menu &&
            menu.map((item, index) => (
              <option
                selected={item.name === order.name}
                key={item.id}
                value={index}
              >
                {item.name} - {item.price}
              </option>
            ))}
        </select>
      </td>
      <td>
        <input
          onChange={(e) =>
            setSelectedValue({ ...selectedValue, amount: e.target.value })
          }
          type="number"
          className="form-control"
          placeholder="Ilość"
          value={selectedValue.amount}
        />
      </td>
      <td>{getPrice()}</td>
      <td>
        <button
          type="button"
          className="btn btn-success mr-2"
          onClick={() => onEdit()}
        >
          Zaktualizuj
        </button>
      </td>
    </tr>
  );
};

export default EditProduct;
