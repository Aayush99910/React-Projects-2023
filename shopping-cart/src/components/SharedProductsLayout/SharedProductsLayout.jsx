import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const SharedProductsLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default SharedProductsLayout;