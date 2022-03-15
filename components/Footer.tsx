import { NextPage } from "next";
import Image from "next/image";
import { BsFacebook, BsRssFill } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialYoutubeCircular } from "react-icons/ti";

const data1 = [
  {
    title: "Home",
  },
  {
    title: "Market News",
  },
  {
    title: "Rules & Regulations",
  },
  {
    title: "Grade & Standards",
  },
  {
    title: "Services",
  },
  {
    title: "Resources",
  },
  {
    title: "Commodity Procurement",
  },
];

const Footer: NextPage = () => {
  return (
    <div>
      <h1 className="py-4 px-4 text-green-800 underline lg:container lg:mx-auto">
        Return to top
      </h1>
      <div className="bg-gray-100 pb-14  ">
        <div className="bg-gray-200">
          <div className="flex lg:container  lg:mx-auto flex-col  lg:flex-row">
            {data1.map((item, idx) => (
              <div
                className="border-b lg:border-0 px-4 lg:px-6  border-opacity-30 border-black py-5 font-bold"
                key={idx}
              >
                <div>
                  <h1>{item.title}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-sm px-4 lg:container lg:flex-row lg:justify-between lg:mx-auto py-8 flex flex-col gap-2 ">
          <div className="flex flex-col gap-2">
            <h1>Site Map</h1>
            <h1>Policies and Links</h1>
            <h1>Our Performances</h1>
            <h1>Careers</h1>
            <h1>Visit USDA</h1>
          </div>
          <div className="flex flex-col gap-2">
            <h1>FOIA</h1>
            <h1>Civil Rights</h1>
            <h1>Information Quality</h1>
            <h1>privacy Policy</h1>
          </div>
          <div className="flex flex-col gap-2">
            <h1>Accessibilty Statement</h1>
            <h1>Reasonable Accomodation</h1>
            <h1>Personal Assistance Services</h1>
            <h1>Non-Discrimination Statement</h1>
            <h1>Anti-Harassment Policy</h1>
          </div>
          <div className="flex flex-col gap-2">
            <h1>USA.gov</h1>
            <h1>Whitehouse.gov</h1>
            <h1>eGov</h1>
            <h1>Feedback</h1>
          </div>

          <div className="mt-8 lg:mt-0 lg:flex lg:flex-col  lg:w-1/3">
            <h1 className="text-2xl font-bold mb-3 lg:text-xl">
              Sign up for updates
            </h1>
            <div className="flex flex-col gap-3">
              <h1 className="text-lg">Your email address</h1>
              <input className="p-2 border py-3 border-black" name="input" />
              <button className="bg-yellow-600 font-bold p-3">Sign up</button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="flex bg-white px-4 py-4 flex-col lg:container lg:mx-auto lg:flex-row  justify-between">
          <div className="flex gap-2  items-center">
            <div className="w-14  h-14">
              <Image
                src="/usda-symbol.svg"
                width={100}
                height={100}
                alt="logo"
                layout="responsive"
              />
            </div>
            <div className="">
              <h1 className="text-sm">Agricultural Marketing Service</h1>
              <p className="text-[0.6rem]">U.S DEPARTMENT OF AGRICULTURE</p>
            </div>
          </div>
          <div className="flex gap-4 pr-14 items-center flex-wrap ">
            <AiFillTwitterCircle color="#1DA1F2" size={34} />
            <BsFacebook size={28} color="#4267B2" />
            <TiSocialYoutubeCircular color="#FF0000" size={34} />
            <AiFillTwitterCircle color="#1DA1F2" size={34} />
            <BsFacebook size={28} color="#4267B2" />
            <TiSocialYoutubeCircular color="#FF0000" size={34} />
            <BsRssFill color="#ee802f" size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
