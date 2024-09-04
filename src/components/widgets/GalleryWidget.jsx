import plus from "../../assets/plus.svg";
import { useState } from "react";
import { IoMdArrowRoundForward, IoMdArrowRoundBack } from "react-icons/io";

const GalleryWidget = () => {
  const [images, setImages] = useState([]);

  const handleImageUpload = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.onchange = (event) => {
      const file = event.target.files[0];
      setImages((prevImages) => [...prevImages, file]);
    };
    fileInput.click();
  };

  const rotateImages = (direction) => {
    setImages((prevImages) => {
      if (direction === "forward") {
        return [prevImages[prevImages.length - 1], ...prevImages.slice(0, -1)];
      } else {
        return [...prevImages.slice(1), prevImages[0]];
      }
    });
  };

  return (
    <div className="flex flex-col items-center w-full mt-5 mb-5 pr-4 lg:pr-9">
      <div className="flex w-full justify-between items-center">
        <h1 className="text-xs md:text-sm lg:text-base font-base text-white bg-[#171717] py-2 px-4 md:px-6 lg:px-10 md:py-3 lg:py-4 rounded-lg md:rounded-xl lg:rounded-2xl">
          Gallery
        </h1>
        <div className="flex justify-center items-center gap-2 lg:gap-10">
          <button
            className="text-[8px] md:text-xs lg:text-sm text-white whitespace-nowrap font-medium lg:font-bold flex items-center justify-center gap-1 rounded-full px-2 md:px-2.5 lg:px-3 py-1 md:py-2.5 lg:py-3 bg-white/[0.03] shadow-button-shadow backdrop-blur-[52.28px] hover:bg-white/[0.06] transition-colors duration-300"
            onClick={handleImageUpload}
          >
            <img src={plus} alt="" className="w-2 h-2 md:w-3 md:h-3" /> ADD
            IMAGE
          </button>
          <div className="flex items-center gap-2">
            <button
              disabled={images.length === 0}
              onClick={() => rotateImages("backward")}
              className={`group bg-arrow-gradient flex justify-center items-center w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 rounded-full  ${
                images.length === 0
                  ? "opacity-50"
                  : "active:bg-arrow-gradient-active hover:bg-arrow-gradient-hover transition-colors duration-500 shadow-arrow-shadow"
              }`}
            >
              <IoMdArrowRoundBack
                className={`w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 text-[#6F787C] ${
                  images.length > 0 ? "group-active:text-white" : ""
                }`}
              />
            </button>
            <button
              disabled={images.length === 0}
              onClick={() => rotateImages("forward")}
              className={`group bg-arrow-gradient flex justify-center items-center w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 bg-opacity-50 text-white rounded-full ${
                images.length === 0
                  ? "opacity-50"
                  : "active:bg-arrow-gradient-active hover:bg-arrow-gradient-hover transition-colors duration-500 shadow-arrow-shadow"
              }`}
            >
              <IoMdArrowRoundForward
                className={`w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 text-[#6F787C] ${
                  images.length > 0 ? "group-active:text-white" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between w-full mt-16 md:mt-10 lg:mt-10 mb-5 h-40 md:h-48 lg:h-56">
        <div className="w-full flex justify-between items-center gap-2">
          {images.slice(0, 3).map((img, index) => (
            <div
              key={index}
              className="w-1/3 aspect-square flex justify-between"
            >
              <div className="w-full h-full relative">
                <img
                  src={URL.createObjectURL(img)}
                  alt={`Uploaded ${index + 1}`}
                  className="absolute inset-0 object-cover rounded-xl md:rounded-xl lg:rounded-3xl w-full h-full grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105 hover:shadow-gallery-shadow hover:-rotate-2"
                />
              </div>
            </div>
          ))}
          {images.length === 0 && (
            <div className="w-full h-full flex justify-center items-center text-white text-opacity-50">
              No images uploaded yet
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GalleryWidget;
