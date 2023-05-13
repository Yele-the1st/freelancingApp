import React from "react";
import { Link } from "react-router-dom";
import { TrashIcon } from "@heroicons/react/24/solid";

const MyGigs = () => {
  return (
    <div className="py-8 sm:py-10 ">
      <div className="flex flex-col mx-auto max-w-screen-xl px-4 space-y-12">
        <div className="flex justify-between items-center ">
          <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Gigs
          </h1>
          <Link to="/add">
            <button className="bg-black text-white font-semibold text-base rounded-md py-3 px-6 items-center">
              Add New Gigs
            </button>
          </Link>
        </div>
        <div className="w-full">
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className=" px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Image
                </th>
                <th className=" px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th className=" px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className=" px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Sales
                </th>
                <th className=" px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="even:bg-white odd:bg-gray-100">
                <td className="px-6 py-4 ">
                  <img
                    src="https://images.pexels.com/photos/1145720/pexels-photo-1145720.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt=""
                    className="h-[25px] w-[50px] object-cover"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Gig1
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-500">
                  88
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-500">
                  123
                </td>
                <td className="px-6 py-4 ">
                  <button>
                    <TrashIcon className=" w-6 h-6 cursor-pointer" />
                  </button>
                </td>
              </tr>
              <tr className="even:bg-white odd:bg-gray-100">
                <td className="px-6 py-4 ">
                  <img
                    src="https://images.pexels.com/photos/1145720/pexels-photo-1145720.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt=""
                    className="h-[25px] w-[50px] object-cover"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Gig1
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-500">
                  88
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-500">
                  123
                </td>
                <td className="px-6 py-4 ">
                  <button>
                    <TrashIcon className=" w-6 h-6 cursor-pointer" />
                  </button>
                </td>
              </tr>
              <tr className="even:bg-white odd:bg-gray-100">
                <td className="px-6 py-4 ">
                  <img
                    src="https://images.pexels.com/photos/1145720/pexels-photo-1145720.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt=""
                    className="h-[25px] w-[50px] object-cover"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Gig1
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-500">
                  88
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-500">
                  123
                </td>
                <td className="px-6 py-4 ">
                  <button>
                    <TrashIcon className=" w-6 h-6 cursor-pointer" />
                  </button>
                </td>
              </tr>
              <tr className="even:bg-white odd:bg-gray-100">
                <td className="px-6 py-4 ">
                  <img
                    src="https://images.pexels.com/photos/1145720/pexels-photo-1145720.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt=""
                    className="h-[25px] w-[50px] object-cover"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Gig1
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-500">
                  88
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-500">
                  123
                </td>
                <td className="px-6 py-4 ">
                  <button>
                    <TrashIcon className=" w-6 h-6 cursor-pointer" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyGigs;
