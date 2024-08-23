import Image from "next/image";
import useWindowWidth from "@/hooks/width";

function Video() {
  const width = useWindowWidth();
  return (
    <section className="bg-color-black relative w-full flex justify-center items-center py-10 lg:py-40 lg:overflow-hidden">
      <Image alt="textbook image" src={'/images/wigly1.svg'} height={"2000"} width={"1000"} className="absolute top-[-110px] left-0 w-[181px] h-auto max-w-full lg:w-[250px]"/>
      <Image alt="textbook image" src={'/images/wigly2.svg'} height={"2000"} width={"1000"} className="absolute bottom-[-55px] right-0 w-[166px] h-auto max-w-full lg:w-[250px]"/>
      <div className="flex z-10 items-center justify-center w-full relative">
        <div className="w-[327px] max-w-[90%] h-[192px] rounded-[10px] bg-[#D9D9D9] md:h-[350px] md:w-[540px] lg:w-[50%] lg:max-w-[618px] lg:h-[414px] lg:mr-[80px]">
        </div>
        <div className={`lg:block lg:w-[40%] hidden`}>
          <div className="flex items-center mb-5">
            <div className="bg-[#F69729] h-[10px] w-[10px] mr-2 rounded-full"></div>
            <h4 className="text-[#F69729] text-[20px] tracking-[4px]">Simple, efiecient & quick</h4>
          </div>
          <p className="text-white text-[20px] leading-tight w-[600px] max-w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    </section>
  );
}

export default Video;