import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DetailFlashSell from "./News/page/DetailFlashSell";
import DetailHotSell from "./News/page/DetailHotSell";
import Home from "./News/page/Homepage";
import DetailCar from "./News/page/DetailCar";
import Bmw from "./News/Component Home/CardProduk/CardBmw";
import Honda from "./News/Component Home/CardProduk/CardHonda";
import Ferrari from "./News/Component Home/CardProduk/CardFerrari";
import Toyota from "./News/Component Home/CardProduk/CardToyota";
import Mazda from "./News/Component Home/CardProduk/CardMazda";
import Cart from "./News/Component Cart/Cart";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/FlashSell",
    element: <DetailFlashSell />,
  },
  {
    path: "/HotSell",
    element: <DetailHotSell />,
  },
  {
    path: "/DetailCar",
    element: <DetailCar />,
  },
  {
    path: "/DetailBmw",
    element: <Bmw />,
  },
  {
    path: "/DetailHonda",
    element: <Honda />,
  },
  {
    path: "/DetailFerrari",
    element: <Ferrari />,
  },
  {
    path: "/DetailToyota",
    element: <Toyota/>
  },
  {
    path: "/DetailMazda",
    element: <Mazda/>
  },
  {
    path: "/Cart",
    element: <Cart/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
