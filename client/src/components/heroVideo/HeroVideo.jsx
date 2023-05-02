import React from "react";

const HeroVideo = () => {
  return (
    // frontpagevideo
    <div class="relative bg-[#fffd63] mb-[80px] px-[20px] lg:px-[80px]">
      {/* .topwhitebg */}
      <div class="z-0 w-full h-[75%] bg-white absolute top-auto bottom-0 left-0 right-0"></div>
      {/* frontpagevideocontainer */}
      <div class="max-w-[1400px] bg-white rounded-xl justify-center items-center pt-[56%] relative overflow-hidden shadow  ">
        {/* .frontpagevideocontrols */}
        <div
          id="play-button"
          className="z-20 cursor-pointer duration-200 absolute justify-center  items-center flex top-0 left-0 right-0 bottom-0 "
        >
          {/* .videoplay */}
          <div class="py-[28px] px-[32px] rounded-full items-center justify-start  bg-white flex space-x-3">
            <img
              src="https://uploads-ssl.webflow.com/611b665d36fc84be4620f0ea/63c6aee7e5017348f6a9c954_playBig.png"
              loading="lazy"
              width="54"
              alt=""
              className=""
            />
            <div class="text-block-62">Take a 2 min. tour</div>
          </div>
        </div>
        {/* frontpagevideobackground, */}
        <div class="bg-transparent justify-center items-center flex absolute top-0 bottom-0 left-0 right-0">
          <div
            data-poster-url="https://uploads-ssl.webflow.com/611b665d36fc84be4620f0ea/63c7ecb2c443b0536310b08a_Product Explainer Short-poster-00001.jpg"
            data-video-urls="https://uploads-ssl.webflow.com/611b665d36fc84be4620f0ea/63c7ecb2c443b0536310b08a_Product Explainer Short-transcode.mp4,https://uploads-ssl.webflow.com/611b665d36fc84be4620f0ea/63c7ecb2c443b0536310b08a_Product Explainer Short-transcode.webm"
            data-autoplay="true"
            data-loop="true"
            data-wf-ignore="true"
            class="background-video-2 w-background-video w-background-video-atom"
          >
            <video
              id="3302c757-f5c2-1137-77ee-7c341df83cbc-video"
              autoplay=""
              loop=""
              muted=""
              playsinline=""
              data-wf-ignore="true"
              data-object-fit="cover"
            >
              <source
                src="https://uploads-ssl.webflow.com/611b665d36fc84be4620f0ea/63c7ecb2c443b0536310b08a_Product Explainer Short-transcode.mp4"
                data-wf-ignore="true"
              />
              <source
                src="https://uploads-ssl.webflow.com/611b665d36fc84be4620f0ea/63c7ecb2c443b0536310b08a_Product Explainer Short-transcode.webm"
                data-wf-ignore="true"
              />
            </video>
          </div>
        </div>
        {/* frontpagevideo-embed */}
        <div class="hidden absolute top-0 right-0 left-0 bottom-0">
          <video
            id="myVideo"
            controls=""
            poster="https://uploads-ssl.webflow.com/611b665d36fc84be4620f0ea/636cf1092b707959302b5727_simpleUi.webp"
            width="100%"
          >
            <source
              src="https://files.butter.us/videos/Product+Explainer.webm"
              type="video/webm"
            />
            <source
              src="https://files.butter.us/videos/butter-explainer-01-2023.mp4"
              type="video/mp4"
            />
            Sorry, your browser doesn't support embedded videos.
          </video>
        </div>
      </div>
    </div>
  );
};

export default HeroVideo;
