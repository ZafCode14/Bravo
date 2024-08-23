interface secNavProp {
  title: string;
  opacity: string;
}
function SectionsNav({ title, opacity }: secNavProp) {
  return (
    <div className={`flex w-full flex-col items-center md:mx-1 xl:mx-2 ${opacity}`}>
      <p className="text-[10px] xl:text-[12px] font-bold mb-2">{title}</p>
      <div className="w-[240px] xl:w-[283px] h-[5px] bg-[#afafaf]">
      </div>
    </div>
  );
}

export default SectionsNav;