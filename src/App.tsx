import "./App.css";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/TopMenu";

function App() {
  return (
    <>
      <Menu />
      <Header/>
      <Content/>
      <Footer/>
    </>
  );
}

export default App;
