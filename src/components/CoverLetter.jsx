import writting from "../assets/writting.png";

export default function CoverLetter() {
  return (
    <div className="full px-2">
      <img src={writting} className="mx-auto w-10 mt-5 sm:w-20 sm:mt-10" />
      <div className="w-fit mx-auto border-l-2 my-5 md:border-l-4  border-slate-600 md:pl-10 pl-5">
        <p className="max-w-[30rem] md:text-2xl py-5">
          I'm a Entry Level Frontend Developer. Although I have no professional
          experience as a Web Developer but I have experience creating websites
          through self-study.
        </p>
      </div>
    </div>
  );
}
