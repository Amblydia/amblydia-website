import Link from "next/link";
import Image from 'next/image';

export default function Navbar() {
    return (
        <header className="lg:py-6 flex items-center z-10 fixed top-0 left-0 right-0 bg-opacity-35 bg-neutral-800 ">
            <nav className="z-40 container mx-auto">
                <div>
                    {/* Mobile */}
                </div>
                <div className="flex md:items-center justify-between flex-col md:flex-row uppercase tracking-wide">
                    <ul className="md:flex md:justify-center md:items-center">
                        <li className="mb-4 lg:mr-12 md:mb-0 last:mr-0 relative">
                            <Link href={''} className="flex items-center p-6 text-xl lg:text-lg lg:px-4 md:py-2 rounded-md transition-colors font-bold text-gray-200 hover:text-gray-300">
                                <Image
                                    src="/amblydia-logo-2.png"
                                    width={140}
                                    height={60}
                                    className="hidden md:block"
                                    alt="Screenshots of the dashboard project showing desktop version"
                                />
                            </Link>
                        </li>
                        <li className="mb-4 md:mb-0 last:mr-0 relative">
                            <Link href={''} className="flex items-center p-6 text-xl lg:text-lg lg:px-6 md:py-2 rounded-md transition-colors font-bold text-gray-200 hover:text-gray-300">
                                <p>Home</p>
                            </Link>
                        </li>
                        <li className="mb-4 md:mb-0 last:mr-0 relative">
                            <Link href={''} className="flex items-center p-6 text-xl lg:text-lg lg:px-6 md:py-2 rounded-md transition-colors font-bold text-gray-200 hover:text-gray-300">
                                <p>Blog</p>
                            </Link>
                        </li>
                        <li className="mb-4 md:mb-0 last:mr-0 relative">
                            <Link href={''} className="flex items-center p-6 text-xl lg:text-lg lg:px-6 md:py-2 rounded-md transition-colors font-bold text-gray-200 hover:text-gray-300">
                                <p>Wiki</p>
                            </Link>
                        </li>
                        <li className="mb-4 md:mb-0 last:mr-0 relative">
                            <Link href={''} className="flex items-center p-6 text-xl lg:text-lg lg:px-6 md:py-2 rounded-md transition-colors font-bold text-gray-200 hover:text-gray-300">
                                <p>Store</p>
                            </Link>
                        </li>
                    </ul>
                    <div className="md:flex md:justify-center md:items-center">
                        <Link href={''} className="flex items-center p-6 text-xl lg:text-lg lg:px-4 md:py-2 rounded-sm transition-colors font-bold bg-blue-500 text-white-900 hover:bg-blue-400">
                            <span className="block">play.amblydia.com</span>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}