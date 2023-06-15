import React, { useState, useEffect } from "react";
import { useParams , useNavigate} from "react-router-dom";
import axios from 'axios';

const UserView = () => {
  const { id } = useParams();
  const [singleUser, setSingleUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `/getSingleUser/${id}`
        );
        const userData = response.data;
        setSingleUser(userData);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUser();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {singleUser && (
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <img
              className="lg:w-1/6 md:w-1/6 w-5/6 mb-10 object-cover object-center rounded"
              alt="hero"
              src="https://cdn-icons-png.flaticon.com/512/5556/5556499.png"
            />
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                {singleUser.user.name}
              </h1>
              <p className="mb-8 leading-relaxed">
                <strong>Email: {singleUser.user.email}</strong> <br />
                <strong>Bank Name: {singleUser.user.bankName}</strong> <br />
                <strong>Current Balance: {singleUser.user.currentBalance}</strong> <br />
                Meggings kinfolk echo park stumptown DIY, kale chips beard
                jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice
                godard disrupt ramps hexagon mustache umami snackwave tilde
                chillwave ugh. Pour-over meditation PBR&amp;B pickled ennui celiac
                mlkshk freegan photo booth af fingerstache pitchfork.
              </p>
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={()=>navigate("/transaction",{state: {NAME:singleUser.user.name,EMAIL:singleUser.user.email,BANK:singleUser.user.bankName}})}>
                  Transfer Money
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default UserView;
