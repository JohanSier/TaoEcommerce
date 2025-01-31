import "./styles/App.css";
import TopBarInfo from "./components/TopBarInfo";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import CategoriesList from "./components/CategoriesList";

function App() {
  return (
    <>
      <TopBarInfo />
      <NavBar />
      <Hero />
      <CategoriesList />
    </>
  );
}

export default App;
