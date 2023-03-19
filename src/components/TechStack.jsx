import techstack from "../assets/techstack.png";
import techstackmobile from "../assets/techstackmobile.png";

export default function TechStack() {
  return (
    <div className="w-full  ">
      {/* <img src={techstack} className="w-full object-cover hidden md:block" />
      <img src={techstackmobile} className="w-full object-cover md:hidden" /> */}
      <div className="sm:px-44 object-fit">
        <div className="desktop"></div>
        <div className="mobile"></div>
      </div>
    </div>
  );
}
