import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import brand1 from "../assets/Adidas_logo.png";
import brand2 from "../assets/balenciaga-logo.png";
import brand3 from "../assets/toms-logo.png";
import brand4 from "../assets/HOKA-Logo.png";
import brand5 from "../assets/nike-logo.png";
import brand6 from "../assets/Timberland-Logo.png";

const BrandPage = () => {
  const brands = [
    { name: "Adidas", logo: brand1, products: 45 },
    { name: "Nike", logo: brand5, products: 52 },
    { name: "Balenciaga", logo: brand2, products: 28 },
    { name: "Timberland", logo: brand6, products: 34 },
    { name: "Toms", logo: brand3, products: 19 },
    { name: "HOKA", logo: brand4, products: 23 },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl font-bold mb-2">Shop by Brand</h1>
          <p className="text-gray-600 mb-12">Explore our collection of premium brands</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Link to="/products">
                <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all p-8 text-center">
                  <img src={brand.logo} alt={brand.name} className="w-full h-24 object-contain mb-4 grayscale hover:grayscale-0 transition-all" />
                  <h3 className="font-bold text-lg mb-2">{brand.name}</h3>
                  <p className="text-gray-600 text-sm">{brand.products} Products</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Can't find your favorite brand?</h2>
          <p className="mb-6">We're constantly adding new brands to our collection</p>
          <Link to="/products">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              View All Products
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default BrandPage;
