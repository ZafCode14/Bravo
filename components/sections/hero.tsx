import useWindowWidth from "@/hooks/width";
import Image from "next/image";

function Hero() {
  const width = useWindowWidth();
  return (
    <section className="max-w-[100%] flex flex-col items-center relative">
      <Image alt="hero image" src="/images/hero.png" width={"2000"} height={"2000"} priority/>
      <div className={width > 1000 ? "absolute text-white w-[1200px] max-w-full h-full" : "w-[600px] max-w-full"}>
        <h1 className={width > 1000 ? "text-[26px] leading-tight absolute top-[200px] left-[50px]" : "text-[16px] md:text-[26px] ml-8 my-3 leading-tight"}>More than just a scanner app.<br/> Stay efficient, connected & practical.</h1>
        <p className={width > 1000 ? "text-[22px] leading-tight absolute bottom-[70px] w-[563px] right-[10px]" : "text-[12px] md:text-[22px] md:w-[900px] md:max-w-[100%] leading-tight ml-8 mb-3 max-w-[80%] w-[400px]"}>Bravo link is an all in one free scanner app that offers you multiple other features to help you stay efficient & connected to your team. It allows you to manage your scanned notes from the bravo notebooks as well as manage all your documents & save them in one place.</p>
      </div>
    </section>
  );
}

export default Hero;