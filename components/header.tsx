"use client"
import useWindowWidth from "@/hooks/width";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

function Header() {
  const width = useWindowWidth();
  const router = useRouter();
  const pathname = usePathname();

  const lang = pathname === "/" ? "اللغة العربية" : "English"

  const handleLanguageChange = () => {
    if (pathname === "/") {
      router.replace("/ar");
    } else if (pathname === "/ar") {
      router.replace("/en");
    }
  };
  return (
    <header className={`w-full ${width > 1000 && "absolute top-0 z-10"} bg-color-black flex flex-col items-center justify-center`}>
      <Image 
        alt="logo" 
        src={width < 1024 ? '/icons/bravowhite.svg' : '/icons/logoWhiteLong.svg'} 
        height={"2000"} 
        width={"1000"} 
        className="w-[95%] max-w-[447px] lg:w-full lg:max-w-full h-auto mt-8"
      />
      <div className="w-[1200px] max-w-[95%] flex justify-end">
        <button onClick={handleLanguageChange} className="bg-[#CADB4A] w-[82px] h-[26px] text-white text-[12px] rounded-sm mt-2 mb-4 md:w-[100px] md:h-[31px] md:text-[15px]">{lang}</button>
      </div>
    </header>
  );
}

export default Header;