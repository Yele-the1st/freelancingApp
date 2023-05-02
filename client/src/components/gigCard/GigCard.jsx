import React from "react";
import { Link } from "react-router-dom";
import { StarIcon, HeartIcon } from "@heroicons/react/24/solid";

const GigCard = () => {
  return (
    <Link to="/gig/123">
      <div className=" min-w-[252px] h-[370px] border border-solid border-gray-300 mb-[25px]">
        <img className="w-full h-1/2 object-cover" src={item.img} alt="" />
        <div className=" py-2.5 px-5 flex flex-col gap-4 ">
          <div className="flex items-center gap-2.5 ">
            <img
              className=" w-[26px] h-[26px] rounded-full "
              src={item.pp}
              alt=""
            />
            <span>{item.username}</span>
          </div>
          <p className=" text-[#111]">{item.desc}</p>
          <div className="flex items-center gap-1.5">
            <StarIcon className="w-6 h-6 fill-yellow-400" />
            <span className="text-base font-bold text-yellow-400">
              {item.star}
            </span>
          </div>
        </div>
        <hr className=" h-0 border-solid border-[0.5px] border-gray-300 " />
        <div className="py-2.5 px-5 flex items-center justify-between">
          <HeartIcon className="w-6 h-6 cursor-pointer" />
          <div>
            <span className="text-[#999] text-[12px]">STARTING AT</span>
            <h2 className="text-[#555] text-[18px] font-normal">
              ${item.price}
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
