import ThemeChanger from "./ThemeChanger";

const Header = () => {
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 dark:bg-slate-900">
      <nav
        className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <a
            className="flex-none text-xl font-semibold dark:text-white w-16 h-16"
            href="#"
          >
            <img src="./assets/logo.png" alt="Logo" className="w-100 h-100" />
          </a>

          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle transition-all text-sm dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white"
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
            >
              <svg
                className="hs-collapse-open:hidden w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              <svg
                className="hs-collapse-open:block hidden w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="navbar-collapse-with-animation"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
        >
          <div className="p-1 flex flex-col gap-4 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
            <a
              className="font-medium text-blue-500 hover:bg-gray-100 rounded-lg p-2 px-3 dark:hover:bg-slate-700"
              href="#"
              aria-current="page"
            >
              الرئيسية
            </a>
            <a
              className="font-medium text-gray-600 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg p-2 px-3 dark:text-gray-400"
              href="#"
            >
              عنا
            </a>
            <a
              className="font-medium text-gray-600 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg p-2 px-3 dark:text-gray-400"
              href="#"
            >
              معرض أعمالنا
            </a>
            <a
              className="font-medium text-gray-600 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg p-2 px-3 dark:text-gray-400"
              href="#"
            >
              المقالات
            </a>
            <ThemeChanger />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
