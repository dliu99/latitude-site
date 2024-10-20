import * as React from "react";
import './index.css'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Outlet } from "react-router-dom";

// there's probably a better way to do this
import Home from './routes/Home.tsx'
import Navbar from './components/Navbar.tsx'
import Footer from './components/Footer.tsx'
import ErrorPage from "./error-page.tsx"
import ProductPage from "./routes/ProductPage.tsx"
import Cart from "./routes/Cart.tsx"
import Login from "./routes/Login.tsx"
import Register from "./routes/Register.tsx"
import Products from "./routes/Products.tsx"
import SubscriptionPage from "./routes/Subscriptions.tsx"
import Membership from "./routes/membership.tsx";
import Account from "./routes/account.tsx";
import Orders from "./routes/Orders.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} />
      <Route path="products" element={<Products />} />
      <Route path="products/:productId" element={<ProductPage/>} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="cart" element={<Cart />} />
      <Route path="subscriptions" element={<SubscriptionPage/>}/>
      <Route path="membership" element={<Membership/>}/>
      <Route path="account" element={<Account/>}/>
      <Route path="orders" element={<Orders/>}/>
    </Route>
  )
);

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
