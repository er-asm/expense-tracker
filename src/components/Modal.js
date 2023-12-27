import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
const Modal = ({ isOpen, closeModal }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [income, setIncome] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
      income: income,
    };

    addTransaction(newTransaction);
  };
  if (!isOpen) return null;
  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center">
      <div className="absolute w-full h-full bg-black opacity-50"></div>
      <div className="relative p-4 w-full max-w-md bg-white z-50 rounded">
        <h1 className="text-xl font-bold text-violet-700 flex items-center justify-between">
          Add new transaction
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 cursor-pointer"
            onClick={closeModal}
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </h1>
        <div className="relative my-4">
          <form onSubmit={onSubmit}>
            {/* <div className="mb-5">
              <label
                htmlFor="base-input"
                class=" mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Income
              </label>
              <input
                type="number"
                id="base-input"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
                placeholder="Enter expense amount"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              ></input>
            </div> */}
            <div className="mb-5">
              <label
                htmlFor="base-input"
                class=" mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Description
              </label>
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                id="base-input"
                placeholder="Enter expense description"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              ></input>
            </div>
            <div className="mb-5">
              <label
                htmlFor="base-input"
                class=" mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Amount
                <br />
                <span className="text-gray-400 font-thin">
                  (negative number = expense, positive number = income)
                </span>
              </label>
              <input
                type="number"
                id="base-input"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter expense amount"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              ></input>
            </div>
            <div className="mb-5">
              <button className="p-3 shadow rounded w-full bg-violet-500 text-white text-xl">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
