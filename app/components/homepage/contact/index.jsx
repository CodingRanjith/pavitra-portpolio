// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaStackOverflow } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import ContactForm from './contact-form';

function ContactSection() {
  return (
    <div id="contact" className="my-12 lg:my-16 relative mt-24 text-[#f5e9dc] bg-[#3b2b2a] p-6 lg:p-12 rounded-lg">
      {/* Side Label */}
      <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
        <span className="bg-[#a9745b] w-fit text-[#f5e9dc] rotate-90 p-2 px-5 text-xl rounded-md shadow">
          CONTACT
        </span>
        <span className="h-36 w-[2px] bg-[#a9745b]"></span>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <ContactForm />

        <div className="lg:w-3/4">
          <div className="flex flex-col gap-5 lg:gap-9">
            <p className="text-sm md:text-xl flex items-center gap-3">
              <MdAlternateEmail
                className="bg-[#a9745b] p-2 rounded-full hover:bg-[#d3a87c] hover:scale-110 transition-all duration-300 text-[#3b2b2a] cursor-pointer"
                size={36}
              />
              <span>{personalData.email}</span>
            </p>
            <p className="text-sm md:text-xl flex items-center gap-3">
              <IoMdCall
                className="bg-[#a9745b] p-2 rounded-full hover:bg-[#d3a87c] hover:scale-110 transition-all duration-300 text-[#3b2b2a] cursor-pointer"
                size={36}
              />
              <span>{personalData.phone}</span>
            </p>
            <p className="text-sm md:text-xl flex items-center gap-3">
              <CiLocationOn
                className="bg-[#a9745b] p-2 rounded-full hover:bg-[#d3a87c] hover:scale-110 transition-all duration-300 text-[#3b2b2a] cursor-pointer"
                size={36}
              />
              <span>{personalData.address}</span>
            </p>
          </div>

          {/* Social Icons */}
          <div className="mt-8 lg:mt-16 flex items-center gap-5 lg:gap-10">
            <Link target="_blank" href={personalData.github}>
              <IoLogoGithub
                className="bg-[#a9745b] p-3 rounded-full hover:bg-[#d3a87c] hover:scale-110 transition-all duration-300 text-[#3b2b2a] cursor-pointer"
                size={48}
              />
            </Link>
            <Link target="_blank" href={personalData.linkedIn}>
              <BiLogoLinkedin
                className="bg-[#a9745b] p-3 rounded-full hover:bg-[#d3a87c] hover:scale-110 transition-all duration-300 text-[#3b2b2a] cursor-pointer"
                size={48}
              />
            </Link>
            <Link target="_blank" href={personalData.twitter}>
              <FaXTwitter
                className="bg-[#a9745b] p-3 rounded-full hover:bg-[#d3a87c] hover:scale-110 transition-all duration-300 text-[#3b2b2a] cursor-pointer"
                size={48}
              />
            </Link>
            <Link target="_blank" href={personalData.stackOverflow}>
              <FaStackOverflow
                className="bg-[#a9745b] p-3 rounded-full hover:bg-[#d3a87c] hover:scale-110 transition-all duration-300 text-[#3b2b2a] cursor-pointer"
                size={48}
              />
            </Link>
            <Link target="_blank" href={personalData.facebook}>
              <FaFacebook
                className="bg-[#a9745b] p-3 rounded-full hover:bg-[#d3a87c] hover:scale-110 transition-all duration-300 text-[#3b2b2a] cursor-pointer"
                size={48}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
