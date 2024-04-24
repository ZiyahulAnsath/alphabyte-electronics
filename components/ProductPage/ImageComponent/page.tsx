'use client'

import { Carousel, Image } from "antd";
import { CarouselRef } from "antd/es/carousel";
import { useState, useRef } from "react";

interface Laptop {
  id: number;
  brand: string;
  name: string;
  generation: string;
  images: string[];
}

const ImageComponent = ({ laptop }: { laptop: Laptop }) => {
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
            {laptop.images.map((image, index) => ( // Map over images from laptop prop
              <div key={index} className="flex justify-center">
                <Image src={image} alt={`image${index + 1}`} width={400} />
              </div>
            ))}
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
              <Image src={laptop.images[index]} width={50} preview={false} />
            </div>
          ))}
        </div>
      </div>
      {/* End carousel */}
    </>
  );
};

export default ImageComponent;
