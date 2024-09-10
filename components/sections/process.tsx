import Section from "../sections";
import useWindowWidth from "@/hooks/width";
import { useRef, useState } from 'react';
import { useTranslations } from "next-intl";
import Image from "next/image";
import { usePathname } from "next/navigation";

function Process() {
  const t = useTranslations('Process');
  const t1 = useTranslations('BuyBravo')
  const p = usePathname();
  const width = useWindowWidth();

  const section1Ref = useRef<HTMLDivElement>(null);
  const [sectionNumber, setSectionNumber] = useState(1);

  const handleNext = () => {
    setSectionNumber(prev => {
      const nextSection = prev === 4 ? 1 : prev + 1;
      return nextSection;
    });
  };

  const handlePrev = () => {
    setSectionNumber(prev => {
      const prevSection = prev === 1 ? 4 : prev - 1;
      return prevSection;
    });
  };

  return (
    <section className={`relative flex flex-col`} style={{
      height: width < 1024 ? "auto" : `800px`
    }}>
      <div className={ width < 1024 ? "flex flex-col items-center" : "hidden"}>
        <h4 className="text-[16px] mt-10 font-bold md:text-[30px]">{t1('question')}</h4>
        <p className="mb-5 md:text-[24px]">{t1('text3')}</p>
      </div>
        <Section 
          title={t('title1')} 
          text={t('text1')}
          image={p === '/' ? `${width < 1024 ? "/images/group4.png" : "/images/group4L.png"}` : "/images/ar_group4.png"}
          width="w-[329px] md:w-[500px] lg:w-[550px]"
          background={`bg-[#EDEDED] ${width >= 1024 && sectionNumber !== 1 && "hidden"}`}
          section={1}
        />
        <div ref={section1Ref} className="absolute top-[800px]"></div>
        <Section 
          title={t('title2')} 
          text={t('text2')}
          image={p === "/" ? "/images/photo6.png" : "/images/ar_photo6.png"}
          width="w-[308px] md:w-[450px] lg:w-[550px]"
          background={`lg:bg-[#EDEDED] ${width >= 1024 && sectionNumber !== 2 && "hidden"}`}
          section={2}
        />
        <Section 
          title={t('title3')} 
          text={t('text3')}
          image={p === "/" ? `${width < 1024 ? "/images/photo7.png" : "/images/photo7L.png"}` : "/images/ar_photo7.png"}
          width={`${p === "/" ? "w-[329px]" : "w-[270px]"} md:w-[430px]`}
          background={`bg-[#EDEDED] ${width >= 1024 && sectionNumber !== 3 && "hidden"}`}
          section={3}
        />
        <Section 
          title={t('title4')} 
          text={t('text4')}
          image={p === "/" ? "/images/photo8.png" : "/images/ar_photo8.png"}
          width="w-[219px] md:w-[350px] md:w-[450px]"
          background={`lg:bg-[#EDEDED] ${width >= 1024 && sectionNumber !== 4 && "hidden"}`}
          section={4}
        />
        <div className={`
          absolute bottom-[250px] 
          hidden self-center lg:flex justify-between
          w-[90%] mb-14 z-30
        `}>
          <button className="h-[65px] font-bold" onClick={handlePrev}>
            <Image
              src={"/icons/arrow.svg"}
              alt={"arrow"}
              width={100}
              height={100}
              className="w-full h-full"
            />
          </button>
          <button className="h-[65px]" onClick={handleNext}>
            <Image
              src={"/icons/arrow.svg"}
              alt={"arrow"}
              width={100}
              height={100}
              className="w-full h-full rotate-180"
            />
          </button>
        </div>
    </section>
  );
}

export default Process;