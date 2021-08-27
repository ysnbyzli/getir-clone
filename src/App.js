import Campaign from "./components/Campaign";
import Cards from "./components/Cards";
import Categories from "./components/Categories";
import Favorites from "./components/Favorites";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Mobile from "./components/Mobile";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Categories />
      <Campaign />
      <Favorites />
      <Mobile />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
