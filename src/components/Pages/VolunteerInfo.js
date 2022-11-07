import React, { useState } from "react";
import { TrashIcon,PencilSquareIcon } from '@heroicons/react/24/solid'
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const VolunteerInfo = ({info,displayUsers,setDisplayUsers}) => {
  const {_id,name,email,date,desicription,books} = info ;
  // const [displayUsers,setDisplayUsers] = useState(info)

  const handleDelete = info => {
  //  console.log(info)
  const agree = window.confirm(`Are you sure you want to delete ${name}`) ;

  if(agree) {
    fetch(`http://localhost:5000/user/${_id}` , {
      method : 'DELETE'
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
    if(data.deletedCount){
      toast.success('Deleted Success');
      const remaingUsers = displayUsers.filter(usr => usr._id !== info._id);
      setDisplayUsers(remaingUsers);
    }
  })

 }

 }

  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{date}</td>
      <td>{books}</td>
      <td className="flex gap-5">
        <Link to= {`/singleVolunteer/${_id}`} > <PencilSquareIcon className="h-6 w-6 text-blue-500"/> </Link>
        <TrashIcon onClick={() => handleDelete(info)} className="h-6 w-6 text-red-500" />
      </td>
    </tr>
  );
};

export default VolunteerInfo;

