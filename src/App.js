import { Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import AddAService from "./Dashboard/AddAService/AddAService";
import ClientReview from "./Dashboard/ClientReview/ClientReview";
import Dashboard from "./Dashboard/Dashboard/Dashboard";
import MakeAdmin from "./Dashboard/MakeAdmin/MakeAdmin";
import ManageAllOrder from "./Dashboard/ManageAllOrder/ManageAllOrder";
import ManageProducts from "./Dashboard/ManageProducts/ManageProducts";
import MyOrder from "./Dashboard/MyOrder/MyOrder";
import Pay from "./Dashboard/Pay/Pay";
import ExploreHome from "./Pages/Explores/ExploreHome/ExploreHome";
import Purchase from "./Pages/Explores/Purchase/Purchase";
import Home from "./Pages/Home/Home/Home";
import AdminRoute from "./Pages/Login/AdminRoute/AdminRoute";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Register from "./Pages/Login/Register/Register";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="Login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route
            path="/purchase/:exploresId"
            element={
              <PrivateRoute>
                <Purchase />
              </PrivateRoute>
            }
          />
          <Route path="exploreHome" element={<ExploreHome />} />

          <Route path="dashboard" element={<Dashboard />}>
            <Route path={`/dashboard/myOrder`} element={<MyOrder />} />
            <Route
              path={`/dashboard/clientReview`}
              element={<ClientReview />}
            />
            <Route
              path={`/dashboard/makeAdmin`}
              element={
                <AdminRoute>
                  <MakeAdmin />
                </AdminRoute>
              }
            />
            <Route path={`/dashboard/pay`} element={<Pay />} />
            <Route
              path={`/dashboard/addaservice`}
              element={
                <AdminRoute>
                  <AddAService />
                </AdminRoute>
              }
            />

            <Route
              path={`/dashboard/manageAllOrder`}
              element={
                <AdminRoute>
                  <ManageAllOrder />
                </AdminRoute>
              }
            />
            <Route
              path={`/dashboard/manageProducts`}
              element={
                <AdminRoute>
                  <ManageProducts />
                </AdminRoute>
              }
            />
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
