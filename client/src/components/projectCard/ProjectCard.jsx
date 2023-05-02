import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ item }) => {
  return (
    <Link to="/">
      <div className="h-[300px] min-w-[252px] mx-4 bg-[#efeff0] rounded-t-md cursor-pointer relative shadow overflow-hidden">
        <img className="w-full h-[70%] object-cover " src={item.img} alt="" />
        <div className=" flex items-center p-4 gap-5">
          <img
            className="w-[40px] h-[40px] rounded-full object-cover "
            src={item.pp}
            alt=""
          />
          <div className="title">
            <h2 className=" text-base font-medium ">{item.cat}</h2>
            <span className=" text-sm font-normal">{item.username}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
