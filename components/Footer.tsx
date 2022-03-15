import { NextPage } from "next";

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
      <h1 className="py-4 px-4 text-green-800 underline">Return to top</h1>
      <div className="bg-gray-100 ">
        <div className="flex  flex-col">
          {data1.map((item, idx) => (
            <div
              className="border-b px-4 bg-gray-100 border-opacity-30 border-black py-5 font-bold"
              key={idx}
            >
              <h1>{item.title}</h1>
            </div>
          ))}
        </div>
        <div className="text-sm px-4 py-8 flex flex-col gap-2 ">
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

          <div className="mt-8">
            <h1 className="text-2xl font-bold mb-3 ">Sign up for updates</h1>
            <div className="flex flex-col gap-3">
              <h1 className="text-lg">Your email address</h1>
              <input className="p-2 border py-3 border-black" name="input" />
              <button className="bg-yellow-600 font-bold p-3">Sign up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
