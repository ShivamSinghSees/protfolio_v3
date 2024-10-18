import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import "../globals.css";
import AnimatedBody from "../animations/AnimatedBody";
import { TimelineProps } from "./blogDetails";
import AnimatedTitle from "../animations/AnimatedTitle";
import { monaSans } from "../fonts/monaSans";

const TimelineTile = ({ title, description, date }: TimelineProps) => {
  return (
    <li className="mb-10  ml-4">
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {date}
      </time>
      <AnimatedTitle
        wordSpace={"mr-[14px]"}
        charSpace="mr-[1px]"
        delay={0.1}
        text={title}
        className={`text-[#e4ded7] ${monaSans.className}  lg:text-[50px] lg:my-[12px]`}
      />
      <AnimatedBody
        text={description}
        className={`mb-4 text-base ${monaSans.className} font-normal text-gray-500 dark:text-gray-400`}
      />
    </li>
  );
};

export default TimelineTile;
