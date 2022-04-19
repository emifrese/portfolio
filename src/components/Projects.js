// import { projects } from "../assets/data";
import { CodeIcon } from "@heroicons/react/solid";
import { useCallback, useEffect, useState } from "react";
import pokedex from "../assets/pokedex.gif";
import superchat from "../assets/superchat.gif";
import expenseTracker from "../assets/expense-tracker.gif";
import todoApp from '../assets/todo.gif'
// hay que corregir el tema de importar el gif
import github from '../assets/github.png'

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProjects = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://portfolio-1c237-default-rtdb.firebaseio.com/projects.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      console.log(data);

      const loadedProjects = [];

      for (const key in data) {
        loadedProjects.push({
          id: key,
          title: data[key].title,
          subtitle: data[key].subtitle,
          description: data[key].description,
          image: data[key].image,
          link: data[key].link,
          projectId: data[key].projectId,
        });
      }

      setProjects(loadedProjects);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  let content = <p>Found no projects</p>;

  if (projects.length > 0) {
    content = (
      <div className="flex flex-wrap -m-4">
        {projects.map((project) => {
          let image;
          switch (project.projectId) {
            case "poke":
              image = pokedex;
              break;
            case "chat":
              image = superchat;
              break;
            case 'expe':
              image = expenseTracker;
              break;
            case 'todo':
              image = todoApp;
              break;
            default:
          }

          return (
            <a
              href={project.link}
              key={project.image}
              rel="noreferrer"
              target="_blank"
              className="sm:w-1/2 w-100 p-4"
            >
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                  <img src={github} alt='GitHub LOGO'/>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    );
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Here i display my latest projects if you wanna see more:
            <a href='https://github.com/emifrese'> Github</a>
          </p>
        </div>
        {content}
      </div>
    </section>
  );
};

export default Projects;
