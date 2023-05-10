import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { HomeIcon } from "@heroicons/react/24/outline";
import { gigs } from "../../data";
import GigCard from "../../components/gigcard/GigCard";

const Gigs = () => {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const [openBudget, setOpenBudget] = useState(false);

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  return (
    <div className=" py-8 sm:py-10">
      <div className="mx-auto flex flex-col max-w-screen-xl px-4 space-y-4">
        <div className="flex items-center">
          <HomeIcon className="w-4 h-4 mr-2 " />
          <span className="text-sm font-normal justify-center text-[#404145] mr-2">
            / Graphics & Design
          </span>
        </div>
        <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          AI Artists
        </h1>
        <p className="text-sm font-medium text-[#999]">
          Explore the boundaries of art and technology with lancerr's AI artists
        </p>
        <div className="flex items-center justify-between mb-5">
          <div className=" hidden lg:flex items-center space-x-2.5 text-[#555] font-light">
            <span className="text-base font-semibold text-gray-900">
              Budget
            </span>
            <input
              className="p-[5px] border border-solid border-[lightgray] outline-none rounded-md"
              type="text"
              placeholder="min"
            />
            <input
              className="p-[5px] border border-solid border-[lightgray] outline-none rounded-md"
              type="text"
              placeholder="max"
            />
            <button className="bg-black shadow-lg text-white font-semibold text-base rounded-md py-3 px-6 items-center">
              Apply
            </button>
          </div>
          {/* dropdown menu */}
          <div className="relative">
            <div className=" shadow flex lg:hidden font-semibold items-center gap-2.5 border border-solid rounded-md cursor-pointer py-3 px-6 ">
              Budget
              <span>
                <ChevronDownIcon
                  className="w-4 h-4 stroke-current cursor-pointer stroke-2"
                  onClick={() => setOpenBudget(!openBudget)}
                />
              </span>
            </div>
            {openBudget && (
              <div className=" absolute lg:hidden top-[100%] left-0 mt-2 border rounded-lg shadow z-10 border-[#e4e5e7] bg-white">
                <div className=" top-0 relative max-h-[284px] p-6  ">
                  <div className="flex">
                    <div className="mr-3 flex flex-col mb-3 text-sm">
                      <label
                        className="text-[#95979d] text-xs font-semibold leading-6 mb-1  "
                        htmlFor="Min"
                      >
                        MIN
                      </label>
                      <input
                        className=" w-full min-h-[36px] min-w-[120px] border border-[#dadbdd] rounded text-[#404145] py-2 px-3 "
                        type="text"
                        placeholder="Any"
                      />
                    </div>
                    <div className=" flex flex-col mb-3 text-sm">
                      <label
                        className="text-[#95979d] text-xs font-semibold leading-6 mb-1  "
                        htmlFor="Min"
                      >
                        Max
                      </label>
                      <input
                        className=" w-full min-h-[36px] min-w-[120px] border border-[#dadbdd] rounded text-[#404145] py-2 px-3 "
                        type="text"
                        placeholder="Any"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex py-3 px-6 items-center justify-between gap-4 border-t border-t-[#e4e5e7] ">
                  <button className=" w-max font-semibold text-base items-center ">
                    Clear All
                  </button>
                  <button
                    className="bg-black text-white font-semibold text-base rounded-md py-3 px-6 items-center"
                    onClick={() => setOpenBudget(!openBudget)}
                  >
                    Apply
                  </button>
                </div>
              </div>
            )}
          </div>
          {/* ***************************************** */}
          <div className="flex items-center relative space-x-2.5">
            <span className=" font-normal text-base text-[#62646a] ">
              Sort By
            </span>
            <span className=" font-bold text-base">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            <ChevronDownIcon
              className="w-4 h-4 stroke-current cursor-pointer stroke-2"
              onClick={() => setOpen(!open)}
            />
            {open && (
              <div className=" z-10 absolute p-5 border-[0.5px] border-[lightgray] bg-white rounded-md top-7 right-0 flex flex-col space-y-5 text-[#555]">
                {sort === "sales" ? (
                  <span
                    onClick={() => reSort("createdAt")}
                    className=" cursor-pointer"
                  >
                    Newest
                  </span>
                ) : (
                  <span
                    onClick={() => reSort("sales")}
                    className=" cursor-pointer "
                  >
                    Best Selling
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col flex-wrap ">
          <div className=" flex flex-row w-full  ">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 mt-4 ">
              {gigs.map((gig) => (
                <GigCard key={gig.id} item={gig} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gigs;
