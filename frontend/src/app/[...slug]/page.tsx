import {sectionRenderer} from "@/app/utils/section-renderer";
import {Metadata} from "next";
import {getPageBySlug} from "@/app/utils/get-page-by-slug";
import {FALLBACK_SEO} from "@/app/utils/constants";

type Props = {
    params: {
        slug: string
    }
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
    const page = await getPageBySlug(params.slug);
    if (!page.data) {
        return FALLBACK_SEO;
    } else {
        const metadata = page.data[0].attributes?.metadata; //TODO fix this, its a backend error dealing with populate

        return {
            title: page.data[0].attributes?.heading,
            description: page.data[0].attributes?.description
        }
    }
}

export default async function PageRoute({params}: Props) {
    const page = await getPageBySlug(params.slug);
    if (page.data.length === 0) return null;
    const contentSections = page.data[0].attributes.contentSections;
    return contentSections.map((section: any, index: number) => sectionRenderer(section, index));
}
