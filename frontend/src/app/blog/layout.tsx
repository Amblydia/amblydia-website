import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "Blogs - Amblydia Network",
	};
}

export default function layout({children} : {children: React.ReactNode}) {
  return (
    <section className="container mx-auto my-16">{children}</section>
  )
}
