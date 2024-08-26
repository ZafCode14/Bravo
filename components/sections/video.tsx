import Image from "next/image";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

function Video() {
  const t = useTranslations('Video');
  const p = usePathname();

  return (
    <section className={`bg-color-black relative w-full flex justify-center items-center py-10 lg:py-40 lg:overflow-hidden ${p === '/ar' && "text-right"}`}>
      <Image alt="textbook image" src={'/images/wigly1.svg'} height={"2000"} width={"1000"} className="absolute top-[-110px] left-0 w-[181px] h-auto max-w-full lg:w-[250px]"/>
      <Image alt="textbook image" src={'/images/wigly2.svg'} height={"2000"} width={"1000"} className="absolute bottom-[-55px] right-0 w-[166px] h-auto max-w-full lg:w-[250px]"/>
      <div className="flex z-10 items-center justify-center w-full relative">
        <div className="w-[327px] max-w-[90%] h-[192px] rounded-[10px] bg-[#D9D9D9] md:h-[350px] md:w-[540px] lg:w-[50%] lg:max-w-[618px] lg:h-[414px] lg:mr-[80px]">
        </div>
        <div className={`lg:flex lg:w-[40%] hidden flex-col ${p === '/ar' && "items-end"}`}>
          <div className={`flex items-center mb-5 ${p === '/ar' && "flex-row-reverse"}`}>
            <div className="bg-[#F69729] h-[10px] w-[10px] mx-2 rounded-full"></div>
            <h4 className={`text-[#F69729] text-[20px] ${p === '/' && "tracking-[4px]"}`}>{t('title')}</h4>
          </div>
          <p className="text-white text-[20px] leading-tight w-[600px] max-w-full">{t('text')}</p>
        </div>
      </div>
    </section>
  );
}

export default Video;