import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg shadow-sm">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

                {/* Left Nav */}
                <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
                    <li>
                        <Link
                            href="/"
                            className="transition hover:text-cyan-500"
                        >
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/destinations"
                            className="transition hover:text-cyan-500"
                        >
                            Destinations
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/my-bookings"
                            className="transition hover:text-cyan-500"
                        >
                            My Bookings
                        </Link>
                    </li>
                </ul>

                {/* Logo */}
                <div className="flex items-center justify-center">
                    <Link href="/">
                        <Image
                            src="/assets/Wanderlast.png"
                            alt="Logo"
                            className='w-auto h-auto'
                            width={100}
                            height={100}
                            loading="eager"
                        />
                    </Link>
                </div>

                {/* Right Nav */}
                <ul className="flex items-center gap-3">
                    <li>
                        <Link
                            href="/profile"
                            className=" px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
                        >
                            Profile
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/login"
                            className=" border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
                        >
                            Login
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/signup"
                            className=" bg-cyan-500 px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700 hover:shadow-lg"
                        >
                            Sign Up
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
