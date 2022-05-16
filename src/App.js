import "./App.css";
import { AppRouter } from "./router";
import { ProductsProvider } from "./context/products/ProductContext";
import { useRecoverLocalStor } from "./hooks/useRecoverLocalStor";

function App() {
  useRecoverLocalStor()
  return (
    <ProductsProvider>
      <AppRouter />
    </ProductsProvider>
  );
}

export default App;
