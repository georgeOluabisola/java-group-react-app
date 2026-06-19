import "./App.css";
import Header from "./Header";
import About from "./About";
import Hobbies from "./Hobbies";
import Footer from "./Footer";

function App() {
  return (
    <div className="app-shell">
      <Header />
      <About />
      <Hobbies />
      <Footer />
    </div>
  );
}

export default App;
