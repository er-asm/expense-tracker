import TransactionList from "./TransactionList";
import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

//Money formatter function
function moneyFormatter(num) {
  let p = num.toFixed(2).split(".");
  return (
    "₹ " +
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
const Transactions = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const { transactions } = useContext(GlobalContext);
  const sign = transaction?.amount < 0 ? "-" : "+";
  return (
    <div className="w-3/5 m-auto">
      <h1 className="text-2xl font-bold">Transactions</h1>
      <ul className="my-6 no-scrollbar">
        {transactions.map((transaction) => (
          <TransactionList
            key={transaction?.id}
            transaction={transaction}
            deleteTransaction={deleteTransaction}
            sign={sign}
            moneyFormatter={moneyFormatter}
          />
        ))}
      </ul>
    </div>
  );
};

export default Transactions;
