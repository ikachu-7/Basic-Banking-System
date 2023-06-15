import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../Components/Card';
const Allusers = () => {
    const [users,setUsers] = useState();
    useEffect(()=> {
        const getData = async () => {
            try {
                const res = await axios.get("/getAllusers");
                if(res.status === 200) {
                    console.log(res.data.allusers);
                    setUsers(res.data.allusers);
                } else {
                    console.log(res.data.msg);
                }
            } catch (error) {
                console.log(error);
            }
        }
        getData();
    },[])
  return (
    <div>
        <div className='grid-container'>
            {
               users && users.map((e) => {
                  return (
                    <Card 
                            key = {e._id}
                            name={e.name}
                            id={e._id}
                    />
                  )  
                })
            } 
        </div>
    </div>
  )
}

export default Allusers