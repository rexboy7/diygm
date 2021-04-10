import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./Navbar";
import { ProductList } from "./ProductList";
import { itemData } from "./itemData";
function App() {
  return (
    <div className="container py-3">
      <Navbar />
      <ProductList items={itemData} />
      <section class="row align-items-start gy-4">
        <div class="col-sm">One of three columns</div>
        <div class="col-sm">One of three columns</div>
        <div class="col-sm">One of three columns</div>
      </section>
    </div>
  );
}

export default App;
