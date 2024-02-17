import Help from "./Help";
import Hero from "./Hero";
import "./Home.css";
import Stress from "./Stress";
import Ready from "./Ready";
import Footer from "./Footer";

function Home() {
  return (
    <body>
      <Hero />
      <Stress />
      <Help />
      <Ready />
      <Footer/>
    </body>
  );
}

export default Home;
