// @flow strict
import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-[#4b2e2e] shadow-md">
      <div className="flex items-center justify-between py-5 px-6 md:px-12">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className="text-[#d3a87c] text-3xl font-bold tracking-wide"
          >
            CoffeeCraft
          </Link>
        </div>

        <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-6 md:border-0 md:opacity-100" id="navbar-default">
          {[
            { name: "ABOUT", href: "/#about" },
            { name: "EXPERIENCE", href: "/#experience" },
            { name: "SKILLS", href: "/#skills" },
            { name: "EDUCATION", href: "/#education" },
            // { name: "BLOGS", href: "/blog" },
            { name: "PROJECTS", href: "/#projects" }
          ].map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="block px-4 py-2 no-underline outline-none"
              >
                <div className="text-sm text-[#f5e9dc] transition-colors duration-300 hover:text-[#d3a87c]">
                  {item.name}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
