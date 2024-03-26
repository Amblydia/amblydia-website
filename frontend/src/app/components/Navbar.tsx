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
			<Link href={`${url}`} className={`flex items-center p-6 text-xl lg:text-lg lg:px-6 md:py-2 rounded-md transition-colors font-bold ${path === url && "opacity-[0.6]"} hover:opacity-[0.6] hover:transition-opacity `}>
				{text}
			</Link>
		</li>
	);
}

function Button({url, text}: Button) {
	return (
		<Link href={`${url}`} className="flex items-center p-6 text-xl lg:text-lg lg:px-4 md:py-2 rounded-sm font-bold uppercase bg-secondary text-text transition ease-in-out hover:translate-y-[-5px]">
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
				className={`flex items-center p-6 text-xl lg:text-lg lg:px-6 md:py-2 rounded-md transition-colors font-bold ${path === url && "opacity-[0.6]"} hover:opacity-[0.6] hover:transition-opacity `}
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
					<Dialog
						as="div"
						className="lg:hidden"
						open={mobileMenuOpen}
						onClose={setMobileMenuOpen}
					>
          			<div className="fixed inset-0 z-40 bg-background bg-opacity-75" />{" "}
          			{/* Overlay */}
						<Dialog.Panel className="fixed inset-y-0 rtl:left-0 ltr:right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-inset sm:ring-white/10">
							<div className="flex items-center justify-between">
								<a href="#" className="-m-1.5 p-1.5">
									{logoUrl && <img className="h-8 w-auto" src={logoUrl} alt="" />}
								</a>
								<button
									type="button"
									className="-m-2.5 rounded-md p-2.5 text-white"
									onClick={() => setMobileMenuOpen(false)}
								>
									<span className="sr-only">Close menu</span>
									<XMarkIcon className="h-6 w-6" aria-hidden="true" />
								</button>
							</div>
							<div className="mt-6 flow-root">
								<div className="-my-6 divide-y divide-gray-700">
									<div className="space-y-2 py-6">
										{links.map((item) => (
											<MobileNavLink
												key={item.id}
												closeMenu={closeMenu}
												{...item}
											/>
										))}
										<div className="md:flex md:justify-center md:items-center">
											<Button key={button.id} {...button} />
										</div>
									</div>
								</div>
							</div>
						</Dialog.Panel>
					</Dialog>
					<button
						className="p-4 lg:hidden"
						onClick={() => setMobileMenuOpen(true)}
					>
						<Bars3Icon className="h-7 w-7 text-gray-100" aria-hidden="true" />
					</button>
				</div>
				<div className="md:items-center justify-between hidden lg:flex flex-col md:flex-row uppercase tracking-wide">
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
