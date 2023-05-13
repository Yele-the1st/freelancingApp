import React from "react";
import { Link } from "react-router-dom";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
  StarIcon,
  EnvelopeOpenIcon,
  AdjustmentsHorizontalIcon,
  ArchiveBoxArrowDownIcon,
  TrashIcon,
  TagIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const Messages = () => {
  return (
    <div className=" h-[650px] bg-[#F7F7F7]">
      <div className=" h-full p-4">
        <div className="h-full flex overflow-x-hidden  border bg-white shadow-lg ">
          <aside className=" flex flex-col flex-grow md:flex-none w-[300px] overflow-y-hidden border-r border-r-[#e4e5e7]">
            <header className="px-[15px] border-b border-b-[#e4e5e7] min-h-[70px] h-[70px] flex flex-col justify-center z-1">
              <div className=" flex justify-between ">
                <button className=" text-[#74767e] text-base overflow-visible  ">
                  <div className=" flex items-center ">
                    <p>All Conversations</p>
                    <div className=" ml-2 ">
                      <ChevronDownIcon className=" w-5 h-5 stroke-2 " />
                    </div>
                  </div>
                </button>

                <button className=" text-[#74767e]">
                  <MagnifyingGlassIcon className="w-5 h-5 stroke-2" />
                </button>
              </div>
            </header>

            <section className=" relative overflow-y-auto overflow-x-hidden pb-12 h-full w-full  ">
              <Link
                to="/message/123"
                className=" absolute z-20 h-[80px] top-0 left-0 right-0 border-b border-b-[#e4e5e7] flex justify-between w-full p-4 "
              >
                <span
                  className="relative mt-2 mr-4 mb-3 h-max"
                  aria-label="image-container"
                >
                  <button className=" relative rounded-full  ">
                    <figure className=" relative inline-flex items-center justify-center min-w-[50px] h-[50px] rounded-full overflow-hidden   ">
                      <img
                        src="https://images.pexels.com/photos/11432837/pexels-photo-11432837.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt=""
                        className=" object-cover absolute w-full h-full  "
                      />
                    </figure>
                  </button>
                  <span className=" absolute w-4 h-4 -right-1 bottom-2 rounded-full bg-[#b5b6ba] border-white border-[2px]">
                    <i></i>
                  </span>
                </span>
                <div
                  className=" w-0 flex-grow-2 flex-shrink-2 flex-auto pr-3 align-baseline "
                  aria-label="user-info"
                >
                  <div
                    className=" flex items-center  "
                    aria-label="username-container"
                  >
                    <strong className=" font-bold text-black text-sm leading-8 truncate">
                      Kaokab Animasaun
                    </strong>
                  </div>
                  <div className=" text-sm  ">
                    <p className="  flex items-center ">
                      <span className="font-normal truncate text-[#62646a]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fuga soluta totam quae eos amet voluptatum aspernatur
                        ducimus, dignissimos fugit veritatis quaerat recusandae
                        quos doloribus hic temporibus odio sapiente nemo! Autem!
                      </span>
                    </p>
                  </div>
                </div>
                <aside className=" pt-2 ml-1 ">
                  <div className=" flex items-center ">
                    <time
                      className=" text-[#95979d] text-xs font-medium whitespace-pre"
                      dateTime=""
                    >
                      4 days
                    </time>
                    <button className=" ml-2 flex items-center ">
                      <div className=" flex relative items-end justify-end  ">
                        <StarIcon className=" w-5 h-5 fill-[#b5b6ba]  " />
                      </div>
                    </button>
                  </div>
                  <div className=" flex items-end justify-end mt-2 ">
                    <button className=" flex items-center ">
                      <EnvelopeOpenIcon className="w-5 h-5 fill-[#b5b6ba]" />
                    </button>
                  </div>
                </aside>
              </Link>
            </section>
          </aside>
          <div className="hidden md:flex flex-col items-center w-full h-full justify-center  ">
            <div
              class="h-[200px] mb-[32px] w-full bg-no-repeat bg-bottom"
              style={{
                backgroundImage:
                  "url('https://assets.website-files.com/5d5e2ff58f10c53dcffd8683/5db1e0e7e74e34610bcb4951_sprinting.gif')",
                backgroundSize: "219px",
              }}
            ></div>
            <strong className=" font-bold text-2xl">
              {" "}
              Pick up where you left off
            </strong>
            <small className=" max-w-[330px] text-base font-normal my-2.5 mx-auto px-5 ">
              Select a conversation and chat away
            </small>
          </div>
          {/* <div
            className=" hidden md:flex flex-col flex-1 overflow-hidden "
            aria-label="conversations"
          >
            <header className="relative min-h-[70px] h-[70px] w-full border-b border-b-[#e4e5e7] pt-[14px] pl-[20px] ">
              <div className=" flex justify-between items-center w-full  ">
                <div className=" flex items-center ">
                  <span className=" relative w-5 h-5 rounded-full bg-[#b5b6ba] border-white border-[2px]">
                    <i></i>
                  </span>
                  <h1 className=" pl-1 text-lg font-bold ">
                    <a href="" className=" underline ">
                      Kaokab Animasaun
                    </a>
                  </h1>
                </div>
                <aside className=" px-[20px] flex flex-row-reverse items-center  ">
                  <button>
                    <AdjustmentsHorizontalIcon className=" w-5 h-5" />
                  </button>

                  <div className=" hidden flex items-center justify-center">
                    <button>
                      <StarIcon className=" ml-2 w-5 h-5" />
                    </button>
                    <button>
                      <EnvelopeOpenIcon className=" ml-2 w-5 h-5" />
                    </button>
                    <i className=" h-4 mt-1 mr-0.5 ml-1.5 border-r border-r-[#e4e5e7]  "></i>
                    <button>
                      <ArchiveBoxArrowDownIcon className=" ml-2 w-5 h-5" />
                    </button>
                    <button>
                      <TrashIcon className="ml-2 w-5 h-5" />
                    </button>
                    <i className=" h-4 mt-1 mr-0.5 ml-1.5 border-r border-r-[#e4e5e7]  "></i>
                    <button>
                      <TagIcon className="ml-2 w-5 h-5" />
                    </button>
                  </div>
                </aside>
              </div>
              <small className=" mr-2.5 text-xs ">
                <span className=" text-[#777]">
                  <span>Last seen:</span>
                  <time dateTime=""> 4 hours ago</time>
                </span>
                <span className=" text-[#777] border-l border-l-[#b2b2b2] ml-2.5 pl-2.5">
                  <span>Local time:</span>
                  <time dateTime=""> May 07, 2023, 9:27 PM</time>
                </span>
              </small>
            </header>
            <div className=" h-full pb-20 ">
              <div className=" flex flex-1 flex-col w-full flex-end relative ">
                <div className="  overflow-y-auto pt-5 overflow-x-hidden ">
                  <div className="  pb-1.5 ">
                    <div className="  mt-8 p-3 ">
                      <div className="flex items-center mb-2 ">
                        <i className=" flex-1 border-b border-b-[#e4e5e7] "></i>
                        <span className="ml-3 mr-1">
                          <ShieldCheckIcon className=" w-6 h-6 fill-[#74767e] stroke-white" />
                        </span>
                        <span className=" mr-3 text-xs font-semibold text-[#74767e] ">
                          We have your back
                        </span>
                        <i className=" flex-1 border-b border-b-[#e4e5e7] "></i>
                      </div>
                      <div className=" mx-4 text-center text-xs text-[#7a7d85]">
                        For added safety, remember to keep all payments and
                        communication within the platform.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Messages;
