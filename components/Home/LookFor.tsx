import { NextPage } from "next";
import SelectForm from "../SelectForm";

const LookingForSection: NextPage = () => {
  return (
    <div>
      <div className=" my-10 lg:flex flex-col justify-center px-4">
        <h1 className="text-3xl  text-green-700 mb-3 font-bold text-center">
          {" "}
        </h1>
        <SelectForm />
        <div className="my-10 lg:max-w-4xl lg:mx-auto">
          <p className="text-xl lg:text-2xl text-green-900 text-center">
            The Agricultural Marketing Service (AMS) administers programs that
            create domestic and international marketing opportunities for U.S.
            producers of food, fiber, and specialty crops. AMS also provides the
            agriculture industry with valuable services to ensure the quality
            and availability of wholesome food for consumers across the country
            and around the world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LookingForSection;
