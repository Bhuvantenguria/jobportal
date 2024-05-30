import {ClerkProvider} from "@clerk/nextjs";
import { Metadata } from "next";
import  AdminNavbar from "./AdminNavbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata : Metadata = {
    title :"Admin",
};

export default function Layout({children} : {children : React.ReactNode}){
    return (
        <ClerkProvider>
            <AdminNavbar />
            {children}
            <Footer/>
        </ClerkProvider>
    );
}