import Help from "./Help";
import Hero from "./Hero";
import "./Home.css";
import Stress from "./Stress";
import Ready from "./Ready";

function Home() {
  return (
    <body>
      <Hero />
      <Stress />
      <Help />
      <Ready />
    </body>
  );
}

export default Home;
