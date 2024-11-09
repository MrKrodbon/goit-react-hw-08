import { Suspense } from "react";
import AppBar from "./AppBar/AppBar";

const Layout = ({ children }) => {
  console.dir(children);

  return (
    <div>
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};

export default Layout;
