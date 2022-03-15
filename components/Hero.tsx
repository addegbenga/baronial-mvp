type reactChild = {
  children: React.ReactNode;
};

const HeroSection = ({ children }: reactChild) => {
  return (
    <div
      className="h-[30rem]"
      style={{
        background: "url(3marketnews.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "cover",
      }}
    >
      {children}
    </div>
  );
};

export default HeroSection;
