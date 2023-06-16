import React, { useState } from "react";
import axios from 'axios';
import { useNavigate , useLocation} from 'react-router-dom';

const Transaction = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {NAME,EMAIL,BANK} = location.state;
  const [from,setFrom] = useState("");
  const [name,setName] = useState(NAME);
  const [senderemail,setsenderEmail] = useState("");
  const [getteremail,setgetterEmail] = useState(EMAIL);
  const [updateBalance,setcurrentBalance] = useState("");
  const [bankname,setbankname] = useState(BANK);
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const res = await axios.post("/updateUser",{from,name,senderemail,getteremail,bankname,updateBalance});
      if(res && res.status === 200) {
        alert(res.data.msg);
        navigate('/allusers');
      } 
      if(res && res.status === 206) {
        alert(res.data.msg);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div style={{minHeight:"75vh"}}>
      <div className="w-full max-w-xs custom">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              From:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Enter your name"
              value={from}
              onChange={(e)=>setFrom(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              To:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Enter recipient name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Sender email:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="email"
              placeholder="Enter senders email"
              value={senderemail}
              onChange={(e)=>setsenderEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Recipient email:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="email"
              placeholder="Enter recipient email"
              value={getteremail}
              onChange={(e)=>setgetterEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Recipient Bank Name:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Enter in Capital letters"
              value={bankname}
              onChange={(e)=>setbankname(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Amount:
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="text"
              placeholder="Enter the amount to be transferred"
              value={updateBalance}
              onChange={(e)=>setcurrentBalance(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          ©2023 Sparks Foundation. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Transaction;
