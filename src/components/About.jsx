import profile from "../assets/profile.png";

export default function About() {
  return (
    <div className="w-full my-20">
      <div className="lg:flex">
        <img src={profile} />
        <div className="mt-5 w-full">
          <p className="text-5xl text-center mt-14 mb-5">About Me</p>
          <p className="px-10 py-5 text-xl">
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
        </div>
      </div>
    </div>
  );
}
