import { FaReact } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiTailwindcss,
} from "react-icons/si";
import { RxDotFilled } from "react-icons/rx";
import { BsCodeSlash } from "react-icons/bs";
import ClyBlogSlider from "./sliders/ClyBlogSlider";

export default function ClyBlog() {
  return (
    <div className="w-full mt-10">
      <div className="w-full mx-auto md:flex items-center">
        <div className="max-w-[45rem]">
          <ClyBlogSlider />
        </div>
        <div className="mx-10">
          <h1 className="py-2 text-2xl">Description:</h1>
          <p className="py-2">
            <strong>Cly Blog </strong>
            is a website that I created using MERN stack and styled it using
            TailwindCSS.
            <br />
            <br />
            This is my <strong>2nd</strong> personal project, through my study
            of HTML, CSS, JavaScript. I study React, TailwindCSS and MERN stack
            to build this project. The project has READ and ADD function only.
          </p>
          <h1 className="pt-2">Technology:</h1>
          <div className="flex gap-2 my-2 text-4xl text-gray-400">
            <SiMongodb className="hover:text-[#0FA04D] duration-300" />
            <SiExpress className="hover:text-black duration-300" />
            <FaReact className="hover:text-[#60DAFA] duration-300" />
            <SiNodedotjs className="hover:text-[#82CD28] duration-300" />
            <SiTailwindcss className="hover:text-[#35B2EA] duration-300" />
          </div>
          <div className="flex gap-4 w-fit mx-auto sm:mx-0">
            <p className="flex">
              <BsCodeSlash className="text-violet-600 text-xl" />
              <a
                href="https://github.com/Rej327/cly-blog"
                target="_blank"
                className="underline underline-offset-4 hover:no-underline ml-1"
              >
                View Code
              </a>
            </p>
            <p className="flex">
              <RxDotFilled className="text-green-600 text-2xl" />
              <a
                href="https://cly-blog.netlify.app/"
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
