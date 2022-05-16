import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./helpers";
import {Loader} from "../components/loader"
const NotFound = lazy(() => import("../pages/notFound"))
const HomePage = lazy(() => import("../pages/home/Home"))
const RegisterPage = lazy(() => import("../pages/register/Register"))
const LoginPage = lazy(() => import("../pages/login/Login"))
const AccountPage = lazy(() => import("../pages/account/Account"))
const ProductsPage = lazy(() => import("../pages/products/Products"))
const ProductPage = lazy(() => import("../pages/product/Product"))
const CartPage = lazy(() => import("../pages/cart/Cart"))
const CreateShippingPage = lazy(() => import("../pages/shipping/CreateShipping"))
const UpdateShippingPage = lazy(() => import("../pages/shipping/UpdateShipping"))
const OrderPage = lazy(() => import("../pages/orders/Orders"))
const Layout = lazy(() => import("../pages/layout"))
const PrivateRoute = lazy(() => import("./PrivateRoute"))

export const AppRouter = () => {
  return (
      <Suspense fallback={<Loader/>}>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={routes.products} element={<ProductsPage />} />
        <Route path={`${routes.product}/:name/:id`} element={<ProductPage />} />
        <Route
          path={routes.cart}
          element={
            <PrivateRoute>
              <CartPage />
            </PrivateRoute>
          }
        />
        <Route
          path={routes.account}
          element={
            <PrivateRoute>
              <AccountPage />
            </PrivateRoute>
          }
        />
        <Route
        path={routes.orders}
        element={
          <PrivateRoute>
            <OrderPage />
          </PrivateRoute>
        }
      />
      </Route>
      <Route
        path={routes.shipping}
        element={
          <PrivateRoute>
            <CreateShippingPage />
          </PrivateRoute>
        }
      />
      <Route
        path={routes.shippingId}
        element={
          <PrivateRoute>
            <UpdateShippingPage />
          </PrivateRoute>
        }
      />
      <Route path={routes.login} element={<LoginPage />} />
      <Route path={routes.register} element={<RegisterPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
      </Suspense>
  );
};
