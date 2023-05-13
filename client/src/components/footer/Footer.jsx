import React from "react";
import {
  CurrencyDollarIcon,
  GlobeAltIcon,
  ArrowUpCircleIcon,
} from "@heroicons/react/24/outline";

const Footer = () => {
  return (
    <div className="text-[#999] my-[50px] ">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="flex">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-20">
            <div className="flex flex-col gap-5">
              <h2 className=" text-medium font-medium text-black">
                Categories
              </h2>
              <span className="text-sm">Graphics & Design</span>
              <span className="text-sm">Digital Marketing</span>
              <span className="text-sm">Writing & Translation</span>
              <span className="text-sm">Video & Animation</span>
              <span className="text-sm">Music & Audio</span>
              <span className="text-sm">Programming & Tech</span>
              <span className="text-sm">More</span>
            </div>
            <div className="flex flex-col gap-5">
              <h2 className=" text-medium font-medium text-black">About</h2>
              <span className="text-sm">Press & News</span>
              <span className="text-sm">Partnerships</span>
              <span className="text-sm">Privacy Policy</span>
              <span className="text-sm">Terms of Service</span>
              <span className="text-sm">Intellectual Property Claims</span>
              <span className="text-sm">Investor Relations</span>
              <span className="text-sm">Contact Sales</span>
            </div>
            <div className="flex flex-col gap-5">
              <h2 className=" text-medium font-medium text-black">Support</h2>
              <span className="text-sm">Help & Support</span>
              <span className="text-sm">Trust & Safety</span>
              <span className="text-sm">Selling on Liverr</span>
              <span className="text-sm">Buying on Liverr</span>
            </div>
            <div className="flex flex-col gap-5">
              <h2 className=" text-medium font-medium text-black">Community</h2>
              <span className="text-sm">Customer Success Stories</span>
              <span className="text-sm">Community hub</span>
              <span className="text-sm">Forum</span>
              <span className="text-sm">Events</span>
            </div>
            <div className="flex flex-col gap-5">
              <h2 className=" text-base font-medium text-black">
                More From Fiverr
              </h2>
              <span className="text-sm">Liverr Business</span>
              <span className="text-sm">Liverr Pro</span>
              <span className="text-sm">Liverr Logo Maker</span>
              <span className="text-sm">Liverr Guides</span>
              <span className="text-sm">Get Inspired</span>
              <span className="text-sm">Liverr Select</span>
              <span className="text-sm">ClearVoice</span>
              <span className="text-sm">Liverr Workspace</span>
              <span className="text-sm">Learn</span>
              <span className="text-sm">Working Not Working</span>
            </div>
          </div>
        </div>
        <hr className=" my-10 h-0 border border-gray-200" />
        <div className=" flex items-center flex-wrap justify-between">
          <div className=" w-full md:w-auto md:flex-row flex pt-4 items-center flex-col lg:flex-row ">
            <span>
              <h2 className=" text-2xl font-bold">Lancerr</h2>
            </span>
            <span className=" flex flex-col items-center text-[#b5b6ba] font-light text-sm ">
              <p className=" mt-2 ml-6 tracking-wide whitespace-nowrap ">
                © Liverr International Ltd. 2023
              </p>
            </span>
          </div>
          <div className=" flex items-center flex-col md:flex-row pt-4 w-full md:w-auto md:justify-between">
            <div className="flex justify-center pb-4 md:w-auto md:pr-8 md:pb-0  w-full ">
              <img
                className=" w-6 h-6 mr-6 "
                src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg"
                alt=""
              />
              <img
                className=" w-6 h-6 mr-6"
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt=""
              />
              <img
                className=" w-6 h-6 mr-6"
                src="https://cdn-icons-png.flaticon.com/512/179/179330.png?w=1380&t=st=1682869728~exp=1682870328~hmac=74c24fcba34b46ac69f9616f1058fbd94c0170052b1cfd2db888eaa1a5b1cbb7"
                alt=""
              />
              <img
                className=" w-6 h-6 mr-6"
                src="https://cdn-icons-png.flaticon.com/512/733/733566.png?w=1380&t=st=1682869634~exp=1682870234~hmac=71c19527d86e6926531c39e24dd480d68597190d11c36a02a64f05754716a077"
                alt=""
              />
              <img
                className=" w-6 h-6"
                src="https://cdn-icons-png.flaticon.com/512/733/733558.png?w=996&t=st=1682869801~exp=1682870401~hmac=57980a4b2f2b6150fa303b6d12b5cd49721afe9ab1dda47e70e23f1c167c8f98"
                alt=""
              />
            </div>
            <div className=" flex ">
              <div className=" mr-1 ">
                <button className=" py-2 px-3 font-semibold text-[#74767e] flex items-center ">
                  <GlobeAltIcon className=" w-7 h-7 pr-2" />
                  <span className=" text-sm ">English</span>
                </button>
              </div>
              <div className="mr-1">
                <button className=" py-2 px-3 font-semibold text-[#74767e] flex items-center ">
                  <CurrencyDollarIcon className="w-7 h-7 pr-2" />
                  <span className=" text-sm ">USD</span>
                </button>
              </div>
              <button className=" pl-2">
                <ArrowUpCircleIcon className=" h-7 w-7" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
