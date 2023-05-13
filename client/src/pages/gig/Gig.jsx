import React from "react";
import {
  HomeIcon,
  StarIcon,
  HandThumbUpIcon,
  HandThumbDownIcon,
  ClockIcon,
  ArrowPathIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";
import SingleCarousel from "../../components/singleCarousel/SingleCarousel";
import Card from "../../components/card/Card";
import { cards, projects } from "../../data";
import { Link } from "react-router-dom";

const Gig = () => {
  return (
    <div className="py-8 sm:py-10">
      <div className=" lg:flex mx-auto max-w-screen-xl py-7 px-4 gap-[70px]">
        <div className="flex-[2] flex flex-col gap-10 ">
          <div className="flex items-center">
            <HomeIcon className="w-4 h-4 mr-2 " />
            <span className="text-sm font-normal justify-center text-[#404145] mr-2">
              / Graphics & Design
            </span>
          </div>
          <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            I will create ai generated art for you
          </h1>
          <div className=" flex items-center space-x-2.5 ">
            <img
              src="https://images.pexels.com/photos/11432837/pexels-photo-11432837.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt=""
              className=" w-8 h-8 rounded-full  object-cover"
            />
            <span className=" text-sm font-medium ">John Doe</span>
            <div className=" flex items-center gap-1.5 ">
              <StarIcon className=" w-3.5 h-3.5" />
              <StarIcon className=" w-3.5 h-3.5" />
              <StarIcon className=" w-3.5 h-3.5" />
              <StarIcon className=" w-3.5 h-3.5" />
              <StarIcon className=" w-3.5 h-3.5" />
              <span className=" font-bold text-sm text-[#ffc108]">5</span>
            </div>
          </div>
          <div className="mt-[20px] mb-[64px]  w-auto">
            <SingleCarousel>
              {cards.map((card) => (
                <Card key={card.id} item={card} />
              ))}
            </SingleCarousel>
          </div>
          <h2 className=" font-normal ">About the Gig</h2>
          <p className=" font-light text-[#555] leading-6 ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
            nobis, maxime ipsa voluptatum, quaerat laudantium cumque, sapiente
            at eaque neque eum nesciunt nam magnam excepturi. Repellat
            consequuntur fugiat deleniti nostrum. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Voluptas, dolor rerum voluptatibus
            iure neque porro. Magni velit quam amet explicabo aliquid,
            perspiciatis atque labore iste quaerat. Iste a rem nobis.
          </p>
          <div className=" mt-[50px] flex flex-col gap-5   ">
            <h2>About the Seller</h2>
            <div className=" flex items-center gap-5">
              <img
                src="https://images.pexels.com/photos/11432837/pexels-photo-11432837.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                alt=""
                className=" w-24 h-24 rounded-full object-cover "
              />
              <div className=" flex flex-col gap-2.5  ">
                <span>John Doe</span>
                <div className=" flex items-center gap-1.5 ">
                  <StarIcon className=" w-3.5 h-3.5" />
                  <StarIcon className=" w-3.5 h-3.5" />
                  <StarIcon className=" w-3.5 h-3.5" />
                  <StarIcon className=" w-3.5 h-3.5" />
                  <StarIcon className=" w-3.5 h-3.5" />
                  <span className=" font-bold text-sm text-[#ffc108]">5</span>
                </div>
                <Link to={`/messages`}>
                  <button className="bg-black text-white font-semibold text-base rounded-md py-3 px-6 items-center">
                    Contact Me
                  </button>
                </Link>
              </div>
            </div>
            <div className=" border border-[lightgray] rounded-[5px] p-5 mt-5 ">
              <div className="flex flex-wrap justify-between ">
                <div className=" w-[300px] flex flex-col gap-2.5 mb-5">
                  <span className="font-semibold">From</span>
                  <span className="desc">USA</span>
                </div>
                <div className="w-[300px] flex flex-col gap-2.5 mb-5">
                  <span className="font-semibold">Member since</span>
                  <span className="desc">Aug 2022</span>
                </div>
                <div className="w-[300px] flex flex-col gap-2.5 mb-5">
                  <span className="font-semibold">Avg. response time</span>
                  <span className="desc">4 hours</span>
                </div>
                <div className="w-[300px] flex flex-col gap-2.5 mb-5">
                  <span className="font-semibold">Last delivery</span>
                  <span className="desc">1 day</span>
                </div>
                <div className="w-[300px] flex flex-col gap-2.5 mb-5">
                  <span className="font-semibold">Languages</span>
                  <span className="desc">English</span>
                </div>
              </div>
              <hr className=" h-0 border-[0.5px] border-[lightgray] mb-5 " />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                beatae velit, quis alias distinctio enim consequuntur minima,
                provident magnam commodi quidem, vel accusantium omnis pariatur
                maiores adipisci ipsam delectus. Vel!
              </p>
            </div>
          </div>
          <div className="mt-12  ">
            <h2>Reviews</h2>
            <div className=" flex flex-col gap-5 my-5">
              <div className=" flex items-center gap-2 ">
                <img
                  src="https://images.pexels.com/photos/13921044/pexels-photo-13921044.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                  alt=""
                  className=" h-12 w-12 object-cover rounded-full "
                />
                <div className="info">
                  <span>John Doe</span>
                  <div className="flex items-center gap-2.5 text-[gray] ">
                    <img
                      src="https://img.freepik.com/free-vector/illustration-usa-flag_53876-18165.jpg?size=626&ext=jpg&ga=GA1.1.1324280786.1682869613&semt=ais"
                      alt=""
                      className="w-5"
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className=" flex items-center gap-1.5 ">
                <StarIcon className=" w-3.5 h-3.5" />
                <StarIcon className=" w-3.5 h-3.5" />
                <StarIcon className=" w-3.5 h-3.5" />
                <StarIcon className=" w-3.5 h-3.5" />
                <StarIcon className=" w-3.5 h-3.5" />
                <span className=" font-bold text-sm text-[#ffc108]">5</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus officiis, laboriosam nobis veritatis, sit iste
                excepturi ipsum ipsa perspiciatis totam, nostrum eveniet
                necessitatibus labore voluptatum quaerat quo natus accusamus
                harum! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Vero maiores quaerat harum minima cupiditate placeat. Fuga,
              </p>
              <div className=" flex items-center gap-2.5 ">
                <span>Helpful</span>
                <HandThumbUpIcon className="w-4 h-4" />
                <span>Yes</span>
                <HandThumbDownIcon className="w-4 h-4" />
                <span>No</span>
              </div>
            </div>

            <hr className=" h-0 border-[0.5px] border-[lightgray] my-12 " />
            <div className=" flex flex-col gap-5 my-5">
              <div className=" flex items-center gap-2 ">
                <img
                  src="https://images.pexels.com/photos/13921044/pexels-photo-13921044.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                  alt=""
                  className=" h-12 w-12 object-cover rounded-full "
                />
                <div className="info">
                  <span>John Doe</span>
                  <div className="flex items-center gap-2.5 text-[gray] ">
                    <img
                      src="https://img.freepik.com/free-vector/illustration-usa-flag_53876-18165.jpg?size=626&ext=jpg&ga=GA1.1.1324280786.1682869613&semt=ais"
                      alt=""
                      className="w-5"
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className=" flex items-center gap-1.5 ">
                <StarIcon className=" w-3.5 h-3.5" />
                <StarIcon className=" w-3.5 h-3.5" />
                <StarIcon className=" w-3.5 h-3.5" />
                <StarIcon className=" w-3.5 h-3.5" />
                <StarIcon className=" w-3.5 h-3.5" />
                <span className=" font-bold text-sm text-[#ffc108]">5</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus officiis, laboriosam nobis veritatis, sit iste
                excepturi ipsum ipsa perspiciatis totam, nostrum eveniet
                necessitatibus labore voluptatum quaerat quo natus accusamus
                harum! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Vero maiores quaerat harum minima cupiditate placeat. Fuga,
              </p>
              <div className=" flex items-center gap-2.5 ">
                <span>Helpful</span>
                <HandThumbUpIcon className="w-4 h-4" />
                <span>Yes</span>
                <HandThumbDownIcon className="w-4 h-4" />
                <span>No</span>
              </div>
            </div>

            <hr className=" h-0 border-[0.5px] border-[lightgray] my-12 " />
            <div className=" flex flex-col gap-5 my-5">
              <div className=" flex items-center gap-2 ">
                <img
                  src="https://images.pexels.com/photos/13921044/pexels-photo-13921044.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                  alt=""
                  className=" h-12 w-12 object-cover rounded-full "
                />
                <div className="info">
                  <span>John Doe</span>
                  <div className="flex items-center gap-2.5 text-[gray] ">
                    <img
                      src="https://img.freepik.com/free-vector/illustration-usa-flag_53876-18165.jpg?size=626&ext=jpg&ga=GA1.1.1324280786.1682869613&semt=ais"
                      alt=""
                      className="w-5"
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className=" flex items-center gap-1.5 ">
                <StarIcon className=" w-3.5 h-3.5" />
                <StarIcon className=" w-3.5 h-3.5" />
                <StarIcon className=" w-3.5 h-3.5" />
                <StarIcon className=" w-3.5 h-3.5" />
                <StarIcon className=" w-3.5 h-3.5" />
                <span className=" font-bold text-sm text-[#ffc108]">5</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus officiis, laboriosam nobis veritatis, sit iste
                excepturi ipsum ipsa perspiciatis totam, nostrum eveniet
                necessitatibus labore voluptatum quaerat quo natus accusamus
                harum! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Vero maiores quaerat harum minima cupiditate placeat. Fuga,
              </p>
              <div className=" flex items-center gap-2.5 ">
                <span>Helpful</span>
                <HandThumbUpIcon className="w-4 h-4" />
                <span>Yes</span>
                <HandThumbDownIcon className="w-4 h-4" />
                <span>No</span>
              </div>
            </div>

            <hr className=" h-0 border-[0.5px] border-[lightgray] my-12 " />
            <div className=" flex flex-col gap-5 my-5">
              <div className=" flex items-center gap-2 ">
                <img
                  src="https://images.pexels.com/photos/13921044/pexels-photo-13921044.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                  alt=""
                  className=" h-12 w-12 object-cover rounded-full "
                />
                <div className="info">
                  <span>John Doe</span>
                  <div className="flex items-center gap-2.5 text-[gray] ">
                    <img
                      src="https://img.freepik.com/free-vector/illustration-usa-flag_53876-18165.jpg?size=626&ext=jpg&ga=GA1.1.1324280786.1682869613&semt=ais"
                      alt=""
                      className="w-5"
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className=" flex items-center gap-1.5 ">
                <StarIcon className=" w-3.5 h-3.5" />
                <StarIcon className=" w-3.5 h-3.5" />
                <StarIcon className=" w-3.5 h-3.5" />
                <StarIcon className=" w-3.5 h-3.5" />
                <StarIcon className=" w-3.5 h-3.5" />
                <span className=" font-bold text-sm text-[#ffc108]">5</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus officiis, laboriosam nobis veritatis, sit iste
                excepturi ipsum ipsa perspiciatis totam, nostrum eveniet
                necessitatibus labore voluptatum quaerat quo natus accusamus
                harum! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Vero maiores quaerat harum minima cupiditate placeat. Fuga,
              </p>
              <div className=" flex items-center gap-2.5 ">
                <span>Helpful</span>
                <HandThumbUpIcon className="w-4 h-4" />
                <span>Yes</span>
                <HandThumbDownIcon className="w-4 h-4" />
                <span>No</span>
              </div>
            </div>

            <hr className=" h-0 border-[0.5px] border-[lightgray] my-12 " />
            <div className=" flex flex-col gap-5 my-5">
              <div className=" flex items-center gap-2 ">
                <img
                  src="https://images.pexels.com/photos/13921044/pexels-photo-13921044.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                  alt=""
                  className=" h-12 w-12 object-cover rounded-full "
                />
                <div className="info">
                  <span>John Doe</span>
                  <div className="flex items-center gap-2.5 text-[gray] ">
                    <img
                      src="https://img.freepik.com/free-vector/illustration-usa-flag_53876-18165.jpg?size=626&ext=jpg&ga=GA1.1.1324280786.1682869613&semt=ais"
                      alt=""
                      className="w-5"
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className=" flex items-center gap-1.5 ">
                <StarIcon className=" w-3.5 h-3.5" />
                <StarIcon className=" w-3.5 h-3.5" />
                <StarIcon className=" w-3.5 h-3.5" />
                <StarIcon className=" w-3.5 h-3.5" />
                <StarIcon className=" w-3.5 h-3.5" />
                <span className=" font-bold text-sm text-[#ffc108]">5</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus officiis, laboriosam nobis veritatis, sit iste
                excepturi ipsum ipsa perspiciatis totam, nostrum eveniet
                necessitatibus labore voluptatum quaerat quo natus accusamus
                harum! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Vero maiores quaerat harum minima cupiditate placeat. Fuga,
              </p>
              <div className=" flex items-center gap-2.5 ">
                <span>Helpful</span>
                <HandThumbUpIcon className="w-4 h-4" />
                <span>Yes</span>
                <HandThumbDownIcon className="w-4 h-4" />
                <span>No</span>
              </div>
            </div>

            <hr className=" h-0 border-[0.5px] border-[lightgray] my-12 " />
            <div className=" flex flex-col gap-5 my-5">
              <div className=" flex items-center gap-2 ">
                <img
                  src="https://images.pexels.com/photos/13921044/pexels-photo-13921044.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                  alt=""
                  className=" h-12 w-12 object-cover rounded-full "
                />
                <div className="info">
                  <span>John Doe</span>
                  <div className="flex items-center gap-2.5 text-[gray] ">
                    <img
                      src="https://img.freepik.com/free-vector/illustration-usa-flag_53876-18165.jpg?size=626&ext=jpg&ga=GA1.1.1324280786.1682869613&semt=ais"
                      alt=""
                      className="w-5"
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className=" flex items-center gap-1.5 ">
                <StarIcon className=" w-3.5 h-3.5" />
                <StarIcon className=" w-3.5 h-3.5" />
                <StarIcon className=" w-3.5 h-3.5" />
                <StarIcon className=" w-3.5 h-3.5" />
                <StarIcon className=" w-3.5 h-3.5" />
                <span className=" font-bold text-sm text-[#ffc108]">5</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus officiis, laboriosam nobis veritatis, sit iste
                excepturi ipsum ipsa perspiciatis totam, nostrum eveniet
                necessitatibus labore voluptatum quaerat quo natus accusamus
                harum! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Vero maiores quaerat harum minima cupiditate placeat. Fuga,
              </p>
              <div className=" flex items-center gap-2.5 ">
                <span>Helpful</span>
                <HandThumbUpIcon className="w-4 h-4" />
                <span>Yes</span>
                <HandThumbDownIcon className="w-4 h-4" />
                <span>No</span>
              </div>
            </div>

            <hr className=" h-0 border-[0.5px] border-[lightgray] my-12 " />
          </div>
        </div>
        <div className="flex-1 border border-[lightgray] p-5 rounded-[5px] flex flex-col gap-5 sticky top-[150px] max-h-[500px] h-max ">
          <div className=" flex items-center justify-between">
            <h3 className=" font-normal">1 AI generated Image</h3>
            <h2 className=" font-semibold">$ 59.99</h2>
          </div>
          <p className=" text-[gray] my-2.5 ">
            I will ceate a unique high quality AI generated image based on a
            description that you give me
          </p>
          <div className=" flex items-center justify-between text-sm">
            <div className="flex items-center gap-2.5 ">
              <ClockIcon className="w-6 h-6" />
              <span>2 days Delivery</span>
            </div>
            <div className="flex items-center gap-2.5">
              <ArrowPathIcon className="w-6 h-6" />
              <span>3 Revisions</span>
            </div>
          </div>
          <div className="flex flex-col gap-2.5">
            <div className="flex items-center gap-2.5 text-[gray]">
              <CheckIcon className=" w-6 h-6 stroke-green-500 " />
              <span>Prompt writing</span>
            </div>
            <div className="flex items-center gap-2.5 text-[gray]">
              <CheckIcon className=" w-6 h-6 stroke-green-500 " />
              <span>Prompt writing</span>
            </div>
            <div className="flex items-center gap-2.5 text-[gray]">
              <CheckIcon className=" w-6 h-6 stroke-green-500 " />
              <span>Prompt writing</span>
            </div>
            <div className="flex items-center gap-2.5 text-[gray]">
              <CheckIcon className=" w-6 h-6 stroke-green-500 " />
              <span>Prompt writing</span>
            </div>
          </div>
          <button className="bg-black text-white font-semibold text-base rounded-md py-3 px-6 items-center">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gig;
