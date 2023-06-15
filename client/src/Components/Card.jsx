// import React ,{useState} from "react";
// import SepUsers from "./SepUsers";

// const Card = ({key,name}) => {
//   const [store,setStore] = useState();
//   return (
//     <div>
//       <section className="text-gray-600 body-font" style={{border:"1px solid"}}>
//         <div className="container px-5 py-24 ml-36">
//           <div className="flex flex-wrap -mx-4 -mb-10 text-center">
//             <div className="sm:w-1/2 mb-10 px-4">
//               <div className="rounded-lg h-64 overflow-hidden">
//                 <img
//                   alt="content"
//                   className="object-cover object-center h-full w-full"
//                   //style={{maxHeight:"100px"}}
//                   src="profile.png"
//                 />
//               </div>
//               <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
//                 Name : {name}
//               </h2>
//               <p className="leading-relaxed text-base">
//                 {name} is one of our customers <br />
//                 who believes in our services and <br />
//                 and always gives feedback to improve.
//               </p>
//               <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded" onClick={()=>setStore(key)}>
//                 View User 
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };


// export default Card;
import React from "react";
import { Link } from "react-router-dom";

const Card = ({name, id }) => {

  return (
    <div >
      <section className="text-gray-600 body-font" style={{ border: "1px solid" }}>
        <div className="container px-5 py-24 ml-36">
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="profile.png"
                />
              </div>
              <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                Name: {name}
              </h2>
              <p className="leading-relaxed text-base">
                {name} is one of our customers <br />
                who believes in our services and <br />
                always gives feedback to improve.
              </p>
              <Link
                to={`/user/${id}`}
                className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded"
              >
                <span style={{marginLeft:"50px"}}> View User </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card;
