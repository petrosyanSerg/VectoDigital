import React, {Suspense, lazy} from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "src/layout";
import {Loading} from "src/components";

const HomePage = lazy(() => import("src/pages/HomePage"));
const NotFoundPage = lazy(() => import("src/pages/NotFound"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {index: true, element: <HomePage/>},
      
      {path: "*", element: <NotFoundPage/>}
    ]
  },
]);

export default function AppRouter() {
  return (
    <Suspense fallback={<Loading/>}>
      <RouterProvider router={router}/>
    </Suspense>
  );
}
