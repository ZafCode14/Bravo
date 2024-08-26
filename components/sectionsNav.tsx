interface secNavProp {
  title: string;
  opacity: string;
  percent: number;
}
function SectionsNav({ title, opacity, percent }: secNavProp) {
  return (
    <div className={`flex w-full flex-col items-center md:mx-1 xl:mx-2 ${opacity}`}>
      <p className="text-[10px] xl:text-[12px] font-bold mb-2">{title}</p>
      <div className="w-[240px] xl:w-[283px] h-[5px] bg-[#afafaf]">
        <div className={"bg-[#575757] h-full"} style={{
          width: percent > 0 && percent < 100 ? `${percent}%` : `${percent > 100 ? "100" : "0"}%`
        }}>
        </div>
      </div>
    </div>
  );
}

export default SectionsNav;