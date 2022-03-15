import { NextPage } from "next";
import Image from "next/image";

const TweetSection: NextPage = () => {
  return (
    <div
      className="h-[30rem] flex justify-center items-center"
      style={{
        background: "url(bgimag.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "cover",
      }}
    >
      <div className="h-[25rem] rounded-md w-full mx-7 overflow-y-auto">
        <a
          className="twitter-timeline"
          href="https://twitter.com/USDA?ref_src=twsrc%5Etfw"
        >
          Tweets by USDA
        </a>{" "}
      </div>
    </div>
  );
};

export default TweetSection;
