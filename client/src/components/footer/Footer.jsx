import React from "react";

const Footer = () => {
  return (
    <div className="text-[#999] my-[50px] ">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className=" flex items-center justify-center">
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
        <div className=" grid md:grid-cols-2 gap-10 ">
          <div className="flex md:justify-start justify-center items-center gap-5 ">
            <h2 className=" text-base font-medium text-black">lancerr</h2>
            <span className=" text-sm ">© Liverr International Ltd. 2023</span>
          </div>
          <div className=" flex items-center gap-7 ">
            <div className="flex items-center gap-5 ">
              <img
                className=" w-6 h-6 "
                src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg"
                alt=""
              />
              <img
                className=" w-6 h-6 "
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt=""
              />
              <img
                className=" w-6 h-6 "
                src="https://cdn-icons-png.flaticon.com/512/179/179330.png?w=1380&t=st=1682869728~exp=1682870328~hmac=74c24fcba34b46ac69f9616f1058fbd94c0170052b1cfd2db888eaa1a5b1cbb7"
                alt=""
              />
              <img
                className=" w-6 h-6 "
                src="https://cdn-icons-png.flaticon.com/512/733/733566.png?w=1380&t=st=1682869634~exp=1682870234~hmac=71c19527d86e6926531c39e24dd480d68597190d11c36a02a64f05754716a077"
                alt=""
              />
              <img
                className=" w-6 h-6 "
                src="https://cdn-icons-png.flaticon.com/512/733/733558.png?w=996&t=st=1682869801~exp=1682870401~hmac=57980a4b2f2b6150fa303b6d12b5cd49721afe9ab1dda47e70e23f1c167c8f98"
                alt=""
              />
            </div>
            <div className="flex items-center gap-5">
              <img
                className=" w-6 h-6 "
                src="https://cdn-icons-png.flaticon.com/512/15/15948.png?w=996&t=st=1682869835~exp=1682870435~hmac=864c858bcffd06193daea4801f74d9a05f3fc8066cc026972a0e969406dcebc7"
                alt=""
              />
              <span className=" text-sm ">English</span>
            </div>
            <div className="flex items-center gap-5">
              <img
                className=" w-6 h-6 "
                src="https://cdn-icons-png.flaticon.com/512/991/991952.png?w=996&t=st=1682869961~exp=1682870561~hmac=61ceb5cd5ab09e0507d547b98393394996304735ac8a9c284bc329384c0f8320"
                alt=""
              />
              <span className=" text-sm ">USD</span>
            </div>
            <img
              className=" w-6 h-6 "
              src="https://cdn-icons-png.flaticon.com/512/46/46462.png?w=996&t=st=1682869995~exp=1682870595~hmac=b46ee82086cbe6fcfccc3cad1e10a398bebd745241d761d7a503fb6bd4988868"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
