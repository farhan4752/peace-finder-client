import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import Root from "./Components/Root";
import Home from "./Components/Home";
import AuthProvider from "./Components/AuthProvider";
import Register from "./Components/Register";
import Login from "./Components/Login";
import AddTouristSpot from "./Components/AddTouristSpot";
import SpotDetails from "./Components/SpotDetails";
import AllTouristSpots from "./Components/AllTouristSpots";
import MyList from "./Components/MyList";
import Bangladesh from "./Components/Country_Section/Bangladesh";
import India from "./Components/Country_Section/India";
import Maldives from "./Components/Country_Section/Maldives";
import Nepal from "./Components/Country_Section/Nepal";
import Bhutan from "./Components/Country_Section/Bhutan";
import SriLanka from "./Components/Country_Section/Srilanka";
import PrivateRouter from "./Components/PrivateRouter";
import UpdateMySpot from "./Components/UpdateMySpot";
import Users from "./Components/User";
import Blogs from "./Components/Blogs";
import AllCountry from "./Components/Country_Section/AllCountry";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://peace-finder-server.onrender.com/spots"),
      },
      {
        path: "/allTouristSpots",
        element: <AllTouristSpots></AllTouristSpots>,
        loader: () => fetch("https://peace-finder-server.onrender.com/spots"),
      },
      {
        path: "/Bangladesh",
        element: <Bangladesh></Bangladesh>,
      },
      {
        path: "/India",
        element: <India></India>,
      },
      {
        path: "/Maldives",
        element: <Maldives></Maldives>,
      },
      {
        path: "/Nepal",
        element: <Nepal></Nepal>,
      },
      {
        path: "/Bhutan",
        element: <Bhutan></Bhutan>,
      },
      {
        path: "/SriLanka",
        element: <SriLanka></SriLanka>,
      },
      {
        path: "/myList",
        element: (
          <PrivateRouter>
            <MyList></MyList>
          </PrivateRouter>
        ),
        loader: () => fetch("https://peace-finder-server.onrender.com/spots"),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/addTouristSpot",
        element: (
          <PrivateRouter>
            <AddTouristSpot></AddTouristSpot>
          </PrivateRouter>
        ),
      },
      {
        path: "/spots/:id",
        element: (
          <PrivateRouter>
            <SpotDetails />
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`https://peace-finder-server.onrender.com/spots/${params.id}`),
      },
      {
        path: "/updateMySpot/:id",
        element: <UpdateMySpot></UpdateMySpot>,
        loader: ({ params }) =>
          fetch(`https://peace-finder-server.onrender.com/spots/${params.id}`),
      },
      {
        path: "/users",
        element: <Users></Users>,
        loader: () => fetch("https://peace-finder-server.onrender.com/user"),
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/allCountry",
        element: <AllCountry></AllCountry>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
