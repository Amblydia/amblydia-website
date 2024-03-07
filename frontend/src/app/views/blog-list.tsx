import Image from "next/image";
import Link from "next/link";
import { getStrapiMedia, formatDate } from "../utils/api-helpers";
import { renderTagStyle } from "../utils/render-tag-style";

interface Post {
	id: number;
	attributes: {
		title: string;
		description: string;
		slug: string;
		tags: string;
		createdAt: string;
		updatedAt: string;
		publishedAt: string;
		cover: {
			data: {
				attributes: {
					url: string;
				};
			};
		};
	};
}

/**
 * 
 * This is the Post List or Blog List
 * It is used to display all the blogs in a list
 * 
 */
export default function PostList({
  	data: posts,
	children
}: {
  	data: Post[];
	children: React.ReactNode;
}) {
  	return (
      	<div className="grid lg:grid-cols-2 gap-10">
        	{posts.map((post) => {
				const imageUrl = getStrapiMedia(
					post.attributes.cover.data?.attributes.url
				);

				return (
					<Link
						href={`/blog/${post.attributes.slug}`}
						key={post.id}
						className="block group"
					>
						{imageUrl && (
							<Image
								alt="presentation"
								width="1000"
								height="1000"
								className="bg-cover relative bg-center rounded-md mb-5 overflow-hidden transition-transform group-hover:scale-[97.5%] "
								src={imageUrl}
							/>
						)}

						<div className="flex items-center font-bold mb-2">
							<div className={`${renderTagStyle(post.attributes.tags)}`}>{post.attributes.tags}</div>
							<div className="px-2">-</div>
							<time>{formatDate(post.attributes.publishedAt)}</time>
						</div>

						<h3 className="text-xl font-bold mb-2">
							{post.attributes.title}
						</h3>

						<p className="text-base pr-5">{post.attributes.description}</p>
				
					</Link>
				);
        	})}
			{children && children}
      	</div>
		
  	);
}

/**
 * 
 * This is used in the News Section Component
 * It displays the latest blog post
 * 
 */
export function OnePost({data: posts}: {data: Post[];}) {
  	return (
      	<article className="max-w-6xl mx-auto items-center">
        	{posts.map((post) => {
				const imageUrl = getStrapiMedia(post.attributes.cover.data?.attributes.url);

				return (
					<a href={`/blog/${post.attributes.slug}`} className="grid lg:grid-cols-2 gap-16 col-span-2">
						<Image
							src={imageUrl || ""}
							width={500}
							height={500}
							className="rounded-md bg-cover bg-center m-auto"
							alt=""
						/>
						<div className="text-left">
							<header>
								<div className={renderTagStyle(post.attributes.tags)}>{post.attributes.tags}</div>
								<h2 className="font-bold text-2xl mb-1">{post.attributes.title}</h2>
							</header>
							<p className="h-auto text-lg mt-4">{post.attributes.description}</p>
							<footer className="meta flex items-center mt-3">
								<time>{formatDate(post.attributes.publishedAt)}</time>
							</footer>
						</div>
					</a>	
				);
			})} 
		</article>
	);
}