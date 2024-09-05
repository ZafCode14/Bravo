"use client"
import Link from "next/link";
import Image from "next/image";
import useWindowWidth from "@/hooks/width";
import { useTranslations } from "next-intl";

function Footer() {
  const width = useWindowWidth();
  const t = useTranslations('Footer');

  return (
    <footer className="flex flex-col items-center pb-10">
      <Image alt="logo" src={width <= 768 ? '/icons/bravo.svg' : '/icons/bravoLong.svg'} height={"2000"} width={"1000"} className="w-[90%] h-auto mt-10 mb-8 md:w-[100%] md:mt-16"/>
      <div className="flex justify-between w-full px-8">
        <div className="flex flex-col">
          <p className="text-[10px] mb-3 tracking-[3px] md:text-[14px]">{t('follow')}</p>
          <div className="flex">
            <Link href={'https://www.instagram.com/bravo.egypt?igsh=MXBvYWk4amo1cDFpZg=='} target="_blank" rel="noopener noreferrer">
              <Image alt="logo" src={'/icons/instagram.svg'} height={"100"} width={"100"} className="w-[20px] md:w-[30px] h-auto mr-2"/>
            </Link>
            <Link href={'https://www.facebook.com/share/LfxySURxZGLL3vaF/?mibextid=LQQJ4d'} target="_blank" rel="noopener noreferrer">
              <Image alt="logo" src={'/icons/facebook.svg'} height={"100"} width={"100"} className="w-[20px] md:w-[30px] h-auto mr-2"/>
            </Link>
            <Link href={'https://www.tiktok.com/@bravo.egypt?_t=8pTLY8I2cgy&_r=1'} target="_blank" rel="noopener noreferrer">
              <Image alt="logo" src={'/icons/tiktok.svg'} height={"100"} width={"100"} className="w-[20px] md:w-[30px] h-auto mr-2"/>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <p className="md:text-[14px] mb-5 hidden md:block">{t('text')}</p>
          <div className="flex flex-col md:flex-row">
            <Link href={'https://play.google.com/store/apps/details?id=com.mod.bravo '} target="_blank" rel="noopener noreferrer" className="flex justify-center w-[157px] h-[30px] bg-black mb-4 rounded-[2px] md:w-[215px] md:h-[41px] md:mr-5">
              <Image alt="logo" src={'/icons/google.png'} height={"2000"} width={"2000"} className="h-full w-auto"/>
            </Link>
            <Link href={'https://apps.apple.com/eg/app/bravo-link/id6479605225'} target="_blank" rel="noopener noreferrer" className="flex justify-center w-[157px] h-[30px] bg-black rounded-[2px] md:w-[215px] md:h-[41px]">
              <Image alt="logo" src={'/icons/apple.png'} height={"2000"} width={"2000"} className="h-full w-auto"/>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;