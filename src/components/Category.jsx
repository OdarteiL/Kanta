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
    { name: "KIDS", img: "https://res.cloudinary.com/dlcqoiyb1/image/upload/v1707087390/ecommerce/kids_shoe_s2lx97.jpg", path: "/kids" },
    { name: "ACCESSORIES", img: "https://res.cloudinary.com/dlcqoiyb1/image/upload/v1707085439/ecommerce/pair-brown-shoes-with-black-leather-sole-word-bottom_lhrghr.jpg", path: "/products" },
  ];

  const brands = [brand1, brand5, brand2, brand6, brand3, brand4];
  const localShoes = [
    { name: "SHOP LOCAL MADE", img: shoe },
    { name: "KENTEY SNEAKER", img: shoe1 },
    { name: "KUMASI MADE", img: shoe2 },
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
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all"
            >
              <Link to="/brands">
                <img src={brand} alt="brand logo" className="w-full h-auto object-contain grayscale hover:grayscale-0 transition-all" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="my-16">
        <h2 className="font-bold text-4xl mb-8 text-center">Made in Ghana</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {localShoes.map((shoe, index) => (
            <motion.div
              key={shoe.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Link>
                <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                  <div className="h-[350px] overflow-hidden">
                    <img src={shoe.img} alt={shoe.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4 text-center">
                    <p className="text-white font-bold text-xl">{shoe.name}</p>
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
