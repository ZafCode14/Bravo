"use client"
import GetApp from "@/components/getApp";
import HowWorks from "@/components/howWorks";
import InfoBox from "@/components/infoBox";
import Section from "@/components/sections";
import Image from "next/image";
import useWindowWidth from "@/hooks/width";

export default function Home() {
  const width = useWindowWidth();

  return (
    <main className="bg-color-white">
      <header className="h-[90px] w-full bg-color-black flex items-center justify-center">
        <Image alt="logo" src={'/icons/bravowhite.svg'} height={"2000"} width={"1000"} className="w-[95%] h-auto"/>
      </header>
      <Image alt="hero image" src="/images/hero.png" width={"2000"} height={"2000"} priority/>
      <h1 className="text-[16px] ml-8 my-3 leading-tight">More than just a scanner app.<br/> Stay efficient, connected & practical.</h1>
      <p className="text-[12px] leading-tight ml-8 mb-3 w-[80%]">Bravo link is an all in one free scanner app that offers you multiple other features to help you stay efficient & connected to your team. It allows you to manage your scanned notes from the bravo notebooks as well as manage all your documents & save them in one place.</p>
      <section className="bg-color-black w-full flex flex-col items-center px-3">
        <p className="text-[12px] text-white mt-11 mb-2">Download our app now!</p>
        <p className="text-[12px] text-white mb-11">It’s free!</p>
        <div className="flex flex-col w-full items-center">
          <GetApp title="for Android" image="/icons/google.svg"/>
          <GetApp title="for IOS" image="/icons/apple.svg"/>
        </div>
      </section>
      <section className="flex flex-col items-center w-full">
        <p className="my-8">How it works?</p>
        <HowWorks color="bg-[#F69729]" number="1" text="Buy our notebook & download app." line="flex"/>
        <HowWorks color="bg-[#CADB4A]" number="2" text="Start writing notes in your notebook." line="flex"/>
        <HowWorks color="bg-[#FD67BE]" number="3" text="Scan your notes using our app." line="flex"/>
        <HowWorks color="bg-[#3F86A4]" number="4" text="Create your notebooks & organize your scanned notes!" line="flex"/>
        <HowWorks color="bg-[#F69729]" number="5" text="Share your scanned notes & flashcards with you teammates & colleagues easily." line="hidden"/>
        <InfoBox/>
      </section>
      <section className="flex flex-col items-center">
        <div className="relative h-[380px] w-full">
          <Image alt="textbook image" src={'/images/textbook.jpg'} height={"2000"} width={"1000"} className="absolute top-0 right-0 w-[285px] h-auto"/>
          <Image alt="phone image" src={'/images/phone1.png'} height={"2000"} width={"1000"} className="absolute top-[80px] right-[220px] w-[133px] h-auto"/>
          <div className="w-[327px] max-w-full h-[54px] bg-[#CADB4A] flex items-center absolute">
            <p className="text-[12px] text-white ml-10">Buy our Bravo Smart Notebook to scan</p>
          </div>
        </div>
        <p className="text-[12px] font-bold mb-3">They’re the perfect pair!</p>
        <p className="w-[310px] max-w-full text-center text-[12px] leading-tight mb-10">Our Bravo smart notebook was designed to work seamlessly with our bravo link application! Allowing you to digitalize the notebook & have it not only physically but digitally on your devices.</p>
        <div className="relative w-full h-[380px] overflow-hidden">
          <Image alt="textbook image" src={'/images/textbook.jpg'} height={"2000"} width={"1000"} className="absolute top-0 left-0 w-[285px] h-auto"/>
          <Image alt="phone image" src={'/images/phone2.png'} height={"2000"} width={"1000"} className="absolute top-[80px] left-[240px] w-[133px] h-auto"/>
          <Image alt="arrow" src={'/images/curlyarrow.svg'} height={"2000"} width={"1000"} className="absolute top-[290px] left-[30px] w-[84px] h-auto"/>
        </div>
        <p className="text-[12px] w-[308px] max-w-full text-center">Camera detects our unique QR code for authentication of notebook</p>
        <h4 className="text-[16px] mt-10 font-bold">Why download Bravo Link?</h4>
        <p className="mb-5">Our main features</p>
      </section>
      <section className="bg-[#EDEDED]">
        <Section 
          title="Sync calendars with your colleagues & teammates" 
          text="Bravo Link allows you to sync calendars, share & delegate tasks with your colleagues & teammates to track each others progress & work on team projects." 
          image="/images/group4.svg"
          width="w-[329px]"
        />
      </section>
      <section>
        <Section 
          title="Scan documents, notes & flashcards" 
          text="Using advanced scanning technology, our scanner camera scan your written notes in the highest quality and allows you to not only save it as notes but also create flashcards! For ease of use, you are allowed to create digital notebooks to save & sort your scanned notes & flashcards in." 
          image="/images/photo6.png"
          width="w-[308px]"
        />
      </section>
      <section className="bg-[#EDEDED]">
        <Section 
          title="Create flashcards" 
          text="Our smart Bravo notebooks are designed to allow you to create flashcards from the notes already taken. You simply select the sentences you want to have in the flashcards , and our smart technology automatically creates the flashcard for you!" 
          image="/images/photo7.png"
          width="w-[329px]"
        />
      </section>
      <section>
        <Section 
          title="Send & receive all your files easily" 
          text="Share all your scanned notes, documents & flashcards internally with Bravo Link handle, which is a unique ID for each user." 
          image="/images/photo8.png"
          width="w-[219px]"
        />
      </section>
      <section className="bg-color-black relative h-[252px] w-full flex justify-center items-center">
        <Image alt="textbook image" src={'/images/wigly1.svg'} height={"2000"} width={"1000"} className="absolute top-[-110px] left-0 w-[181px] h-auto"/>
        <Image alt="textbook image" src={'/images/wigly2.svg'} height={"2000"} width={"1000"} className="absolute bottom-[-55px] right-0 w-[166px] h-auto"/>
        <div className="w-[327px] max-w-[90%] rounded-[10px] bg-[#D9D9D9] z-10" style={{
          height: width > 386 ? "192px" : "50vw"
        }}>
        </div>
      </section>
      <section className="h-[529px] z-10 relative bg-[#EDEDED] flex flex-col items-center">
        <p className="font-bold py-5">Buy our smart notebook to enjoy our app!</p>
        <Image alt="textbook image" src={'/images/textbooks.jpg'} height={"2000"} width={"1000"} className="w-[375px] max-w-[95%] h-auto"/>
        <button className="text-[12px] w-[156px] h-[41px] bg-[#F69729] text-white my-5">Shop now</button>
      </section>
      <footer className="flex flex-col items-center pb-10">
        <Image alt="logo" src={'/icons/bravo.svg'} height={"2000"} width={"1000"} className="w-[90%] h-auto mt-10 mb-8"/>
        <div className="flex justify-between w-full px-8">
          <div className="flex flex-col">
            <p className="text-[10px] mb-3 tracking-[3px]">Follow Us</p>
            <div className="flex mb-2">
              <Image alt="logo" src={'/icons/instagram.svg'} height={"100"} width={"100"} className="w-[16px] h-auto mr-2"/>
              <p className="text-[10px] tracking-[3px]">Bravo@eg</p>
            </div>
            <div className="flex">
              <Image alt="logo" src={'/icons/facebook.svg'} height={"100"} width={"100"} className="w-[16px] h-auto mr-2"/>
              <p className="text-[10px] tracking-[3px]">Bravo@eg</p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-center w-[157px] bg-black mb-4 rounded-[2px]">
              <Image alt="logo" src={'/icons/google.svg'} height={"2000"} width={"2000"} className="h-[27px] w-auto"/>
            </div>
            <div className="flex justify-center w-[157px] bg-black rounded-[2px]">
              <Image alt="logo" src={'/icons/apple.svg'} height={"2000"} width={"2000"} className="h-[27px] w-auto"/>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
