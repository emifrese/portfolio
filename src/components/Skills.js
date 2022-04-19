import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import { useCallback, useEffect, useState } from "react";
// import { skills } from "../assets/data";

const Skills = () => {

  const [skills, setSkills] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchSkills = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://portfolio-1c237-default-rtdb.firebaseio.com/skills.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      console.log(data);
      
      const loadedSkills = [];
      let i = 0;
      for (const key in data) {
        i++;
        loadedSkills.push({
          id: key,
          title: data[key].title
        });
      }

      setSkills(loadedSkills);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchSkills();
  }, [fetchSkills]);

  let content = <p>Found no skills</p>;

  if (skills.length > 0) {
    content = (
      <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill.id} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill.title}
                </span>
              </div>
            </div>
          ))}
        </div>
    );
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if(isLoading) {
    content = <p>Loading...</p>
  }

  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            I have basic to mid-level knowledge in most of these skills
          </p>
        </div>
        {content}
      </div>
    </section>
  );
};

export default Skills;
