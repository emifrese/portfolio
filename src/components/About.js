import coding from "../assets/coding.svg";
import { Element } from "react-scroll";

const About = () => {
  return (
    <section id="about">
      <Element name="aboutContainer">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Hi, I'm Emiliano.
              <br className="hidden lg:inline-block" />I love learning and
              applying new skills.
            </h1>
            <p className="mb-8 leading-relaxed">
              I've started studying Fron End Development at the start of 2021.
              From there till now i've worked in personal projects. I'm
              currently styling my projects with Tailwind, but I've used plain
              CSS, SASS, Bootstrap and Modules. ReactJS is now my main resource
              when i build a website/app, and i complement it with Firebase, for
              the back end tasks. But i have a few experience in Next.JS,
              MongoDB and Node.JS.
            </p>
            <div className="flex justify-center">
              <a
                href="#contact"
                className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
              >
                Work With Me
              </a>
              <a
                href="#projects"
                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
              >
                See My Past Work
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={coding}
            />
          </div>
        </div>
      </Element>
    </section>
  );
};

export default About;
