import logo from "../assets/Kanta.png";
import { IoCartOutline } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../redux/searchSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    const query = event.target.value;
    dispatch(setSearchQuery(query));
  };


  const [displayNav, setDisplayNav] = useState(false);

  const toggle = () => {
    setDisplayNav(!displayNav);
  };

  const closeNav = () => {
    setDisplayNav(false);
  };

  return (
    <>
      <div className="bg-black">
        <div className="px-[3%]  ">
          <div className="flex items-center justify-between w-full h-[70px]  ">
            <div className="">
              <Link to={"/"}>
                <img
                  src={logo}
                  alt="kanta logo"
                  className="w-[100px] h-[30px] "
                />
              </Link>
            </div>
            <div className="hidden relative md:w-[60%] lg:w-[70%] md:flex md:ml-5 lg:ml-12  ">
              <form  className="hidden relative md:w-[100%] lg:w-[100%] md:flex md:ml-5 lg:ml-12">
                <input
                  type="text"
                  placeholder="Search ..."
                  className=" w-[100%] h-[34px] px-4 rounded"
                  onChange={handleSearch}
                />
                <div className="text-white bg-black absolute p-2 md:left-[93.5%] md:top-[1px] lg:left-[96.9%] lg:top-[1px] border-white rounded ">
                  <CiSearch />
                </div>
              </form>
            </div>
            <div className="flex gap-2">
              <Link to={"/cart"}>
                <div className="text-white md:hidden lg:hidden">
                  <IoCartOutline size={25} />
                </div>
              </Link>
              <div className="text-white md:hidden lg:hidden" onClick={toggle}>
                {!displayNav ? (
                  <AiOutlineMenu size={25} />
                ) : (
                  <IoMdClose size={30} />
                )}
              </div>
            </div>
            <div className=" hidden md:flex lg:flex ">
              <Link to={"/signin"}>
                <div className="flex justify-center items-center gap-1 text-white hover:border-b border-white transition duration-300 ease-in-out ">
                  <RiAccountPinCircleFill />
                  <h2>Welcome!, Sign In</h2>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="text-white mt-4 border-t-[0.5px] md:flex justify-between border-white px-[3%] py-[15px]">
          <ul className="hidden md:flex gap-6">
            <li className="hover:border-b border-white transition duration-300 ease-in-out">
              <Link>
                <h2>New Arrival</h2>
              </Link>
            </li>
            <li className="hover:border-b border-white transition duration-300 ease-in-out">
              <Link>
                <h2>Brand</h2>
              </Link>
            </li>
            <li className="hover:border-b border-white transition duration-300 ease-in-out">
              <Link>
                <h2>Men</h2>
              </Link>
            </li>
            <li className="hover:border-b border-white transition duration-300 ease-in-out">
              <Link>
                <h2>Women</h2>
              </Link>
            </li>
            <li className="hover:border-b border-white transition duration-300 ease-in-out">
              <Link>
                <h2>Kids</h2>
              </Link>
            </li>
          </ul>

          <div className={displayNav ? "hidden" : "relative md:hidden "}>
            <input
              type="text"
              placeholder="Search ..."
              className=" w-[100%] h-[34px] px-4 rounded text-black"
              onChange={handleSearch}
            />
            <div className="text-white bg-black absolute p-2 left-[90.9%] top-[1px] border-white rounded ">
              <CiSearch />
            </div>
          </div>

          <div className="hidden md:flex">
            <Link to={"/cart"}>
              <div>
                <IoCartOutline size={25} />
              </div>
            </Link>
          </div>

          <div className={!displayNav ? "hidden" : "pt-3 md:hidden"}>
            <div className="flex items-center">
              <Link>
                <div className="flex items-center gap-1 mr-1">
                  <RiAccountPinCircleFill />
                  <h2 className="underline ">Welcome!, Sign In</h2>
                </div>
              </Link>
              or
              <Link>
                <h2 className="ml-1 underline ">Create an Account</h2>
              </Link>
            </div>
            <div className="bg-white text-black px-4 font-bold mt-3">
              <div className="py-3" onClick={closeNav}>
                <Link>
                  <p>New Arrivals</p>
                </Link>
              </div>
              <div className="py-3 border-t border-black" onClick={closeNav}>
                <Link>
                  <p>Brand</p>
                </Link>
              </div>
              <div className="py-3 border-t border-black" onClick={closeNav}>
                <Link>
                  <p>Men</p>
                </Link>
              </div>
              <div className="py-3 border-t border-black" onClick={closeNav}>
                <Link>
                  <p>Women</p>
                </Link>
              </div>
              <div className="py-3 border-t border-black" onClick={closeNav}>
                <Link>
                  <p>Kids</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
