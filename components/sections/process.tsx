import Section from "../sections";
import useWindowHeight from "@/hooks/height";
import useWindowWidth from "@/hooks/width";
import { useEffect, useRef, useState } from 'react';

function Process() {
  const height = useWindowHeight().scrollPercentage;
  const width = useWindowWidth();
  const sectionHeight = 700 * 4;

  const divRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState<number>(0);
  const { scrollPixels } = useWindowHeight();

  useEffect(() => {
    if (divRef.current) {
      const rect = divRef.current.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const distanceFromTop = rect.top + scrollTop;
      setDistance(distanceFromTop - window.innerHeight);
    }
  }, [scrollPixels]);

  console.log(distance);

  return (
    <section className={`relative`} style={{
      height: width <= 1024 ? "auto" : `${sectionHeight}px`
    }}>
        <Section 
          title="Sync calendars with your colleagues & teammates" 
          text="Bravo Link allows you to sync calendars, share & delegate tasks with your colleagues & teammates to track each others progress & work on team projects." 
          image="/images/group4.png"
          width="w-[329px] md:w-[500px]"
          background={`bg-[#EDEDED]`}
        />
        <div ref={divRef}></div>
        <Section 
          title="Scan documents, notes & flashcards" 
          text="Using advanced scanning technology, our scanner camera scan your written notes in the highest quality and allows you to not only save it as notes but also create flashcards! For ease of use, you are allowed to create digital notebooks to save & sort your scanned notes & flashcards in." 
          image="/images/photo6.png"
          width="w-[308px] md:w-[450px]"
          background="bg-[white]"
        />
      <section className="bg-[#EDEDED] relative flex justify-center">
        <Section 
          title="Create flashcards" 
          text="Our smart Bravo notebooks are designed to allow you to create flashcards from the notes already taken. You simply select the sentences you want to have in the flashcards , and our smart technology automatically creates the flashcard for you!" 
          image="/images/photo7.png"
          width="w-[329px] md:w-[500px]"
          background="bg-[#EDEDED]"
        />
      </section>
      <section>
        <Section 
          title="Send & receive all your files easily" 
          text="Share all your scanned notes, documents & flashcards internally with Bravo Link handle, which is a unique ID for each user." 
          image="/images/photo8.png"
          width="w-[219px] md:w-[350px]"
          background="bg-[white]"
        />
      </section>
    </section>
  );
}

export default Process;