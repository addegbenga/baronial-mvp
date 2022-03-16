type reactChild = {
  children: React.ReactNode;
  background: any;
  height: number;
};

const HeroSection = ({ background, height, children }: reactChild) => {
  return (
    <div
      className={`h-[${height}rem]`}
      style={{
        background: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "cover",
      }}
    >
      {children}
    </div>
  );
};

export default HeroSection;
