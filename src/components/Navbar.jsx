import logo from "../assets/Kanta.png";
import { IoCartOutline } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../redux/searchSlice";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const dispatch = useDispatch();
  const [displayNav, setDisplayNav] = useState(false);
  const cartItems = useSelector((state) => state.cart?.items || []);

  const handleSearch = (event) => {
    dispatch(setSearchQuery(event.target.value));
  };

  const toggle = () => setDisplayNav(!displayNav);
  const closeNav = () => setDisplayNav(false);

  return (
    <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 sticky top-0 z-50 shadow-lg">
      <div className="px-[3%]">
        <div className="flex items-center justify-between w-full h-[70px]">
          <Link to="/" className="transform hover:scale-105 transition-transform">
            <img src={logo} alt="kanta logo" className="w-[100px] h-[30px]" />
          </Link>

          <div className="hidden md:flex md:w-[60%] lg:w-[70%] md:ml-5 lg:ml-12">
            <form className="relative w-full">
              <input
                type="text"
                placeholder="Search for fashion & electronics..."
                className="w-full h-[40px] px-4 pr-12 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                onChange={handleSearch}
              />
              <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors">
                <CiSearch size={20} />
              </button>
            </form>
          </div>

          <div className="flex gap-4 items-center">
            <Link to="/cart" className="relative">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="text-white">
                <IoCartOutline size={28} />
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {cartItems.length}
                  </span>
                )}
              </motion.div>
            </Link>

            <button onClick={toggle} className="text-white md:hidden">
              {!displayNav ? <AiOutlineMenu size={25} /> : <IoMdClose size={30} />}
            </button>

            <Link to="/signin" className="hidden md:flex">
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2 text-white bg-blue-600 px-4 py-2 rounded-full hover:bg-blue-700 transition-colors">
                <RiAccountPinCircleFill size={20} />
                <span className="font-medium">Sign In</span>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>

      <div className="text-white border-t border-gray-700 px-[3%] py-3">
        <div className="flex justify-between items-center">
          <ul className="hidden md:flex gap-8">
            {[
              { name: "New Arrival", path: "/new-arrivals" },
              { name: "Brand", path: "/brands" },
              { name: "Men", path: "/men" },
              { name: "Women", path: "/women" },
              { name: "Kids", path: "/kids" },
            ].map((item) => (
              <motion.li key={item.name} whileHover={{ y: -2 }} className="relative group">
                <Link to={item.path} className="font-medium hover:text-blue-400 transition-colors">{item.name}</Link>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
              </motion.li>
            ))}
          </ul>

          <div className={displayNav ? "hidden" : "relative md:hidden w-full"}>
            <input
              type="text"
              placeholder="Search..."
              className="w-full h-[38px] px-4 pr-10 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleSearch}
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600">
              <CiSearch size={20} />
            </div>
          </div>
        </div>

        <AnimatePresence>
          {displayNav && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-4">
                <Link to="/signin" onClick={closeNav}>
                  <div className="flex items-center gap-2 mb-4 bg-blue-600 px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    <RiAccountPinCircleFill size={20} />
                    <span className="font-medium">Sign In / Create Account</span>
                  </div>
                </Link>

                <div className="bg-white text-black rounded-lg overflow-hidden">
                  {[
                    { name: "New Arrivals", path: "/new-arrivals" },
                    { name: "Brand", path: "/brands" },
                    { name: "Men", path: "/men" },
                    { name: "Women", path: "/women" },
                    { name: "Kids", path: "/kids" },
                  ].map((item, index) => (
                    <div key={item.name} className={`py-3 px-4 font-semibold hover:bg-gray-100 transition-colors ${index > 0 ? "border-t border-gray-200" : ""}`} onClick={closeNav}>
                      <Link to={item.path}>{item.name}</Link>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;
