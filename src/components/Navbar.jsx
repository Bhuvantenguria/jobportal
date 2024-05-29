import logo from "@/assets/logo.png"
import Image from "next/image"
import Link from "next/link"
import {Button} from "./ui/button"

export default function Navbar(){
    return (
        <header className="shadow-sm">
            <nav className="m-auto flex max-w-5xl items-center justify-between px-3 py-3">
                <Link href="/" className="flex items-center gap-3" >
                    <Image src={logo} width={40} alt="Flow Jobs Logo" />
                    <span className="text-xl font-bold tracking-tight" >Shadow Jobs</span>
                </Link>
                <Button asChild >
                    <Link href="/jobs/new">Post a Job</Link>
                </Button>
            </nav>
        </header>
    );
}