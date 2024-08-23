import HowWorks from "../howWorks";
import InfoBox from "../infoBox";

function HowItWorks() {
  return (
    <section className="flex flex-col items-center w-full">
      <p className="my-8 font-bold md:text-[22px]">How it works?</p>
      <div className="flex flex-col items-center w-full lg:flex-row lg:justify-center lg:my-[110px]">
        <HowWorks color="bg-[#F69729]" number="1" text="Buy our notebook & download app." line="flex"/>
        <HowWorks color="bg-[#CADB4A]" number="2" text="Start writing notes in your notebook." line="flex"/>
        <HowWorks color="bg-[#FD67BE]" number="3" text="Scan your notes using our app." line="flex"/>
        <HowWorks color="bg-[#3F86A4]" number="4" text="Create your notebooks & organize your scanned notes!" line="flex"/>
        <HowWorks color="bg-[#F69729]" number="5" text="Share your scanned notes & flashcards with you teammates & colleagues easily." line="hidden lg:hidden"/>
      </div>
      <InfoBox/>
    </section>
  );
}

export default HowItWorks;