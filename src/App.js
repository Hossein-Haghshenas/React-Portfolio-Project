import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/navbar/NavBar";
import Banner from "./components/banner/Banner";
import { Skills } from "./components/skills/Skills";

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <Skills/>
    </>
  );
}

export default App;
