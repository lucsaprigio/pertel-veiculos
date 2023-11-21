'use client';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { ChevronLeftCircle, ChevronRightCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState } from 'react';

interface SliderProps {
    children: React.ReactElement[];
}

export function Slider({ children }: SliderProps
) {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0
    });

    const [thumbnailRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        slides: {
            perView: 4,
            spacing: 10,
        },
    });


    function handleThumbnailClick(index: number) {
        setSelectedImageIndex(index);
        instanceRef.current?.moveToIdx(index);
    };

    function handleNextSlide() {
        const nextIndex = (selectedImageIndex + 1) % children.length;
        setSelectedImageIndex(nextIndex);
        instanceRef.current?.moveToIdx(nextIndex);
    }

    function handlePreviousSlide() {
        const previousIndex = (selectedImageIndex - 1 + children.length) % children.length;
        setSelectedImageIndex(previousIndex);
        instanceRef.current?.moveToIdx(previousIndex);
    }

    if (!children || !Array.isArray(children)) {
        return null;
    }

    return (
        <div className="flex flex-col ">
            <div ref={sliderRef} className="keen-slider hover:cursor-grab relative">
                <button className="absolute left-0 top-1/2 justify-center z-50" onClick={() => handleNextSlide()}><ChevronLeftCircle className="text-white opacity-0 hover:scale-105 hover:opacity-80 transition-all duration-200" size={38} /></button>
                {
                    React.Children.map(children, (child, index) => (
                        <div key={index} className="keen-slider__slide">{child}</div>
                    ))
                }
                <button className="absolute right-0 top-1/2 justify-center z-50" onClick={() => handleNextSlide()}><ChevronRightCircle className="text-white opacity-0 hover:scale-105 hover:opacity-80 transition-all duration-200" size={38} /></button>
            </div>

            <div className="relative grid grid-cols-5 flex-wrap">
                <button className="absolute -left-12 top-12 justify-center z-50" onClick={() => handleNextSlide()}><ChevronLeft className="text-red-400 opacity-80 hover:scale-105 transition-all duration-200" size={32} /></button>

                {children.map((child, index) => (
                    <img
                        key={index}
                        src={child.props.src}
                        alt={child.props.alt}
                        className={`keen-slider__slide ${selectedImageIndex === index && 'selected border-b-white border-4 flex flex-row flex-wrap'}`}
                        onClick={() => handleThumbnailClick(index)}
                        draggable={false}
                    />
                ))}
                <button className="absolute -right-12 top-12 justify-center z-50" onClick={() => handleNextSlide()}><ChevronRight className="text-red-400 opacity-80 hover:scale-105 transition-all duration-200" size={32} /></button>
            </div>
        </div>
    );
}