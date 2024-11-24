import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { lazy, useEffect } from "react";
import { refreshUser } from "./redux/auth/operations";
import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import PrivateRoute from "./components/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute";
import { selectIsRefreshing } from "./redux/auth/selectors";
import { Loader } from "./components/Loader/Loader";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const RegistrationPage = lazy(() =>
  import("./pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));

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
