import Image from "next/image";
import useWindowWidth from "@/hooks/width";
import { useTranslations } from "next-intl";

function Notebooks() {
  const width = useWindowWidth();
  const t = useTranslations('Textbooks')

  return (
    <section className="z-10 relative bg-[#EDEDED] flex flex-col items-center px-5">
      <p className="font-bold py-5 md:text-[26px] lg:my-10">{t('title')}</p>

      <div className={`
        bg-[white] w-[1400px] max-w-full flex flex-wrap justify-center py-10
      `}>
        <Image 
          alt="textbook image" 
          src={'/images/textbook1.png'} 
          height={"2000"} 
          width={"1000"} 
          className="h-full w-[48%] sm:w-[250px] md:w-[320px] lg:w-[23%] max-w-full object-contain py-5"
        />
        <Image 
          alt="textbook image" 
          src={'/images/textbook2.png'} 
          height={"2000"} 
          width={"1000"} 
          className="h-full w-[48%] sm:w-[250px] md:w-[320px] lg:w-[23%] max-w-full object-contain mx-[2%] py-5"
        />
        <Image 
          alt="textbook image" 
          src={'/images/textbook3.png'} 
          height={"2000"} 
          width={"1000"} 
          className="h-full w-[48%] sm:w-[250px] md:w-[320px] lg:w-[23%] max-w-full object-contain py-5"
        />
        <Image 
          alt="textbook image" 
          src={'/images/textbook4.png'} 
          height={"2000"} 
          width={"1000"} 
          className="h-full w-[48%] sm:w-[250px] md:w-[320px] lg:w-[23%] max-w-full object-contain py-5 ml-[2%]"
        />
      </div>

      <button className="text-[12px] w-[156px] h-[41px] bg-[#F69729] text-white my-5 md:w-[250px] md:h-[65px] md:text-[20px] lg:my-12">{t('button')}</button>
    </section>
  );
}

export default Notebooks;