import Link from "next/link";
import Image from "next/image";

export default function Logo({
  	src,
}: {
  	src: string | null;
}) {
	return (
		<Link
			href="/"
			aria-label="Back to homepage"
			className="flex  rounded-md"
		>
			{src && <Image src={src} alt="logo" width={200} height={100} />}
		</Link>
	);
}
