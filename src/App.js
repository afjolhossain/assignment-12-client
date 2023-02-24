import { Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import AddAService from "./Dashboard/AddAService/AddAService";
import ClientReview from "./Dashboard/ClientReview/ClientReview";
import Dashboard from "./Dashboard/Dashboard/Dashboard";
import DashboardProfile from "./Dashboard/DashboardProfile/DashboardProfile";
import MakeAdmin from "./Dashboard/MakeAdmin/MakeAdmin";
import ManageAllOrder from "./Dashboard/ManageAllOrder/ManageAllOrder";
import MyOrder from "./Dashboard/MyOrder/MyOrder";
import Pay from "./Dashboard/Pay/Pay";
import ContactUs from "./Pages/ContactUs/ContactUs";
import ExploreHome from "./Pages/Explores/ExploreHome/ExploreHome";
import Purchase from "./Pages/Explores/Purchase/Purchase";
import Home from "./Pages/Home/Home/Home";
// import AdminRoute from "./Pages/Login/AdminRoute/AdminRoute";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Register from "./Pages/Login/Register/Register";

function App() {
  return (
    <div className="App ">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="Login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="contact" element={<ContactUs />} />
          <Route
            path="/purchase/:exploresId"
            element={
              <PrivateRoute>
                <Purchase />
              </PrivateRoute>
            }
          />
          <Route path="/exploreHome" element={<ExploreHome />} />

          <Route path="/dashboard" element={<Dashboard />}>
            <Route path={`/dashboard/myOrder`} element={<MyOrder />} />
            <Route
              path={`/dashboard/deshboardProfile`}
              element={<DashboardProfile />}
            />
            <Route
              path={`/dashboard/clientReview`}
              element={<ClientReview />}
            />
            <Route path={`/dashboard/makeAdmin`} element={<MakeAdmin />} />
            <Route path={`/dashboard/pay`} element={<Pay />} />
            <Route path={`/dashboard/addaservice`} element={<AddAService />} />

            <Route
              path={`/dashboard/manageAllOrder`}
              element={<ManageAllOrder />}
            />
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
