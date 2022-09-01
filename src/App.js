import AddTable from "./components/AddTable";
import TableList from "./components/TableList";
import { RestaurantProvider } from "./context/restaurantContext";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import ProductList from "./pages/ProductList";

function App() {
  return (
    <RestaurantProvider>
      <div className="container mt-3">
        <Routes>
          <Route
            path="/"
            element={
              <Main>
                <AddTable />
                <TableList />
              </Main>
            }
          />
          <Route path="list-of-products" element={<ProductList />} />
        </Routes>
      </div>
    </RestaurantProvider>
  );
}

export default App;
