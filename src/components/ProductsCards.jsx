import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { addToCart } from "../redux/cartSlice";
import toast, { Toaster } from "react-hot-toast";
import { FaShoppingCart } from "react-icons/fa";
import Pagination from "./Pagination";

const ProductsCards = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.search.query);
  const { category, priceRange, sortBy, currentPage, itemsPerPage } = useSelector((state) => state.filter);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  // Apply filters
  let filteredProducts = products.filter((product) => {
    // Search filter
    if (searchQuery && !product.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Category filter
    if (category && product.category !== category) {
      return false;
    }
    
    // Price range filter
    if (product.price < priceRange[0] || product.price > priceRange[1]) {
      return false;
    }
    
    return true;
  });

  // Apply sorting
  filteredProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price_asc":
        return a.price - b.price;
      case "price_desc":
        return b.price - a.price;
      case "rating":
        return (b.rating?.rate || 0) - (a.rating?.rate || 0);
      case "newest":
      default:
        return b.id - a.id;
    }
  });

  // Pagination
  const totalItems = filteredProducts.length;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addToCart(product));
    toast.success(`${product.title.substring(0, 20)}... added to cart!`);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
      <Toaster position="top-right" />
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{startIndex + 1}</span> -{" "}
            <span className="font-semibold">{Math.min(endIndex, totalItems)}</span> of{" "}
            <span className="font-semibold">{totalItems}</span> products
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {paginatedProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="group relative bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <Link to={`/products/${product.id}`}>
                <div className="aspect-square w-full overflow-hidden bg-gray-100 rounded-t-xl">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-contain object-center p-4 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 pb-16">
                  <div className="mb-2">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 mb-2 group-hover:text-blue-600 transition-colors">
                    {product.title}
                  </h3>
                  <div className="flex items-center justify-between mt-3">
                    <p className="text-xl font-bold text-gray-900">
                      &#8373;{product.price}
                    </p>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                      <span className="text-sm text-gray-600">{product.rating?.rate || "4.5"}</span>
                    </div>
                  </div>
                </div>
              </Link>
              
              {/* Add to Cart Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => handleAddToCart(e, product)}
                className="absolute bottom-4 left-4 right-4 bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
              >
                <FaShoppingCart />
                Add to Cart
              </motion.button>
            </motion.div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found matching your filters.</p>
          </div>
        )}
      </div>

      {/* Pagination at Bottom */}
      {totalItems > 0 && <Pagination totalItems={totalItems} />}
    </div>
  );
};

export default ProductsCards;
