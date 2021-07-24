import "./App.css";
import HeaderText from "../src/components/header/Header";
import Api from "../src/components/api/Api";
import Footer from "../src/components/footer/Footer";

function App() {
  return (
    <div className="App">
      <HeaderText />
      <Api />
      <Footer />
    </div>
  );
}

export default App;
