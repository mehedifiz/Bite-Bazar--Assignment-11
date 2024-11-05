import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root.jsx";
import Home from "./Pages/Home.jsx";
import SingleFoodPage from "./Components/SingleFoodPage.jsx";
import Allfoods from "./Pages/Allfoods.jsx";
import AuthProvider from "./Auth/Authprovider.jsx";
import Login from "./Pages/Auth/Login.jsx";
import Authpage from "./Pages/Auth/Authpage.jsx";
import Myprofile from "./Pages/Myprofile.jsx";
import AddFoodItem from "./Pages/AddFoodItem.jsx";
import Mypostfood from "./Pages/Mypostfood.jsx";
import PrivateRoute from "./Auth/Privateroute.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Update from "./Pages/Update.jsx";
import Mycart from "./Pages/Mycart.jsx";
import Error from "./Pages/Error.jsx";
import Gallary from "./Pages/Gallary.jsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/food/:_id",
        element: (
          <PrivateRoute>
            <SingleFoodPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/allfoods",
        element: <Allfoods />,
      },
      {
        path: "/auth",
        element: <Authpage />,
      },
      {
        path: "myprofile",
        element: (
          <PrivateRoute>
            <Myprofile />
          </PrivateRoute>
        ),
      },
      {
        path: "add-food-item",
        element: (
          <PrivateRoute>
            <AddFoodItem />
          </PrivateRoute>
        ),
      },
      {
        path: "my-added-food-items",
        element: (
          <PrivateRoute>
            <Mypostfood />
          </PrivateRoute>
        ),
      },
      {
        path: "updateitem/:_id",
        loader: async ({ params }) =>
          fetch(`https://bite-bazar-server.vercel.app/food/${params._id}`),
        element: (
          <PrivateRoute>
            <Update />
          </PrivateRoute>
        ),
      },
      {
        path: "my-ordered-food-items",
        element: (
          <PrivateRoute>
            <Mycart />
          </PrivateRoute>
        ),
      },
      {
        path: "gallery",
        element: <Gallary></Gallary>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
        <ToastContainer />
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>
);
