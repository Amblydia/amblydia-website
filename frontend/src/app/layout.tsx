import type { Metadata } from "next";
import "./globals.css";
import { getStrapiMedia, getStrapiURL } from "./utils/api-helpers";
import { fetchAPI } from "./utils/fetch-api";

import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import {FALLBACK_SEO} from "@/app/utils/constants";


async function getGlobal(): Promise<any> {
	const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

	if (!token) throw new Error("The Strapi API Token environment variable is not set.");

	const path = `/global`;
	const options = { headers: { Authorization: `Bearer ${token}` } };

	const urlParamsObject = {
		populate: [
		"metadata.shareImage",
		"favicon",
		"notificationBanner.link",
		"navbar.links",
		"navbar.navbarLogo.logoImg",
		"footer.footerLogo.logoImg",
		"footer.menuLinks",
		"footer.legalLinks",
		"footer.socialLinks",
		],
	};
	return await fetchAPI(path, urlParamsObject, options);
}

export async function generateMetadata(): Promise<Metadata> {
	const meta = await getGlobal();

	if (!meta.data) return FALLBACK_SEO;

	const { metadata, favicon } = meta.data.attributes;
	const { url } = favicon.data.attributes;

	return {
		title: metadata.metaTitle,
		description: metadata.metaDescription,
		icons: {
			icon: [new URL(url, getStrapiURL())],
		},
	};
}

export default async function RootLayout({children}: {children: React.ReactNode;}) {
	const global = await getGlobal();
	// TODO: CREATE A CUSTOM ERROR PAGE
	if (!global.data) return null;
	
	const { notificationBanner, navbar, footer } = global.data.attributes;

	const navbarLogoUrl = getStrapiMedia(
		navbar.navbarLogo.logoImg.data.attributes.url
	);

	const footerLogoUrl = getStrapiMedia(
		footer.footerLogo.logoImg.data.attributes.url
	);

	return (
		<html lang="en">
			<body className="h-full bg-background text-text font-body">
				<Navbar
				links={navbar.links}
				logoUrl={navbarLogoUrl}
				logoText={navbar.navbarLogo.logoText}
				/>

				<div className="content">
					{children}
				<Footer
					logoUrl={footerLogoUrl}
					logoText={footer.footerLogo.logoText}
					menuLinks={footer.menuLinks}
					legalLinks={footer.legalLinks}
					socialLinks={footer.socialLinks}
					footertext1={footer.footertext1}
					footertext2={footer.footertext2}
					footertext3={footer.footertext3}
				/>
				</div>

				<Banner data={notificationBanner} />

				
			</body>
		</html>
	);
}
