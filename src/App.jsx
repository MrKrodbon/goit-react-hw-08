import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectIsRefreshing } from "./redux/auth/selectors";
import { apiRefreshUser } from "./redux/auth/operations";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import Layout from "./components/Layout";

function App() {
  const dispatch = useDispatch();
  // const isRefreshing = useSelector(selectIsRefreshing);

  // useEffect(() => {
  //   dispatch(apiRefreshUser());
  // }, [dispatch]);

  return (
    <div className="container">
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/register" element={<RegistrationPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/contacts" element={<ContactsPage />}></Route>

          {/* <ContactForm />
        <SearchBox />
        <ContactList /> */}
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
