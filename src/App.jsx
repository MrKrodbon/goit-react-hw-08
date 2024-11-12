import "./App.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { refreshUser } from "./redux/auth/operations";
import { redirect, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import Layout from "./components/Layout";
import PrivateRoute from "./components/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div className="container">
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route
            path="/register"
            element={<RestrictedRoute component={<RegistrationPage />} />}
          ></Route>
          <Route
            path="/login"
            element={<RestrictedRoute component={<LoginPage />} />}
          ></Route>
          <Route
            path="/contacts"
            element={<PrivateRoute component={<ContactsPage />} />}
          ></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
