import DetailsWidget from "./DetailsWidget";
import vector from "../../../src/assets/Vector.svg";
import box from "../../../src/assets/box.svg";
import GalleryWidget from "./GalleryWidget";

const Widgets = () => {
  return (
    <div className="h-full flex flex-col gap-4">
      <div className="bg-[#363C43] w-full h-full px-3 sm:px-4 md:px-5 lg:px-6 flex justify-center gap-2 sm:gap-3 md:gap-4 rounded-2xl shadow-[5.67px_5.67px_3.78px_0px_rgba(0,0,0,0.4)]">
        <div className="flex flex-col justify-between   md:h-1/2 mt-5">
          <img
            src={vector}
            alt=""
            className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6"
          />
          <img
            src={box}
            alt=""
            className="w-4 h-6 sm:w-5 sm:h-7 md:w-6 md:h-8"
          />
        </div>
        <DetailsWidget />
        <div className="w-1 sm:w-1.5 md:w-2 h-12 sm:h-14 md:h-16 bg-[linear-gradient(177deg,_#888989_5.6%,_#4A4E54_93.28%)] shadow-[4px_4px_4.9px_0px_rgba(0,0,0,0.25)] rounded-md self-center"></div>
      </div>

      <div className="h-1 bg-light-glass mx-4 md:mx-8 lg:mx-12 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.33)] backdrop:blur-[4px] rounded"></div>

      <div className="flex bg-[#363C43] w-full px-3 sm:px-4 md:px-5 h-full justify-center rounded-2xl shadow-[5.67px_5.67px_3.78px_0px_rgba(0,0,0,0.4)] gap-2 sm:gap-3 md:gap-4">
        <div className="flex flex-col justify-between md:h-1/2 mt-5">
          <img
            src={vector}
            alt=""
            className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6"
          />
          <img
            src={box}
            alt=""
            className="w-4 h-6 sm:w-5 sm:h-7 md:w-6 md:h-8"
          />
        </div>
        <GalleryWidget />
      </div>

      <div className="h-1 bg-light-glass mx-4 md:mx-8 lg:mx-12 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.33)] backdrop:blur-[4px] rounded"></div>
    </div>
  );
};

export default Widgets;
