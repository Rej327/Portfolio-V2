import heroImage from "../assets/herobackground.png";

export default function Hero() {
  return (
    <div className="w-full lg:h-screen relative ">
      <div className="w-full  mt-[20%] absolute flex flex-col items-center justify-center">
        <h1 className="logo text-white text-5xl md:text-7xl lg:text-9xl">
          JEFFERSON
        </h1>
        <p className="logo text-white text-xl sm:text-2xl md:text-3xl lg:text-5xl">
          Frontend Web Developer
        </p>
      </div>
      <div className="hidden bottom-0 sm:w-full absolute sm:flex justify-between text-white px-5 lg:px-10 my-5">
        <a
          href="https://www.facebook.com/resujeff27"
          target="_blank"
          rel="noreferrer"
        >
          <p className="text-xl text-white opacity-20 hover:opacity-100 hover:underline underline-offset-8 duration-300">
            Facebook
          </p>
        </a>
        <a
          href="https://www.resujeff27@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <p className="text-xl text-white opacity-20 hover:opacity-100 hover:underline underline-offset-8 duration-300">
            Gmail
          </p>
        </a>
        <a
          href="https://www.linkedin.com/in/jefferson-resurreccion-9279391b7/"
          target="_blank"
          rel="noreferrer"
        >
          <p className="text-xl text-white opacity-20 hover:opacity-100 hover:underline underline-offset-8 duration-300">
            LinkedIn
          </p>
        </a>
        <a href="https://github.com/Rej327" target="_blank" rel="noreferrer">
          <p className="text-xl text-white opacity-20 hover:opacity-100 hover:underline underline-offset-8 duration-300">
            GitHub
          </p>
        </a>
        <a href="tel:09502433069" target="_blank" rel="noreferrer">
          <p className="text-xl text-white opacity-20 hover:opacity-100 hover:underline underline-offset-8 duration-300">
            (+63)-950-243-3069
          </p>
        </a>
      </div>

      <img src={heroImage} className="w-full lg:h-full " />
    </div>
  );
}
