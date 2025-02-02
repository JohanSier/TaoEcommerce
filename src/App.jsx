import "./styles/App.css";
import TopBarInfo from "./components/TopBarInfo";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import CategoriesList from "./components/CategoriesList";
import ProductSlider from "./components/ProductSlider";
import { products } from "./assets/Images";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <TopBarInfo />
      <NavBar />
      <Hero />
      <CategoriesList />
      <ProductSlider products={products} />
      <Footer />
    </>
  );
}

export default App;

