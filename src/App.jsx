import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import MainLayout from "./layouts/MainLayouts";
import Katalog from "./pages/katalog";
import Aksiya from "./pages/Aksiya";
import Kredid from "./pages/Kredid";
import Kantact from "./pages/Kantact";
import NotFaunt from "./pages/NotFaunt";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout />}>
           <Route index element={<Katalog />} />
        <Route path="/katalog" element={<Katalog />} />
        <Route path="/aksiya" element={<Aksiya />} />
        <Route path="/kredid" element={<Kredid />} />
        <Route path="/kantact" element={<Kantact />} />

        <Route path="*" element={<NotFaunt />} />
      </Route>
    )
  );
  return(
    <RouterProvider router={router}  />
  )
};

export default App;
