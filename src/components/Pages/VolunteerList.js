import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import VolunteerInfo from './VolunteerInfo';


const VolunteerList = () => {
  // const volunteer  = useLoaderData();
  // const {datas,count} = volunteer;
  
  const {logOut} = useContext(AuthContext)
  
  // pagination
  const [page,setPage] = useState(0);
  const [size,setSize] = useState(10);
  // const [datas,setDatas] = useState([])
  const [count,setCount] = useState(0);
  const pages = Math.ceil(count / size);

  // all data
  const [displayUsers,setDisplayUsers] = useState([]);

  useEffect(() => {
    // const url = `http://localhost:5000/users?page=${page}&size=${size}`;
    fetch(`http://localhost:5000/users?page=${page}&size=${size}` ,{
      headers : {
        authorization : `Bearer ${localStorage.getItem('volunteer-token')}`
      }
    })
    .then(res => {
      if(res.status === 401 || res.status === 403){
        return logOut()
      }
     return res.json()
    })
    .then(data => {
      // console.log(data);
      setCount(data.count);
      // setDatas(data.datas);
      setDisplayUsers(data.datas);     
    })

  },[page,size,logOut])

  return (
    <div>
      <div className="overflow-x-auto">
    <table className="table w-full">
      {/* <!-- head --> */}
      <thead>
        <tr>           
          <th>Name</th>
          <th>Email ID</th>
          <th>Registating date</th>
          <th>Volunteer list</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {/* <!-- row  --> */}
        {
            displayUsers.map(info => <VolunteerInfo
            key={info._id}
            info={info}
            displayUsers={displayUsers}
            setDisplayUsers={setDisplayUsers}
            ></VolunteerInfo>)
          }                        
      </tbody>
    </table>
  </div>

     {/* pagination */}

      <div className='my-10 flex justify-center'>
      {
        [...Array(pages).keys()].map(number => <button onClick={()=> setPage(number)} className='btn-sm bg-warning hover:bg-info mr-2 rounded-sm items-center' key={number}>{number + 1}</button>)
      }
      <select className='bg-warning w-20 px-2' onClick={e => setSize(e.target.value)}>
        <option value='5'>5</option>
        <option value='10' >10</option>
        <option value='15'>15</option>
      </select>

      </div>

    </div>
  );
};

export default VolunteerList;