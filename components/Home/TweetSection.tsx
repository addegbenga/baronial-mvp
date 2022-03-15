import { NextPage } from "next";
import Image from "next/image";

const TweetSection: NextPage = () => {
  return (
    <div
      className="h-[32rem] "
      style={{
        background: "url(bgimag.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "cover",
      }}
    >
      <div className="flex justify-center py-10 lg:container lg:mx-auto lg:justify-start  items-center">
        <div className="h-[27rem]  lg:max-w-md rounded-md w-full mx-7 overflow-y-auto">
          <a
            className="twitter-timeline"
            href="https://twitter.com/USDA?ref_src=twsrc%5Etfw"
          >
            Tweets by USDA
          </a>{" "}
        </div>
      </div>
    </div>
  );
};

export default TweetSection;
