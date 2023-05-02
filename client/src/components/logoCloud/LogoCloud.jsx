import React from "react";
import { useState } from "react";

import logo1 from "../../assets/logos/3m.svg";
import logo2 from "../../assets/logos/barstool-store.svg";
import logo3 from "../../assets/logos/budweiser.svg";
import logo4 from "../../assets/logos/buzzfeed.svg";
import logo5 from "../../assets/logos/forbes.svg";
import logo6 from "../../assets/logos/macys.svg";
import logo7 from "../../assets/logos/menshealth.svg";
import logo8 from "../../assets/logos/mrbeast.svg";

const LogoCloud = () => {
  const [isHovered, setIsHovered] = useState(false);

  const animationStyle = {
    animation: "60s slide infinite linear",
    // define the normal style without the box shadow
    // ...
  };

  const hoverStyle = {
    animation: "60s slide infinite linear paused",
    // ...
  };

  return (
    <div>
      <section
        id="logos-play"
        className=" overflow-hidden w-full bg-white relative text-base leading-5"
      >
        <div className=" h-[240px] relative items-center flex max-w-none py-[64px] z-1 justify-center mx-auto">
          <div
            style={{
              position: "absolute",
              top: 0,
              width: "250px",
              height: "100%",
              content: '""',
              zIndex: 2,
              left: 0,
              background:
                "linear-gradient(to left, rgba(255,255,255,0), white)",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              top: 0,
              width: "250px",
              height: "100%",
              content: '""',
              zIndex: 2,
              right: 0,
              background:
                "linear-gradient(to right, rgba(255,255,255,0), white)",
            }}
          ></div>
          <div className=" items-center flex absolute">
            <div className=" flex relative flex-none">
              <div
                role="list"
                className=" grid gap-10 auto-cols-max items-center grid-flow-col grid-rows-auto grid-cols-auto-cols-max cursor-pointer"
                style={isHovered ? hoverStyle : animationStyle}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div>
                  <img className="h-[50px] mx-[40px]" src={logo1} />
                </div>
                <div>
                  <img className="h-[50px] mx-[40px]" src={logo2} />
                </div>
                <div>
                  <img className="h-[50px] mx-[40px]" src={logo3} />
                </div>
                <div>
                  <img className="h-[50px] mx-[40px]" src={logo4} />
                </div>
                <div>
                  <img className="h-[50px] mx-[40px]" src={logo5} />
                </div>
                <div>
                  <img className="h-[50px] mx-[40px]" src={logo6} />
                </div>
                <div>
                  <img className="h-[50px] mx-[40px]" src={logo7} />
                </div>
                <div>
                  <img className="h-[50px] mx-[40px]" src={logo8} />
                </div>
              </div>
            </div>
            <div class="flex relative flex-none">
              <div
                role="list"
                class="grid gap-10 auto-cols-max items-center grid-flow-col grid-rows-auto grid-cols-auto-cols-max cursor-pointer"
                style={isHovered ? hoverStyle : animationStyle}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div>
                  <img className="h-[50px] mx-[40px]" src={logo1} />
                </div>
                <div>
                  <img className="h-[50px] mx-[40px]" src={logo2} />
                </div>
                <div>
                  <img className="h-[50px] mx-[40px]" src={logo3} />
                </div>
                <div>
                  <img className="h-[50px] mx-[40px]" src={logo4} />
                </div>
                <div>
                  <img className="h-[50px] mx-[40px]" src={logo5} />
                </div>
                <div>
                  <img className="h-[50px] mx-[40px]" src={logo6} />
                </div>
                <div>
                  <img className="h-[50px] mx-[40px]" src={logo7} />
                </div>
                <div>
                  <img className="h-[50px] mx-[40px]" src={logo8} />
                </div>
              </div>
            </div>
            <div class="flex relative flex-none">
              <div
                role="list"
                class="grid gap-10 auto-cols-max items-center grid-flow-col grid-rows-auto grid-cols-auto-cols-max cursor-pointer"
                style={isHovered ? hoverStyle : animationStyle}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div>
                  <img className="h-[50px] mx-[40px]" src={logo1} />
                </div>
                <div>
                  <img className="h-[50px] mx-[40px]" src={logo2} />
                </div>
                <div>
                  <img className="h-[50px] mx-[40px]" src={logo3} />
                </div>
                <div>
                  <img className="h-[50px] mx-[40px]" src={logo4} />
                </div>
                <div>
                  <img className="h-[50px] mx-[40px]" src={logo5} />
                </div>
                <div>
                  <img className="h-[50px] mx-[40px]" src={logo6} />
                </div>
                <div>
                  <img className="h-[50px] mx-[40px]" src={logo7} />
                </div>
                <div>
                  <img className="h-[50px] mx-[40px]" src={logo8} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogoCloud;
