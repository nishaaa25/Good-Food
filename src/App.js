import React, { lazy, Suspense } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Cart from "./components/Cart";
import Card from "./components/Card";
import OrderLogo from "../src/assets/order.png";
import ErrorLogo from "../src/assets/error.png";
import "./index.css";
import { Provider } from "react-redux";
import DetailedCard from "./components/DetailedCard";
import { createBrowserRouter, Outlet } from "react-router-dom";
import AppStore from "./utils/appStore";

const Offer = lazy(() => import("./components/Offer"));
const Search = lazy(() => import("./components/Search"));

const AppLayout = () => {
  return (
    <Provider store={AppStore}>
      <div className="app font-sans">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};

const AppRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Main />,
        },
        {
          path: "/search",
          element: (
            <Suspense fallback={<h1>Loading...</h1>}>
              <Search />
            </Suspense>
          ),
        },
        {
          path: "/offer",
          element: (
            <Suspense fallback={<h1>Loading...</h1>}>
              <Offer />
            </Suspense>
          ),
        },
        {
          path: "/restaurant/:resId",
          element: <DetailedCard />,
        },
        {
          path: "/order",
          element: (
            <Card
              imgUrl={OrderLogo}
              text1="Thank you for your order!"
              text2="Your food is on its way. Relax and get ready for a delicious meal. Track your order online. Enjoy!"
              label="Back to Home"
            />
          ),
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
      errorElement: (
        <Card
          imgUrl={ErrorLogo}
          text1="Something is wrong"
          text2="Sorry we couldn't find the page you are looking for"
          label="Go to Homepage"
        />
      ),
    },
  ],
  {
    basename: "/Good-Food",
  }
);

export { AppRouter };
