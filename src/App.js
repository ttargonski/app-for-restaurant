import AddTable from "./components/AddTable";
import TableList from "./components/TableList";
import { RestaurantProvider } from "./context/restaurantContext";
import { Routes, Route } from "react-router-dom";
import NewOrder from "./pages/NewOrder";
import ProductList from "./pages/ProductList";
import TableSummary from "./pages/TableSummary";

function App() {
  return (
    <RestaurantProvider>
      <div className="container mt-3">
        <Routes>
          <Route
            path="/"
            element={
              <NewOrder>
                <AddTable />
                <TableList />
              </NewOrder>
            }
          />
          <Route path="list-of-products" element={<ProductList />} />
          <Route path="table-summary" element={<TableSummary />} />
        </Routes>
      </div>
    </RestaurantProvider>
  );
}

export default App;
