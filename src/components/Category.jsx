import { Link } from "react-router-dom";
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
  return (
    <>
      <div className="px-[3%] mb-5">
        <div className="grid grid-cols-2 md:grid md:grid-cols-2 md:gap-1 lg:grid-cols-4 gap-2">
          <Link>
            <div className="h-[300px] flex flex-col items-center mb-6 hover:scale-105 transition-all duration-500 ease-in-out ">
              <div className="h-full mb-3  md:w-[350px] ">
                <img
                  src="https://res.cloudinary.com/dlcqoiyb1/image/upload/v1707085439/ecommerce/pair-brown-shoes-with-black-leather-sole-word-bottom_lhrghr.jpg"
                  alt="men shoe"
                  className="w-full h-full object-cover "
                />
              </div>
              <div>
                <p className="pb-1 hover:border-b-2 border-black  ">MEN</p>
              </div>
            </div>
          </Link>

          <Link>
            <div className="h-[300px] flex flex-col items-center mb-6 hover:scale-105 transition-all duration-500 ease-in-out  ">
              <div className="h-full mb-3  md:w-[350px] ">
                <img
                  src="https://res.cloudinary.com/dlcqoiyb1/image/upload/v1707085578/ecommerce/portrait-woman-s-legs-with-stylish-high-heels-pantyhose_huvmqc.jpg"
                  alt="women shoe"
                  className="w-full h-full object-cover "
                />
              </div>
              <div>
                <p className="pb-1 hover:border-b-2 border-black ">WOMEN</p>
              </div>
            </div>
          </Link>

          <Link>
            <div className="h-[300px] flex flex-col items-center mb-6 hover:scale-105 transition-all duration-500 ease-in-out  ">
              <div className="h-full mb-3  md:w-[350px] ">
                <img
                  src="https://res.cloudinary.com/dlcqoiyb1/image/upload/v1707087390/ecommerce/kids_shoe_s2lx97.jpg"
                  alt="kids shoe"
                  className="w-full h-full object-cover "
                />
              </div>
              <div>
                <p className="pb-1 hover:border-b-2 border-black  ">KIDS</p>
              </div>
            </div>
          </Link>

          <Link>
            <div className="h-[300px] flex flex-col items-center mb-6 hover:scale-105 transition-all duration-500 ease-in-out  ">
              <div className="h-full mb-3  md:w-[350px] ">
                <img
                  src="https://res.cloudinary.com/dlcqoiyb1/image/upload/v1707085439/ecommerce/pair-brown-shoes-with-black-leather-sole-word-bottom_lhrghr.jpg"
                  alt="men shoe"
                  className="w-full h-full object-cover "
                />
              </div>
              <div>
                <p className="pb-1 hover:border-b-2 border-black ">
                  ACCESSORIES
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="px-[3%] my-[50px]">
        <h1 className="font-bold text-4xl mb-12">Shop By Brands</h1>
        <div className="grid grid-cols-2 md:flex items-center gap-12">
          <div className="w-[150px] md:w-[200px]">
            <Link>
              <img
                src={brand1}
                alt="adidas logo"
                className="w-full object-cover"
              />
            </Link>
          </div>
          <div className="w-[150px] md:w-[200px]">
            <Link>
              <img
                src={brand5}
                alt="adidas logo"
                className="w-full object-cover"
              />
            </Link>
          </div>
          <div className="w-[150px] md:w-[200px]">
            <Link>
              <img
                src={brand2}
                alt="adidas logo"
                className="w-full object-cover"
              />
            </Link>
          </div>
          <div className="w-[150px] md:w-[200px]">
            <Link>
              <img
                src={brand6}
                alt="adidas logo"
                className="w-full object-cover"
              />
            </Link>
          </div>
          <div className="w-[150px] md:w-[200px]">
            <Link>
              <img
                src={brand3}
                alt="adidas logo"
                className="w-full object-cover"
              />
            </Link>
          </div>
          <div className="w-[150px] md:w-[200px]">
            <Link>
              <img
                src={brand4}
                alt="adidas logo"
                className="w-full object-cover"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="mb-[50px]">
        <div className="px-[3%] md:grid md:grid-cols-3 gap-9 ">
          <div className="flex flex-col justify-center items-center mb-10 hover:scale-105 transition-all duration-500 ease-in-out ">
            <Link>
              <div className="md:w-[300] md:h-[350px]">
                <img
                  src={shoe}
                  alt="local shoe"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="font-bold text-3xl mt-[15px]">
                <p>SHOP LOCAL MADE</p>
              </div>
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center mb-10 hover:scale-105 transition-all duration-500 ease-in-out">
            <Link>
              <div className="md:w-[300] md:h-[350px]">
                <img
                  src={shoe1}
                  alt="local shoe"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="font-bold text-3xl mt-[15px]">
                <p>KENTEY SNEAKER</p>
              </div>
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center mb-10 hover:scale-105 transition-all duration-500 ease-in-out">
            <Link>
              <div className="md:w-[300] md:h-[350px]">
                <img
                  src={shoe2}
                  alt="local shoe"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="font-bold text-3xl mt-[15px]">
                <p>KUMASI MADE</p>
              </div>
            </Link>
          </div>
        </div>

        <div className="mt-[70px]">
          <div>
            <div className="w-full h-[600px]">
              <img
                src={shoe3}
                alt="white shoe"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
