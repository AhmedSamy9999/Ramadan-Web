import { useTheme } from "next-themes";
import { TbDeviceDesktop } from "react-icons/tb";
import { RiMoonClearFill, RiSunFill } from "react-icons/ri";
import { useEffect, useState } from "react";

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  let backgroundColor;
  let fill;
  let stroke;
  let iconDark;
  let iconLight;
  let textSystem;
  if (theme === "system") {
    backgroundColor = "bg-gray-100 dark:bg-gray-700";
    fill = "fill-sky-400/20";
    stroke = "stroke-sky-500";
  }

  if (theme === "dark") {
    iconDark = "text-sky-500";
  }

  if (theme === "light") {
    iconLight = "text-sky-500";
  }

  if (theme === "system" || theme === "dark") {
    textSystem = "text-sky-500";
  }

  return (
    <div
      className="hs-dropdown"
      data-hs-dropdown-placement="bottom-right"
      data-hs-dropdown-offset="30"
    >
      <a
        className="hs-dropdown-toggle hs-dark-mode hover:bg-gray-100  p-2 rounded-lg group flex items-center text-gray-600 font-medium shadow ring-1 ring-slate-900/5 dark:bg-slate-700 dark:ring-inset dark:ring-white/5 dark:text-gray-400 gap-2 flex-row-reverse justify-end capitalize"
        href="javascript:;"
      >
        <RiSunFill
          className={`${iconLight} hs-dark-mode-active:hidden block w-5 h-5`}
        />
        <RiMoonClearFill
          className={`${iconDark} hs-dark-mode-active:block hidden w-5 h-5`}
        />
      </a>

      <div
        id="selectThemeDropdown"
        className="hs-dropdown-menu hs-dropdown-open:opacity-100 mt-2 hidden z-10 transition-[margin,opacity] opacity-0 duration-300 mb-2 origin-bottom-left bg-white shadow-md rounded-2xl p-2 space-y-1 dark:bg-slate-800 dark:border dark:border-gray-700 dark:divide-gray-700"
      >
        <a
          className={`${
            theme === "system"
              ? "text-gray-700"
              : "bg-gray-100 dark:bg-transparent"
          } flex items-center flex-row-reverse gap-x-2 py-2 px-3 rounded-lg text-sm hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-slate-900/40  ${
            theme === "light"
              ? "text-sky-500"
              : theme === "dark"
              ? "text-gray-500"
              : ""
          }`}
          href="#"
          onClick={() => setTheme("light")}
        >
          <RiSunFill
            className={`rounded-md bg-white w-6 h-6 p-1 shadow ring-1 ring-slate-900/5 dark:bg-slate-700 dark:ring-inset dark:ring-white/5 ${iconLight}`}
            size={18}
          />
          وضع النهار
        </a>
        <a
          className={`${
            theme === "system" ? "dark:text-gray-300" : "dark:bg-slate-900/40"
          } flex items-center flex-row-reverse gap-x-2 py-2 px-3 rounded-lg text-sm ${iconDark} hover:bg-gray-100 text-gray-700  dark:hover:bg-slate-900/40 `}
          href="javascript:;"
          onClick={() => setTheme("dark")}
        >
          <RiMoonClearFill
            className={`rounded-md bg-white w-6 h-6 p-1 shadow ring-1 ring-slate-900/5 dark:bg-slate-700 dark:ring-inset dark:ring-white/5 ${iconDark}`}
            size={18}
          />
          وضع الليل
        </a>
        <a
          className={`${
            theme === "dark" ? "dark:text-gray-300" : "dark:bg-slate-900/40"
          } ${
            theme === "light" ? "" : "text-sky-500"
          } flex items-center flex-row-reverse gap-x-2 py-2 px-3 rounded-lg text-sm text-gray-700 hover:bg-gray-100  dark:hover:bg-slate-900/40  ${backgroundColor}`}
          href="javascript:;"
          onClick={() => setTheme("system")}
        >
          <TbDeviceDesktop
            size={22}
            className={`${fill} ${stroke} rounded-md bg-white w-6 h-6 p-1 shadow ring-1 ring-slate-900/5 dark:bg-slate-700 dark:ring-inset dark:ring-white/5`}
          />
          وضع النظام
        </a>
      </div>
    </div>
  );
};

export default ThemeChanger;
