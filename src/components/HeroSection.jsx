import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <div className="mt-2 mb-8 z-10 relative">
        <div className="h-[450px] md:w-full md:h-[500px] ">
          <div className="w-full h-full">
            <img
              src="https://res.cloudinary.com/dlcqoiyb1/image/upload/v1707082300/ecommerce/yellow-sports-shoe-with-elegant-design-generated-by-ai_anttgf.jpg"
              alt="shoe"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex item-center justify-center mt-2 ">
            <Link to={"/products"}>
            <button className="text-white bg-black rounded px-7 py-3 md:absolute md:top-[80%] md:left-[34%]  lg:top-[80%] lg:left-[42%] hover:bg-white hover:text-black">SHOP THE LATEST RELEASE NOW!</button>
            </Link>
          </div>
      </div>
    </>
  );
};

export default HeroSection;
