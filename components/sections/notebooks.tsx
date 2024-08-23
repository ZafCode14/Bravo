import Image from "next/image";
import useWindowWidth from "@/hooks/width";

function Notebooks() {
  const width = useWindowWidth();

  return (
    <section className="z-10 relative bg-[#EDEDED] flex flex-col items-center">
      <p className="font-bold py-5 md:text-[26px] lg:my-10">Buy our smart notebook to enjoy our app!</p>
      <Image alt="textbook image" src={width <= 1024 ? '/images/textbooks.jpg' : '/images/textbooksRow.png'} height={"2000"} width={"1000"} className="w-[375px] max-w-[95%] h-auto md:w-[500px] lg:w-[1350px]"/>
      <button className="text-[12px] w-[156px] h-[41px] bg-[#F69729] text-white my-5 md:w-[250px] md:h-[65px] md:text-[20px] lg:my-12">Shop now</button>
    </section>
  );
}

export default Notebooks;