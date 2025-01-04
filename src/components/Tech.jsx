import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div>
      <h1 className= "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Technical Expertise</h1>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            {/* Pass both icon and name to BallCanvas */}
            <BallCanvas icon={technology.icon} name={technology.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
