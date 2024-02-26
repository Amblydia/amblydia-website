import Hero from "../components/Hero";
import News from "../components/News";
import Discord from "../components/Discord";

export function sectionRenderer(section: any, index: number) {
    switch (section.__component) {
        case "sections.hero":
          return <Hero key={index} data={section} />;
        case "sections.news":
          return <News key={index} data={section} />;
        case "sections.discord":
          return <Discord key={index} data={section} />;
        default:
          return null;
    }
}
