import { ImGithub, ImLinkedin2, ImTwitter } from "react-icons/im";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t bg-gray-900 text-white">
            <div className="mx-auto max-w-7xl space-y-5 px-3 py-5">
                <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                    <div className="space-y-2">
                        <h3 className="text-xl font-semibold">Shadow Jobs</h3>
                        <p className="text-sm text-gray-400">
                            Connecting talents with opportunities
                        </p>
                        <div className="flex items-center gap-3">
                            <a 
                                href="https://www.linkedin.com/in/bhuvan-tenguria-71902b238/"
                                className="text-gray-400 transition-colors duration-300 hover:text-blue-500 hover:scale-110 transform"
                            >
                                <ImLinkedin2 size={19} />
                            </a>
                            <a 
                                href="https://github.com/Bhuvantenguria"
                                className="text-gray-400 transition-colors duration-300 hover:text-gray-100 hover:scale-110 transform"
                            >
                                <ImGithub size={19} />
                            </a>
                            <a 
                                href="https://twitter.com/"
                                className="text-gray-400 transition-colors duration-300 hover:text-blue-400 hover:scale-110 transform"
                            >
                                <ImTwitter size={19} />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-5 text-sm text-gray-400">
                        <Link href="/about" className="transition-colors duration-300 hover:text-white hover:underline">
                            About Us
                        </Link>
                        <Link href="/contact" className="transition-colors duration-300 hover:text-white hover:underline">
                            Contact
                        </Link>
                        <Link href="/terms" className="transition-colors duration-300 hover:text-white hover:underline">
                            Terms of Service
                        </Link>
                        <Link href="/privacy" className="transition-colors duration-300 hover:text-white hover:underline">
                            Privacy Policy
                        </Link>
                    </div>
                </div>
                <div className="text-center text-sm text-gray-400">
                    {new Date().getFullYear()} Shadow Jobs, Inc. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
