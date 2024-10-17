interface secNavProp {
  title: string;
  opacity: string;
}
function SectionsNav({ title, opacity }: secNavProp) {
  return (
    <div className={`flex w-full flex-col items-center md:mx-1 xl:mx-2 ${opacity}`}>
      <p className="text-[10px] md:text-[8px] font-bold mb-2">{title}</p>
      <div className="w-[190px] h-[5px] bg-[#afafaf]">
        <div className={"bg-[#575757] h-full w-full"}>
        </div>
      </div>
    </div>
  );
}

export default SectionsNav;