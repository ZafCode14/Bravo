import { useEffect, useRef, useState } from "react";
import HowWorks from "../howWorks";
import InfoBox from "../infoBox";
import useWindowHeight from "@/hooks/height";
import useWindowWidth from "@/hooks/width";
import { useTranslations } from "next-intl";

function HowItWorks() {
  const height = useWindowHeight().scrollPixels;
  const width = useWindowWidth();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState<number>(0);
  const t = useTranslations('HowItWorks');

  useEffect(() => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const distanceFromTop = rect.top + scrollTop;
      setDistance(distanceFromTop - window.innerHeight);
    }
  }, [height]);

  const dist = distance + 200

  const m = (100 - 0) / (dist + 400 - dist);
  const x = m * (height - dist);


  return (
    <section className="relative flex flex-col items-center w-full overflow-hidden">
      <p className="my-8 font-bold md:text-[22px]">{t('title')}</p>
      <div className="flex flex-col items-center w-full mb-[30px] lg:flex-row lg:justify-center lg:my-[110px]">
        <div ref={sectionRef}></div>
        <HowWorks 
          color="bg-[#F69729]" 
          number="1" 
          text={t('step1')}
          line="flex"
          addClass={x > 14 ? "opacity-100" : "opacity-0"}
        />
        <HowWorks 
          color="bg-[#CADB4A]" 
          number="2" 
          text={t('step2')}
          line="flex"
          addClass={x > 32 ? "opacity-100" : "opacity-0"}
        />
        <HowWorks 
          color="bg-[#FD67BE]" 
          number="3" 
          text={t('step3')} 
          line="flex"
          addClass={x > 50 ? "opacity-100" : "opacity-0"}
        />
        <HowWorks 
          color="bg-[#3F86A4]" 
          number="4" 
          text={t('step4')} 
          line="flex"
          addClass={x > 67 ? "opacity-100" : "opacity-0"}
        />
        <HowWorks 
          color="bg-[#F69729]" 
          number="5" 
          text={t('step5')}
          line="hidden lg:hidden"
          addClass={x > 85 ? "opacity-100" : "opacity-0"}
        />
      </div>
      <div className="h-[580px] w-[50px] md:w-[60px] md:h-[790px] left-[15%] lg:left-0 flex flex-col lg:flex-row justify-end absolute lg:w-full lg:h-[60px] lg:top-[205px]">
        <div className="lg:h-full w-full bg-white opacity-60" style={width >= 1024 ? {
          width: 100 - x > 0 && 100 - x < 100 ? `${100 - x}%` : `${100 - x < 100 ? "0" : "100"}%`
        } : {
          height: 100 - x > 0 && 100 - x < 100 ? `${100 - x}%` : `${100 - x < 100 ? "0" : "100"}%`
        }}>
        </div>
      </div>
      <InfoBox/>
    </section>
  );
}

export default HowItWorks;