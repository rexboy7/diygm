import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./Navbar";
import { ProductList } from "./ProductList";
import { itemData } from "./itemData";
function App() {
  return (
    <div className="App">
      <Navbar />
      <ProductList items={itemData} />
    </div>
  );
}

export default App;
