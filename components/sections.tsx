import Image from "next/image";
import SectionsNav from "./sectionsNav";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

interface sectionProp {
  title: string;
  text: string;
  image: string;
  width: string;
  background: string;
  section: number;
}

function Section({ title, text, image, width, background, section }: sectionProp) {
  const t = useTranslations('Process');
  const p = usePathname();

  return (
    <div className={`
    relative lg:absolute
    ${background}
    flex flex-col items-center
    w-full h-full py-5 md:py-10
    `}>
      <div className="hidden lg:flex z-20 pb-10 justify-center">
        <SectionsNav
          title={t('title1')}
          opacity={section === 1 ? "opacity-100" : "opacity-50"}
        />
        <SectionsNav
          title={t('title2')}
          opacity={section === 2 ? "opacity-100" : "opacity-50"}
        />
        <SectionsNav
          title={t('title3')}
          opacity={section === 3 ? "opacity-100" : "opacity-50"}
        />
        <SectionsNav
          title={t('title4')}
          opacity={section === 4 ? "opacity-100" : "opacity-50"}
        />
        <SectionsNav
          title={t('title5')}
          opacity={section === 5 ? "opacity-100" : "opacity-50"}
        />
      </div>
      <Image alt="graphical image" src={'/images/graphicalEl.svg'} height={"2000"} width={"1000"} className="absolute w-full md:h-full h-auto"/>
      <div className={`
        relative
        flex flex-col items-center xl:flex-row ${section % 2 === 0 && "xl:flex-row-reverse"}
        h-full z-20
      `}>
        <div className={`flex flex-col items-center xl:relative ${p === "/" ? "xl:items-start" : "xl:items-end"} ${section === 1 && "top-[-120px] right-[20px]"} ${section === 2 && "top-[-100px]"} ${section === 3 && "right-[40px] top-[-100px]"} ${section === 4 && "left-[40px] top-[-70px]"}`}>
          <p className={`font-bold md:text-[20px]`}>{title}</p>
          <p className={`text-[10px] w-[329px] max-w-full text-center my-5 md:text-[16px] md:w-[600px] ${p === "/ar" ? "xl:text-right" : "xl:text-left"}`}>{text}</p>
        </div>
        <Image alt="phone image" src={image} height={"2000"} width={"2000"} priority className={`${width} h-auto z-10`}/>
      </div>
    </div>
  );
}

export default Section;