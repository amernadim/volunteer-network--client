import React from "react";

const Card = ({info}) => {
  const {id , img , title} = info ;
  return (
    <div className="object-cover relative">
      <img
        className="object-cover w-full rounded-md"
        src={img}
        alt="N/A"
      />
     <div className="bg-warning p-3 rounded-md mx-auto w-full absolute bottom-[-20px]">
      <h2 className=" font-semibold ">
        {title}
      </h2>
     </div>
    </div>
  );
};

export default Card;
