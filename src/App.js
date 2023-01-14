
import "./App.css";
import Intro from "./components/Intro";
import NavigationBar from "./components/NavigationBar";
import Superhero from "./components/Superhero";
import Trending from "./components/Trending";
import Footer from "./components/Footer";

import "./style/landingpage.css"

function App() {
  return (
    <div>
      <div className="myBg">
        <NavigationBar />
        <Intro />
      </div>      
      <div className="trending">
        <Trending />
      </div>
      <div className="superhero">
        <Superhero />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
