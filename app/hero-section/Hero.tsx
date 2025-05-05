import Link from "next/link";
import { monaSans } from "../fonts/monaSans";
import { motion } from "framer-motion";
import { bodyAnimation } from "../animations/animations";
import AnimatedWords from "../animations/AnimatedWords";
import "../animations/animate.css";

const Hero = () => {
  return (
    <motion.section
      className="relative z-10 flex h-[80vh] w-full items-stretch justify-center bg-[url('.//../public/hero.jpg')] bg-cover  bg-center py-0 sm:h-[90vh]  md:h-[100vh]"
      id="home"
      initial="initial"
      animate="animate"
    >
      <motion.div className="absolute left-0 top-0 right-0 bottom-0 h-full w-full bg-[#0E1016] mix-blend-color"></motion.div>

      <div className="absolute top-10 flex justify-between sm:w-[90%] lg:max-w-[1440px]">
        <div>
          <Link
            href="https://drive.google.com/file/d/1HhEOjwl6rQUbg0JY1SUsCjyyDDCzTfxf/view?usp=sharing"
            target="_blank"
            aria-label="View Resume"
          >
            <motion.button
              className="hidden rounded-md border-2 border-[#e4ded7] py-2 px-4 text-[14px] font-semibold text-[#e4ded7] sm:block  md:text-[16px] lg:block"
              variants={bodyAnimation}
            >
              VIEW RESUME
            </motion.button>
          </Link>
        </div>

        <div className="flex gap-10 text-[#e4ded7] sm:gap-12 md:gap-14 lg:gap-14">
          <Link
            href="https://github.com/ShivamSinghSees/"
            target="_blank"
            aria-label="View GitHub Profile"
          >
            <motion.p
              className="text-[16px] font-bold text-[#e4ded7] md:text-[16px]"
              variants={bodyAnimation}
            >
              GH
            </motion.p>
          </Link>
          <Link
            href="https://www.linkedin.com/in/shivam-kumar-84b16823a/"
            target="_blank"
            aria-label="View LinkedIn Profile"
          >
            <motion.p
              className="text-[16px] font-bold text-[#e4ded7] md:text-[16px]"
              variants={bodyAnimation}
            >
              LN
            </motion.p>
          </Link>
        </div>
      </div>

      <div className="-mt-36  flex flex-col items-center justify-center sm:-mt-20 lg:my-40 lg:-mt-2 lg:py-40 ">
        <div
          className={`relative flex flex-col items-center justify-center ${monaSans.className}  mt-20 `}
        >
          <AnimatedWords title="Shivam Singh" style="mt-4 gradient-text" />
        </div>
      </div>

      <div
        className="absolute bottom-10 flex items-center 
      justify-center
      md:bottom-10 lg:w-[90%] lg:max-w-[1440px] lg:justify-between"
      >
        <motion.div
          className="  max-w-[350px] md:max-w-[400px] lg:max-w-[400px]"
          variants={bodyAnimation}
        >
          <p className="text-left text-[16px] font-semibold text-[#e4ded7] md:text-[20px]">
            Building{" "}
            <Link
              href="https://vianlix.com/ "
              target="_blank"
              className="underline underline-offset-2 hover:no-underline"
            >
              Vianlix{" "}
            </Link>
          </p>
        </motion.div>

        <motion.div
          className="  hidden max-w-[500px] lg:block lg:max-w-[420px]"
          variants={bodyAnimation}
        >
          <p className="text-right text-[16px] font-semibold text-[#e4ded7] md:text-[20px]">
            Frontend Developer who loves building performant user experiences
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
