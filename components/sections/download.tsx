import useWindowWidth from "@/hooks/width";
import useWindowHeight from "@/hooks/height";
import Image from "next/image";
import GetApp from "../getApp";
import { useTranslations } from "next-intl";

function Download() {
  const width = useWindowWidth();
  const height = useWindowHeight().scrollPixels;
  const t = useTranslations('Download');
  return (
    <section className="bg-color-black w-full flex flex-col items-center justify-center sm:px-8 md:px-3 relative overflow-hidden md:pt-20 md:pb-40 z-20">
      <Image property="" alt="graphical image" src={'/images/drawing.svg'} height={"2000"} width={"1000"} priority className={width > 1250 ? `absolute right-0 bottom-0` : `absolute h-full w-auto md:bottom-[-20px]`} style={{
        width: width > 1250 && height < 800 ? `calc(200px + ${height / 2}px)` : "none"
      }}/>
      <Image alt="graphical image" src={'/images/drawing.svg'} height={"2000"} width={"1000"} priority className={width > 1250 ? `absolute rotate-180 left-0 top-0` : `hidden`} style={{
        width: width > 1250 && height < 800 ? `calc(200px + ${height / 2}px)` : "none"
      }}/>
      <p className="md:text-[26px] text-white mt-11 mb-2 relative">{t('text1')}</p>
      <p className="md:text-[24px] text-white mb-11 relative">{t('text2')}</p>
      <div className="flex flex-wrap w-full justify-center relative">
        <GetApp 
          title={t('forAndroid')} 
          image="/icons/google.png" 
          link="https://play.google.com/store/apps/details?id=com.mod.bravo"
        />
        <GetApp 
          title={t('forIOS')} 
          image="/icons/apple.png" 
          link="https://apps.apple.com/eg/app/bravo-link/id6479605225"
        />
      </div>
    </section>
  );
}

export default Download;