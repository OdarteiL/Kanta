import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import brand1 from "../assets/Adidas_logo.png";
import brand2 from "../assets/balenciaga-logo.png";
import brand3 from "../assets/toms-logo.png";
import brand4 from "../assets/HOKA-Logo.png";
import brand5 from "../assets/nike-logo.png";
import brand6 from "../assets/Timberland-Logo.png";
import shoe from "../assets/local-shoe.png";
import shoe1 from "../assets/kentey-sneaker.jpg";
import shoe2 from "../assets/ks1.jpeg";
import shoe3 from "../assets/sheo-black.jpg";

const Category = () => {
  const categories = [
    { name: "MEN", img: "https://res.cloudinary.com/dlcqoiyb1/image/upload/v1707085439/ecommerce/pair-brown-shoes-with-black-leather-sole-word-bottom_lhrghr.jpg", path: "/men" },
    { name: "WOMEN", img: "https://res.cloudinary.com/dlcqoiyb1/image/upload/v1707085578/ecommerce/portrait-woman-s-legs-with-stylish-high-heels-pantyhose_huvmqc.jpg", path: "/women" },
    { name: "ELECTRONICS", img: "https://res.cloudinary.com/dlcqoiyb1/image/upload/v1707087390/ecommerce/kids_shoe_s2lx97.jpg", path: "/products" },
    { name: "JEWELRY", img: "https://res.cloudinary.com/dlcqoiyb1/image/upload/v1707085439/ecommerce/pair-brown-shoes-with-black-leather-sole-word-bottom_lhrghr.jpg", path: "/products" },
  ];

  const brands = [brand1, brand5, brand2, brand6, brand3, brand4];
  const localShoes = [
    { name: "FASHION COLLECTION", img: shoe },
    { name: "ELECTRONICS", img: shoe1 },
    { name: "ACCESSORIES", img: shoe2 },
  ];

  return (
    <div className="px-[3%] mb-12">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
        {categories.map((cat, index) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link to={cat.path}>
              <div className="group relative h-[300px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white font-bold text-xl tracking-wider">{cat.name}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="my-16">
        <h2 className="font-bold text-4xl mb-8 text-center">Shop By Brands</h2>
        <div className="relative overflow-hidden py-8 bg-gray-50 rounded-xl">
          {/* Animated Brand Slider */}
          <motion.div
            className="flex gap-12 items-center"
            animate={{
              x: [0, -1200],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {/* Duplicate brands for seamless loop */}
            {[...brands, ...brands].map((brand, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex-shrink-0 bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all w-32 h-32 flex items-center justify-center"
              >
                <Link to="/brands">
                  <img src={brand} alt="brand logo" className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="my-16">
        <h2 className="font-bold text-4xl mb-8 text-center">Featured Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {localShoes.map((shoe, index) => (
            <motion.div
              key={shoe.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Link to="/products">
                <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all h-64">
                  <img src={shoe.img} alt={shoe.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-bold text-2xl mb-2">{shoe.name}</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="bg-white text-black px-6 py-2 rounded-full font-semibold text-sm hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      Explore
                    </motion.button>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-16 rounded-2xl overflow-hidden shadow-2xl"
      >
        <div className="relative h-[600px]">
          <img src={shoe3} alt="featured shoe" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Category;
