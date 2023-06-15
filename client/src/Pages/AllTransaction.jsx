import React, { useState, useEffect } from "react";
import axios from "axios";
const AllTransaction = () => {
  const [store, setStore] = useState();
  const [flag, setFlag] = useState(true);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("/transaction");
        if (res.status === 200) {
          console.log(res.data.alltransaction);
          setStore(res.data.alltransaction);
        } else {
          console.log(res.data.msg);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setFlag(false);
      }
    };
    getData();
  }, []);
  if (flag) {
    return (
      <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    );
  }
  return (
    <div style={{ minHeight: "75vh", marginTop: "20px" }}>
      <table className="transaction-table">
        <thead>
          <tr>
            <th>Sr</th>
            <th>Sender</th>
            <th>Receiver</th>
            <th>Amount Transferred</th>
            <th>Date of Transfer</th>
          </tr>
        </thead>
        <tbody>
          {store &&
            store.map((transaction, index) => (
              <tr key={index}>
                <td>{index + 1}.</td>
                <td>{transaction.sender}</td>
                <td>{transaction.receiver}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.dateOfTransaction}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllTransaction;
