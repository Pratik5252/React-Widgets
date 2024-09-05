import plus from "../../assets/plus.svg";
import { useState, useRef, useEffect } from "react";
import { IoMdArrowRoundForward, IoMdArrowRoundBack } from "react-icons/io";

const GalleryWidget = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

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
    if (images.length <= 3) return;
    setCurrentIndex((prevIndex) => {
      if (direction === "forward") {
        return (prevIndex + 1) % images.length;
      } else {
        return (prevIndex - 1 + images.length) % images.length;
      }
    });
  };

  useEffect(() => {
    if (carouselRef.current && images.length > 3) {
      carouselRef.current.style.transition = "transform 0.3s ease-in-out";
      carouselRef.current.style.transform = `translateX(-${
        currentIndex * (100 / 3)
      }%)`;
    }
  }, [currentIndex, images.length]);

  return (
    <div className="flex flex-col items-center w-full mt-5 mb-5 pr-4 lg:pr-4">
      <div className="flex w-full justify-between items-center">
        <h1 className="text-xs md:text-sm lg:text-base font-base text-white bg-[#171717] py-3 px-5 md:px-[6%] lg:px-[8%] md:py-3 lg:py-4 rounded-lg md:rounded-xl lg:rounded-2xl">
          Gallery
        </h1>
        <div className="flex justify-center items-center gap-4 md:gap-[5%] lg:gap-[10%]">
          <button
            className="text-[8px] md:text-[9px] lg:text-[10px] text-white whitespace-nowrap font-medium lg:font-semibold flex items-center justify-center gap-1 rounded-full px-4 md:px-6 py-1 md:py-2  bg-white/[0.03] shadow-button-shadow backdrop-blur-[52.28px] hover:bg-white/[0.06] transition-colors duration-300"
            onClick={handleImageUpload}
          >
            <img src={plus} alt="" className="w-2 h-2 md:w-3 md:h-3" /> ADD
            IMAGE
          </button>
          <div className="flex items-center gap-2">
            <button
              disabled={images.length <= 3 || currentIndex === 0}
              onClick={() => rotateImages("backward")}
              className={`group bg-arrow-gradient flex justify-center items-center w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 rounded-full  ${
                images.length <= 3 || currentIndex === 0
                  ? "opacity-50"
                  : "active:bg-arrow-gradient-active hover:bg-arrow-gradient-hover transition-colors duration-500 shadow-arrow-shadow"
              }`}
            >
              <IoMdArrowRoundBack
                className={`w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 text-[#6F787C] ${
                  images.length > 3 && currentIndex !== 0 ? "group-active:text-white" : ""
                }`}
              />
            </button>
            <button
              disabled={images.length <= 3 || currentIndex === images.length - 1}
              onClick={() => rotateImages("forward")}
              className={`group bg-arrow-gradient flex justify-center items-center w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 bg-opacity-50 text-white rounded-full ${
                images.length <= 3 || currentIndex === images.length - 1
                  ? "opacity-50"
                  : "active:bg-arrow-gradient-active hover:bg-arrow-gradient-hover transition-colors duration-500 shadow-arrow-shadow"
              }`}
            >
              <IoMdArrowRoundForward
                className={`w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 text-[#6F787C] ${
                  images.length > 3 && currentIndex !== images.length - 1 ? "group-active:text-white" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>
      {/* mt-16 md:mt-10 lg:mt-10 */}
      <div className="flex justify-between w-full mb-2 h-full overflow-x-hidden">
        {images.length > 0 ? (
          <div
            ref={carouselRef}
            className="w-full h-full pt-10 pb-3 md:pb-1 lg:pb-4 px-5 flex transition-transform duration-300 ease-in-out"
            style={{ gap: "2%" }}
          >
            {images.map((img, index) => (
              <div
                key={index}
                className="w-[32%] flex-shrink-0 aspect-square flex justify-between"
              >
                <div className="w-full h-full relative group">
                  <img
                    src={URL.createObjectURL(img)}
                    alt={`Uploaded ${index + 1}`}
                    className="absolute inset-0 object-cover rounded-3xl md:rounded-2xl lg:rounded-3xl w-full h-full grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 group-hover:-rotate-2 hover:shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <></>
        )}
        {images.length === 0 && (
          <div className="w-full h-[30vh] flex justify-center items-center text-white text-opacity-50">
            No images uploaded yet
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryWidget;
