import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refreshUser } from "./redux/auth/operations";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import Layout from "./components/Layout";
import PrivateRoute from "./components/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute";
import { selectIsRefreshing } from "./redux/auth/selectors";
import { Loader } from "./components/Loader/Loader";

function App() {
  const dispatch = useDispatch();
  const isResfreshUser = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isResfreshUser ? (
    <div>
      <p className="refresh">Please, wait. We are refreshing your data</p>
      <Loader />
    </div>
  ) : (
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
