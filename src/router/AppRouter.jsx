import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import ProductsPage from "../pages/ProductsPage";
import CartPage from "../pages/CartPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import HomePage from "../pages/HomePage";
import Breadcrumbs from "../components/Breadcrumbs";


const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/" element={<App />}>
        <Route index path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Route>
    </>
  )
);

export default AppRouter;
