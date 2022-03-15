import { NextPage } from "next";
import Image from "next/image";
import { dataProgram } from "../../utils/data";

const ProgramSection: NextPage = () => {
  return (
    <div className="px-4 pt-8 bg-green-800 pb-10 ">
      <h1 className=" mb-10 font-bold pb-2 text-2xl text-white border-b-4 border-opacity-40 border-white ">
        Programs
      </h1>
      <div className="flex flex-col ">
        {dataProgram.map((item, ind) => (
          <div key={ind}>
            <div className="h-72 overflow-y-hidden">
              <Image
                src={item.img}
                width="100%"
                height="100%"
                layout="responsive"
                alt="myimage"
              />
            </div>
            <h1 className="text-center py-2 uppercase text-sm text-white">
              {item.title}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramSection;
