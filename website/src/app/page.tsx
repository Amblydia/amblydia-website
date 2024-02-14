import React from "react";
import Navbar from "./ui/nav";
import Image from 'next/image';

export default function Home() {
	return (
		<div className="h-screen grid grid-rows-[auto_1fr_auto]">
			<Navbar />
			<div className="page-content">
				<header className="flex items-center text-center relative min-h-screen">
					<Image 
						src="/bg-art.png"
						width={2500}
						height={1300}
						className="absolute top-0 right-0 left-0 bottom-0 h-full w-full object-cover blur-sm"
						alt=""
					/>
					<div className="relative w-full mx-auto my-0">
						<Image 
							src="/amblydia-logo-2.png"
							width={520}
							height={140}
							className="mx-auto my-0"
							alt="Screenshots of the dashboard project showing desktop version"
						/>
						<h1 className="mt-5  font-bold text-white text-8xl">A Brand New <br /> <span className="text-sky-500">Survival Experience</span></h1>
					</div>
				</header>
				<section className="py-16 px-4">
					<div className="text-center pb-12">
						<div className="font-bold text-4xl mb-1">Amblydia <span className="text-sky-500">News</span></div>
						<p className="text-gray-500 pb-12">Stay up to date with the latest news &amp; updates!</p>
						<div className="max-w-7xl mx-auto items-center grid gap-16 grid-cols-6 relative">
							<a href="" className="grid lg:grid-cols-3 gap-16 col-span-6">
								<div className="bg-gray-900 pb-[56%] col-span-2 relative rounded-md mb-4 bg-cover bg-center transition-transform group-hover:scale-[97.5%]">
								</div>
								<div className="text-left">
									<div className="font-bold text-white text-2xl mb-1">A Test Title</div>
									<div className="meta flex items-center text-gray-600 mb-4">
										<div className="font-bold">Event</div>
										<div className="px-2">–</div>
										<time>Feb 11th, 2024</time>
									</div>
									<p className="text-lg">A test description for testing purpose</p>
								</div>
							</a>
						</div>
						<div className="pt-12 flex justify-center">
							<a href="/blog" className="inline-flex mt-3 py-2 px-6 font-bold text-lg rounded-sm transition-colors uppercase bg-blue-500 text-white-900 hover:bg-blue-400">View All Blogs</a>
						</div>
					</div>
				</section>
				<div className="container mx-auto pb-20">
					<div className="bg-sky-500 text-black rounded-md relative">
						<div className="max-w-7xl mx-auto items-center grid gap-16 grid-cols-6 relative px-12 py-8">
							<div className="grid lg:grid-cols-3 gap-16 col-span-6">
								<div className="text-left">
									<div className="font-bold text-white text-2xl mb-4">The Amblydia Discord</div>
									<p className="text-lg text-white">Join our Discord for announcements and updates!</p>
									<div className="pt-12 flex justify-center"><a href="/blog" className="inline-flex mt-3 py-2 px-6 font-bold text-lg rounded-sm transition-colors uppercase bg-indigo-600 text-white hover:bg-indigo-400">Discord</a></div>
								</div>
								<div className="bg-gray-900 pb-[56%] col-span-2 relative rounded-md bg-cover bg-center">
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<footer className="bg-sky-600 py-12">
				<div className="container mx-auto">
					<div className="flex flex-wrap justify-between items-center gap-4">
						<div className="flex w-1/2 flex-auto items-center justify-start order-1">
							<Image 
								src="/amblydia-logo-2.png"
								width={246}
								height={110}
								className="max-w-full h-auto"
								alt=""
							/>
							<p className="text-xs mt-3 ml-8">
								©2024 Amblydia Ltd. All Rights Reserved.
								<br />
								Not an official Minecraft product.
								<br />
								Not approved by or associated with Mojang or Microsoft.
							</p>
						</div>
						<div className="flex-auto w-1/4 text-left order-2">
							<ul className="list-none pl-0 flex justify-end flex-row gap-12 text-white">
								<li><a href="" target="_blank" className="transition-opacity hover:opacity-75" data-v-6d39a79e="">
									<svg fill="currentColor" viewBox="0 0 245 240" className="w-5 h-5" data-v-6d39a79e=""><path d="M214.5,54.1c-30.1-22.6-58.8-22-58.8-22l-2.9,3.3c35.5,10.9,52.1,26.6,52.1,26.6
			c-21.7-11.9-43.1-17.8-62.9-20.1c-15.1-1.7-29.5-1.3-42.2,0.4c-1.3,0-2.3,0.2-3.6,0.4c-7.3,0.6-25.1,3.3-47.5,13.2
			c-7.7,3.6-12.3,6.1-12.3,6.1s17.4-16.5,55-27.4l-2.1-2.5c0,0-28.6-0.6-58.8,22c0,0-30.1,54.6-30.1,121.9c0,0,17.6,30.3,63.8,31.8
			c0,0,7.7-9.4,14-17.4c-26.6-7.9-36.6-24.7-36.6-24.7s2.1,1.5,5.9,3.6c0.2,0.2,0.4,0.4,0.8,0.6c0.6,0.4,1.3,0.6,1.9,1
			c5.2,2.9,10.5,5.2,15.3,7.1c8.6,3.3,18.8,6.7,30.7,9c15.7,2.9,34.1,4,54.2,0.2c9.8-1.7,19.9-4.6,30.3-9c7.3-2.7,15.5-6.7,24-12.3
			c0,0-10.5,17.1-37.8,24.9c6.3,7.9,13.8,16.9,13.8,16.9c46.2-1.5,64-31.8,64-31.8C244.6,108.7,214.5,54.1,214.5,54.1z M83.3,157
			c-11.7,0-21.4-10.5-21.4-23.3c0-12.8,9.4-23.3,21.4-23.3c12,0,21.6,10.5,21.4,23.3C104.7,146.5,95.2,157,83.3,157z M159.8,157
			c-11.7,0-21.4-10.5-21.4-23.3c0-12.8,9.4-23.3,21.4-23.3c12,0,21.4,10.5,21.4,23.3C181.2,146.5,171.8,157,159.8,157z"></path>
									</svg>
									<span className="sr-only" data-v-6d39a79e="">Discord</span>
								</a></li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
