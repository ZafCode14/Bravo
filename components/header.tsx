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
      <Image alt="logo" src={'/icons/bravowhite.svg'} height={"2000"} width={"1000"} className="w-[95%] max-w-[447px] h-auto mt-8"/>
      <div className="w-[1200px] max-w-[95%] flex justify-end mt-[]">
        <button onClick={handleLanguageChange} className="bg-[#CADB4A] w-[82px] h-[26px] text-white text-[12px] rounded-sm mt-5 mb-3 md:w-[100px] md:h-[31px] md:text-[15px]">{lang}</button>
      </div>
    </header>
  );
}

export default Header;