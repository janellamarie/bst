import { Route, Routes } from "react-router";
import "./App.scss";
import Header from "./components/Header";
import General from "./pages/General";
import Trades from "./pages/Trades";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<General />} />
        <Route path="/trades" element={<Trades />} />
      </Routes>
    </>
  );
}

export default App;
