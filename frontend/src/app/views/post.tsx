import { formatDate, getStrapiMedia } from '@/app/utils/api-helpers';
import { postRenderer } from '@/app/utils/post-renderer';
import Image from 'next/image';

interface Article {
    id: number;
    attributes: {
        title: string;
        description: string;
        slug: string;
        cover: {
            data: {
                attributes: {
                    url: string;
                };
            };
        };
        blocks: any[];
        publishedAt: string;
    };
}

export default function Post({ data }: { data: Article }) {
    const { title, description, publishedAt, cover} = data.attributes;
    const imageUrl = getStrapiMedia(cover.data.attributes.url);

    return (
        <article className="space-y-8 text-black">
           
            <Image
                src={imageUrl || ""}
                alt="article cover image"
                width={400}
                height={400}
                className="w-full h-full object-cover rounded-lg"
            />
            
            <div className="">
                <div className='mb-2'>
                    <h1 className='text-center text-4xl mb-2 font-bold'>{title}</h1>
                    <div className='flex items-center justify-center text-gray-600 font-bold mb-8'>
                        <div></div>
                        <time>{formatDate(publishedAt)}</time>
                    </div>
                </div>
                

                <div className='px-24 text-lg leading-7'>{data.attributes.blocks.map((section: any, index: number) => postRenderer(section, index))}</div>
            </div>
        </article>
    );
}
