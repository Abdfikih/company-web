import Image from "next/image";
import { useEffect, useRef } from "react";
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";

import ProjectCard from "@/components/ProjectCard";
import { useSection } from "context/section";
import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";

import mebelPepak from "public/projects/mebelpepak.webp";
import lakuboImg from "public/projects/lakubo.webp";

const ProjectSection: React.FC = () => {
  const { theme } = useTheme();

  const sectionRef = useRef<HTMLDivElement>(null);

  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);

  // Set active link for project section
  const projectSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();
  useEffect(() => {
    projectSection && onSectionChange!("projects");
  }, [projectSection]);

  return (
    <section ref={sectionRef} id="projects" className="section">
      <div className="project-title text-center">
        <RoughNotation
          type="underline"
          color={`${theme === "light" ? "rgb(8 0 254)" : "rgb(8 0 254)"}`}
          strokeWidth={2}
          order={1}
          show={isOnScreen}
        >
          <h2 className="section-heading">Featured Projects</h2>
        </RoughNotation>
      </div>
      <span className="project-desc text-center block mb-4" ref={elementRef}>
        Here are some of our projects you shouldn't misss
      </span>
      <div className="flex flex-wrap">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} index={index} project={project} />
        ))}
      </div>
      <div className="others text-center mb-16">
        Other projects can be explored in{" "}
        <a
          href="https://github.com/abdfikih"
          className="font-medium underline link-outline text-marrsgreen dark:text-carrigreen whitespace-nowrap"
        >
          our github profile
        </a>
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Lapak Pintar",
    type: "Frontend",
    image: (
      <Image
        src={mebelPepak}
        sizes="100vw"
        fill
        alt="Lapak Pintar App"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "An e-commerce were users can browse various furniture products, and make a payment using bank transfer.",
    tags: ["Laravel", "TailwindCSS"],
    liveUrl: "",
    codeUrl: "https://github.com/abdfikih/",
    bgColor: "bg-[#B4BEE0]",
  },
  {
    title: "Frxioner E-commerce",
    type: "Frontend",
    image: (
      <Image
        src={lakuboImg}
        sizes="100vw"
        fill
        alt="Frixioner App"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "An e-commerce B2C/C2C for local MSMEs in web application where users can browse various MSMEs products.",
    tags: ["Laravel", "TailwindCSS", "Prime", "Next JS"],
    liveUrl: "",
    codeUrl: "https://github.com/abdfikih",
    bgColor: "bg-[#A6CECE]",
  },
];

export default ProjectSection;
