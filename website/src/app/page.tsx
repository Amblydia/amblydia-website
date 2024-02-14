import React from "react";
import Navbar from "./ui/nav";
import Image from 'next/image';

export default function Home() {
	return (
		<div className="h-screen grid grid-rows-[auto_1fr_auto]">
			<Navbar />
			<div className="page-content">
				<header>
					<div className="h-[300px] md:h-auto xl:h-[700px] relative justify-center items-center flex">
						<div className="m-0 flex justify-center items-center flex-col">
							<Image 
								src="/amblydia-logo-2.png"
								width={420}
								height={140}
								className=""
								alt="Screenshots of the dashboard project showing desktop version"
							/>
						</div>
					</div>
				</header>
			</div>
		</div>
	);
}
