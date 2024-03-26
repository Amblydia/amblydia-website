"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "./Logo";
import { CgWebsite } from "react-icons/cg";
import { FaDiscord } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";
import Image from "next/image";

interface FooterLink {
  id: number;
  url: string;
  newTab: boolean;
  text: string;
  social?: string;
}

function FooterLink({ url, text }: FooterLink) {
  const path = usePathname();
  return (
    <li className="flex">
      <Link
        href={url}
        className={`hover:dark:text-violet-400 ${
          path === url && "dark:text-violet-400 dark:border-violet-400"
        }}`}
      >
        {text}
      </Link>
    </li>
  );
}

function RenderSocialIcon({ social }: { social: string | undefined }) {
  switch (social) {
    case "WEBSITE":
      return <CgWebsite />;
    case "TWITTER":
      return <AiFillTwitterCircle />;
    case "YOUTUBE":
      return <AiFillYoutube />;
    case "DISCORD":
      return <FaDiscord />;
    default:
      return null;
  }
}

export default function Footer({
  logoUrl,
  logoText,
  menuLinks,
  legalLinks,
  socialLinks,
  footertext1,
  footertext2,
  footertext3
}: {
  logoUrl: string | null;
  logoText: string | null;
  menuLinks: Array<FooterLink>;
  legalLinks: Array<FooterLink>;
  socialLinks: Array<FooterLink>;
  footertext1: string | null;
  footertext2: string | null;
  footertext3: string | null;
}) {

  return (
    <footer className="container mx-auto">
		<div className="bg-text/5 text-text mb-10 rounded-md px-10 py-12">
			<div className="flex flex-wrap justify-between items-center gap-4">
				<div className="flex w-1/2 flex-auto items-center justify-start order-1">
					<Logo src={logoUrl} />
					<p className="text-s mt-3 ml-8">
						{footertext1}
						<br />
						{footertext2}
						<br />
						{footertext3}
					</p>
				</div>
				<div className="flex-auto w-1/4 text-left order-2">
					<ul className="list-none pl-0 flex justify-end flex-row gap-12">
						{socialLinks.map((link: FooterLink) => {
							return (
								<a
									key={link.id}
									rel="noopener noreferrer"
									href={link.url}
									title={link.text}
									target={link.newTab ? "_blank" : "_self"}
									className="transition-opacity hover:text-white"
								>
									<RenderSocialIcon social={link.social} />
								</a>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
  	</footer>
  );
}
