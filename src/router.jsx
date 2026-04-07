import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "./pages/homepage/Home.jsx";
import About from "./pages/about/About.jsx";
import Product from "./pages/product/Product.jsx";
import NotFound from "./pages/notFound/NotFound.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { getLogements } from "./scripts/logementsDatas.js";
import { productLoader } from "./loader/productLoader.jsx";
import "./index.scss";

function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        loader: getLogements,
        element: <Home />,
      },
      {
        path: "product/:id",
        loader: productLoader,
        element: <Product />,
        errorElement: <NotFound />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default AppRoutes;