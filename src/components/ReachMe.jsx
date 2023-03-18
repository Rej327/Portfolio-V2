import {
  SiMessenger,
  SiGmail,
  SiGithub,
  SiSkype,
  SiLinkedin,
} from "react-icons/si";
import { AiFillPhone } from "react-icons/ai";

export default function ReachMe() {
  return (
    <div className="reachCover mt-20 p-10 grid items-center">
      <div className="sm:w-[40rem] bg-black bg-opacity-50 mx-auto">
        <p className="header text-white pt-10">Reach Me Out at:</p>
        <div className="my-10 mx-auto">
          <div className="flex">
            <div className="border-[1px] border-[#352495] mt-8 h-0 w-full"></div>
            <p className="w-full text-xl md:text-2xl px-0 py-4 text-center text-white">
              Find me on my network!
            </p>
          </div>
          <div className="bg-white bg-opacity-80 border-[1px] flex gap-2 p-5 sm:p-10 justify-between text-4xl ">
            <a
              href="https://www.messenger.com/t/100006001121564"
              target="_blank"
              rel="noreferrer"
            >
              <SiMessenger className="text-[#01A1F7] hover:-translate-y-2 curso duration-300" />
            </a>
            <a
              href="https://www.resujeff27@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <SiGmail className="text-[#D14E43] hover:bg-opacity-70 hover:-translate-y-2 curso duration-300" />
            </a>
            <a
              href="https://github.com/Rej327"
              target="_blank"
              rel="noreferrer"
            >
              <SiGithub className="text-[#1B1C21] hover:bg-opacity-70 hover:-translate-y-2 curso duration-300" />
            </a>
            <a
              href="https://join.skype.com/invite/tr1p883GYZOG"
              target="_blank"
              rel="noreferrer"
            >
              <SiSkype className="text-[#00A6E4] hover:bg-opacity-70 hover:-translate-y-2 curso duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/jefferson-resurreccion-9279391b7/"
              target="_blank"
              rel="noreferrer"
            >
              <SiLinkedin className="text-[#0179B1] hover:bg-opacity-70 hover:-translate-y-2 curso duration-300" />
            </a>
            <a href="tel:09502433069" target="_blank" rel="noreferrer">
              <AiFillPhone className="text-[#32BE32] hover:bg-opacity-70 hover:-translate-y-2 curso duration-300" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
