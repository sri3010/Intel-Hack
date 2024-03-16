import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Button, Text, Img } from "../../components";
import ClassbookOneRow from "../../components/ClassbookOneRow";
import ClassbookOneRowsix from "../../components/ClassbookOneRowsix";
import Footer1 from "../../components/Footer1";
import Header from "../../components/Header";

export default function ClassbookOnePage() {
  return (
    <>
      <Helmet>
        <title>Kids learning platform</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full">
        <Header className="p-6 sm:p-5 bg-gray-100 shadow-bs" />
        <div>
          <div className="flex flex-col items-center gap-[35px] p-10 sm:p-5 bg-gray-100">
            <div className="h-[174px] w-full mx-auto relative max-w-[1180px]">
              <div className="flex flex-col items-end justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                <div className="flex md:flex-col self-stretch justify-between items-center gap-5 p-[19px] bg-white-A700 rounded-[14px]">
                  <div className="flex sm:flex-col self-end justify-center items-start w-[36%] md:w-full gap-5">
                    <div className="flex justify-center items-start gap-2.5 sm:p-5">
                      <Img src="images/img_fluent_hat_grad.svg" alt="fluenthatgrad" className="h-[32px] w-[32px]" />
                      <Text size="md" as="p" className="tracking-[-1.04px]">
                        Textbook
                      </Text>
                    </div>
                    <div className="h-[32px] w-px sm:w-[32px] sm:h-px bg-gray-300" />
                    <div className="flex justify-center items-start gap-2.5 sm:p-5">
                      <Img src="images/img_ion_book.svg" alt="ionbookone_one" className="h-[32px] w-[32px]" />
                      <Text size="md" as="p" className="!text-gray-600 tracking-[-1.04px]">
                        Dictionary
                      </Text>
                    </div>
                  </div>
                  <div className="flex sm:flex-col justify-center items-center w-[34%] md:w-full gap-2.5">
                    <div className="flex justify-center w-[39%] sm:w-full sm:p-5">
                      <div className="flex items-center gap-[9px] bg-red-100 rounded-[14px]">
                        <Img
                          src="images/img_image_10_44x44.png"
                          alt="imagetenone_one"
                          className="w-[44px] object-cover rounded-[14px]"
                        />
                        <Heading as="h1" className="self-end !text-gray-600_01 tracking-[-0.64px]">
                          Sprint
                        </Heading>
                      </div>
                    </div>
                    <div className="flex justify-center sm:p-5 flex-1">
                      <div className="flex items-center gap-3.5 bg-blue_gray-100 rounded-[14px]">
                        <Img
                          src="images/img_image_11_44x44.png"
                          alt="imageelevenone"
                          className="w-[44px] object-cover rounded-[14px]"
                        />
                        <Heading as="h2" className="!text-cyan-800 tracking-[-0.64px]">
                          Audio-Call
                        </Heading>
                      </div>
                    </div>
                    <Button color="cyan_800" size="2xl" shape="round" className="w-[40px] !rounded">
                      <Img src="images/img_component_2.svg" />
                    </Button>
                  </div>
                </div>
                <ClassbookOneRowsix className="flex justify-center items-center w-[34%] md:w-full mt-[-10px] mr-5 p-[18px] md:mr-0 border-gray-100 border border-solid bg-white-A700 shadow-xs rounded-[14px]" />
              </div>
              <div className="flex sm:flex-col justify-end items-start w-[24%] bottom-[10%] right-[15%] m-auto absolute">
                <Text size="md" as="p" className="h-[38px] !text-gray-600 tracking-[-1.04px]">
                  C1
                </Text>
                <div className="flex justify-center w-full sm:w-full mt-[5px] ml-3 p-1 sm:p-5 sm:ml-0 bg-red-400_4c rounded">
                  <Heading size="xs" as="h3" className="!text-red-400 tracking-[-0.48px]">
                    Hard
                  </Heading>
                </div>
                <Text size="md" as="p" className="ml-10 sm:ml-0 !text-gray-600 tracking-[-1.04px]">
                  C2
                </Text>
                <Button
                  color="red_400_4c"
                  shape="round"
                  className="w-full mt-[5px] ml-3 sm:ml-0 tracking-[-0.48px] font-semibold !rounded"
                >
                  Hard
                </Button>
              </div>
              <div className="flex md:flex-col items-start w-[55%] bottom-[5%] left-[15%] m-auto absolute">
                <div className="flex flex-col w-[24%] md:w-full gap-1.5 md:p-5">
                  <div className="flex justify-center items-start gap-3">
                    <Text size="md" as="p" className="h-[38px] tracking-[-1.04px]">
                      A1
                    </Text>
                    <Button
                      color="green_400"
                      shape="round"
                      className="w-full mt-[5px] tracking-[-0.48px] font-semibold !rounded"
                    >
                      Easy
                    </Button>
                  </div>
                  <div className="h-[2px] bg-black-900" />
                </div>
                <Text size="md" as="p" className="ml-10 md:ml-0 !text-gray-600 tracking-[-1.04px]">
                  A2
                </Text>
                <Button
                  color="green_400_4c"
                  shape="round"
                  className="mt-[5px] ml-3 md:ml-0 tracking-[-0.48px] font-semibold min-w-[43px] !rounded"
                >
                  Easy
                </Button>
                <Text size="md" as="p" className="h-[38px] ml-10 md:ml-0 !text-gray-600 tracking-[-1.04px]">
                  B1
                </Text>
                <Button
                  color="lime_700_4c"
                  shape="round"
                  className="w-full mt-[5px] ml-3 md:ml-0 tracking-[-0.48px] font-semibold flex-1 !rounded"
                >
                  Medium
                </Button>
                <Text size="md" as="p" className="ml-10 md:ml-0 !text-gray-600 tracking-[-1.04px]">
                  B2
                </Text>
                <Button
                  color="lime_700_4c"
                  shape="round"
                  className="w-full mt-[5px] ml-3 md:ml-0 tracking-[-0.48px] font-semibold flex-1 !rounded"
                >
                  Medium
                </Button>
              </div>
            </div>
            <div className="flex flex-col w-[50%] md:w-full gap-10">
              <div className="flex md:flex-col md:p-5 bg-white-A700 shadow-sm flex-1 rounded-[14px]">
                <ClassbookOneRow className="flex items-center w-[36%] md:w-full" />
                <div className="flex flex-col w-[60%] md:w-full pl-[34px] gap-5 py-[34px] sm:pl-5 sm:py-5">
                  <div className="flex flex-col ml-[5px] gap-2 md:ml-0">
                    <div className="flex justify-between items-center gap-5">
                      <div className="flex justify-center gap-3">
                        <Text as="p" className="self-start tracking-[-1.28px]">
                          remark
                        </Text>
                        <Text as="p" className="tracking-[-1.28px]">
                          /
                        </Text>
                        <Text as="p" className="!text-gray-600 tracking-[-1.28px]">
                          note
                        </Text>
                      </div>
                      <Button color="gray_100" size="2xl" shape="round" className="self-end w-[40px] !rounded">
                        <Img src="images/img_frame_21.svg" />
                      </Button>
                    </div>
                    <div className="flex self-start items-center gap-[11px]">
                      <Heading size="lg" as="h4" className="self-end !text-black-900 tracking-[0.72px]">
                        [rimɑ́ːrk]
                      </Heading>
                      <Button
                        color="red_400"
                        size="md"
                        shape="round"
                        className="tracking-[-0.56px] font-semibold min-w-[100px] !rounded"
                      >
                        compound
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col ml-[5px] pt-[3px] gap-6 md:ml-0">
                    <Text size="xs" as="p" className="tracking-[-0.64px]">
                      To remark is to say something. - Remarquer, c&#39;est dire quelque chose
                    </Text>
                    <div>
                      <Text size="xs" as="p" className="!text-gray-600 tracking-[-0.64px] !leading-[150%]">
                        The teacher remarked on how quickly the students were learning. L&#39;enseignant a noté la
                        rapidité avec laquelle les élèves apprenaient.
                      </Text>
                    </div>
                  </div>
                  <div className="flex mb-[5px] ml-[5px] gap-5 md:ml-0">
                    <Button
                      color="green_400"
                      size="3xl"
                      className="tracking-[-0.64px] font-bold min-w-[156px] rounded-[20px]"
                    >
                      Add to learned
                    </Button>
                    <Button
                      color="red_400_4c"
                      size="3xl"
                      className="tracking-[-0.64px] font-bold min-w-[230px] rounded-[20px]"
                    >
                      Remove from dictionary
                    </Button>
                  </div>
                </div>
              </div>
              <div className="w-[516px] h-px bg-gray-300" />
              <div className="flex md:flex-col md:p-5 bg-white-A700 shadow-sm flex-1 rounded-[14px]">
                <ClassbookOneRow className="flex items-center w-[36%] md:w-full" />
                <div className="flex flex-col w-[60%] md:w-full pl-[33px] gap-5 py-[33px] sm:pl-5 sm:py-5">
                  <div className="flex flex-col ml-1.5 gap-[9px] md:ml-0">
                    <div className="flex justify-between items-center gap-5">
                      <div className="flex justify-center gap-3">
                        <Text as="p" className="tracking-[-1.28px]">
                          awful
                        </Text>
                        <Text as="p" className="tracking-[-1.28px]">
                          /
                        </Text>
                        <Text as="p" className="self-start !text-gray-600 tracking-[-1.28px]">
                          terrible
                        </Text>
                      </div>
                      <Button color="gray_100" size="2xl" shape="round" className="self-end w-[40px] !rounded">
                        <Img src="images/img_frame_21.svg" />
                      </Button>
                    </div>
                    <div className="flex items-center gap-[11px]">
                      <Heading size="lg" as="h5" className="self-end !text-black-900 tracking-[0.72px]">
                        [ɔ́ːfəl]
                      </Heading>
                      <Button
                        color="green_400"
                        size="md"
                        shape="round"
                        className="tracking-[-0.56px] font-semibold min-w-[76px] !rounded"
                      >
                        learned
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col ml-1.5 pt-[3px] gap-6 md:ml-0">
                    <Text size="xs" as="p" className="tracking-[-0.64px]">
                      To remark is to say something. - Remarquer, c&#39;est dire quelque chose
                    </Text>
                    <div>
                      <Text size="xs" as="p" className="!text-gray-600 tracking-[-0.64px] !leading-[150%]">
                        The teacher remarked on how quickly the students were learning. L&#39;enseignant a noté la
                        rapidité avec laquelle les élèves apprenaient.
                      </Text>
                    </div>
                  </div>
                  <div className="flex mb-1.5 ml-1.5 gap-5 md:ml-0">
                    <Button
                      color="green_400_4c"
                      size="3xl"
                      className="tracking-[-0.64px] font-bold min-w-[210px] rounded-[20px]"
                    >
                      Remove from learned
                    </Button>
                    <Button
                      color="red_400"
                      size="3xl"
                      className="tracking-[-0.64px] font-bold min-w-[176px] rounded-[20px]"
                    >
                      Add to dictionary
                    </Button>
                  </div>
                </div>
              </div>
              <div className="w-[516px] h-px bg-gray-300" />
              <div className="flex md:flex-col md:p-5 bg-white-A700 shadow-sm flex-1 rounded-[14px]">
                <ClassbookOneRow className="flex items-center w-[36%] md:w-full" />
                <div className="flex flex-col w-[60%] md:w-full pl-[34px] gap-5 py-[34px] sm:pl-5 sm:py-5">
                  <div className="flex flex-col ml-[5px] gap-2 md:ml-0">
                    <div className="flex justify-between items-center gap-5">
                      <div className="flex justify-center gap-3">
                        <Text as="p" className="self-start tracking-[-1.28px]">
                          remark
                        </Text>
                        <Text as="p" className="tracking-[-1.28px]">
                          /
                        </Text>
                        <Text as="p" className="!text-gray-600 tracking-[-1.28px]">
                          note
                        </Text>
                      </div>
                      <Button color="gray_100" size="2xl" shape="round" className="self-end w-[40px] !rounded">
                        <Img src="images/img_frame_21.svg" />
                      </Button>
                    </div>
                    <div className="flex justify-center w-[17%] md:w-full pr-px py-px">
                      <Heading size="lg" as="h6" className="self-end mt-0.5 !text-black-900 tracking-[0.72px]">
                        [rimɑ́ːrk]
                      </Heading>
                    </div>
                  </div>
                  <div className="flex flex-col ml-[5px] pt-[3px] gap-6 md:ml-0">
                    <Text size="xs" as="p" className="tracking-[-0.64px]">
                      To remark is to say something. - Remarquer, c&#39;est dire quelque chose
                    </Text>
                    <div>
                      <Text size="xs" as="p" className="!text-gray-600 tracking-[-0.64px] !leading-[150%]">
                        The teacher remarked on how quickly the students were learning. L&#39;enseignant a noté la
                        rapidité avec laquelle les élèves apprenaient.
                      </Text>
                    </div>
                  </div>
                  <div className="flex mb-[5px] ml-[5px] gap-5 md:ml-0">
                    <Button
                      color="green_400"
                      size="3xl"
                      className="tracking-[-0.64px] font-bold min-w-[156px] rounded-[20px]"
                    >
                      Add to learned
                    </Button>
                    <Button
                      color="red_400_4c"
                      size="3xl"
                      className="tracking-[-0.64px] font-bold min-w-[230px] rounded-[20px]"
                    >
                      Remove from dictionary
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-col justify-center items-start mb-14 gap-6">
              <Heading
                size="xl"
                as="h5"
                className="flex justify-center items-center h-[46px] mb-[3px] !text-blue_gray-400 tracking-[-0.80px] border-blue_gray-400 border-[3px] border-solid text-center rounded-[50%]"
              >
                ←
              </Heading>
              <Button
                color="blue_gray_400"
                size="4xl"
                variant="outline"
                className="tracking-[-0.64px] font-bold min-w-[45px] rounded-[22px]"
              >
                1
              </Button>
              <Heading
                as="h6"
                className="flex justify-center items-center h-[44px] w-[44px] !text-gray-100 tracking-[-0.64px] border-cyan-800 border-[3px] border-solid bg-cyan-800 text-center rounded-[50%]"
              >
                2
              </Heading>
              <Heading
                as="h6"
                className="flex justify-center items-center h-[44px] !text-blue_gray-400 tracking-[-0.64px] border-blue_gray-400 border-[3px] border-solid text-center rounded-[50%]"
              >
                3
              </Heading>
              <Heading size="lg" as="h6" className="mt-[27px] tracking-[0.72px]">
                ...
              </Heading>
              <Button
                color="blue_gray_400"
                size="4xl"
                variant="outline"
                className="tracking-[-0.64px] font-bold min-w-[45px] rounded-[22px]"
              >
                27
              </Button>
              <Button
                color="blue_gray_400"
                size="4xl"
                variant="outline"
                className="tracking-[-0.64px] font-bold min-w-[46px] rounded-[22px]"
              >
                28
              </Button>
              <Button
                color="blue_gray_400"
                size="4xl"
                variant="outline"
                className="tracking-[-0.64px] font-bold min-w-[45px] rounded-[22px]"
              >
                29
              </Button>
              <Heading
                size="xl"
                as="h5"
                className="flex justify-center items-center h-[46px] !text-blue_gray-400 tracking-[-0.80px] border-blue_gray-400 border-[3px] border-solid text-center rounded-[50%]"
              >
                →
              </Heading>
            </div>
          </div>
        </div>
        <Footer1 className="gap-[17px] p-[37px] sm:p-5 bg-gray-100" />
      </div>
    </>
  );
}
