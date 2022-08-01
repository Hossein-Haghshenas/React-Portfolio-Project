import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/navbar/NavBar";
import Banner from "./components/banner/Banner";
import { Skills } from "./components/skills/Skills";
import { Projects } from "./components/projects/Projects";
import { Contact } from "./components/contact/Contact";

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
