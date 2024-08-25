import Section from "../sections";
import useWindowHeight from "@/hooks/height";
import useWindowWidth from "@/hooks/width";
import { useEffect, useRef, useState } from 'react';
import { useTranslations } from "next-intl";

function Process() {
  const t = useTranslations('Process');
  const height = useWindowHeight().scrollPixels;
  const width = useWindowWidth();
  const sectionHeight = 800 * 5;

  const { scrollPixels } = useWindowHeight();
  const section1Ref = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState<number>(0);

  useEffect(() => {
    if (section1Ref.current) {
      const rect = section1Ref.current.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const distanceFromTop = rect.top + scrollTop;
      setDistance(distanceFromTop - window.innerHeight);
    }
  }, [scrollPixels]);

  const m = 1 / 8;
  const percent = m * (height - distance);

  return (
    <section className={`relative flex flex-col ${height >= distance + 3200 && "justify-end"}`} style={{
      height: width < 1024 ? "auto" : `${sectionHeight}px`
    }}>
        <Section 
          title={t('title1')} 
          text={t('text1')}
          image={width < 1024 ? "/images/group4.png" : "/images/group4L.png"}
          width="w-[329px] md:w-[500px] lg:w-[550px]"
          background={`bg-[#EDEDED] ${height > distance && height < distance + 3200 ? "lg:fixed bottom-0 z-20" : `${height > distance + 2400 ? "lg:hidden" : "lg:relative"}`}`}
          section={1}
          percent={percent}
        />
        <div ref={section1Ref} className="absolute top-[800px]"></div>
        <Section 
          title={t('title2')} 
          text={t('text2')}
          image="/images/photo6.png"
          width="w-[308px] md:w-[450px] lg:w-[550px]"
          background={`lg:bg-[#EDEDED] ${height > distance && height < distance + 3200 ? `${height < distance + 800 ? "lg:hidden" : "lg:fixed bottom-0 z-20"}` : "lg:hidden"}`}
          section={2}
          percent={percent}
        />
        <Section 
          title={t('title3')} 
          text={t('text3')}
          image={width < 1024 ? "/images/photo7.png" : "/images/photo7L.png"}
          width="w-[329px] md:w-[430px]"
          background={`bg-[#EDEDED] ${height > distance && height < distance + 3200 ? `${height < distance + 1600 ? "lg:hidden" : "lg:fixed bottom-0 z-20"}` : "lg:hidden"}`}
          section={3}
          percent={percent}
        />
        <Section 
          title={t('title4')} 
          text={t('text4')}
          image="/images/photo8.png"
          width="w-[219px] md:w-[350px] md:w-[450px]"
          background={`lg:bg-[#EDEDED] ${height > distance && height < distance + 3200 ? `${height < distance + 2400 ? "lg:hidden" : "lg:fixed bottom-0 z-20"}` : `relative`}`}
          section={4}
          percent={percent}
        />
    </section>
  );
}

export default Process;