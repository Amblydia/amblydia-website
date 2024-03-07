import { fetchAPI } from "@/app/utils/fetch-api";

export default function LayoutRoute({
  	children,
}: {
  	children: React.ReactNode;
}) {

  	return (children);
}

export async function generateStaticParams() {
	const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
	const path = `/posts`;
	const options = { headers: { Authorization: `Bearer ${token}` } };
	const articleResponse = await fetchAPI(
		path,
		{
			populate: ["slug"],
		},
		options
	);

	return articleResponse.data.map(
		(post: {
			attributes: {
				slug: string;
			};
		}) => ({ slug: post.attributes.slug})
	);
}
