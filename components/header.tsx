"use client"
import useWindowWidth from "@/hooks/width";
import Image from "next/image";

function Header() {
  const width = useWindowWidth();
  return (
    <header className={`h-[90px] w-full ${width > 1000 && "absolute top-0 z-10"} bg-color-black flex items-center justify-center`}>
      <Image alt="logo" src={'/icons/bravowhite.svg'} height={"2000"} width={"1000"} className="w-[95%] max-w-[447px] h-auto"/>
    </header>
  );
}

export default Header;