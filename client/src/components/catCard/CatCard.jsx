import React from "react";
import { Link } from "react-router-dom";

const CatCard = ({ item }) => {
  return (
    <Link to="/gigs?cat=design">
      <div className="h-[345px] min-w-[252px] mx-4 bg-[#efeff0] rounded-lg cursor-pointer relative overflow-hidden hover:shadow-lg">
        <img className="w-full h-full object-cover" src={item.img} alt="" />
        <span className=" font-normal text-base text-white absolute top-[15px] left-[15px]">
          {item.desc}
        </span>
        <span className=" font-bold text-2xl text-white absolute left-[15px] top-[40px]">
          {item.title}
        </span>
      </div>
    </Link>
  );
};

export default CatCard;
