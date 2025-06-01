// @flow strict

import * as React from 'react';

function ProjectCard({ project }) {

  return (
    <div className="from-[#5a3d31] border-[#a9745b] relative rounded-lg border bg-gradient-to-r to-[#3b2b2a] w-full">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#d3a87c] to-[#a9745b]"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-[#a9745b] to-transparent"></div>
      </div>
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-300"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-300"></div>
        </div>
        <p className="text-center ml-3 text-[#d3a87c] text-base lg:text-xl">
          {project.name}
        </p>
      </div>
      <div className="overflow-hidden border-t-[2px] border-[#a9745b] px-4 lg:px-8 py-4 lg:py-8">
        <code className="font-mono text-xs md:text-sm lg:text-base text-[#f5e9dc]">
          <div className="blink">
            <span className="mr-2 text-[#d3a87c]">const</span>
            <span className="mr-2 text-[#f5e9dc]">project</span>
            <span className="mr-2 text-[#d3a87c]">=</span>
            <span className="text-[#f5e9dc]">{'{'}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-[#f5e9dc]">name:</span>
            <span className="text-[#a9745b]">{`'`}</span>
            <span className="text-[#c49b6c]">{project.name}</span>
            <span className="text-[#a9745b]">{`',`}</span>
          </div>

          <div className="ml-4 lg:ml-8 mr-2">
            <span className=" text-[#f5e9dc]">tools:</span>
            <span className="text-[#a9745b]">{` ['`}</span>
            {
              project.tools.map((tag, i) => (
                <React.Fragment key={i}>
                  <span className="text-[#c49b6c]">{tag}</span>
                  {
                    project.tools?.length - 1 !== i &&
                    <span className="text-[#a9745b]">{`', '`}</span>
                  }
                </React.Fragment>
              ))
            }
            <span className="text-[#a9745b]">{"],"}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-[#f5e9dc]">myRole:</span>
            <span className="text-orange-300">{project.role}</span>
            <span className="text-[#a9745b]">,</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-[#f5e9dc]">Description:</span>
            <span className="text-[#16f2b3]">{' ' + project.description}</span>
            <span className="text-[#a9745b]">,</span>
          </div>
          <div><span className="text-[#a9745b]">{`};`}</span></div>
        </code>
      </div>
    </div>
  );
};

export default ProjectCard;
