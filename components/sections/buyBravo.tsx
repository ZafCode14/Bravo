import Image from "next/image";
import useWindowWidth from "@/hooks/width";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

function BuyBravo() {
  const t = useTranslations('BuyBravo');
  const p = usePathname();
  const width = useWindowWidth();
  const [string, setString] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const strings = [t('v1'), t('v2'), t('v3')];

  useEffect(() => {
    if (subIndex === strings[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1000); // Delay before starting to delete
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % strings.length); // Move to the next string
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, 100);

    return () => clearTimeout(timeout);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subIndex, deleting]);

  useEffect(() => {
    setString(strings[index].substring(0, subIndex));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subIndex]);

  return (
    <section className="flex flex-col items-center">
      <div className="relative h-[380px] w-full md:h-[600px] lg:h-[1100px]">
        <Image alt="graphical element" src={'/images/graphicalElGreen.svg'} height={"2000"} width={"1000"} className={width >= 768 ? "md:absolute md:top-[0] md:left-0 md:h-auto md:w-[600px] lg:w-[1200px]" : "hidden"}/>
        <Image alt="textbook image" src={'/images/textbook.jpg'} height={"2000"} width={"1000"} className="absolute top-[0] right-0 w-[285px] h-auto md:w-[500px] lg:w-[800px]"/>
        <Image alt="phone image" src={p === '/' ? '/images/phone1.png' : '/images/ar_phone1.png'} height={"2000"} width={"1000"} className="
        absolute top-[80px] right-[220px] w-[133px] h-auto 
        md:w-[200px] md:top-[140px] md:right-[400px]
        lg:w-[400px] lg:right-[700px] lg:top-[200px]"/>
        <div className={`${p === '/ar' && "text-right flex-row-reverse"} w-[327px] max-w-full h-[54px] bg-[#CADB4A] flex items-center absolute top-0 md:w-[600px] md:h-[90px] lg:w-[926px] lg:h-[152px]`}>
          <p className={`${p === '/ar' ? "mr-10" : "ml-10 lg:ml-32"} md:text-[20px] text-white lg:text-[30px]`}>{t('title')} {string}</p>
          <div className={`bg-[white] w-[1px] h-[16px] ${p === '/' ? "ml-[2px]" : "mr-[2px]"} md:h-[51px] md:w-[2px]`}></div>
        </div>
      </div>
      <p className="md:text-[30px] font-bold mb-3">{t('subTitle')}</p>
      <p className="w-[310px] md:w-[1000px] max-w-[95%] text-center md:text-[22px] leading-tight mb-10">{t('text1')}</p>
      <div className="relative w-full h-[380px] md:h-[600px] overflow-hidden lg:h-[1150px]">
        <Image alt="textbook image" src={'/images/graphicalElGreen.svg'} height={"2000"} width={"1000"} className={width >= 768 ? "md:absolute md:top-[0] md:right-[-100px] md:h-auto md:w-[600px] lg:w-[1200px] lg:right-[-250px]" : "hidden"}/>
        <Image alt="textbook image" src={'/images/textbook.jpg'} height={"2000"} width={"1000"} className="absolute top-0 left-0 w-[285px] h-auto md:w-[500px] lg:w-[920px]"/>
        <Image alt="phone image" src={p === '/' ? '/images/phone2.png' : '/images/ar_phone2.png'} height={"2000"} width={"1000"} className="absolute top-[80px] left-[240px] w-[133px] h-auto md:w-[240px] md:left-[400px] md:top-[140px] lg:w-[470px] lg:top-[250px] lg:left-[750px]"/>
        <Image alt="arrow" src={'/images/curlyarrow.svg'} height={"2000"} width={"1000"} className="absolute top-[290px] left-[30px] w-[84px] h-auto md:top-[500px] md:left-[180px] lg:w-[160px] lg:top-[950px]"/>
      </div>
      <p className="text-[12px] w-[308px] max-w-full text-center md:text-[20px] md:w-[514px] lg:self-start lg:ml-[20%] lg:mb-[80px]">{t('text2')}</p>
      <div className={ width < 1024 ? "flex flex-col items-center" : "hidden"}>
        <h4 className="text-[16px] mt-10 font-bold md:text-[30px]">{t('question')}</h4>
        <p className="mb-5 md:text-[24px]">{t('text3')}</p>
      </div>
    </section>
  );
}

export default BuyBravo;