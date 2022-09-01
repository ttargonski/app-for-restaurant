import React, { useContext, useState } from "react";
import RestaurantContext from "../context/restaurantContext";

const AddProduct = ({ addProductToList }) => {
  const { menu } = useContext(RestaurantContext);
  const [selectedValue, setSelectedValue] = useState({
    name: "",
    price: 0,
    amount: 0,
  });

  const getPrice = () => {
    const price = selectedValue.amount * selectedValue.price;
    return price.toFixed(2);
  };

  const onAdd = () => {
    if (selectedValue.name !== "") {
      addProductToList({ ...selectedValue, totalPrice: getPrice() });
    } else {
      alert("wybierz produkt z listy");
    }
  };

  return (
    <tr className="table-success">
      <td>
        <select
          onChange={(e) =>
            setSelectedValue({
              ...selectedValue,
              name: menu[e.target.value].name,
              price: menu[e.target.value].price,
              amount: 1,
            })
          }
          className=" form-control form-select"
          defaultValue="Wybierz pozycję z menu"
        >
          <option disabled selected>
            Wybierz pozycję z menu
          </option>
          {menu &&
            menu.map((item, index) => (
              <option key={item.id} value={index}>
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
          onClick={() => onAdd()}
        >
          Dodaj
        </button>
      </td>
    </tr>
  );
};

export default AddProduct;
