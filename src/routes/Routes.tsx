import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Test from "../Test";

export const router = createBrowserRouter([
  {
    id: "root",
    // errorElement: <Error />,
    element: <Layout />,
    children: [
      { path: "/", element:  <Test/>},
    ],
  },
]);