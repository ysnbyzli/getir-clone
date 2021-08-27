import Campaign from "./components/Campaign";
import Categories from "./components/Categories";
import Favorites from "./components/Favorites";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Categories />
      <Campaign />
      <Favorites />
    </div>
  );
}

export default App;
