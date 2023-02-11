import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function SharedLayout() {
  return (
    <>
      <Navbar />
      <h1>SharedLayout</h1>
      <Outlet />
    </>
  )
}
