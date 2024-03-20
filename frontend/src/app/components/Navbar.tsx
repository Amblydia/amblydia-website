"use client";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

interface NavLink {
	id: number;
	url: string;
	newTab: boolean;
	text: string;
}

interface Button {
	id: number;
	url: string;
	text: string;
	type: string;
	newTab: boolean;
}

interface MobileNavLink extends NavLink {
  	closeMenu: () => void;
}

function NavLink({ url, text }: NavLink) {
  const path = usePathname();

	return (
		<li className="mb-4 md:mb-0 last:mr-0 mr-4 relative">
			<Link href={url} className={`flex items-center p-6 text-xl lg:text-lg lg:px-6 md:py-2 rounded-md transition-colors font-bold ${path === url && "opacity-[0.6]"} hover:opacity-[0.6] hover:transition-opacity `}>
				{text}
			</Link>
		</li>
	);
}

function Button({url, text}: Button) {
	return (
		<Link href={url} className="flex items-center p-6 text-xl lg:text-lg lg:px-4 md:py-2 rounded-sm font-bold bg-secondary text-text transition ease-in-out hover:translate-y-[-5px]">
			<span className="block">{text}</span>
		</Link>
	);
}

function MobileNavLink({ url, text, closeMenu }: MobileNavLink) {
	const path = usePathname();
	const handleClick = () => {
		closeMenu();
	};
	return (
		<a className="flex">
			<Link
				href={url}
				onClick={handleClick}
				className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-100 hover:bg-gray-900 ${
				path === url && "dark:text-violet-400 dark:border-violet-400"
				}}`}
			>
				{text}
			</Link>
		</a>
	);
}

export default function Navbar({links, logoUrl, logoText, button}: {
	links: Array<NavLink>;
	logoUrl: string | null;
	logoText: string | null;
	button: Button;
}) {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const closeMenu = () => {
		setMobileMenuOpen(false);
	};
	return (
		<header className="lg:py-4 flex items-center sticky top-0 z-10 w-full text-text bg-background border-b border-solid border-b-white/10">
			<nav className="container mx-auto">
				<div>
					{/* Mobile */}
				</div>
				<div className="flex md:items-center justify-between flex-col md:flex-row uppercase tracking-wide">
					<ul className="md:flex md:justify-center md:items-center">
						<li className="mb-4 lg:mr-12 md:mb-0 last:mr-0 relative">
							<Logo src={logoUrl} />
						</li>
						{links.map((item: NavLink) => (
								<NavLink key={item.id} {...item} />
						))}
					</ul>
					<div className="md:flex md:justify-center md:items-center">
						<Button key={button.id} {...button} />
					</div>
				</div>
			</nav>
		</header>
	);
}
