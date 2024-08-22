import Image from "next/image";

interface getAppProp {
  title: string;
  image: string;
}

function GetApp({ title, image }:getAppProp) {
  return (
    <div className="bg-color-white max-w-full w-[330px] h-[113px] flex flex-col items-center mb-10 rounded-[10px]">
      <p className="text-[14px] h-[44%] flex items-center">{title}</p>
      <div className="bg-black flex justify-center h-[50px] max-w-[90%] w-[240px] rounded-[4px]">
        <Image alt={`${title} icon button`} src={image} width={"1000"} height={"1000"}/>
      </div>
    </div>
  );
}

export default GetApp;