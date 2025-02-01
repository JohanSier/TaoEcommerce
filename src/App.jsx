import "./styles/App.css";
import TopBarInfo from "./components/TopBarInfo";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import CategoriesList from "./components/CategoriesList";
import ProductCard from "./components/ProductCard";
import { products } from "./assets/Images";

function App() {
  return (
    <>
      <TopBarInfo />
      <NavBar />
      <Hero />
      <CategoriesList />
      <div style={{width: '100%', display: 'flex',justifyContent:"center", position: 'relative', zIndex: -1, background: 'white', padding: '3rem 2rem'}}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            productTitle={product.name}
            price={product.price}
            srcImage={product.imageSrc}
          />
        ))}
      </div>
    </>
  );
}

export default App;
