import React from "react";
import { Link } from "react-router-dom";
import { StarIcon, HeartIcon } from "@heroicons/react/24/solid";

const GigCard = ({ item }) => {
  return (
    <Link to="/gig/123">
      <div className="w-full min-w-[245px] bg-white border border-solid border-[#e4e5e7] flex flex-col">
        <div className="relative h-0 overflow-hidden pb-[56.25%]">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={item.img}
            alt=""
          />
        </div>
        <div className="p-5 flex flex-col gap-4 flex-grow">
          <div className="flex items-center gap-2.5 ">
            <img
              className="w-[26px] h-[26px] object-cover rounded-full "
              src={item.pp}
              alt=""
            />
            <span>{item.username}</span>
          </div>
          <p className="line-clamp-2 text-[#111]">{item.desc}</p>
          <div className="flex items-center gap-1.5">
            <StarIcon className="w-6 h-6 fill-yellow-400" />
            <span className="text-base font-bold text-yellow-400">
              {item.star}
            </span>
          </div>
          <hr className="h-0 border-solid border-[0.5px] border-gray-300" />
          <div className="flex items-center justify-between">
            <HeartIcon className="w-6 h-6 cursor-pointer" />
            <div className="flex items-center space-x-2">
              <span className="text-[#999] text-[12px]">STARTING AT</span>
              <h2 className="text-[#555] text-[18px] font-normal">
                ${item.price}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
