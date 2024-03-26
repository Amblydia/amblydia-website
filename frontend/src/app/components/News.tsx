"use client";
import { useState, useEffect, useCallback } from "react";
import { fetchAPI } from "../utils/fetch-api";

import Loader from "../components/Loader";
import { OnePost } from "../views/blog-list";

interface Meta {
  pagination: {
    start: number;
    limit: number;
    total: number;
  };
}

interface NewsProps {
	data: {
        id: string;
		title: string;
		description: string;
		button: {
			id: number;
			url: string;
			newTab: boolean;
			text: string;
			type: string;
		};
	};
}

export default function News({ data }: NewsProps) {
	const [meta, setMeta] = useState<Meta | undefined>();
	const [datas, setData] = useState<any>([]);
	const [isLoading, setLoading] = useState(true);

	const fetchData = useCallback(async (start: number, limit: number) => {
		setLoading(true);
		try {
			const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
			const path = `/posts`;
			const urlParamsObject = {
				sort: { publishedAt: "desc" },
				populate: {
					cover: { fields: ["url"] },
				},
				pagination: {
					start: start,
					limit: 1,
				},
			};
			const options = { headers: { Authorization: `Bearer ${token}` } };
			const responseData = await fetchAPI(path, urlParamsObject, options);

			if (start === 0) {
				setData(responseData.data);
			} else {
				setData((prevData: any[] ) => [...prevData, ...responseData.data]);
			}

			setMeta(responseData.meta);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		fetchData(0, Number(process.env.NEXT_PUBLIC_PAGE_LIMIT));
	}, [fetchData]);

  	if (isLoading) return <Loader />;

  	return (
		<section className=" container mx-auto">
			<div className="py-16 px-4 my-16 rounded-md bg-primary/5">
				<div className="text-center mb-12">
					<h2 className="font-bold text-4xl mb-1">{data.title} News</h2>
					<p className="">{data.description}</p>
				</div>
				<OnePost data={datas} ></OnePost>
				<div className="pt-12 flex justify-center">
					<a href={data.button.url} className="inline-flex mt-3 py-2 px-6 font-bold text-lg rounded-sm uppercase bg-secondary text-text transition ease-in-out hover:translate-y-[-5px]">{data.button.text}</a>
				</div>
			</div>
		</section>
  	);
}
