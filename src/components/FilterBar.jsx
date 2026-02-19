import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { setCategory, setPriceRange, setSortBy, resetFilters } from "../redux/filterSlice";
import { FaFilter, FaTimes } from "react-icons/fa";
import { useState } from "react";

const FilterBar = () => {
  const dispatch = useDispatch();
  const { category, priceRange, sortBy } = useSelector((state) => state.filter);
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { value: "", label: "All Categories" },
    { value: "men's clothing", label: "Men's Clothing" },
    { value: "women's clothing", label: "Women's Clothing" },
    { value: "electronics", label: "Electronics" },
    { value: "jewelery", label: "Jewelry" },
  ];

  const sortOptions = [
    { value: "newest", label: "Newest First" },
    { value: "price_asc", label: "Price: Low to High" },
    { value: "price_desc", label: "Price: High to Low" },
    { value: "rating", label: "Highest Rated" },
  ];

  const priceRanges = [
    { value: [0, 1000], label: "All Prices" },
    { value: [0, 50], label: "Under ₵50" },
    { value: [50, 100], label: "₵50 - ₵100" },
    { value: [100, 200], label: "₵100 - ₵200" },
    { value: [200, 1000], label: "Over ₵200" },
  ];

  const handleReset = () => {
    dispatch(resetFilters());
  };

  const hasActiveFilters = category || priceRange[0] !== 0 || priceRange[1] !== 1000 || sortBy !== "newest";

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="px-[3%] py-4">
        {/* Mobile Filter Toggle */}
        <div className="lg:hidden mb-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            <FaFilter />
            {showFilters ? "Hide Filters" : "Show Filters"}
          </button>
        </div>

        {/* Filters */}
        <div className={`${showFilters ? "block" : "hidden"} lg:block`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => dispatch(setCategory(e.target.value))}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              >
                {categories.map((cat) => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Range Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price Range
              </label>
              <select
                value={JSON.stringify(priceRange)}
                onChange={(e) => dispatch(setPriceRange(JSON.parse(e.target.value)))}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              >
                {priceRanges.map((range) => (
                  <option key={range.label} value={JSON.stringify(range.value)}>
                    {range.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort By */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => dispatch(setSortBy(e.target.value))}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Reset Button */}
            <div className="flex items-end">
              {hasActiveFilters && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleReset}
                  className="w-full flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  <FaTimes />
                  Reset Filters
                </motion.button>
              )}
            </div>
          </div>

          {/* Active Filters Display */}
          {hasActiveFilters && (
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-sm text-gray-600">Active filters:</span>
              {category && (
                <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                  {categories.find((c) => c.value === category)?.label}
                  <button onClick={() => dispatch(setCategory(""))} className="hover:text-blue-900">
                    <FaTimes size={10} />
                  </button>
                </span>
              )}
              {(priceRange[0] !== 0 || priceRange[1] !== 1000) && (
                <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                  ₵{priceRange[0]} - ₵{priceRange[1]}
                  <button onClick={() => dispatch(setPriceRange([0, 1000]))} className="hover:text-blue-900">
                    <FaTimes size={10} />
                  </button>
                </span>
              )}
              {sortBy !== "newest" && (
                <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                  {sortOptions.find((s) => s.value === sortBy)?.label}
                  <button onClick={() => dispatch(setSortBy("newest"))} className="hover:text-blue-900">
                    <FaTimes size={10} />
                  </button>
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
