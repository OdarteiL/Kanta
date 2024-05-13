import { useEffect, useState } from "react";
import ProductsCards from "./ProductsCards";


const FetchComponent = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(json=>setProducts(json))
      .catch(error => console.error('Error fetching products:', error))
    }, [])

  return (
    <>
    <ProductsCards products={products} />
    </>
  )
}

export default FetchComponent