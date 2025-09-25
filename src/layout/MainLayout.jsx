import { Outlet } from "react-router";
import Navbar from "../components/navbar";

export default function MainLayout() {
    return (
        <>
        <Navbar/>
        <Outlet/>
        </>
    )
}