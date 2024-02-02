import { BsHouseFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

const Header = () => {
  return (
    <header className="bg-[#0A4D64] py-0 fixed w-full mx-auto top-0 z-10">
      <div className="w-7xl max-w-7xl mx-auto flex items-center justify-between px-2">
        <a
          href="/"
          className="my-0 flex items-center text-xl md:text-3xl font-semibold text-white no-underline hover:text-slate-200"
        >
          <BsHouseFill />
          <span className="ml-4">Building a House in Germany</span>
        </a>
        <ul className="navbar-nav ms-auto list-none">
          <li className="nav-item mb-0">
            <a
              href="/"
              className="my-0 py-0 hover:no-underline nav-link text-lg font-semibold "
              target="_blank"
            >
              <p className=" text-white no-underline hover:text-slate-200 my-0 py-0 hidden md:inline-block">
                Contact Us
              </p>
              <MdOutlineEmail className="text-white hover:text-slate-200 block md:hidden mr-8 text-2xl" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
