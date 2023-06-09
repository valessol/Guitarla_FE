import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <main className="container mx-auto mt-5 md:mt-20 p-5 flex-col md:flex md:justify-center">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default Layout;
