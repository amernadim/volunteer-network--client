import React from "react";
import Img1 from "../../assest/images/childSupport.png";
import Img2 from "../../assest/images/refuseShelter.png";
import Img3 from "../../assest/images/foodCharity.png";
import Img4 from "../../assest/images/clothSwap.png";
import Img5 from "../../assest/images/riverClean.png";
import Img6 from "../../assest/images/cleanWater.png";
import Img7 from "../../assest/images/goodEducation.png";
import Img8 from "../../assest/images/newBooks.png";
import Img9 from "../../assest/images/studyGroup.png";
import Img10 from "../../assest/images/birdHouse.png";
import Img11 from "../../assest/images/libraryBooks.png";
import Img12 from "../../assest/images/driveSafety.png";
import Img13 from "../../assest/images/musicLessons.png";
import Img14 from "../../assest/images/voteRegister.png";
import Img15 from "../../assest/images/clearnPark.png";
import Img16 from "../../assest/images/ITHelp.png";
import Img17 from "../../assest/images/animalShelter.png";
import Img18 from "../../assest/images/babySit.png";
import Img19 from "../../assest/images/stuffedAnimals.png";
import Img20 from "../../assest/images/schoolSuffiles.png";
import Card from "./Card";

const cardInfo = [
  { id: 1, img: Img1, title: "Child Support" },
  { id: 2, img: Img2, title: "Refuge shelter" },
  { id: 3, img: Img3, title: "Food Charity" },
  { id: 4, img: Img4, title: "Host a clothing swap." },
  { id: 5, img: Img5, title: "Host a river clean-up." },
  { id: 6, img: Img6, title: "Clean water for children" },
  { id: 7, img: Img7, title: "Good education" },
  { id: 8, img: Img8, title: "New books for children" },
  { id: 9, img: Img9, title: "Host a study group." },
  { id: 10, img: Img10, title: "Build birdhouses for  your neighbors." },
  { id: 11, img: Img11, title: "Organize books at the library." },
  { id: 12, img: Img12, title: "Give a seminar on driving safety." },
  { id: 13, img: Img13, title: "Give free music lessons." },
  { id: 14, img: Img14, title: "Teach people how to register to vote." },
  { id: 15, img: Img15, title: "Clean up your local park." },
  { id: 16, img: Img16, title: "Give IT help to local adults" },
  { id: 17, img: Img17, title: "Foster a shelter animal" },
  { id: 18, img: Img18, title: "Babysit during PTA meetings." },
  { id: 19, img: Img19, title: "Collect stuffed animals." },
  { id: 20, img: Img20, title: "Collect school supplies." },
];

const Home = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center uppercase">
        I grow by helping people in need.
      </h2>
      <div className="mt-6 flex gap-2 justify-center">
        <input
          type="text"
          placeholder="Search..."
          className="input input-bordered input-sm w-full max-w-xs"
        />
        <button
          type="button"
          className="bg-warning btn-sm rounded-md text-white"
        >
          Search
        </button>
      </div>
      <section className="py-6 dark:bg-gray-800">
        <div className="container flex flex-col justify-center p-4 mx-auto">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 sm:grid-cols-2">
            {
              cardInfo.map(info => <Card 
              key={info.id}
              info={info}
              ></Card>)
            }          
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
