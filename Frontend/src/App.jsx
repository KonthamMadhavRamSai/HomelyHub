import "./App.css";
import Main from "./components/home/Main";
import PropertyList from "./components/home/PropertyList";
import PropertyListing from "./components/propertyListing/PropertyListing";
import Login from "./components/user/Login";
import Signup from "./components/user/Signup";
import Profile from "./components/user/Profile";
import EditProfile from "./components/user/EditProfile";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { userActions } from "./store/User/user-slice";
import { currentUser } from "./store/User/user-action";

import BookingDetails from "./components/myBookings/BookingDetails";
import MyBookings from "./components/myBookings/MyBookings";
import Payment from "./components/payment/Payment";
import NotFound from "./components/NotFound";

import Accomodation from "./components/accomodation/Accomodation";
import AccomodationForm from "./components/accomodation/AccomodationForm";

import { Navigate } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// RequireAuth component used in route elements. It checks the Redux store at
// render time and either renders the requested element or redirects to
// /login when no authenticated user is present.
const RequireAuth = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  if (!user) return <Navigate to="/login" />;
  return children;
};

// Create the router once with the future flags enabled to opt-in early to
// v7 behaviors. We will define simple route elements; where auth is required
// we use inline Navigate guards instead of computing at creation time.
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Main />,
      children: [
        { index: true, element: <PropertyList /> },
        { path: "propertylist/:id", element: <PropertyListing /> },

        // user routes
        { path: "login", element: <Login /> },
        { path: "signup", element: <Signup /> },
        { path: "profile", element: <Profile /> },
        {
          path: "editprofile",
          element: <RequireAuth>{<EditProfile />}</RequireAuth>,
        },

        // Booking routes
        {
          path: "user/mybookings",
          element: <RequireAuth>{<MyBookings />}</RequireAuth>,
        },
        {
          path: "user/mybookings/:bookingId",
          element: <RequireAuth>{<BookingDetails />}</RequireAuth>,
        },

        // Payment route
        {
          path: "payment/:propertyId",
          element: <RequireAuth>{<Payment />}</RequireAuth>,
        },

        // Accommodation routes
        {
          path: "accomodation",
          element: <RequireAuth>{<Accomodation />}</RequireAuth>,
        },
        {
          path: "accomodationform",
          element: <RequireAuth>{<AccomodationForm />}</RequireAuth>,
        },

        // 404
        { path: "*", element: <NotFound /> },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    },
  }
);

function App() {
  const dispatch = useDispatch();
  const { errors, user } = useSelector((state) => state.user);
  useEffect(() => {
    if (errors) {
      dispatch(currentUser());
    }
  }, [dispatch]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
