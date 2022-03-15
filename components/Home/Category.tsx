import { NextPage } from "next";
import Card from "../Card";
import { dataCategory } from "../../utils/data";

const CategorySection: NextPage = () => {
  return (
    <div className="bg-gray-200 px-4 py-10">
      <Card data={dataCategory} />
    </div>
  );
};

export default CategorySection;
