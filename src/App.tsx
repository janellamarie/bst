import { Route, Routes } from "react-router";
import "./App.scss";
import Header from "./components/Header";
import General from "./pages/General";
import Trades from "./pages/Trades";
import TopNavigation from "./components/common/TopNavigation";
import Sales from "./pages/Sales";
import GroupOrder from "./pages/GroupOrder";
import PaymentMethods from "./pages/PaymentMethods";

function App() {
  return (
    <>
      <TopNavigation />
      <Header />
      <Routes>
        <Route path="/" element={<General />} />
        <Route path="/trades" element={<Trades />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/go" element={<GroupOrder />} />
        <Route path="/payments" element={<PaymentMethods />} />
      </Routes>
    </>
  );
}

export default App;
