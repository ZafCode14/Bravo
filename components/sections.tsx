import Image from "next/image";

interface sectionProp {
  title: string;
  text: string;
  image: string;
  width: string;
}

function Section({ title, text, image, width }: sectionProp) {
  return (
    <div className="flex flex-col w-full items-center py-5">
      <p className="font-bold">{title}</p>
      <p className="text-[10px] w-[329px] max-w-full text-center my-5">{text}</p>
      <Image alt="phone image" src={image} height={"2000"} width={"2000"} priority className={`${width} h-auto z-10`}/>
    </div>
  );
}

export default Section;