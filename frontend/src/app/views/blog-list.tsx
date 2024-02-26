import Image from "next/image";
import Link from "next/link";
import { getStrapiMedia, formatDate } from "../utils/api-helpers";

interface Article {
  id: number;
  attributes: {
    title: string;
    description: string;
    slug: string;
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

export default function PostList({
  data: articles,
}: {
  data: Article[];
  children?: React.ReactNode;
}) {
  return (
      <div className="grid lg:grid-cols-2 gap-10 text-black">
        {articles.map((article) => {
          const imageUrl = getStrapiMedia(
            article.attributes.cover.data?.attributes.url
          );

          return (
            <Link
              href={`/blog/${article.attributes.slug}`}
              key={article.id}
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

				<div className="meta flex items-center font-bold mb-2">
					<div></div>
					<div className="px-2">-</div>
					<time>{formatDate(article.attributes.publishedAt)}</time>
				</div>

                <h3 className="text-xl font-bold mb-2">
                  {article.attributes.title}
                </h3>

                <p className="text-lg pr-5">{article.attributes.description}</p>
           
            </Link>
          );
        })}
      </div>
  );
}


export function OnePost({
  	data: articles
}: {
  	data: Article[];
}) {
  	return (
      	<article className="max-w-6xl mx-auto items-center">
        	{articles.map((article) => {
				const imageUrl = getStrapiMedia(article.attributes.cover.data?.attributes.url);

				return (
					<a href={`/blog/${article.attributes.slug}`} className="grid lg:grid-cols-2 gap-16 col-span-2">
						<Image
							src={imageUrl || ""}
							width={500}
							height={500}
							className="bg-gray-900 rounded-md bg-cover bg-center m-auto"
							alt=""
						/>
						<div className="text-left">
							<header>
								<div className="font-bold mb-3">Event</div>
								<h2 className="font-bold text-black text-2xl mb-1">{article.attributes.title}</h2>
							</header>
							<p className="h-auto text-lg mt-4">{article.attributes.description}</p>
							<footer className="meta flex items-center text-gray-600 mt-3">
								<time>{formatDate(article.attributes.publishedAt)}</time>
							</footer>
						</div>
					</a>	
				);
			})} 
		</article>
	);
}