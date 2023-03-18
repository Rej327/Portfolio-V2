import { SiTailwindcss, SiPostgresql, SiRailway } from "react-icons/si";
import {
  TbBrandNextjs,
  TbBrandTypescript,
  TbBrandPrisma,
} from "react-icons/tb";
import { RxDotFilled } from "react-icons/rx";
import { BsCodeSlash } from "react-icons/bs";
import RegavanaSlider from "./sliders/RegavanaSlider";

export default function Regavana() {
  return (
    <div className="w-full mt-10">
      <div className="w-full mx-auto md:flex items-center">
        <div className="max-w-[45rem]">
          <RegavanaSlider />
        </div>
        <div className="mx-10">
          <h1 className="py-2 text-2xl">Description:</h1>
          <p className="py-2">
            <strong>Regavana Band </strong>
            is a web application that I created using NextJS, TypeScript and
            TailwindCSS for the frontend and also TypeScript, Prisma, PostgreSQL
            for the backend and deploy it in Railway.
            <br />
            <br />
            This project is unfinish and planning to add DELETE and UPDATE
            function. The website is for the band group that I've been
            performing as a Drummer.
          </p>
          <h1 className="pt-2">Technology:</h1>
          <div className="flex gap-2 my-2 text-4xl text-gray-400">
            <TbBrandNextjs className="hover:text-white hover:bg-[#000000] hover:rounded-full duration-300" />
            <TbBrandTypescript className="hover:text-[#0174C1] duration-300" />
            <SiTailwindcss className="hover:text-[#35B2EA] duration-300" />
            <TbBrandPrisma className="hover:text-[#0A3146] duration-300" />
            <SiPostgresql className="hover:text-[#31638A] duration-300" />
            <SiRailway className="hover:text-black duration-300" />
          </div>
          <div className="flex gap-4 w-fit mx-auto sm:mx-0">
            <p className="flex">
              <BsCodeSlash className="text-violet-600 text-xl" />
              <a
                href="https://github.com/Rej327/regavana"
                target="_blank"
                className="underline underline-offset-4 hover:no-underline ml-1"
              >
                View Code
              </a>
            </p>
            <p className="flex">
              <RxDotFilled className="text-green-600 text-2xl" />
              <a
                href="https://regavana.vercel.app/"
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
