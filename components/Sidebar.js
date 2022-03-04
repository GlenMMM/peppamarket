import Link from "next/link";
import Image from "next/dist/client/image";

const Sidebar = ({ isOpen, toggle, toggleC }) => {
  return (
    <div
      className={
        isOpen
          ? "fixed z-30 top-0 w-full h-full md:hidden translate-x-0 duration-300 transform ease-out"
          : "translate-x-full"
      }
    >
      <div className="absolute top-0 right-0 z-30 w-11/12 max-w-xs bg-white h-full rounded-l-lg">
        <div className="flex pb-7 p-5 items-center justify-between">
          <div>
            <Link href="/" passHref>
              <a className="flex items-center">
                <Image
                  className="object-contain cursor-pointer"
                  src="/icons/dark-icon.svg"
                  alt="merokket-logo"
                  width={40}
                  height={30}
                />
                <h2>Merokket</h2>
              </a>
            </Link>
          </div>
          <div className="p-2 cursor-pointer" onClick={toggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="h-px mx-5 bg-gray-300"></div>
        <ul className="px-5 pt-3" onClick={toggle}>
          <li>
            <Link href="/" passHref>
              <a className="block py-3 px-5 focus:bg-gray-100 rounded-lg">
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/#services" passHref>
              <a className="block py-3 px-5 focus:bg-gray-100 rounded-lg">
                Services
              </a>
            </Link>
          </li>
          <li>
            <Link href="/our-works" passHref>
              <a className="block py-3 px-5 rounded-lg focus:bg-gray-100">
                Our works
              </a>
            </Link>
          </li>
          <li>
            <a
              className="block py-3 px-5 rounded-lg focus:bg-gray-100 cursor-pointer"
              onClick={toggleC}
            >
              Contact us
            </a>
          </li>
        </ul>
      </div>
      <div
        className="absolute top-0 left-0 z-0 w-full h-full bg-black bg-opacity-25"
        onClick={toggle}
      />
    </div>
  );
};

export default Sidebar;
