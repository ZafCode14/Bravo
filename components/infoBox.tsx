function InfoBox() {
  return (
    <div className="my-12 w-[300px] max-w-[95%] h-[70px] flex justify-center items-center  relative">
      <div className="absolute w-full h-full bg-[#F69729] opacity-20">
      </div>
      <div className="w-[15px] h-[15px] bg-[#F69729] rounded-full absolute -top-[7.5px] -left-[7.5px]"></div>
      <div className="w-[15px] h-[15px] bg-[#F69729] rounded-full absolute -bottom-[7.5px] -left-[7.5px]"></div>
      <div className="w-[15px] h-[15px] bg-[#F69729] rounded-full absolute -bottom-[7.5px] -right-[7.5px]"></div>
      <div className="w-[15px] h-[15px] bg-[#F69729] rounded-full absolute -top-[7.5px] -right-[7.5px]"></div>
      <div className="w-[45px] h-[6px] bg-[#F69729] rounded-full absolute -top-[3px]"></div>
      <div className="w-[45px] h-[6px] bg-[#F69729] rounded-full absolute -bottom-[3px]"></div>
      <div className="w-[6px] h-[45px] bg-[#F69729] rounded-full absolute -left-[3px]"></div>
      <div className="w-[6px] h-[45px] bg-[#F69729] rounded-full absolute -right-[3px]"></div>
      <p className="text-[12px] px-5 leading-tight">Buy our notebook & start scanning, organizing & sharing all your notes & flashcards...</p>
    </div>
  );
}

export default InfoBox;