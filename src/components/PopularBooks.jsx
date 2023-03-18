import { SiExpress, SiNodedotjs, SiTailwindcss } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
import { RxDotFilled } from "react-icons/rx";
import { BsCodeSlash } from "react-icons/bs";
import PopularBooksSlider from "./sliders/PopularBooksSlider";
import { FaReact } from "react-icons/fa";

export default function PopularBooks() {
  return (
    <div className="w-full mt-10">
      <div className="w-full mx-auto md:flex items-center">
        <div className="max-w-[45rem]">
          <PopularBooksSlider />
        </div>
        <div className="mx-10">
          <h1 className="py-2 text-2xl">Description:</h1>
          <p className="py-2">
            <strong>Popular Books </strong>
            is a web application that I created using ReactJS, TailwindCSS for
            the frontend and MySQL, NodeJS for the backend.
            <br />
            <br />
            This project has a complete CRUD application which is Create, Read,
            Update and Delete function to interact this web app.
          </p>
          <h1 className="pt-2">Technology:</h1>
          <div className="flex gap-2 my-2 text-4xl text-gray-400">
            <TbBrandMysql className="hover:text-[#19788E] duration-300" />
            <SiExpress className="hover:text-black duration-300" />
            <FaReact className="hover:text-[#60DAFA] duration-300" />
            <SiNodedotjs className="hover:text-[#82CD28] duration-300" />
            <SiTailwindcss className="hover:text-[#35B2EA] duration-300" />
          </div>
          <div className="flex gap-4 w-fit mx-auto sm:mx-0">
            <p className="flex">
              <BsCodeSlash className="text-violet-600 text-xl" />
              <a
                href="https://github.com/Rej327/Popular-books"
                target="_blank"
                className="underline underline-offset-4 hover:no-underline ml-1"
              >
                View Code
              </a>
            </p>
            <p className="flex">
              <RxDotFilled className="text-red-600 text-2xl" />
              <a
                href=""
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
