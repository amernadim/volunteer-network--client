import React from 'react';
import toast from 'react-hot-toast';

const Register = () => {

  const handleSubmit = event => {
    event.preventDefault()
    const form = event.target ;
    const name = form.name.value;
    const email = form.email.value;
    const date = form.date.value;
    const desicription = form.desicription.value;
    const books = form.books.value;

    const user = {
      name ,
      email,
      date,
      desicription,
      books
    }
    
    fetch('http://localhost:5000/users' , {
      method : 'POST',
      headers : {
        'content-type' : 'application/json'
      },
      body : JSON.stringify(user)
     })
     .then(res => res.json())
     .then(data => {
      if(data.acknowledged){
        form.reset()
        toast.success('Successfully added!')
      } 
      console.log(data)
        
     })
  }

  return (
   <div className='flex flex-col justify-center items-center lg:w-5/12 mx-auto border-2 p-5 mt-5'>
    <h1 className='text-2xl font-bold'>Register as a Volunteer</h1>
     <form onSubmit={handleSubmit} className='flex flex-col mt-5 w-full' >
      <input className='text-md px-3 py-2 border-b-2 ' type="text" name="name" id="" placeholder='Full Name'/> <br />
      <input className='text-md px-3 py-2 border-b-2' type="text" name="email" id="" placeholder='Username or Email'/> <br />
      <input className='text-md px-3 py-2 border-b-2 datepicker' type="date" name="date" placeholder='Date'/> <br />
      <input className='text-md px-3 py-2 border-b-2' type="text" name="desicription" id="" placeholder='Desicription'/> <br />
      <input className='text-md px-3 py-2 border-b-2' type="text" name="books" id="" placeholder='Organize books at the library.'/> <br />

      <button className='btn btn-info text-white' type="submit">Registration</button>
      
      </form>
   </div>
  );
};

export default Register;

