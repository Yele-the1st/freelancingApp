import React from "react";

const Hero = () => {
  return (
    <div className="bg-[#FFFD63]">
      <div className="mx-auto max-w-2xl py-20 sm:py-30 lg:py-30">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Announcing our next round of funding.{" "}
            <a href="#" className="font-semibold text-indigo-700">
              <span className="absolute inset-0" aria-hidden="true" />
              Read more <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="mx-2 sm:mx-auto text-center">
          <h1 className="text-4xl font-black tracking-tight text-gray-900 sm:text-6xl">
            Find the right freelance service, right away!
          </h1>
          <p className="mt-6 text-lg leading-8">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          <div className="mt-10 sm:flex mx-16 items-center justify-center gap-x-6">
            <a
              href="#"
              className=" rounded-2xl mb-5 flex items-center justify-center bg-black space-x-3 px-4 py-4 text-smd font-semibold text-white shadow"
            >
              <img
                src="https://uploads-ssl.webflow.com/611b665d36fc84be4620f0ea/6437b815fd4b268075c8caee_google%20logo.svg"
                alt=""
                className="h-7 w-7"
              />
              <p className="">Sign Up with Google</p>
            </a>
            <a
              href="#"
              className="text-md font-semibold mb-5 justify-center leading-6 text-gray-900 rounded-2xl flex items-center bg-white space-x-2 px-4 py-4 shadow"
            >
              <p>Sign up for free</p> <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
      {/* <!-- Image gallery --> */}
    </div>
  );
};

export default Hero;
