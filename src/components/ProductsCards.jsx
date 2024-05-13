import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import { useSelector } from "react-redux";


const ProductsCards = () => {
  const searchQuery = useSelector((state) => state.search.query)
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>setProducts(json))
    .catch(error => console.error('Error fetching products:', error))
  }, [])


  const filteredProducts = products.filter((product) =>
  product.title.toLowerCase().includes(searchQuery.toLowerCase())
);

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-5 sm:px-6 sm:py-[3.9rem] lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group relative shadow-md">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="my-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700 font-medium">
                      <Link to={`/products/${product.id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.title}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.description}
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.category}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                  &#8373;{product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Pagination />
    </>
  );
};

export default ProductsCards;
