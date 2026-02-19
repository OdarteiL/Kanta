import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { StarIcon } from "@heroicons/react/20/solid";
import { addToCart } from "../redux/cartSlice";
import toast, { Toaster } from "react-hot-toast";

export default function ProductDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setLoading(false);
      });
  }, [id]);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch(addToCart(product));
    }
    toast.success(`Added ${quantity} item(s) to cart!`);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">Product not found</p>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <Toaster position="top-right" />
      <div className="pt-6 pb-16 px-4 sm:px-6 lg:px-8">
        <nav className="mb-8">
          <Link to="/products" className="text-blue-600 hover:text-blue-800 font-medium">
            ← Back to Products
          </Link>
        </nav>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-100 rounded-2xl p-8 flex items-center justify-center"
          >
            <img
              src={product.image}
              alt={product.title}
              className="max-h-[500px] object-contain"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <div className="mb-4">
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                {product.category}
              </span>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.title}</h1>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating?.rate || 4)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-600">
                {product.rating?.rate || "4.5"} ({product.rating?.count || "120"} reviews)
              </span>
            </div>

            <p className="text-4xl font-bold text-gray-900 mb-6">
              &#8373;{product.price}
            </p>

            <p className="text-gray-700 mb-8 leading-relaxed">{product.description}</p>

            <div className="flex items-center gap-4 mb-8">
              <label className="font-semibold text-gray-900">Quantity:</label>
              <div className="flex items-center border-2 border-gray-300 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-gray-100 transition-colors"
                >
                  -
                </button>
                <span className="px-6 py-2 font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-gray-100 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleAddToCart}
              className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg"
            >
              Add to Cart
            </motion.button>

            <div className="mt-8 border-t pt-8">
              <h3 className="font-bold text-lg mb-4">Product Details</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Free shipping on orders over &#8373;100</li>
                <li>• 30-day return policy</li>
                <li>• Authentic products guaranteed</li>
                <li>• Secure payment processing</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
