import Help from "./Help";
import Hero from "./Hero";
import "./Home.css";
import Stress from "./Stress";
import Ready from "./Ready";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Hero />
      <Stress />
      <Help />
      <Ready />
      <Footer/>
    </>
  );
}

export default Home;
