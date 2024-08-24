import { useEffect } from "react";
import HowWorks from "../howWorks";
import InfoBox from "../infoBox";
import useWindowHeight from "@/hooks/height";

function HowItWorks() {
  const height = useWindowHeight().scrollPixels;

  useEffect(() => {
    console.log(height);
  }, [height]);

  const m = (100 - 0) / (1400 - 900);
  const x = m * (height - 900);


  return (
    <section className="relative flex flex-col items-center w-full">
      <p className="my-8 font-bold md:text-[22px]">How it works?</p>
      <div className="flex flex-col items-center w-full lg:flex-row lg:justify-center lg:my-[110px]">
        <HowWorks 
          color="bg-[#F69729]" 
          number="1" 
          text="Buy our notebook & download app." 
          line="flex"
          addClass={x > 14 ? "lg:opacity-100" : "lg:opacity-0"}
        />
        <HowWorks 
          color="bg-[#CADB4A]" 
          number="2" 
          text="Start writing notes in your notebook." 
          line="flex"
          addClass={x > 32 ? "lg:opacity-100" : "lg:opacity-0"}
        />
        <HowWorks 
          color="bg-[#FD67BE]" 
          number="3" 
          text="Scan your notes using our app." 
          line="flex"
          addClass={x > 50 ? "lg:opacity-100" : "lg:opacity-0"}
        />
        <HowWorks 
          color="bg-[#3F86A4]" 
          number="4" 
          text="Create your notebooks & organize your scanned notes!" 
          line="flex"
          addClass={x > 67 ? "lg:opacity-100" : "lg:opacity-0"}
        />
        <HowWorks 
          color="bg-[#F69729]" 
          number="5" 
          text="Share your scanned notes & flashcards with you teammates & colleagues easily." 
          line="hidden lg:hidden"
          addClass={x > 85 ? "lg:opacity-100" : "lg:opacity-0"}
        />
      </div>
      <div className="hidden lg:flex justify-end absolute w-full h-[60px] top-[205px]">
        <div className="h-full bg-white opacity-60" style={{
          width: 100 - x > 0 && 100 - x < 100 ? `${100 - x}%` : `${100 - x < 100 ? "0" : "100"}%`
        }}>
        </div>
      </div>
      <InfoBox/>
    </section>
  );
}

export default HowItWorks;