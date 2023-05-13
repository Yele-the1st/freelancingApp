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
  ArrowLeftIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";

const Message = () => {
  return (
    <div className=" h-[670px] bg-[#F7F7F7]">
      <div className=" h-full p-4">
        <div className="h-full flex overflow-x-hidden  border bg-white shadow-lg ">
          <aside className=" hidden md:flex flex-col flex-grow md:flex-none w-[300px] overflow-y-hidden border-r border-r-[#e4e5e7]">
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
          <div
            className="flex  h-full flex-col flex-1 overflow-hidden "
            aria-label="conversations"
          >
            <header className=" flex flex-col relative min-h-[70px] h-[70px] w-full border-b border-b-[#e4e5e7] pt-[14px] pl-[20px] ">
              <div className=" flex justify-between items-center w-full pb-2  ">
                <div className=" flex md:hidden">
                  <Link to={`/messages`}>
                    <ArrowLeftIcon className=" w-6 h-6" />
                  </Link>
                </div>
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
              <small className=" flex justify-center md:justify-normal mr-2.5 text-xs ">
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
            <div className=" h-[87%] flex  ">
              <div className=" h-full flex flex-1 mx-auto flex-col w-5/6 lg:w-3/4 xl:w-4/5 justify-end relative ">
                <div className=" top-0 transform translate-y-0  overflow-y-auto pt-3 overflow-x-hidden ">
                  <div className="  pb-1.5 ">
                    <div className="  mt-6 p-3 ">
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
                    <div
                      className="  hover:bg-[#f9f9f9] relative pb-[5px] flex "
                      aria-label="Message-Wrapper"
                    >
                      <div className="flex  px-[15px] py-[20px] ">
                        <span aria-label=" Image-Container">
                          <div className=" flex rounded-full mr-3 justify-center h-[36px] min-w-[36px] overflow-hidden items-center ">
                            <img
                              src="https://images.pexels.com/photos/2086361/pexels-photo-2086361.jpeg?auto=compress&cs=tinysrgb&w=800"
                              alt=""
                              className=" w-full h-full object-cover"
                            />
                          </div>
                        </span>
                        <div
                          aria-label="Messsge-content"
                          className=" w-11/12 mx-auto    "
                        >
                          <div className=" mb-[5px] text-xs font-light flex items-center ">
                            <span className=" text-sm font-semibold  ">Me</span>
                            <time
                              className=" text-[#95979d] mx-[5px]"
                              dateTime=""
                            >
                              May 02, 2023, 11:24 PM
                            </time>
                          </div>
                          <span className=" ">
                            <p className=" text-[#62646a] my-[5px] mr-2.5 max-w-[540px] text-sm leading-[145%] break-words whitespace-pre-line overflow-wrap ">
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Quos ratione explicabo dolore
                              eius ducimus praesentium ipsum aliquam eligendi
                              aliquid, beatae harum quasi? Quaerat ratione eum
                              eius dignissimos laborum labore sunt.
                            </p>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="  hover:bg-[#f9f9f9] relative pb-[5px] flex "
                      aria-label="Message-Wrapper"
                    >
                      <div className="flex  px-[15px] py-[20px] ">
                        <span aria-label=" Image-Container">
                          <div className=" flex rounded-full mr-3 justify-center h-[36px] min-w-[36px] overflow-hidden items-center ">
                            <img
                              src="https://images.pexels.com/photos/2086361/pexels-photo-2086361.jpeg?auto=compress&cs=tinysrgb&w=800"
                              alt=""
                              className=" w-full h-full object-cover"
                            />
                          </div>
                        </span>
                        <div
                          aria-label="Messsge-content"
                          className=" w-11/12 mx-auto    "
                        >
                          <div className=" mb-[5px] text-xs font-light flex items-center ">
                            <span className=" text-sm font-semibold  ">Me</span>
                            <time
                              className=" text-[#95979d] mx-[5px]"
                              dateTime=""
                            >
                              May 02, 2023, 11:24 PM
                            </time>
                          </div>
                          <span className=" ">
                            <p className=" text-[#62646a] my-[5px] mr-2.5 max-w-[540px] text-sm leading-[145%] break-words whitespace-pre-line overflow-wrap ">
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Quos ratione explicabo dolore
                              eius ducimus praesentium ipsum aliquam eligendi
                              aliquid, beatae harum quasi? Quaerat ratione eum
                              eius dignissimos laborum labore sunt.
                            </p>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="  hover:bg-[#f9f9f9] relative pb-[5px] flex "
                      aria-label="Message-Wrapper"
                    >
                      <div className="flex  px-[15px] py-[20px] ">
                        <span aria-label=" Image-Container">
                          <div className=" flex rounded-full mr-3 justify-center h-[36px] min-w-[36px] overflow-hidden items-center ">
                            <img
                              src="https://images.pexels.com/photos/2086361/pexels-photo-2086361.jpeg?auto=compress&cs=tinysrgb&w=800"
                              alt=""
                              className=" w-full h-full object-cover"
                            />
                          </div>
                        </span>
                        <div
                          aria-label="Messsge-content"
                          className=" w-11/12 mx-auto    "
                        >
                          <div className=" mb-[5px] text-xs font-light flex items-center ">
                            <span className=" text-sm font-semibold  ">Me</span>
                            <time
                              className=" text-[#95979d] mx-[5px]"
                              dateTime=""
                            >
                              May 02, 2023, 11:24 PM
                            </time>
                          </div>
                          <span className=" ">
                            <p className=" text-[#62646a] my-[5px] mr-2.5 max-w-[540px] text-sm leading-[145%] break-words whitespace-pre-line overflow-wrap ">
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Quos ratione explicabo dolore
                              eius ducimus praesentium ipsum aliquam eligendi
                              aliquid, beatae harum quasi? Quaerat ratione eum
                              eius dignissimos laborum labore sunt.
                            </p>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div
                      className=" pb-[5px]"
                      aria-label="auto scroll hanchor"
                    ></div>
                  </div>
                </div>
                <footer className="px-5 mb-2.5 z-30  mt-[1px]  ">
                  <div className=" h-auto min-h-[56px] rounded-[5px] flex flex-col justify-center border border-[#e4e5e7] ">
                    <div className=" overflow-y-hidden p-4 flex items-end ">
                      <div className=" h-[17px] w-full min-h-[28px] max-h-[192px] overflow-hidden  ">
                        <textarea
                          className=" outline-none h-full w-full font-normal text-sm leading-[120%] text-[#404145] overflow-hidden "
                          name=""
                          id=""
                          cols="30"
                          rows="10"
                          placeholder="Write a message..."
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className=" flex items-center justify-between mt-5    ">
                    <div>
                      <LinkIcon className=" w-6 h-6" />
                    </div>
                    <div>
                      <button className="bg-black text-white font-semibold text-base rounded-md py-3 px-6 items-center">
                        Send
                      </button>
                    </div>
                  </div>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
