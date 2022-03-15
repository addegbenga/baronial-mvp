import { NextPage } from "next";
import Image from "next/image";

const Navbar: NextPage = () => {
  return (
    <div>
      <div className="flex bg-white container mx-auto lg:pb-2 justify-between lg:items-end">
        <div className="flex gap-2  items-center">
          <div className="w-14  h-14 lg:w-[4rem] lg:h-[4rem]">
            <Image
              src="/usda-symbol.svg"
              width={100}
              height={100}
              alt="logo"
              layout="responsive"
            />
          </div>
          <div className="">
            <h1 className="text-sm lg:text-lg">
              Agricultural Marketing Service
            </h1>
            <p className="text-[0.6rem] lg:text-sm">
              U.S DEPARTMENT OF AGRICULTURE
            </p>
          </div>
        </div>
        <button className="p-3.5 block text-white bg-green-900 text-sm lg:hidden">
          Menu
        </button>
        <div className="lg:flex divide-x hidden text-blue-400 text-sm">
          <h1 className="px-2">ABOUT AMS</h1>
          <h1 className="px-2">NEWS ANNOUCEMENTS</h1>
          <h1 className="px-2">CONTACT US</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
