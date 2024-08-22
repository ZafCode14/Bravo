import Image from "next/image";
import Link from "next/link";

interface getAppProp {
  title: string;
  image: string;
  link: string;
}

function GetApp({ title, image, link }:getAppProp) {
  return (
    <div className="bg-color-white max-w-full w-[330px] h-[113px] flex flex-col items-center mb-10 rounded-[10px]">
      <p className="text-[14px] h-[44%] flex items-center">{title}</p>
      <Link href={link} target="_blank" rel="noopener noreferrer" className="bg-black flex justify-center h-[50px] max-w-[90%] w-[240px] rounded-[4px]">
        <Image alt={`${title} icon button`} src={image} width={"2000"} height={"2000"} className="h-[50px] w-auto"/>
      </Link>
    </div>
  );
}

export default GetApp;