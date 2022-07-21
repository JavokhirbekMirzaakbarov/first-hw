import Counter from "./components/Counter/Counter";
import { Footer } from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./styles.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <Counter />
      {Footer}
    </div>
  );
}

export default App;
