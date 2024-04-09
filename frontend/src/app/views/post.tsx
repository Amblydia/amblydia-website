import { formatDate, getStrapiMedia } from '@/app/utils/api-helpers';
import { postRenderer } from '@/app/utils/post-renderer';
import { renderTagStyle } from '../utils/render-tag-style';
import Image from 'next/image';

interface Post {
    id: number;
    attributes: {
        title: string;
        description: string;
        slug: string;
        tags: string;
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

export default function Post({ data }: { data: Post }) {
    const { title, tags, publishedAt, cover} = data.attributes;
    const imageUrl = getStrapiMedia(cover.data.attributes.url);
    return (
        <article className="space-y-8">
            <Image
                src={imageUrl || ""}
                alt="article cover image"
                width={1080}
                height={720}
                className="w-full h-auto rounded-lg"
            />
            {/* <div className={`bg-cover bg-center rounded-md pb-[50%]`} style={{backgroundImage: `url(${imageUrl})`}}>
            </div> */}
            
            <div className="">
                <div className='mb-2'>
                    <h1 className='text-center text-5xl mb-2 font-bold'>{title}</h1>
                    <div className='flex items-center justify-center font-bold mb-8'>
                        <div className={renderTagStyle(tags)}>{tags}</div>
                        <div className="px-2">-</div>
                        <time>{formatDate(publishedAt)}</time>
                    </div>
                </div>
                <div className='px-24 text-lg leading-7'>{data.attributes.blocks.map((section: any, index: number) => postRenderer(section, index))}</div>
            </div>
        </article>
    );
}
