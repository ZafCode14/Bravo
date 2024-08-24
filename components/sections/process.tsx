import Section from "../sections";
import useWindowHeight from "@/hooks/height";
import useWindowWidth from "@/hooks/width";
import { useEffect, useRef, useState } from 'react';

function Process() {
  const height = useWindowHeight().scrollPixels;
  const width = useWindowWidth();
  const sectionHeight = 800 * 5;

  const section1Ref = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState<number>(0);
  const { scrollPixels } = useWindowHeight();

  useEffect(() => {
    if (section1Ref.current) {
      const rect = section1Ref.current.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const distanceFromTop = rect.top + scrollTop;
      setDistance(distanceFromTop - window.innerHeight);
    }
  }, [scrollPixels]);

  const m = 1 / 8;
  const percent = m * (height - distance);

  return (
    <section className={`relative flex flex-col ${height >= distance + 3200 && "justify-end"}`} style={{
      height: width < 1024 ? "auto" : `${sectionHeight}px`
    }}>
        <Section 
          title="Sync calendars with your colleagues & teammates" 
          text="Bravo Link allows you to sync calendars, share & delegate tasks with your colleagues & teammates to track each others progress & work on team projects." 
          image={width < 1024 ? "/images/group4.png" : "/images/group4L.png"}
          width="w-[329px] md:w-[500px] lg:w-[550px]"
          background={`bg-[#EDEDED] ${height > distance && height < distance + 3200 ? "lg:fixed bottom-0 z-20" : `${height > distance + 2400 ? "lg:hidden" : "lg:relative"}`}`}
          section={1}
          percent={percent}
        />
        <div ref={section1Ref} className="absolute top-[800px]"></div>
        <Section 
          title="Scan documents, notes & flashcards" 
          text="Using advanced scanning technology, our scanner camera scan your written notes in the highest quality and allows you to not only save it as notes but also create flashcards! For ease of use, you are allowed to create digital notebooks to save & sort your scanned notes & flashcards in." 
          image="/images/photo6.png"
          width="w-[308px] md:w-[450px] lg:w-[550px]"
          background={`lg:bg-[#EDEDED] ${height > distance && height < distance + 3200 ? `${height < distance + 800 ? "lg:hidden" : "lg:fixed bottom-0 z-20"}` : "lg:hidden"}`}
          section={2}
          percent={percent}
        />
        <Section 
          title="Create flashcards" 
          text="Our smart Bravo notebooks are designed to allow you to create flashcards from the notes already taken. You simply select the sentences you want to have in the flashcards , and our smart technology automatically creates the flashcard for you!" 
          image={width < 1024 ? "/images/photo7.png" : "/images/photo7L.png"}
          width="w-[329px] md:w-[430px]"
          background={`bg-[#EDEDED] ${height > distance && height < distance + 3200 ? `${height < distance + 1600 ? "lg:hidden" : "lg:fixed bottom-0 z-20"}` : "lg:hidden"}`}
          section={3}
          percent={percent}
        />
        <Section 
          title="Send & receive all your files easily" 
          text="Share all your scanned notes, documents & flashcards internally with Bravo Link handle, which is a unique ID for each user." 
          image="/images/photo8.png"
          width="w-[219px] md:w-[350px] md:w-[450px]"
          background={`lg:bg-[#EDEDED] ${height > distance && height < distance + 3200 ? `${height < distance + 2400 ? "lg:hidden" : "lg:fixed bottom-0 z-20"}` : `relative`}`}
          section={4}
          percent={percent}
        />
    </section>
  );
}

export default Process;