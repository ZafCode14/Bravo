import Image from "next/image";
import useWindowHeight from "@/hooks/height";
import SectionsNav from "./sectionsNav";

interface sectionProp {
  title: string;
  text: string;
  image: string;
  width: string;
  background: string;
  section: number;
  percent: number;
}

function Section({ title, text, image, width, background, section, percent }: sectionProp) {
  const height = useWindowHeight().scrollPixels;

  return (
    <div className={`flex flex-col w-full items-center py-5 md:py-10 relative lg:h-[800px] ${background}`}>
      <div className="hidden lg:flex z-20 pb-10 justify-center">
        <SectionsNav
          title="Sync calendars with your colleagues & teammates"
          opacity={section === 1 ? "opacity-100" : "opacity-50"}
          percent={percent}
          section={section}
        />
        <SectionsNav
          title="Scan documents, notes & flashcards"
          opacity={section === 2 ? "opacity-100" : "opacity-50"}
          percent={percent - 100}
          section={section}
        />
        <SectionsNav
          title="Create flashcards"
          opacity={section === 3 ? "opacity-100" : "opacity-50"}
          percent={percent - 200}
          section={section}
        />
        <SectionsNav
          title="Send & receive all your files easily"
          opacity={section === 4 ? "opacity-100" : "opacity-50"}
          percent={percent - 300}
          section={section}
        />
      </div>
      <Image alt="graphical image" src={'/images/graphicalEl.svg'} height={"2000"} width={"1000"} className="absolute w-full md:h-full h-auto"/>
      <div className={`flex flex-col items-center xl:flex-row ${section % 2 === 0 && "xl:flex-row-reverse"} h-full z-20 relative`}>
        <div className={`flex flex-col items-center xl:relative xl:items-start ${section === 1 && "top-[-120px] right-[20px]"} ${section === 2 && "top-[-100px]"} ${section === 3 && "right-[40px] top-[-100px]"} ${section === 4 && "left-[40px] top-[-70px]"}`}>
          <p className="font-bold md:text-[20px]">{title}</p>
          <p className="text-[10px] w-[329px] max-w-full text-center my-5 md:text-[16px] md:w-[600px] xl:text-left">{text}</p>
        </div>
        <Image alt="phone image" src={image} height={"2000"} width={"2000"} priority className={`${width} h-auto z-10`}/>
      </div>
    </div>
  );
}

export default Section;