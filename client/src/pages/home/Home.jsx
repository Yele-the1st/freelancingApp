import React from "react";
import Hero from "../../components/Hero/Hero";
import HeroVideo from "../../components/heroVideo/HeroVideo";
import LogoCloud from "../../components/logoCloud/LogoCloud";
import Carousel from "../../components/carousel/Carousel";
import CatCard from "../../components/catCard/CatCard";
import { cards, projects } from "../../data";
import { CheckIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import ProjectCard from "../../components/projectCard/ProjectCard";

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  const normalStyle = {
    // define the normal style without the box shadow
    // ...
  };

  const hoverStyle = {
    // define the hover style with the box shadow
    boxShadow: "4px 4px 0 black",
    transition: "box-shadow 0.5s ease-out", // added transition
    // ...
  };

  return (
    <div>
      <Hero />
      <HeroVideo />
      <LogoCloud />
      <Carousel name={`Popular Services`}>
        {cards.map((card) => (
          <CatCard key={card.id} item={card} />
        ))}
      </Carousel>
      <div className=" flex justify-center px-4 py-[100px]">
        <div className="bg-[#C7D0FF] block lg:flex max-w-screen-xl mx-auto px-10 py-28 rounded-2xl items-center gap-40">
          <div className="flex flex-col gap-4 lg:w-2/5 pb-10">
            <h1 className=" text-5xl font-bold mb-2.5 ">
              The best part? Everything.
            </h1>
            <div className="flex items-center gap-2.5 text-lg font-medium tracking-wide text-black">
              <div className=" border-[2px] border-black rounded-full h-6 w-6 flex items-center justify-center">
                <CheckIcon className="h-4 w-4 stroke-2" />
              </div>
              Stick to your budget
            </div>
            <p className=" text-base font-normal leading-7 tracking-wide text-black">
              Find the right service for every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="flex items-center gap-2.5 text-lg font-medium tracking-wide text-black">
              <div className=" border-[2px] border-black rounded-full h-6 w-6 flex items-center justify-center">
                <CheckIcon className="h-4 w-4 stroke-2" />
              </div>
              Get quality work done quickly
            </div>
            <p className=" text-base font-normal leading-7 tracking-wide text-black">
              Hand your project over to a talented freelancer in minutes, get
              long-lasting results.
            </p>
            <div className="flex items-center gap-2.5 text-lg font-medium tracking-wide text-black">
              <div className=" border-[2px] border-black rounded-full h-6 w-6 flex items-center justify-center">
                <CheckIcon className="h-4 w-4 stroke-2" />
              </div>
              Pay when you're happy
            </div>
            <p className=" text-base font-normal leading-7 tracking-wide text-black">
              Upfront quotes mean no surprises. Payments only get released when
              you approve.
            </p>
            <button
              className={`py-3.5 px-4 rounded-xl cursor-pointer shadow bg-transparent border-[2px] border-black mt-5 text-lg font-medium max-w-max`}
              style={isHovered ? hoverStyle : normalStyle}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Get Started
            </button>
          </div>
          <div className=" lg:w-3/5">
            <video
              src="https://player.vimeo.com/external/483092798.sd.mp4?s=faf35de053e7dfdd51fd675c8006fa440f5a3687&profile_id=164&oauth2_token_id=57447761"
              controls
              className="w-[720px]"
            ></video>
          </div>
        </div>
      </div>
      <div className=" flex justify-center px-4 py-[100px]">
        <div className="bg-[#FFD7AA] block lg:flex max-w-screen-xl mx-auto px-10 py-28 rounded-2xl items-center gap-40">
          <div className="flex flex-col gap-4 lg:w-2/5 pb-10">
            <h1 className=" text-5xl font-bold mb-2.5   ">
              Lancerr <i>business</i>
            </h1>
            <h1 className=" text-3xl font-semibold mb-2.5 ">
              A business Solution designed for <i>teams</i>
            </h1>
            <p className=" text-lg font-semibold leading-7 tracking-wide text-black">
              Upgrade to a curated experience to access vetted talent and
              exclusive tools
            </p>
            <div className="flex items-center gap-2.5 text-lg font-medium tracking-wide text-black">
              <div className=" border-[2px] border-black rounded-full h-6 w-6 flex items-center justify-center">
                <CheckIcon className="h-4 w-4 stroke-current stroke-2" />
              </div>
              Talent matching
            </div>
            <div className="flex items-center gap-2.5 text-lg font-medium tracking-wide text-black">
              <div className=" border-[2px] border-black rounded-full h-6 w-6 flex items-center justify-center">
                <CheckIcon className="h-4 w-4 stroke-2" />
              </div>
              Dedicated account management
            </div>
            <div className="flex items-center gap-2.5 text-lg font-medium tracking-wide text-black">
              <div className=" border-[2px] border-black rounded-full h-6 w-6 flex items-center justify-center">
                <CheckIcon className="h-4 w-4 stroke-2" />
              </div>
              Team collaboration tools
            </div>
            <div className="flex items-center gap-2.5 text-lg font-medium tracking-wide text-black">
              <div className=" border-[2px] border-black rounded-full h-6 w-6 flex items-center justify-center">
                <CheckIcon className="h-4 w-4 stroke-2" />
              </div>
              Business payment solutions
            </div>
            <button
              className={`py-3.5 px-4 rounded-xl cursor-pointer shadow bg-transparent border-[2px] border-black mt-5 text-lg font-medium max-w-max`}
              style={isHovered ? hoverStyle : normalStyle}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Explore Lancerr Business
            </button>
          </div>
          <div className=" lg:w-3/5">
            <img
              src="https://images.pexels.com/photos/3182792/pexels-photo-3182792.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="bg-[#BFF8E9]">
        <Carousel name={`Inspiring work made on Lancerr`}>
          {projects.map((card) => (
            <ProjectCard key={card.id} item={card} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
