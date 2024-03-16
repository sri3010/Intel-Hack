import React from "react";
import { Heading, Img } from "./..";

export default function Footer({ ...props }) {
  return (
    <footer {...props}>
      <div className="flex flex-col w-full mb-0.5 gap-[17px] mx-auto md:p-5 max-w-[1180px]">
        <div className="flex md:flex-col justify-between items-center gap-5">
          <ul className="flex justify-between w-[35%] md:w-full gap-5">
            <li>
              <a href="#">
                <Heading size="s" as="p">
                  Home
                </Heading>
              </a>
            </li>
            <li>
              <a href="#" className="self-start">
                <Heading size="s" as="p">
                  Textbook
                </Heading>
              </a>
            </li>
            <li>
              <a href="#" className="self-start">
                <Heading size="s" as="p">
                  Statistics
                </Heading>
              </a>
            </li>
            <li>
              <a href="#" className="self-end">
                <Heading size="s" as="p">
                  Sprint
                </Heading>
              </a>
            </li>
            <li>
              <a href="#" className="self-start">
                <Heading size="s" as="p">
                  Audio-call
                </Heading>
              </a>
            </li>
          </ul>
          <ul className="flex self-start justify-between w-[17%] md:w-full gap-5">
            <li>
              <a href="#">
                <Heading size="s" as="p">
                  Alex
                </Heading>
              </a>
            </li>
            <li>
              <a href="#">
                <Heading size="s" as="p">
                  Gabriel
                </Heading>
              </a>
            </li>
            <li>
              <a href="#">
                <Heading size="s" as="p">
                  Marcus
                </Heading>
              </a>
            </li>
          </ul>
        </div>
        <div className="h-px rotate-[90deg] bg-gray-300" />
        <div className="flex sm:flex-col justify-between items-center gap-5 py-px">
          <div className="flex justify-between w-[13%] sm:w-full gap-5">
            <Img src="images/img_frame_30.svg" alt="image_four" className="h-[24px]" />
            <Img src="images/img_frame_33.svg" alt="image_five" className="h-[24px]" />
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
      </div>
    </footer>
  );
}
