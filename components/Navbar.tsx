import { NextPage } from "next";
import Image from "next/image";

const Navbar: NextPage = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="w-12  h-12">
            <Image
              src="/usda-symbol.svg"
              width={60}
              height={60}
              alt="logo"
              layout="responsive"
            />
          </div>
          <div className="">
            <h1 className="text-sm">Agricultural Marketing Service</h1>
            <p className="text-[0.6rem]">U.S DEPARTMENT OF AGRICULTURE</p>
          </div>
        </div>
        <button className="p-3 text-white bg-green-800 text-sm">Menu</button>
      </div>
    </div>
  );
};

export default Navbar;
