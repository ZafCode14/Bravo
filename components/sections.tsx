import Image from "next/image";
import useWindowHeight from "@/hooks/height";

interface sectionProp {
  title: string;
  text: string;
  image: string;
  width: string;
  background: string;
}

function Section({ title, text, image, width, background }: sectionProp) {
  const height = useWindowHeight().scrollPixels;

  return (
    <div className={`flex flex-col w-full items-center py-5 md:py-20 relative lg:h-[700px] lg: justify-center ${background}`}>
      <Image alt="graphical image" src={'/images/graphicalEl.svg'} height={"2000"} width={"1000"} className="absolute h-[360px] md:h-full w-auto"/>
      <p className="font-bold md:text-[24px]">{title}</p>
      <p className="text-[10px] w-[329px] max-w-full text-center my-5 md:text-[16px] md:w-[600px]">{text}</p>
      <Image alt="phone image" src={image} height={"2000"} width={"2000"} priority className={`${width} h-auto z-10`}/>
    </div>
  );
}

export default Section;