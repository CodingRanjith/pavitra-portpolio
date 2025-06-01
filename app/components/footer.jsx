// @flow strict
import Link from 'next/link';
import { CgCoffee } from "react-icons/cg"; // Optional: You can use a coffee icon
import { IoCafe } from "react-icons/io5";  // Optional: Icon resembling café

function Footer() {
  return (
    <div className="relative border-t bg-[#4b2e2e] border-[#a9745b] text-[#f5e9dc]">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-[#d3a87c] to-transparent"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">
            © Brewed with ❤️ by{" "}
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/pavithra-profile/"
              className="text-[#d3a87c] hover:underline"
            >
              Pavithra
            </Link>
          </p>
          {/* Optional: Coffee-themed buttons */}
          {/* <div className="flex items-center gap-5">
            <Link
              target="_blank"
              href="https://github.com/pavithra-profile/developer-portfolio"
              className="flex items-center gap-2 uppercase hover:text-[#d3a87c]"
            >
              <IoCafe />
              <span>Brew</span>
            </Link>
            <Link
              target="_blank"
              href="https://github.com/pavithra-profile/developer-portfolio/fork"
              className="flex items-center gap-2 uppercase hover:text-[#d3a87c]"
            >
              <CgCoffee />
              <span>Serve</span>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Footer;
