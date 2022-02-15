import "./App.css";
import AboutMe from "./PortfolioContainer/AboutMe/AboutMe";
import Home from "./PortfolioContainer/Home/Home";
import Header from "./PortfolioContainer/Home/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <AboutMe />
    </div>
  );
}

export default App;
