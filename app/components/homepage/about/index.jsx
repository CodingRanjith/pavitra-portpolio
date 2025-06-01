// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative bg-[#3b2b2a] p-6 lg:p-12 rounded-lg">
      {/* Vertical Label - Coffee Theme */}
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#a9745b] w-fit text-[#f5e9dc] rotate-90 p-2 px-5 text-xl rounded-md shadow">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#a9745b]"></span>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Text Section */}
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#d3a87c] text-xl uppercase tracking-widest">
            Who I am?
          </p>
          <p className="text-[#f5e9dc] text-sm lg:text-lg leading-relaxed">
            {personalData.description}
          </p>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center order-1 lg:order-2">
          <Image
            src={personalData.profile}
            width={280}
            height={280}
            alt="Profile Image"
            className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer border-4 border-[#a9745b]"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
