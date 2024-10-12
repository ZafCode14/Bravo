"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useWindowHeight from "@/hooks/height";

function Language() {
  const [isFirstLoad, setIsFirstLoad] = useState(false);
  const height = useWindowHeight();
  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");

    if (!hasVisited) {
      setIsFirstLoad(true);
      localStorage.setItem("hasVisited", "true");
    }
  }, []);

  useEffect(() => {
    if (isFirstLoad) {
      window.scrollTo(0, 0);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [height]);

  const handleLanguageChange = (lang: string) => {
    const newPathname = `/${lang}`;
    setIsFirstLoad(false);
    router.replace(newPathname);
  };

  const handleDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = event.target.value;
    setSelectedLanguage(selectedLang);
    handleLanguageChange(selectedLang);
  };

  if (!isFirstLoad) {
    return null;
  }

  return (
    <div className={"w-full h-screen bg-black/50 fixed z-30 backdrop-blur-sm flex items-center justify-center"}>
      <div className="bg-white p-6 md:p-10 rounded-lg text-center w-[600px] max-w-[90%] md:text-[20px] flex flex-col items-center justify-center">
        <p className="mb-4 md:text-[20px]">Please choose your preferred language</p>

        <select
          value={selectedLanguage}
          onChange={handleDropdownChange}
          className="bg-white border border-gray-300 px-4 py-2 rounded mb-5 w-[160px] text-center"
        >
          <option value="en">English</option>
          <option value="ar">اللغة العربية</option>
          <option value="fr">Français</option>
        </select>
      </div>
    </div>
  );
}

export default Language;