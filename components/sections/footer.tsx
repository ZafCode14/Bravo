import Link from "next/link";
import Image from "next/image";
import useWindowWidth from "@/hooks/width";

function Footer() {
  const width = useWindowWidth();

  return (
    <footer className="flex flex-col items-center pb-10">
      <Image alt="logo" src={width <= 768 ? '/icons/bravo.svg' : '/icons/bravoLong.svg'} height={"2000"} width={"1000"} className="w-[90%] h-auto mt-10 mb-8 md:w-[100%] md:mt-16"/>
      <div className="flex justify-between w-full px-8">
        <div className="flex flex-col">
          <p className="text-[10px] mb-3 tracking-[3px] md:text-[14px]">Follow Us</p>
          <div className="flex mb-2">
            <Image alt="logo" src={'/icons/instagram.svg'} height={"100"} width={"100"} className="w-[16px] h-auto mr-2"/>
            <p className="text-[10px] tracking-[3px] md:text-[12px]">Bravo@eg</p>
          </div>
          <div className="flex">
            <Image alt="logo" src={'/icons/facebook.svg'} height={"100"} width={"100"} className="w-[16px] h-auto mr-2"/>
            <p className="text-[10px] tracking-[3px] md:text-[12px]">Bravo@eg</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <p className="md:text-[14px] mb-5 hidden md:block">Download our app & enjoy the new experience</p>
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