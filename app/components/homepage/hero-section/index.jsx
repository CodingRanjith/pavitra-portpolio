// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12 bg-[#3b2b2a] text-[#f5e9dc]">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10 opacity-10"
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        {/* Left Text Block */}
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-[#f5e9dc] md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello, <br />
            This is{" "}
            <span className="text-[#d3a87c]">{personalData.name}</span>
            {`, I'm a Professional `}
            <span className="text-[#c49b6c]">{personalData.designation}</span>.
          </h1>

          <div className="my-10 flex items-center gap-5">
            <Link
              href={personalData.github}
              target="_blank"
              className="transition-all text-[#a9745b] hover:text-[#d3a87c] hover:scale-125 duration-300"
            >
              <BsGithub size={30} />
            </Link>
            <Link
              href={personalData.linkedIn}
              target="_blank"
              className="transition-all text-[#a9745b] hover:text-[#d3a87c] hover:scale-125 duration-300"
            >
              <BsLinkedin size={30} />
            </Link>
            <Link
              href={personalData.facebook}
              target="_blank"
              className="transition-all text-[#a9745b] hover:text-[#d3a87c] hover:scale-125 duration-300"
            >
              <FaFacebook size={30} />
            </Link>
            <Link
              href={personalData.leetcode}
              target="_blank"
              className="transition-all text-[#a9745b] hover:text-[#d3a87c] hover:scale-125 duration-300"
            >
              <SiLeetcode size={30} />
            </Link>
            <Link
              href={personalData.twitter}
              target="_blank"
              className="transition-all text-[#a9745b] hover:text-[#d3a87c] hover:scale-125 duration-300"
            >
              <FaTwitterSquare size={30} />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              className="bg-gradient-to-r from-[#a9745b] to-[#d3a87c] p-[1px] rounded-full transition-all duration-300"
            >
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#5a3d31] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#f5e9dc] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            <Link
              href={personalData.resume}
              target="_blank"
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-[#c49b6c] to-[#d3a87c] px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-[#3b2b2a] no-underline transition-all duration-200 ease-out md:font-semibold"
              role="button"
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>
        </div>

        {/* Right Code Block */}
        <div className="order-1 lg:order-2 from-[#5a3d31] border-[#a9745b] relative rounded-lg border bg-gradient-to-r to-[#5a3d31]">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#d3a87c] to-transparent"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent to-transparent"></div>
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-[#c94f4f]"></div>
              <div className="h-3 w-3 rounded-full bg-[#c49b6c]"></div>
              <div className="h-3 w-3 rounded-full bg-[#88c490]"></div>
            </div>
          </div>
          <div className="overflow-hidden border-t-[2px] border-[#a9745b] px-4 lg:px-8 py-4 lg:py-8">
            <code className="font-mono text-xs md:text-sm lg:text-base text-[#f5e9dc]">
              <div className="blink">
                <span className="mr-2 text-[#d3a87c]">const</span>
                <span className="mr-2 text-[#f5e9dc]">coder</span>
                <span className="mr-2 text-[#d3a87c]">=</span>
                <span className="text-gray-400">{'{'}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-[#f5e9dc]">name:</span>
                <span className="text-gray-400">{`'`}</span>
                <span className="text-[#c49b6c]">Pavithra</span>
                <span className="text-gray-400">{`',`}</span>
              </div>
              <div className="ml-4 lg:ml-8 mr-2">
                <span className=" text-[#f5e9dc]">skills:</span>
                <span className="text-gray-400">{`['`}</span>
                <span className="text-[#c49b6c]">Angular</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-[#c49b6c]">RxJS</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-[#c49b6c]">Tailwind CSS</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-[#c49b6c]">Bootstrap</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-[#c49b6c]">TypeScript</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-[#c49b6c]">Material UI</span>
                <span className="text-gray-400">{"'],"}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-[#f5e9dc]">hardWorker:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-[#f5e9dc]">quickLearner:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-[#f5e9dc]">problemSolver:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-[#d3a87c]">hireable:</span>
                <span className="text-[#d3a87c]">function</span>
                <span className="text-gray-400">{'() {'}</span>
              </div>
              <div>
                <span className="ml-8 lg:ml-16 mr-2 text-orange-400">return</span>
                <span className="text-gray-400">{`(`}</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-[#d3a87c]">this.</span>
                <span className="mr-2 text-[#f5e9dc]">hardWorker</span>
                <span className="text-[#c49b6c]">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-[#d3a87c]">this.</span>
                <span className="mr-2 text-[#f5e9dc]">problemSolver</span>
                <span className="text-[#c49b6c]">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-[#d3a87c]">this.</span>
                <span className="mr-2 text-[#f5e9dc]">skills.length</span>
                <span className="mr-2 text-[#c49b6c]">&gt;=</span>
                <span className="text-orange-400">5</span>
              </div>
              <div><span className="ml-8 lg:ml-16 mr-2 text-gray-400">{`);`}</span></div>
              <div><span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span></div>
              <div><span className="text-gray-400">{`};`}</span></div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
