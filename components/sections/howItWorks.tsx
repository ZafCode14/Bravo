import { useEffect, useRef, useState } from "react";
import HowWorks from "../howWorks";
import InfoBox from "../infoBox";
import useWindowHeight from "@/hooks/height";
import useWindowWidth from "@/hooks/width";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

function HowItWorks() {
  const height = useWindowHeight().scrollPixels;
  const width = useWindowWidth();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState<number>(0);
  const t = useTranslations('HowItWorks');
  const p = usePathname();

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

  const a = p === '/' ? 14 : 85
  const b = p === '/' ? 32 : 67
  const c = p === '/' ? 50 : 50
  const d = p === '/' ? 67 : 32
  const e = p === '/' ? 85 : 14

  return (
    <section className="relative flex flex-col items-center w-full overflow-hidden">
      <p className="my-8 font-bold md:text-[22px]">{t('title')}</p>
      <div className="flex flex-col items-center w-full mb-[30px] lg:flex-row lg:justify-center lg:my-[110px]">
        <div ref={sectionRef}></div>
        <HowWorks 
          color="bg-[#F69729]" 
          number={p === '/ar' && width >= 1024 ? "5" : "1"}
          text={p === '/ar' && width >= 1024 ? t('step5') : t('step1')}
          line="flex"
          addClass={x > a ? "opacity-100" : "opacity-0"}
        />
        <HowWorks 
          color="bg-[#CADB4A]" 
          number={p === '/ar' && width >= 1024 ? "4" : "2"}
          text={p === '/ar' && width >= 1024 ? t('step4') : t('step2')}
          line="flex"
          addClass={x > b ? "opacity-100" : "opacity-0"}
        />
        <HowWorks 
          color="bg-[#FD67BE]" 
          number="3" 
          text={t('step3')} 
          line="flex"
          addClass={x > c ? "opacity-100" : "opacity-0"}
        />
        <HowWorks 
          color="bg-[#3F86A4]" 
          number={p === '/ar' && width >= 1024 ? "2" : "4"}
          text={p === '/ar' && width >= 1024 ? t('step2') : t('step4')}
          line="flex"
          addClass={x > d ? "opacity-100" : "opacity-0"}
        />
        <HowWorks 
          color="bg-[#F69729]" 
          number={p === '/ar' && width >= 1024 ? "1" : "5"}
          text={p === '/ar' && width >= 1024 ? t('step1') : t('step5')}
          line="hidden lg:hidden"
          addClass={x > e ? "opacity-100" : "opacity-0"}
        />
      </div>
      <div className={`
        absolute
        lg:left-0 lg:top-[205px] ${p === "/" ? "left-[15%]" : "right-[15%]"}
        flex flex-col justify-end lg:flex-row ${p === '/ar' && "lg:justify-start"}
        h-[580px] w-[50px] md:w-[60px] md:h-[790px] lg:w-full lg:h-[60px]
      `}>
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