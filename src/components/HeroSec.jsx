import React from "react";

const HeroSec = () => {
  return (
    <section className="dark:bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap">
          <div className="grid place-content-center">
            <p className="text-lg md:text-xl mt-4 p-2 px-4 mb-8 w-fit rounded-full dark:bg-teal-500/10 bg-teal-100 text-teal-500 dark:text-teal-500  capitalize font-semibold">
              شهر رمضان المبارك
            </p>
            <h1 className="text-4xl md:text-2xl lg:text-4xl font-bold xl:leading-[3rem] leading-[3rem] text-blue-500 dark:text-[#9CB8FF]">
              تجهيزاتك لشهر رمضان الكريم مع صفحتنا الخاصة بالشهر الفضيل
            </h1>
            <p className="text-md md:text-xl lg:text-md xl:leading-[2rem] leading-[2rem] mt-4 mb-8 text-gray-400 dark:text-[#C0D2FF]">
              استعد لشهر رمضان الكريم بكل الروحانية والاحتفاء بهذه المناسبة
              العظيمة. تفضل بزيارة صفحتنا الخاصة برمضان الكريم وتعرف على أهم
              التجهيزات اللازمة لاستقبال الشهر الفضيل بكل يسر وسهولة. ستجد على
              صفحتنا تشكيلة متنوعة من المواد الغذائية الصحية والمناسبة للصيام،
              بالإضافة إلى نصائح ذهبية لتنظيم يومك ورتابط العبادات. استعد لأفضل
              شهور السنة مع صفحتنا الخاصة برمضان الكريم.
            </p>
            <div className="flex items-center gap-4 max-sm:flex-col">
              <a
                href="#"
                className=" px-12 py-3 tracking-widest bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full hover:shadow-none shadow-md shadow-blue-600 transition-all duration-300"
              >
                إبدا الان
              </a>
              <a
                href="#"
                className=" px-12 py-3 bg-blue-200 dark:bg-blue-500/10 hover:bg-blue-500 text-blue-500 hover:text-white dark:hover:bg-blue-600 font-semibold rounded-full transition-colors duration-300"
              >
                أعرف المزيد
              </a>
            </div>
          </div>
          <div className="flex justify-center relative">
            <div className="bg-[#03ffdd] dark:bg-[#46AB9E] w-32 h-32 blur-2xl rounded-full absolute left-56 top-10"></div>
            <div className="bg-[#ff9900] dark:bg-[#E1A54E] w-32 h-32 blur-2xl rounded-full absolute right-56 top-10"></div>
            <div className="bg-[#ff1100] dark:bg-[#d0392e] w-32 h-32 blur-2xl rounded-full absolute bottom-10"></div>
            <img
              className="max-w-md w-100 h-100 relative"
              src="./assets/Hero-img.png"
              alt="Profile Picture"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSec;
