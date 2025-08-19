import ProductDetail from "./components/ProductDetail";
import Product from "./components/ProductList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login"


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Product />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;