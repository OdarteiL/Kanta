import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { setCategory, setPriceRange, setSortBy, resetFilters } from "../redux/filterSlice";

const SideNav = () => {
  const dispatch = useDispatch();
  const { category, priceRange, sortBy } = useSelector((state) => state.filter);
  const [expandedSections, setExpandedSections] = useState({
    gender: true,
    price: false,
    sort: false,
  });

  const toggleSection = (section) => {
    setExpandedSections({ ...expandedSections, [section]: !expandedSections[section] });
  };

  const handleCategoryChange = (cat) => {
    dispatch(setCategory(category === cat ? "" : cat));
  };

  const handlePriceChange = (range) => {
    dispatch(setPriceRange(range));
  };

  const handleSortChange = (sort) => {
    dispatch(setSortBy(sort));
  };

  return (
    <div>
      <div className="w-full">
        <div className="hidden md:flex md:font-bold md:text-xl mb-4">
          <h2>Refine Results</h2>
        </div>
        
        <div className="hidden md:flex flex-col">
          {/* Gender/Category Filter */}
          <div className="border-2 py-2 px-4 flex items-center justify-between cursor-pointer" onClick={() => toggleSection("gender")}>
            <p className="font-semibold">Category</p>
            <span>{expandedSections.gender ? <FaMinus /> : <FaPlus />}</span>
          </div>
          {expandedSections.gender && (
            <>
              <div className="border-2 border-t-0 py-2 px-4 flex items-center hover:bg-gray-50">
                <input
                  type="checkbox"
                  checked={category === ""}
                  onChange={() => handleCategoryChange("")}
                  className="w-4 h-4"
                />
                <p className="ml-2">All Products</p>
              </div>
              <div className="border-2 border-t-0 py-2 px-4 flex items-center hover:bg-gray-50">
                <input
                  type="checkbox"
                  checked={category === "men's clothing"}
                  onChange={() => handleCategoryChange("men's clothing")}
                  className="w-4 h-4"
                />
                <p className="ml-2">Men</p>
              </div>
              <div className="border-2 border-t-0 py-2 px-4 flex items-center hover:bg-gray-50">
                <input
                  type="checkbox"
                  checked={category === "women's clothing"}
                  onChange={() => handleCategoryChange("women's clothing")}
                  className="w-4 h-4"
                />
                <p className="ml-2">Women</p>
              </div>
              <div className="border-2 border-t-0 py-2 px-4 flex items-center hover:bg-gray-50">
                <input
                  type="checkbox"
                  checked={category === "jewelery"}
                  onChange={() => handleCategoryChange("jewelery")}
                  className="w-4 h-4"
                />
                <p className="ml-2">Jewelry</p>
              </div>
              <div className="border-2 border-t-0 py-2 px-4 flex items-center hover:bg-gray-50">
                <input
                  type="checkbox"
                  checked={category === "electronics"}
                  onChange={() => handleCategoryChange("electronics")}
                  className="w-4 h-4"
                />
                <p className="ml-2">Electronics</p>
              </div>
            </>
          )}

          {/* Price Filter */}
          <div className="border-2 border-t-0 py-2 px-4 flex items-center justify-between cursor-pointer" onClick={() => toggleSection("price")}>
            <p className="font-semibold">Price</p>
            <span>{expandedSections.price ? <FaMinus /> : <FaPlus />}</span>
          </div>
          {expandedSections.price && (
            <>
              <div className="border-2 border-t-0 py-2 px-4 flex items-center hover:bg-gray-50">
                <input
                  type="radio"
                  name="price"
                  checked={priceRange[0] === 0 && priceRange[1] === 1000}
                  onChange={() => handlePriceChange([0, 1000])}
                  className="w-4 h-4"
                />
                <p className="ml-2">All Prices</p>
              </div>
              <div className="border-2 border-t-0 py-2 px-4 flex items-center hover:bg-gray-50">
                <input
                  type="radio"
                  name="price"
                  checked={priceRange[0] === 0 && priceRange[1] === 50}
                  onChange={() => handlePriceChange([0, 50])}
                  className="w-4 h-4"
                />
                <p className="ml-2">Under ₵50</p>
              </div>
              <div className="border-2 border-t-0 py-2 px-4 flex items-center hover:bg-gray-50">
                <input
                  type="radio"
                  name="price"
                  checked={priceRange[0] === 50 && priceRange[1] === 100}
                  onChange={() => handlePriceChange([50, 100])}
                  className="w-4 h-4"
                />
                <p className="ml-2">₵50 - ₵100</p>
              </div>
              <div className="border-2 border-t-0 py-2 px-4 flex items-center hover:bg-gray-50">
                <input
                  type="radio"
                  name="price"
                  checked={priceRange[0] === 100 && priceRange[1] === 200}
                  onChange={() => handlePriceChange([100, 200])}
                  className="w-4 h-4"
                />
                <p className="ml-2">₵100 - ₵200</p>
              </div>
              <div className="border-2 border-t-0 py-2 px-4 flex items-center hover:bg-gray-50">
                <input
                  type="radio"
                  name="price"
                  checked={priceRange[0] === 200 && priceRange[1] === 1000}
                  onChange={() => handlePriceChange([200, 1000])}
                  className="w-4 h-4"
                />
                <p className="ml-2">Over ₵200</p>
              </div>
            </>
          )}

          {/* Sort By */}
          <div className="border-2 border-t-0 py-2 px-4 flex items-center justify-between cursor-pointer" onClick={() => toggleSection("sort")}>
            <p className="font-semibold">Sort By</p>
            <span>{expandedSections.sort ? <FaMinus /> : <FaPlus />}</span>
          </div>
          {expandedSections.sort && (
            <>
              <div className="border-2 border-t-0 py-2 px-4 flex items-center hover:bg-gray-50">
                <input
                  type="radio"
                  name="sort"
                  checked={sortBy === "newest"}
                  onChange={() => handleSortChange("newest")}
                  className="w-4 h-4"
                />
                <p className="ml-2">Newest</p>
              </div>
              <div className="border-2 border-t-0 py-2 px-4 flex items-center hover:bg-gray-50">
                <input
                  type="radio"
                  name="sort"
                  checked={sortBy === "price_asc"}
                  onChange={() => handleSortChange("price_asc")}
                  className="w-4 h-4"
                />
                <p className="ml-2">Price: Low to High</p>
              </div>
              <div className="border-2 border-t-0 py-2 px-4 flex items-center hover:bg-gray-50">
                <input
                  type="radio"
                  name="sort"
                  checked={sortBy === "price_desc"}
                  onChange={() => handleSortChange("price_desc")}
                  className="w-4 h-4"
                />
                <p className="ml-2">Price: High to Low</p>
              </div>
              <div className="border-2 border-t-0 py-2 px-4 flex items-center hover:bg-gray-50">
                <input
                  type="radio"
                  name="sort"
                  checked={sortBy === "rating"}
                  onChange={() => handleSortChange("rating")}
                  className="w-4 h-4"
                />
                <p className="ml-2">Highest Rated</p>
              </div>
            </>
          )}

          {/* Reset Button */}
          <button
            onClick={() => dispatch(resetFilters())}
            className="border-2 border-t-0 py-2 px-4 bg-gray-100 hover:bg-gray-200 font-semibold transition-colors"
          >
            Reset Filters
          </button>
        </div>

        <div className="border-2 border-black h-[50px] mx-2 flex items-center justify-center md:hidden">
          <p>Filter & Sort</p>
        </div>
      </div>
    </div>
  );
};

export default SideNav;