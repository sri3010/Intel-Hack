import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Button, Img } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function AudiocallGameFourPage() {
  return (
    <>
      <Helmet>
        <title>Kids learning platform</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full">
        <Header className="p-6 sm:p-5 bg-gray-100 shadow-bs" />
        <div>
          <div className="flex flex-col items-center justify-center gap-10 px-14 py-[100px] md:p-5 bg-gray-100">
            <div className="flex flex-col items-center w-[35%] md:w-full gap-[35px]">
              <div className="flex flex-col items-center w-[32%] md:w-full gap-3.5">
                <div className="flex flex-col items-center w-full p-2.5 mx-auto md:p-5 border-cyan-800 border-[5px] border-solid bg-cyan-800 max-w-[140px] rounded-[50%]">
                  <div className="w-[44%] md:w-full mt-[18px]">
                    <div className="flex flex-col items-center">
                      <div className="self-stretch pb-[25px] sm:pb-5 bg-cyan-800">
                        <Img
                          src="images/img_play_icon.svg"
                          alt="playiconone_one"
                          className="h-[48px] w-full md:w-[48px] md:h-auto"
                        />
                      </div>
                      <Heading size="lg" as="h1" className="mt-[-21px] !text-gray-100 tracking-[-0.72px] !font-bold">
                        Play
                      </Heading>
                    </div>
                  </div>
                  <Img
                    src="images/img_vector_black_900.svg"
                    alt="vectorone_one"
                    className="self-end h-[19px] w-[19px]"
                  />
                </div>
                <div className="flex justify-center gap-2.5">
                  <Img src="images/img__pink_800.svg" alt="image_one" className="h-[47px]" />
                  <Img src="images/img__pink_800.svg" alt="imageone_one" className="h-[47px]" />
                  <Img src="images/img__pink_800.svg" alt="imagetwo_one" className="h-[47px]" />
                  <Img src="images/img__pink_800.svg" alt="imagethree_one" className="h-[47px]" />
                  <Img src="images/img__pink_800.svg" alt="imagefour_one" className="h-[47px]" />
                </div>
              </div>
              <div className="flex justify-center gap-5 md:flex-wrap">
                <a href="#" className="p-3 border-gray-400 border-[3px] border-solid rounded-[22px]">
                  <Heading as="h2" className="!text-gray-400 tracking-[-0.64px]">
                    prêt hypothécaire
                  </Heading>
                </a>
                <a href="#" className="p-3 border-gray-400 border-[3px] border-solid rounded-[22px]">
                  <Heading as="h3" className="!text-gray-400 tracking-[-0.64px]">
                    correct
                  </Heading>
                </a>
                <a href="#" className="px-[13px] py-3 border-gray-400 border-[3px] border-solid rounded-[22px]">
                  <Heading as="h4" className="!text-gray-400 tracking-[-0.64px]">
                    selon laquelle
                  </Heading>
                </a>
                <a href="#" className="p-3 border-gray-400 border-[3px] border-solid rounded-[22px]">
                  <Heading as="h5" className="!text-gray-400 tracking-[-0.64px]">
                    citer
                  </Heading>
                </a>
                <a href="#" className="p-3 border-gray-400 border-[3px] border-solid rounded-[22px]">
                  <Heading as="h6" className="!text-gray-400 tracking-[-0.64px]">
                    nourriture
                  </Heading>
                </a>
              </div>
              <Button size="4xl" className="sm:px-5 tracking-[-0.64px] font-bold min-w-[142px] rounded-[22px]">
                I don&#39;t know
              </Button>
            </div>
            <div className="flex justify-center items-start gap-1">
              <Heading size="xs" as="p" className="mt-[3px]">
                *You can also use
              </Heading>
              <Heading
                size="s"
                as="p"
                className="flex justify-center items-center h-[22px] px-2 py-0.5 bg-white-A700 text-shadow-ts rounded-[5px]"
              >
                1-5
              </Heading>
              <Heading size="xs" as="p" className="mt-[3px]">
                keys on the keyboard
              </Heading>
            </div>
          </div>
        </div>
        <Footer className="p-[37px] sm:p-5 bg-gray-100" />
      </div>
    </>
  );
}
