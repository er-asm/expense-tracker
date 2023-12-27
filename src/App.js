import "./App.css";
import Balance from "./components/Balance";
import Header from "./components/Header";
import IncomeExpense from "./components/IncomeExpense";
import Modal from "./components/Modal";
import Transactions from "./components/Transactions";
import { useState } from "react";
import { GlobalProvider } from "./context/GlobalContext";
function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <GlobalProvider>
      <div className="container bg-violet-50 flex flex-col justify-center items-center">
        <Header openModal={openModal} />
        <Modal isOpen={isModalOpen} closeModal={closeModal} />
        <div className="flex w-4/5 m-auto p-9 justify-evenly items-center">
          <div className="p-7 bg-white rounded-xl shadow-lg">
            <Balance />
          </div>
          <div className="p-7 bg-white rounded-xl shadow-lg">
            <IncomeExpense />
          </div>
        </div>
        <Transactions />
      </div>
    </GlobalProvider>
  );
}

export default App;
