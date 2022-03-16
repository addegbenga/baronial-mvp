type reactChild = {
  children: React.ReactNode;
  background: any;
  height: number;
};

const HeroSection = ({ background, height, children }: reactChild) => {
  return (
    <div
      style={{
        background: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "cover",
        height: `${height}rem`,
      }}
    >
      {children}
    </div>
  );
};

export default HeroSection;
