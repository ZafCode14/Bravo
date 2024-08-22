interface howProp {
  number: string;
  text: string;
  color: string;
  line: string;
}

function HowWorks({ number, text, color, line }: howProp) {
  return (
    <div className="self-start ml-10 max-w-[80vw]">
      <div className="flex flex-col">
        <div className="flex items-center">
          <div className={`min-w-[36px] min-h-[36px] ${color} rounded-full flex items-center justify-center`}>
            <p className="text-white text-[12px]">{number}</p>
          </div>
          <p className="text-[12px] ml-7 h-[36px] w-[230px]">{text}</p>
        </div>
        <div className={`w-[36px] h-[60px] ${line} justify-center`}>
          <div className={`w-[1px] h-full ${color}`}></div>
        </div>
      </div>
    </div>
  );
}

export default HowWorks;