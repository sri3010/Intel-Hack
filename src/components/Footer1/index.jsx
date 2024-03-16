import React from "react";
import { Heading, Img } from "./..";

export default function Footer1({ ...props }) {
  return (
    <footer {...props}>
      <div className="flex md:flex-col justify-between items-center w-full gap-5 mx-auto md:p-5 max-w-[1180px]">
        <div className="flex justify-center w-[35%] md:w-full gap-5">
          <Heading size="s" as="p">
            Home
          </Heading>
          <Heading size="s" as="p" className="self-start">
            Textbook
          </Heading>
          <Heading size="s" as="p" className="self-start">
            Statistics
          </Heading>
          <Heading size="s" as="p" className="self-end inline">
            Sprint
          </Heading>
          <Heading size="s" as="p" className="self-start">
            Audio-call
          </Heading>
        </div>
        <div className="flex self-start justify-between w-[17%] md:w-full gap-5">
          <Heading size="s" as="p">
            Alex
          </Heading>
          <Heading size="s" as="p">
            Gabriel
          </Heading>
          <Heading size="s" as="p">
            Marcus
          </Heading>
        </div>
      </div>
      <div className="h-px w-full mx-auto md:p-5 rotate-[90deg] bg-gray-300 max-w-[1180px]" />
      <div className="flex sm:flex-col justify-between items-center w-full mb-0.5 gap-5 py-px mx-auto md:p-5 max-w-[1180px]">
        <div className="flex justify-between w-[13%] sm:w-full gap-5">
          <Img src="images/img_frame_30.svg" alt="image" className="h-[24px]" />
          <Img src="images/img_frame_33.svg" alt="image_one" className="h-[24px]" />
          <div className="flex justify-center w-[20%] p-0.5">
            <Img src="images/img_youtube.svg" alt="youtube_one" className="h-[17px]" />
          </div>
        </div>
        <Heading size="xs" as="p">
          <span className="text-gray-600">©2021 </span>
          <span className="text-gray-600">GlobalTalk</span>
          <span className="text-gray-600">. Project for </span>
          <a href="#" className="text-gray-600 underline">
            GlobalTalk
          </a>
          <span className="text-gray-600">.</span>
        </Heading>
      </div>
    </footer>
  );
}
