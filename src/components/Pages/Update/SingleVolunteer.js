import React from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const SingleVolunteer = () => {
  const user = useLoaderData();
  // console.log(user);
  const { _id, name, email, date, desicription, books } = user;

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const date = form.date.value;
    const desicription = form.desicription.value;
    const books = form.books.value;

    const user = {
      name,
      email,
      date,
      desicription,
      books,
    };

    fetch(`https://server-five-rosy.vercel.app/user/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          form.reset();
          toast.success("Successfully added!");
        }
      });
  };

  return (
    <div className="flex flex-col justify-center items-center lg:w-5/12 mx-auto border-2 p-5 mt-5">
      <h1 className="text-2xl font-bold">Update as a Volunteer</h1>

      <form onSubmit={handleSubmit} className="flex flex-col mt-5 w-full">
        <input
          className="text-md px-3 py-2 border-b-2 "
          type="text"
          name="name"
          id=""
          placeholder="Full Name"
          defaultValue={name}
        />{" "}
        <br />
        <input
          className="text-md px-3 py-2 border-b-2"
          type="text"
          name="email"
          id=""
          placeholder="Username or Email"
          defaultValue={email}
          readOnly
        />{" "}
        <br />
        <input
          className="text-md px-3 py-2 border-b-2 datepicker"
          type="date"
          name="date"
          placeholder="Date"
          defaultValue={date}
        />{" "}
        <br />
        <input
          className="text-md px-3 py-2 border-b-2"
          type="text"
          name="desicription"
          id=""
          placeholder="Desicription"
          defaultValue={desicription}
        />{" "}
        <br />
        <input
          className="text-md px-3 py-2 border-b-2"
          type="text"
          name="books"
          id=""
          placeholder="Organize books at the library."
          defaultValue={books}
        />{" "}
        <br />
        <button className="btn btn-info text-white" type="submit">
          Update
        </button>
      </form>
    </div>
  );
};

export default SingleVolunteer;
