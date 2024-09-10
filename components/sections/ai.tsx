import { useTranslations } from "next-intl";
import Image from "next/image";
import { usePathname } from "next/navigation";

function Ai() {
  const t = useTranslations('Ai');
  const p = usePathname();

  return (
    <section className={`
      relative
      flex justify-center
      w-full h-[300px] md:h-[800px] bg-black
    `}>
      <div className={`
        relative
        flex justify-center
        w-[1200px] max-w-full
      `}>
        {
          p === '/' ? 
          <h1 className="text-[#CADB4A] text-[16px] font-normal text-center mt-4 relative z-10 md:text-[30px] md:mt-10">{t('title')} <br/><b>{t('titleBold')}</b></h1> :
          <h1 className="text-white text-[16px] font-normal text-center mt-4 relative z-10 md:text-[30px] md:mt-10">{t('title1')} <br/><b className="text-[#CADB4A]">{t('title2')}</b> {t('title3')}</h1>
        }
        <div className={`
          absolute
          flex justify-center items-end
          w-[80%] h-full
        `}>
          <Image
            src={'/images/ai.png'}
            alt="background image"
            width={2000}
            height={2000}
            className="md:h-[90%] md:w-auto"
          />
        </div>
          <div className={`
            bg-[#F4FAE6] text-black
            absolute
            top-[25%] right-[5%]
            w-[120px] p-1 leading-[12px] rounded-[5px] text-[12px] text-center
            md:w-[220px] md:leading-[24px]
          `}>
            {
              p === '/' ?
              <p className="md:text-[24px]">{t('text11')} <br/> {t('text12')}</p> :
              <p className="py-2 md:text-[24px]">{t('text1')}</p>
            }
          </div>
          <div className={`
            bg-[#F4FAE6] text-black
            absolute
            bottom-[7%] right-[5%]
            w-[130px] p-1 leading-[12px] rounded-[5px] text-[12px] text-center
            md:w-[250px] md:leading-[24px]
          `}>
          {
            p === '/' ?
            <p className="md:text-[24px]">{t('text21')} <br/> {t('text22')}</p> :
            <p className="py-2 md:text-[24px]">{t('text2')}</p>
          }
        </div>
        <div className={`
          bg-[#F4FAE6] text-black
          absolute
          bottom-[30%] left-[5%]
          w-[140px] p-1 leading-[12px] rounded-[5px] text-[12px] text-center
          md:w-[280px] md:leading-[24px]
        `}>
          {
            p === '/' ?
            <p className="md:text-[24px]">{t('text31')} <br/> {t('text32')}</p> :
            <p className="py-2 md:text-[24px]">{t('text3')}</p>
          }
        </div>
      </div>
    </section>
  );
}

export default Ai;