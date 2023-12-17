'use client';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { ChevronLeftCircle, ChevronRightCircle, ChevronLeft, ChevronRight, X } from 'lucide-react';
import React, { useState } from 'react';

interface SliderProps {
    children: React.ReactElement[];
}

export function Slider({ children }: SliderProps
) {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [selectedImageZoom, setSelectedImageZoom] = useState(null);

    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
    });

    const [thumbnailRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        slides: {
            perView: 4,
            spacing: 10,
        },
    });


    function handleThumbnailClick(index: number) {
        setSelectedImageZoom(index);
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

    function openModal() {
        setSelectedImageZoom(selectedImageZoom === null ? 0 : null);
    }

    function closeModal() {
        setSelectedImageZoom(null);
    }

    return (
        <div className="flex flex-col w-full overflow-hidden">
            <div ref={sliderRef} className="keen-slider hover:cursor-grab relative w-full flex items-center">
                <button className="absolute left-0 top-1/2 justify-center z-50" onClick={() => handlePreviousSlide()}><ChevronLeftCircle className="text-white opacity-20 hover:scale-105 hover:opacity-80 transition-all duration-200" size={38} /></button>
                {
                    React.Children.map(children, (child, index) => (
                        <div key={index} className="keen-slider__slide">{child}</div>
                    ))
                }
                <button className="absolute right-0 top-1/2 justify-center z-50" onClick={() => handleNextSlide()}><ChevronRightCircle className="text-white opacity-20 hover:scale-105 hover:opacity-80 transition-all duration-200" size={38} /></button>
            </div>

            {selectedImageZoom !== null && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={() => closeModal()}>
                    <img
                        src={children[selectedImageZoom].props.src}
                        alt={children[selectedImageZoom].props.alt}
                        className="max-w-full max-h-full"
                    />
                    <button
                        className="absolute top-4 right-4 text-white cursor-pointer"
                        onClick={() => openModal()}
                    >
                        <X />
                    </button>
                </div>
            )}

            <div className="relative grid grid-cols-5 max-[868px]:hidden">
                {children.map((child, index) => (
                    <img
                        key={index}
                        src={child.props.src}
                        alt={child.props.alt}
                        className={`keen-slider__slide w-full h-32 object-cover cursor-pointer hover:scale-105 transition-all duration-75 ${selectedImageIndex === index && 'selected border-b-white border-4 flex flex-row flex-wrap items-center'}`}
                        onClick={() => handleThumbnailClick(index)}
                        draggable={false}
                    />
                ))}
            </div>
        </div>
    );
}