import React from "react";

import { SlSocialLinkedin, SlSocialTwitter } from "react-icons/sl";
import {
  TbNotebook,
  TbWorld,
  TbUser,
  TbBrandGithub,
  TbStack2,
  TbShare2,
  TbNotes,
} from "react-icons/tb";

function Links() {
  return (
    <div className="bg-white text-gray-900 dark:text-gray-200 dark:bg-gray-800">
      <div className="flex flex-col justify-center items-center mx-3 pb-16 md:mx-12">
        <img
          className=" h-24 rounded-full"
          src={process.env.REACT_APP_LINK_PIC}
          alt="Sourav Dutta"
        />
        <p className="  my-3 text-lg font-bold">Sourav Dutta</p>
        <p className=" text-base text-center">
          MERN Stack | Machine Learning 
        </p>
        <div className="flex  text-3xl gap-5 my-7 justify-center items-center">
          <a
            className="hover:scale-110 transition duration-150 hover:text-[#2867b2] cursor-pointc"
            href="https://www.linkedin.com/in/sourav-dutta-dev/"
            target="_blank"
            rel="noopener"
          >
            {" "}
            <SlSocialLinkedin />{" "}
          </a>
          <a
            className="hover:scale-110 transition duration-150 hover:text-[#39a9d9] cursor-pointc"
            href="https://twitter.com/souravd23"
            target="_blank"
            rel="noopener"
          >
            {" "}
            <SlSocialTwitter />{" "}
          </a>
        </div>
        <div className="text-[#BDBDBD] flex flex-col gap-5 md:w-[55%] w-full items-center justify-center">
          <a
            className=" w-full text-center bg-[#525151] hover:bg-[#444444] rounded-[30px] hover:scale-[102%] transition duration-300 cursor-pointc"
            href="https://github.com/dsouravcom"
            target="_blank"
            rel="noopener"
          >
            <div className="flex justify-between items-center ml-2 mr-4">
              <TbBrandGithub className=" text-[35px]" />
              <p className="p-5">GitHub</p>
              <TbShare2
                className="text-[40px] hover:bg-[#5F5E5E] transition ease-in-out duration-300 rounded-full p-2"
                title="GitHub"
              />
            </div>
          </a>
          <a
            className=" w-full text-center bg-[#525151] hover:bg-[#444444] rounded-[30px] hover:scale-[102%] transition duration-300 cursor-pointc"
            href="https://dev.to/dsourav"
            target="_blank"
            rel="noopener"
          >
            <div className="flex justify-between items-center ml-2 mr-4">
              <TbStack2 className=" text-[35px]" />
              <p className="p-5">Dev.to</p>
              <TbShare2
                className="text-[40px] hover:bg-[#5F5E5E] transition ease-in-out duration-300 rounded-full p-2"
                title="Dev.to"
              />
            </div>
          </a>
          <a
            className=" w-full text-center bg-[#525151] hover:bg-[#444444] rounded-[30px] hover:scale-[102%] transition duration-300 cursor-pointc"
            href="https://hashnode.com/@sourav-dutta"
            target="_blank"
            rel="noopener"
          >
            <div className="flex justify-between items-center ml-2 mr-4">
              <TbNotebook className=" text-[35px]" />
              <p className="p-5">Hashnode</p>
              <TbShare2
                className="text-[40px] hover:bg-[#5F5E5E] transition ease-in-out duration-300 rounded-full p-2"
                title="Hashnode"
              />
            </div>
          </a>
          <a
            className=" w-full text-center bg-[#525151] hover:bg-[#444444] rounded-[30px] hover:scale-[102%] transition duration-300 cursor-pointc"
            href="https://dsourav.substack.com/"
            target="_blank"
            rel="noopener"
          >
            <div className="flex justify-between items-center ml-2 mr-4">
              <TbNotes className=" text-[35px]" />
              <p className="p-5">Substack</p>
              <TbShare2
                className="text-[40px] hover:bg-[#5F5E5E] transition ease-in-out duration-300 rounded-full p-2"
                title="Medium"
              />
            </div>
          </a>
          <a
            className=" w-full text-center bg-[#525151] hover:bg-[#444444] rounded-[30px] hover:scale-[102%] transition duration-300 cursor-pointc"
            href="https://dsourav.com/"
            target="_blank"
            rel="noopener"
          >
            <div className="flex justify-between items-center ml-2 mr-4">
              <TbWorld className=" text-[35px]" />
              <p className="p-5">My Portfolio</p>
              <TbShare2
                className="text-[40px] hover:bg-[#5F5E5E] transition ease-in-out duration-300 rounded-full p-2"
                title="My Portfolio"
              />
            </div>
          </a>
          <a
            className=" w-full text-center bg-[#525151] hover:bg-[#444444] rounded-[30px] hover:scale-[102%] transition duration-300 cursor-pointc"
            href="https://drive.google.com/file/d/1rz8_coenp915JeXdJKiXLIVZ3OWhByS6/view?usp=sharing"
            target="_blank"
            rel="noopener"
          >
            <div className="flex justify-between items-center ml-2 mr-4">
              <TbUser className=" text-[35px]" />
              <p className="p-5">My Resume</p>
              <TbShare2
                className="text-[40px] hover:bg-[#5F5E5E] transition ease-in-out duration-300 rounded-full p-2"
                title="My Resume"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Links;
