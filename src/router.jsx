import Home from "./pages/homepage/Home.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import About from "./pages/about/About.jsx";
import Product from "./pages/product/Product.jsx";
import NotFound from "./pages/notFound/NotFound.jsx";
import "./index.scss";
import { getLogements } from "./scripts/logementsDatas.js";
import { createBrowserRouter, Outlet } from "react-router-dom";



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
        loader: async () => {
          return await getLogements();
        },
        element: <Home />,
      },
      {
        path: "product/:id",

        element: <Product />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "*",
        element: <NotFound />,
      }],
  }]);



export default AppRoutes;






