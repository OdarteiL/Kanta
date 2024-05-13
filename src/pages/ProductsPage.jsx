import { Link } from "react-router-dom";
import SideNav from "../components/SideNav";
import ProductsCards from "../components/ProductsCards";

const ProductsPage = () => {
  return (
    <>
      <div>
        <div className="w-full">
          <div className="px-[3%] pt-5">
            <p>
              <Link to={"/"}>Home</Link>
            </p>
            <h2 className="font-bold text-3xl">All Products</h2>
          </div>
          <div className="md:flex md:w-full md:px-[3%]">
            <div className="md:w-[20%] lg:w-[16%] py-9">
              <SideNav />
            </div>
            <div className="md:w-[80%]">
              <ProductsCards />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
