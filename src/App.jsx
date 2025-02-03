import "./styles/App.css";
import Homepage from "./pages/Homepage";
import ProductsPage from "./pages/ProductsPage"; 
import { Routes, Route } from "react-router";
import RootLayout from "./components/RootLayout"; // ✅ Import the layout
import NotFound from "./pages/NotFound"

function App() {
  return (
    <Routes>
      {/* Root layout wrapper for all pages */}
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Homepage />} />
        <Route path="products" element={<ProductsPage />} />
        {/* Página 404 cuando no hay coincidencias */}
      <Route path="*" element={<NotFound />} />
      </Route>

    </Routes>
  );
}

export default App;