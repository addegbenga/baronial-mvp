import Image from "next/image";
type dataProps = {
  data: {
    img: string;
    title: string;
  }[];
};
const Card = ({ data }: dataProps) => {
  return (
    <div className="flex lg:max-w-[75rem] lg:mx-auto flex-col lg:grid lg:grid-cols-3 gap-5">
      {data.map(({ img, title }, index) => (
        <div key={index} className=" relative">
          <div className="w-full h-64 lg:h-80  overflow-y-hidden">
            <Image
              src={img}
              height="100%"
              width="100%"
              alt="mycard"
              layout="responsive"
            />
            <h1 className="absolute uppercase z-50 top-2 left-4 text-sm font-bold text-white ">
              {title}
            </h1>
          </div>

          <div className="h-64 bg-red-400 z-40 hidden absolute top-0 w-full"></div>
        </div>
      ))}
    </div>
  );
};

export default Card;
