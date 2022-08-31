import AddOrder from "./components/AddOrder";
import TableList from "./components/TableList";
import { RestaurantProvider } from "./context/restaurantContext";

function App() {
  return (
    <RestaurantProvider>
      <div className="App container mt-5">
        <div className="new__order row g-5">
          <AddOrder />
          <TableList />
        </div>
      </div>
    </RestaurantProvider>
  );
}

export default App;
