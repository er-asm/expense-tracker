import React, { useContext } from "react";
import blogbg from "../assets/blobbg.png";
import { GlobalContext } from "../context/GlobalContext";
//Money formatter function
function moneyFormatter(num) {
  let p = num?.toFixed(2).split(".");
  return (
    "₹" +
    (p[0]?.split("")[0] === "-" ? "-" : "") +
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
const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0);
  return (
    <div className="w-[320px] h-[125px] flex justify-around items-stretch">
      <div className="p-1">
        <h1 className="font-bold text-lg">Total Balance</h1>
        <p className="text-4xl text-teal-400 font-semibold font-mono">
          {moneyFormatter(total)}
        </p>
      </div>
      <div className="-mr-[48px] -mt-[35px]">
        <img src={blogbg} alt="blog" />
        <div className="mx-10 -mt-[120px]">
          <p className=" text-xl text-white font-mono font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-20 h-20"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM9 7.5A.75.75 0 0 0 9 9h1.5c.98 0 1.813.626 2.122 1.5H9A.75.75 0 0 0 9 12h3.622a2.251 2.251 0 0 1-2.122 1.5H9a.75.75 0 0 0-.53 1.28l3 3a.75.75 0 1 0 1.06-1.06L10.8 14.988A3.752 3.752 0 0 0 14.175 12H15a.75.75 0 0 0 0-1.5h-.825A3.733 3.733 0 0 0 13.5 9H15a.75.75 0 0 0 0-1.5H9Z"
                clipRule="evenodd"
              />
            </svg>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Balance;
