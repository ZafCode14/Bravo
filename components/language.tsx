"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useWindowHeight from "@/hooks/height";

function Language() {
  const [isFirstLoad, setIsFirstLoad] = useState(false);
  const height = useWindowHeight();
  const router = useRouter();

  useEffect(() => {
    // Check if the Language component has been shown before
    // localStorage.clear();
    const hasVisited = localStorage.getItem("hasVisited");

    if (!hasVisited) {
      // If not, set isFirstLoad to true and save the state in localStorage
      setIsFirstLoad(true);
      localStorage.setItem("hasVisited", "true");
    }
  }, []);

  useEffect(() => {
    if (isFirstLoad) {
      window.scrollTo(0, 0)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [height])

  const handleLanguageChange = (lang: string) => {
    // Construct the new pathname with the selected language
    const newPathname = `/${lang}`;
    setIsFirstLoad(false);
    
    // Update the URL with the new locale
    router.replace(newPathname);
  };


  if (!isFirstLoad) {
    return null; // Don't render the component if it's not the first load
  }

  return (
    <div className={"w-full h-screen bg-black/50 fixed z-30 backdrop-blur-sm flex items-center justify-center"}>
      <div className="bg-white p-6 md:p-10 rounded-lg text-center w-[600px] max-w-[90%] md:text-[20px] flex flex-col items-center justify-center">
        <p className="mb-4 md:text-[20px]">Please choose your preferred language</p>
        <p className="mb-4 md:text-[20px]">اختر اللغة اللتي تريدها</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded mb-5 w-[160px]" onClick={() => handleLanguageChange("en")}>English</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded w-[160px]" onClick={() => handleLanguageChange("ar")}>اللغة العربية</button>
      </div>
    </div>

  );
}

export default Language;