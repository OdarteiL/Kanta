import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative mt-2 mb-12 overflow-hidden">
      <div className="h-[500px] md:h-[600px] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10"></div>
        <img
          src="https://res.cloudinary.com/dlcqoiyb1/image/upload/v1707082300/ecommerce/yellow-sports-shoe-with-elegant-design-generated-by-ai_anttgf.jpg"
          alt="shoe"
          className="w-full h-full object-cover"
        />
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-20 flex flex-col justify-center items-start px-[5%] md:px-[10%]"
        >
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-lg">
            Step Into Style
          </h1>
          <p className="text-white text-lg md:text-xl mb-8 max-w-xl drop-shadow-md">
            Discover the latest collection of premium footwear
          </p>
          <Link to="/products">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white font-semibold px-8 py-4 rounded-full hover:bg-blue-700 transition-colors shadow-xl"
            >
              SHOP THE LATEST RELEASE NOW!
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
