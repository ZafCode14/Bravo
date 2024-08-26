import useWindowWidth from "@/hooks/width";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

function Hero() {
  const pathname = usePathname();
  const width = useWindowWidth();
  const t = useTranslations('Hero');

  console.log(pathname);
  return (
    <section className={`max-w-[100%] flex flex-col items-center relative ${pathname === "/ar" && "text-right"}`}>
      <Image alt="hero image" src="/images/hero.png" width={"2000"} height={"2000"} priority/>
      <div className={width > 1000 ? "absolute text-white w-[1200px] max-w-full h-full" : `w-[600px] max-w-full ${pathname === '/ar' && "flex flex-col items-end"}`}>
        <h1 className={width > 1000 ? `text-[26px] leading-tight absolute top-[200px]` :  `text-[16px] md:text-[26px] ${pathname === '/' ? "ml-8" : "mr-8"} my-3 leading-tight`}>{t('titlePart1')}<br/> {t('titlePart2')}</h1>
        <p className={width > 1000 ? "text-[22px] leading-tight absolute bottom-[70px] w-[563px] right-[10px]" : `text-[12px] md:text-[22px] md:w-[900px] md:max-w-[100%] leading-tight ${pathname === "/" ? "ml-8" : "mr-8"}  mb-3 max-w-[80%] w-[400px]`}>{t('text')}</p>
      </div>
    </section>
  );
}

export default Hero;