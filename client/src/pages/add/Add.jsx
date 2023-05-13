import React from "react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";

const Add = () => {
  return (
    <div className=" flex justify-center ">
      <div className="mx-auto flex flex-col max-w-screen-xl w-[1280px] px-4 py-12 space-y-4">
        <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:tracking-tight">
          Add New Gig
        </h1>
        <div className="  sm:flex justify-between gap-[100px] ">
          <div className=" flex flex-1 flex-col gap-2.5  " id="left">
            <label
              htmlFor=""
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Title
            </label>
            <input
              type="text"
              placeholder="e.g. I will do something i'm really good at"
              className=" p-4 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <label
              htmlFor=""
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Category
            </label>
            <select
              name="cats"
              id="cats"
              className=" w-full  rounded-md border-0 p-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
              <option value="design">Design</option>
              <option value="design">Web Developement</option>
              <option value="design">Animation</option>
              <option value="design">Music</option>
              <option value="design">Programming</option>
            </select>
            <label
              htmlFor=""
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Cover Image
            </label>

            <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div class="text-center">
                <PhotoIcon
                  className="mx-auto h-12 w-12 text-gray-300"
                  aria-hidden="true"
                />
                <div class="mt-4 flex justify-center text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    class="relative cursor-pointer bg-white font-semibold text-indigo-600  hover:text-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      class="sr-only"
                    />
                  </label>
                </div>
                <p class="text-xs leading-5 text-gray-600">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
            <label
              htmlFor=""
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Upload Images
            </label>
            <input
              type="file"
              multiple
              className="p-4 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <label
              htmlFor=""
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Description
            </label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="16"
              placeholder="Brief descriptions to introduce your service to customers"
              className="p-4 mb-5 sm:mb-0 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            ></textarea>
          </div>
          <div className=" flex-1 flex flex-col gap-2.5" id="right">
            <label
              htmlFor=""
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Service Title
            </label>
            <input
              type="text"
              placeholder="e.g. One-page web design"
              className="p-4 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <label
              htmlFor=""
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Short Description
            </label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Short description of your service"
              className="p-4 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            ></textarea>
            <label
              htmlFor=""
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Delivery Time(e.g. 3 days)
            </label>
            <input
              type="number"
              min={1}
              className="p-4 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <label
              htmlFor=""
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Revision Number
            </label>
            <input
              type="number"
              min={1}
              className="p-4 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <label
              htmlFor=""
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Add Features
            </label>
            <input
              type="text"
              placeholder="e.g. page design"
              className="p-4 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <input
              type="text"
              placeholder="e.g. file uploading "
              className="p-4 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <input
              type="text"
              placeholder="e.g. setting up a domain"
              className="p-4 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <input
              type="text"
              placeholder="e.g. hosting"
              className="p-4 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <label
              htmlFor=""
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Price
            </label>
            <input
              type="number"
              min={1}
              className="p-4 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <button className="bg-black shadow-lg text-white font-semibold text-base rounded-md py-3 px-6 items-center">
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
