import { usePathname } from "next/navigation";

interface howProp {
  number: string;
  text: string;
  color: string;
  line: string;
  addClass: string;
}

function HowWorks({ number, text, color, line, addClass }: howProp) {
  const p = usePathname();

  return (
    <div className={`lg:ml-0 max-w-[80vw] ${p === '/' ? "self-start ml-[15%]" : "self-end text-right mr-[15%] lg:mr-0"}`}>
      <div className={`flex flex-col ${p === "/ar" && "items-end"} lg:flex-row lg:items-center lg:h-[54px]`}>
        <div className={`flex ${p === '/ar' && "flex-row-reverse"} items-center relative lg:justify-center`}>
          <div className={`min-w-[36px] md:min-w-[54px] min-h-[36px] md:min-h-[54px] ${color} rounded-full flex items-center justify-center`}>
            <p className="text-white md:text-[16px]">{number}</p>
          </div>
          <div className={`lg:absolute ${Number(number) % 2 != 0 ? "lg:top-[60px]" : "lg:bottom-[60px]"} ${Number(number) === 3 && `${p === "/" ? "lg:ml-[50px]" : "lg:mr-[50px]"}`}`}>
            <p className={`md:text-[16px] ml-7 h-[36px] w-[230px] lg:w-[300px] lg:text-center flex ${p == '/ar' && "justify-end pr-4"} items-center leading-tight ${addClass}`} style={{
              transition: ".4s ease"
            }}>{text}</p>
          </div>
        </div>
        <div className={`w-[36px] md:w-[54px] lg:w-[110px] xl:w-[180px] 2xl:w-[240px] h-[64px] lg:h-[54px] md:h-[90px] ${line} justify-center lg:flex lg:items-center`}>
          <div className={`w-[1px] h-full lg:h-[1px] lg:w-full ${color}`}></div>
        </div>
      </div>
    </div>
  );
}

export default HowWorks;