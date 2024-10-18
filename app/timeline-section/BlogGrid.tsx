import AnimatedWords2 from "../animations/AnimatedWords2";
import { monaSans } from "../fonts/monaSans";
import AnimatedBody from "../animations/AnimatedBody";
import { timelineDetails } from "./blogDetails";
import TimelineTile from "./TimelineTile";

const Blog = () => {
  return (
    <section className="lg:max-w-[1212.8px] z-10 flex w-full flex-col items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-20 md:pb-16 lg:pb-32">
      <div
        className={`relative mb-16 flex w-full flex-col items-center justify-center gap-10  text-[#e4ded7] sm:items-center lg:max-w-[1440px]`}
      >
        <AnimatedWords2
          title={"Education & Expiriences"}
          style={`flex  flex-col items-start text-left  text-[86px] ${monaSans.className} font-extrabold uppercase leading-[6rem] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center sm:text-[10px] md:text-[20px] lg:text-center  lg:text-[100px]`}
        />
      </div>
      <div className="container p-4">
        <ol className="relative flex flex-col item-center justify-center   border-l border-gray-200 dark:border-gray-700">
          {timelineDetails.map((timeline, i) => {
            return (
              <TimelineTile
                key={i}
                title={timeline.title}
                description={timeline.description}
                date={timeline.date}
              />
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default Blog;
