import Link from "next/link";
import Image from "next/image";
import { getStrapiMedia } from "../utils/api-helpers";
import { renderButtonStyle } from "../utils/render-button-style";

interface Button {
	id: string;
	url: string;
	text: string;
	type: string;
	newTab: boolean;
}

interface Picture {
	data: {
		id: string;
		attributes: {
			url: string;
			name: string;
			alternativeText: string;
		};
	};
}

interface Logo {
	data: {
		id: string;
		attributes: {
			url: string;
			name: string;
			alternativeText: string;
		};
	};
}

interface HeroProps {
    data: {
        id: string;
        title: string;
        description: string;
        picture: Picture;
        logo: Logo;
        buttons: Button[];
    };
}

export default function Hero({ data }: HeroProps) {
  	const imgUrl = getStrapiMedia(data.picture.data.attributes.url);
	const logoUrl = getStrapiMedia(data.logo.data.attributes.url);
  	return (
		<header className="flex justify-center min-h-[85vh] items-center text-center relative py-14">
			<Image 
				src={imgUrl || ""}
				width={2500}
				height={1300}
				className="absolute blur-sm bg-no-repeat bg-cover bg-center h-full w-full object-cover"
				alt=""
			/>
			<div className="relative w-full mx-auto my-0">
				<Image 
					src={logoUrl || ""}
					width={800}
					height={140}
					className="mx-auto my-0"
					alt="Screenshots of the dashboard project showing desktop version"
				/>
				<h1 className="my-5 font-bold text-6xl">{data.title}<br /> <span className="">{data.description}</span></h1>
				<div className="mt-10 md:flex md:justify-center md:items-center">
					{data.buttons.map((button: Button, index: number) => (
						<Link
							key={index}
							href={button.url}
							target={button.newTab ? "_blank" : "_self"}
							className={`${renderButtonStyle(button.type)} inline-flex items-center py-2 px-6 text-lg rounded-sm font-bold uppercase transition ease-in-out hover:translate-y-[-5px]`}
						>
							<span className="block">{button.text}</span>
						</Link>
            		))}
				</div>
			</div>
		</header>
  	);
}
