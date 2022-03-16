import { NextPage } from "next";
import React from "react";
import Footer from "../../components/Footer";
import HeroSection from "../../components/Hero";
import Navbar from "../../components/Navbar";
import Subnavbar from "../../components/Subnavbar";
const Farmersmarkets: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Subnavbar />
      <HeroSection height={20} background="/default-hero-image1.jpeg">
        <div className="py-10 flex items-end h-full  container mx-auto">
          <div className="bg-black bg-opacity-70 w-fit">
            <h1 className="text-3xl text-white p-2 font-bold">
              Local Food Directories: National Farmers Market Directory
            </h1>
          </div>
        </div>
      </HeroSection>
      <div className="bg-gray-100">
        <div className="container mx-auto text-[0.6rem] font-bold gap-3 py-2 flex">
          <h1>HOME</h1>
          <h1>LOCAL FOOD DIRECTORIES: NATIONAL FARMERS MARKET DIRECTORY</h1>
        </div>
      </div>
      <div className="container mx-auto pb-72">
        <div className="flex flex-col gap-4 py-10 max-w-6xl">
          <p>
            The Farmers Market Directory lists markets that feature two or more
            farm vendors selling agricultural products directly to customers at
            a common, recurrent physical location. Maintained by the
            Agricultural Marketing Service, the Directory is designed to provide
            customers with convenient access to information about farmers market
            listings to include: market locations, directions, operating times,
            product offerings, accepted forms of payment, and more.
          </p>
          <p>
            Visit our Local Food Directories page to find other operations
            offering locally grown products. If you are a market manager visit
            our Local Food Directory Registration Update page to add or update a
            market listing. An API is available for developers to integrate this
            data into other applications.
          </p>
        </div>
        <div className="text-xs flex flex-col gap-3">
          <p>Last update on March 15, 2022 12:11</p>
          <p className="text-blue-600 font-medium">Instructions</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Farmersmarkets;
