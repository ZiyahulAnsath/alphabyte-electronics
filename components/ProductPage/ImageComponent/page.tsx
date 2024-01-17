'use client'

import { Carousel, Image } from "antd";
import { CarouselRef } from "antd/es/carousel";
import { useState, useRef } from "react";

const ImageComponent = ({laptop}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<CarouselRef>(null);

  const handleSlideChange = (index: number) => {
    console.log(`Carousel slide changed: ${index}`);
    setCurrentSlide(index);
  };

  const handleSilhouetteClick = (index: number) => {
    console.log(`Silhouette clicked: ${index}`);
    setCurrentSlide(index);
    carouselRef.current?.goTo(index, false);
  };

  return (
    <>
      {/* Start carousel */}
      <div className="flex flex-col">
        <div>
          <Carousel
            afterChange={handleSlideChange}
            initialSlide={currentSlide}
            ref={carouselRef}
            dots={false}
          >
            <div className="flex justify-center">
              <Image src="/1.png" alt="image1" width={400} />
            </div>
            <div className="flex justify-center">
              <Image src="/2.png" alt="image2" width={400} />
            </div>
            <div className="flex justify-center">
              <Image src="/3.png" alt="image3" width={400} />
            </div>
            <div className="flex justify-center">
              <Image src="/4.png" alt="image4" width={400} />
            </div>
            <div className="flex justify-center">
              <Image src="/5.png" alt="image5" width={400} />
            </div>
          </Carousel>
        </div>

        <div className="flex mt-2 items-center">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className={`cursor-pointer mx-1 ${
                currentSlide === index
                  ? "border border-green-text rounded-md p-1"
                  : ""
              }`}
              onClick={() => handleSilhouetteClick(index)}
            >
              <Image src={`/${index + 1}.png`} width={50} preview={false} />
            </div>
          ))}
        </div>
      </div>
      {/* End carousel */}
    </>
  );
};

export default ImageComponent;