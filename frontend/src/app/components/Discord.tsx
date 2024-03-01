
interface DiscordProps {
	data: {
        id: string;
        title: string;
        description: string;
        url: string;
	};
}

export default function Discord({ data }: DiscordProps) {
	return (
		<section className="container mx-auto pb-20">
			<div className="max-w-xl mx-auto items-center relative">
				<div className="rounded-md bg-text text-background relative px-20 py-10">
					<div className="grid grid-cols-1 items-center justify-center">
						<div className="text-center">
							<div className="font-bold text-2xl mb-4">{data.title}</div>
							<p className="text-lg">{data.description}</p>
							<div className="pt-8 flex items-center justify-center"><a href="/blog" className="inline-flex  mt-3 py-2 px-6 font-bold text-lg rounded-sm transition-colors uppercase shadow-sm shadow-gray-800 bg-blurple-500 text-white hover:shadow-gray-800 hover:shadow-sm hover:bg-blurple-600">Join Discord</a></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}