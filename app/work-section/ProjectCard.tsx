import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { ProjectProps } from "./projectDetails";
import Link from "next/link";
import Image from "next/image";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedBody from "../animations/AnimatedBody";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ProjectCard = ({
  id,
  name,
  description,
  technologies,
  github,
  demo,
  image,
}: ProjectProps) => {
  const projectRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: projectRef,
    offset: ["center end", "center center"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [230, 0]);
  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    [id % 2 === 0 ? -4 : 4, 0]
  );

  return (
    <motion.div
      ref={projectRef}
      style={{
        backgroundColor: "#212531",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        y,
        rotate,
      }}
      className={`relative z-10 h-[550px]  w-full items-stretch justify-center overflow-hidden rounded-3xl bg-center py-0 sm:h-[700px] sm:w-[100%] md:h-[650px] md:w-[100%] lg:h-[500px]`}
    >
      <Image
        src={image}
        alt={name}
        className={`absolute -bottom-2  w-[70%] sm:w-[85%] md:w-[60%] lg:max-w-[55%] ${
          id % 2 === 0 ? "right-0" : "left-0"
        }`}
      />
      <div
        className={`absolute top-0 text-[#0E1016] ${
          id % 2 === 0 ? "left-0 ml-8 lg:ml-14" : "right-0 mr-8 lg:mr-14"
        } mt-6 flex  items-center justify-center gap-4 lg:mt-10`}
      >
        {github && (
          <Link
            href={github}
            target="_blank"
            className="rounded-full"
            aria-label="Open GitHub Repository"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className=" w-[20px] rounded-full bg-white p-5 text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
              data-blobity
              data-blobity-radius="38"
              data-blobity-offset-x="4"
              data-blobity-offset-y="4"
              data-blobity-magnetic="true"
            />
          </Link>
        )}
        {demo && (
          <Link href={demo} target="_blank" aria-label="Open Live Demo">
            <FontAwesomeIcon
              icon={faLink}
              className=" w-[20px] rounded-full bg-white p-5 text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
              data-blobity
              data-blobity-radius="38"
              data-blobity-offset-x="4"
              data-blobity-offset-y="4"
              data-blobity-magnetic="trues"
            />
          </Link>
        )}
      </div>
      <div
        className={`absolute text-white  ${
          id % 2 !== 0
            ? "right-0 top-32 mr-0 ml-10 md:right-0 md:ml-0 lg:right-0 lg:top-60  lg:mr-4"
            : "left-10 top-32 ml-0 md:mr-12 lg:top-52 lg:ml-4"
        } mb-10  md:mb-16 lg:mb-14 `}
      >
        <AnimatedTitle
          text={name}
          className={
            "max-w-[90%] text-[40px] leading-none text-white md:text-[44px] md:leading-none lg:max-w-[450px] lg:text-[48px] lg:leading-none"
          }
          wordSpace={"mr-[0.25em]"}
          charSpace={"-mr-[0.01em]"}
        />
        <AnimatedBody
          text={description}
          className={
            "mt-4 w-[90%] max-w-[457px] text-[16px] font-semibold text-[#95979D] "
          }
        />
        <div className="mt-9 flex flex-wrap gap-2 ">
          {technologies.map((tech, id) => (
            <AnimatedTitle
              text={tech}
              wordSpace={"mr-[0.25em]"}
              charSpace={"mr-[0.01em]"}
              key={tech + id}
              className={
                "text-[14px] font-bold uppercase md:text-[16px] lg:text-[18px] "
              }
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
