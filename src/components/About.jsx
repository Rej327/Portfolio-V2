import profile from "../assets/profile.png";
import mycv from "../assets/mycv.pdf";
import { AiOutlineDownload } from "react-icons/ai";

export default function About() {
  return (
    <div data-aos="fade-in" data-aos-duration="1000" className="w-full my-20">
      <div className="lg:flex">
        <img src={profile} />
        <div className="mt-5 w-full">
          <p className="header mt-14 mb-5">About Me</p>
          <p className="px-10 pt-5 text-xl">
            Hi! I’m Jefferson Resurreccion, and I am 23 years old. I graduated
            from Southern Luzon State University year 2019 with a degree of
            Bachelor of Industrial Technology Major in Computer Technology.
            <br />
            <br />
            On October 2022 I started my study for being a Front-End Developer
            and learned many programming languages and programming technology.
            As of now my goal is to become a Front-End developer and soon is to
            become a Full Stack Developer.
            <br />
            <br />
            During my studies to become a frontend developer I've learned a lot
            and I am continuously learning and expanding my capabilities to
            become a good developer so that it will increase my skills and as
            well as become a productive employee of the company that I will be
            working with.
            <br />
            <br />I see myself as an enthusiastic, self-motivated, reliable,
            responsible and hard-working person. I am fond in Front End
            developing, and I love to create beautiful and performant websites
            with enjoyable user experiences.
          </p>
          <div className="w-fit my-10 mx-auto">
            <a href={mycv} download={mycv} target="_blank" rel="noreferrer">
              <button className="bGlobal">
                <span className="flex">
                  My CV
                  <AiOutlineDownload className="text-xl" />
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
