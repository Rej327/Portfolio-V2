import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { DiJavascript } from "react-icons/di";
import SolarSlider from "./sliders/SolarSlider";
import { RxDotFilled } from "react-icons/rx";
import { BsCodeSlash } from "react-icons/bs";

export default function Solar() {
  return (
    <div className="w-full mt-10">
      <div className="w-full mx-auto md:flex items-center">
        <div className="max-w-[45rem]">
          <SolarSlider />
        </div>
        <div className="mx-10">
          <h1 className="py-2 text-2xl">Description:</h1>
          <p className="py-2">
            <strong>Side Real Solar </strong>
            is a website that I created using HTML, CSS and JavaScript.
            <br />
            <br />
            This is my <strong>1st</strong> personal project and I only
            implement my fundamental knowledge of those three programming
            languages that I learned with help of freeCodeCamp activities.
          </p>
          <h1 className="pt-2">Technology:</h1>
          <div className="flex gap-2 my-2 text-4xl text-gray-400">
            <AiFillHtml5 className="hover:text-red-500 duration-300" />
            <IoLogoCss3 className="hover:text-blue-500 duration-300" />
            <DiJavascript className="hover:text-yellow-500 duration-300" />
          </div>
          <div className="flex gap-4 w-fit mx-auto sm:mx-0">
            <p className="flex">
              <BsCodeSlash className="text-violet-600 text-xl" />
              <a
                href="https://github.com/Rej327/sidereal-solar"
                target="_blank"
                className="underline underline-offset-4 hover:no-underline ml-1"
              >
                View Code
              </a>
            </p>
            <p className="flex">
              <RxDotFilled className="text-green-600 text-2xl" />
              <a
                href="https://sidereal-solar.netlify.app/"
                target="_blank"
                className="underline underline-offset-4 hover:no-underline"
              >
                Live Demo
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
