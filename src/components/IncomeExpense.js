import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import blogbg from "../assets/blobbg.png";

//Money formatter function
function moneyFormatter(num) {
  let p = num.toFixed(2).split(".");
  return (
    "₹" +
    p[0]
      .split("")
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
      }, "") +
    "." +
    p[1]
  );
}
const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense =
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1;

  return (
    <div className="flex divide-x-2 gap-3">
      <div className="w-[200px] h-[125px] flex justify-around items-stretch p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-32 h-32 -mt-10 text-teal-400"
        >
          <path
            fillRule="evenodd"
            d="M15.22 6.268a.75.75 0 0 1 .968-.431l5.942 2.28a.75.75 0 0 1 .431.97l-2.28 5.94a.75.75 0 1 1-1.4-.537l1.63-4.251-1.086.484a11.2 11.2 0 0 0-5.45 5.173.75.75 0 0 1-1.199.19L9 12.312l-6.22 6.22a.75.75 0 0 1-1.06-1.061l6.75-6.75a.75.75 0 0 1 1.06 0l3.606 3.606a12.695 12.695 0 0 1 5.68-4.974l1.086-.483-4.251-1.632a.75.75 0 0 1-.432-.97Z"
            clipRule="evenodd"
          />
        </svg>
        <div className="p-1">
          <h1 className="font-bold text-lg">Total Credit</h1>
          <p className="text-4xl text-teal-400 font-semibold font-mono">
            {moneyFormatter(income)}
          </p>
        </div>
      </div>

      <div className="w-[200px] h-[125px] flex justify-around items-stretch p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className=" text-red-500 w-32 h-32 -mt-10"
        >
          <path
            fillRule="evenodd"
            d="M1.72 5.47a.75.75 0 0 1 1.06 0L9 11.69l3.756-3.756a.75.75 0 0 1 .985-.066 12.698 12.698 0 0 1 4.575 6.832l.308 1.149 2.277-3.943a.75.75 0 1 1 1.299.75l-3.182 5.51a.75.75 0 0 1-1.025.275l-5.511-3.181a.75.75 0 0 1 .75-1.3l3.943 2.277-.308-1.149a11.194 11.194 0 0 0-3.528-5.617l-3.809 3.81a.75.75 0 0 1-1.06 0L1.72 6.53a.75.75 0 0 1 0-1.061Z"
            clipRule="evenodd"
          />
        </svg>
        <div className="p-1">
          <h1 className="font-bold text-lg">Total Debit</h1>
          <p className="text-4xl text-red-400 font-semibold font-mono">
            {moneyFormatter(expense)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default IncomeExpense;
