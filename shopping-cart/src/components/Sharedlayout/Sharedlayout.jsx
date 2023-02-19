import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

export default function SharedLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}
