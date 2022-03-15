import type { NextPage } from "next";
import Script from "next/script";
import HeroSection from "../components/Hero";
import CategorySection from "../components/Home/Category";
import LookingForSection from "../components/Home/LookFor";
import ProgramSection from "../components/Home/Program";
import TweetSection from "../components/Home/TweetSection";
import Navbar from "../components/Navbar";
import Subnavbar from "../components/Subnavbar";
const Home: NextPage = () => {
  return (
    <>
      <div>
        <Navbar />
        <Subnavbar />
        <HeroSection>
          <div className="py-14">
            <div className="bg-white mx-4 p-8 flex flex-col  text-center">
              <h1 className="text-3xl font-bold">Farmer Fairness</h1>
              <p className="py-3 text-lg">
                You can file a complaint or tip if you suspect a violation of
                the Packers and Stockyards Act or any other Federal law
                governing fair and competitive marketing and contract growing of
                livestock and poultry
              </p>
              <button className="bg-yellow-600 flex w-1/2 mx-auto item-center justify-center rounded mt-5 text-white p-2 px-4">
                Learn more
              </button>
            </div>
          </div>
        </HeroSection>
        <LookingForSection />
        <CategorySection />
        <ProgramSection />
        <TweetSection />
      </div>
      <Script
        async
        src="https://platform.twitter.com/widgets.js"
        charSet="utf-8"
      ></Script>
    </>
  );
};

export default Home;
