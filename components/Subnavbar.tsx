import { NextPage } from "next";
import { AiOutlineSearch } from "react-icons/ai";

const Subnavbar: NextPage = () => {
  return (
    <div className="hidden bg-green-800 lg:block">
      <div className="flex container mx-auto bg-green-800 py-5 justify-between">
        <div className="flex divide-x divide-black text-white items-center text-sm">
          <h1 className="px-3">HOME</h1>
          <h1 className="px-3">MARKET NEWS</h1>
          <h1 className="px-3">RULES REGULATION</h1>
          <h1 className="px-3">GRADES STANDARDS</h1>
          <h1 className="px-3">SERVICES</h1>
          <h1 className="px-3">RESOURCES</h1>
          <h1 className="px-3">COMMODITY PROCUREMENT</h1>
        </div>
        <div className="flex">
          <input />
          <button className="bg-yellow-600 py-2 px-2">
            <AiOutlineSearch />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subnavbar;
