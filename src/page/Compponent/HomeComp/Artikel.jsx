import React, { useEffect, useState } from "react";
import Glide from "@glidejs/glide"
import fotoArtikel from '../../../assets/fotoArtikel.png'
import fotoArtikel1 from '../../../assets/fotoArtikel1.png'
import fotoArtikel2 from '../../../assets/fotoArtikel2.png'
import fotoArtikel3 from '../../../assets/fotoArtikel3.png'
import fotoArtikel4 from '../../../assets/fotoArtikel4.png'

import bgArtikelPC from '../../../assets/bgArtikelPC.png'
import ArtikelTittle from '../../../assets/ArtikelTittle.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import bgArtikelHP from '../../../assets/bgArtikelHP.png'
import CardContent from "./CardContent";
import { motion } from "framer-motion";

export default function CarouselCard() {

    const [activeSlide, setActiveSlide] = useState(0);
    const [cardsPerSlide, setCardsPerSlide] = useState(3);

    useEffect(() => {
        const slider = new Glide(".glide-04", {
            type: "carousel",
            focusAt: "center",
            perView: 1,
            animationDuration: 700,
            gap: 24,
            classNames: {
                nav: {
                    active: "[&>*]:bg-wuiSlate-700",
                },

            },

        });

        slider.on('run.after', () => {
            setActiveSlide(slider.index);
        });

        slider.mount();

        const handleResize = () => {
            const isMobile = window.innerWidth <= 768;
            setCardsPerSlide(isMobile ? 4 : 3);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            slider.destroy();
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    const cards = [
        {
            id: 1,
            img: fotoArtikel1,
            tanggal: 'Jumat, 24/05/2024',
            judul: 'Tanggapan Rektorat Atas Policy Brief Lingkar Ad...',
            link: 'https://www.instagram.com/p/C7VyqWySNCY/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
        },
        {
            id: 2,
            img: fotoArtikel2,
            tanggal: 'Jumat, 24/05/2024',
            judul: 'DEWA NGODING: Survei Permasalahan Mahasiswa FIL..',
            link: 'https://www.instagram.com/p/C7UARKoSXqt/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
        },
        {
            id: 3,
            img: fotoArtikel3,
            tanggal: 'Jumat, 24/05/2024',
            judul: 'KABAR BEASISWA | Edisi I Bulan Mei 2024',
            link: 'https://www.instagram.com/p/C7LjLw4rxWO/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
        },
        {
            id: 4,
            img: fotoArtikel4,
            tanggal: 'Jumat, 24/05/2024',
            judul: 'SCHOLARSHIP 101 | SIBEA UB - Sistem Informa...',
            link: 'https://www.instagram.com/p/C6_VJhir_d3/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
        },
        {
            id: 5,
            img: fotoArtikel1,
            tanggal: 'Jumat, 24/05/2024',
            judul: 'Tanggapan Rektorat Atas Policy Brief Lingkar Ad...',
            link: 'https://www.instagram.com/p/C7VyqWySNCY/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
        },
        {
            id: 6,
            img: fotoArtikel2,
            tanggal: 'Jumat, 24/05/2024',
            judul: 'DEWA NGODING: Survei Permasalahan Mahasiswa FIL..',
            link: 'https://www.instagram.com/p/C7VyqWySNCY/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
        },
        {
            id: 7,
            img: fotoArtikel3,
            tanggal: 'Jumat, 24/05/2024',
            judul: 'KABAR BEASISWA | Edisi I Bulan Mei 2024',
            link: 'https://www.instagram.com/p/C7LjLw4rxWO/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
        },
        {
            id: 8,
            img: fotoArtikel4,
            tanggal: 'Jumat, 24/05/2024',
            judul: 'SCHOLARSHIP 101 | SIBEA UB - Sistem Informa...',
            link: 'https://www.instagram.com/p/C6_VJhir_d3/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
        },
    ]

    const totalSlides = Math.ceil(cards.length / cardsPerSlide);

    const nextSlide = () => {
        if (activeSlide < totalSlides - 1) {
            setActiveSlide(activeSlide + 1);
        }
    };

    const prevSlide = () => {
        if (activeSlide > 0) {
            setActiveSlide(activeSlide - 1);
        }
    };



    return (
        <>
            {/*<!-- Component: Card Carousel --> */}

            <div className=" relative w-full h-max  overflow-hidden rounded flex ">
                {/* background */}
                <img src={bgArtikelPC} alt="" className="hidden xl:flex h-max" />
                <img src={bgArtikelHP} alt="" className="xl:hidden " />
                {/*    <!-- Slides --> */}
                <div className="glide-04 absolute w-full flexflex-col h-max xl:top-0 top-14">
                    {/* tittle */}
                    <div className='w-full flex h-max relative justify-center top-8 xl:top-7'>
                        <motion.img
                            initial={{ opacity: 0, y: 50, x: 0 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    type: "ease",
                                    duration: 1.0,
                                    damping: 10,
                                    stiffness: 40,
                                },
                            }} src={ArtikelTittle} alt="" className='absolute w-[20rem] mx-auto text-4xl xl:text-7xl xl:pt-36  xl:w-[43rem]' />
                    </div>
                    {/* slides */}
                    <div className="overflow-hidden relative top-28 mx-8 xl:top-96" data-glide-el="track">
                        <ul className=" flex flex-wrap md:justify-center w-full overflow-hidden">
                            {[...Array(totalSlides)].map((_, slideIndex) => {
                                const slideCards = cards.slice(slideIndex * cardsPerSlide, (slideIndex + 1) * cardsPerSlide);
                                const isLastSlide = slideIndex === totalSlides - 1;
                                const isCentered = slideCards.length < cardsPerSlide && isLastSlide;
                                return (
                                    <li key={slideIndex} className={`flex place-items-center my-3 gap-6 xl:gap-28 ${isCentered ? 'justify-center' : ''} ${slideCards.length >= 4 ? 'grid grid-cols-2' : ''}`}>
                                        {slideCards.map((card) => (
                                            <CardContent key={card.id} card={card} />
                                        ))}
                                    </li>
                                );
                            })}
                        </ul>
                        {/*    <!-- Controls --> */}
                        <div className="flex gap-3 xl:gap-8 w-full h-max items-center justify-center mt-4 xl:mt-10" data-glide-el="controls">
                            {/* Tombol Prev */}
                            <button className={`h-8  w-8 items-center justify-center rounded-full ring-2 ring-cust-yellow transition duration-300  lg:h-12 lg:w-12 ${activeSlide === 0 ? 'pointer-events-none opacity-50' : ''}`} data-glide-dir="<"
                                onClick={prevSlide}
                                aria-label="prev slide">
                                <FontAwesomeIcon icon={faChevronLeft} style={{ color: '#FDFADB' }} />
                            </button>

                            {/* Indikator */}
                            <div className="flex gap-3 xl:gap-8 py-1">
                                {[...Array(totalSlides).keys()].map((indicator) => (
                                    <button
                                        key={indicator}
                                        className={`group rounded-full`}
                                        data-glide-dir={`=${indicator}`}
                                        aria-label={`goto slide ${indicator + 1}`}
                                    >
                                        <span className={`h-8 w-8 xl:h-12 justify-center cursor-default items-center xl:w-12 p-1 flex rounded-full  ring-2 font-semibold transition-colors duration-300 xl:text-3xl xl:font-bold focus:outline-none text-cust-yellow ${activeSlide === indicator ? 'bg-cust-orange ring-cust-orange' : 'ring-cust-yellow'}`}>{indicator + 1}</span>
                                    </button>
                                ))}
                            </div>

                            {/* Tombol Next */}
                            <button className={`h-8 w-8 items-center justify-center rounded-full ring-2 ring-cust-yellow transition duration-300  lg:h-12 lg:w-12 ${activeSlide === totalSlides - 1 ? 'pointer-events-none opacity-50' : ''}`} data-glide-dir=">"
                                onClick={nextSlide}
                                aria-label="next slide">
                                <FontAwesomeIcon icon={faChevronRight} style={{ color: '#FDFADB' }} />
                            </button>
                        </div>

                    </div>
                </div>

            </div>
            {/*<!-- End Card Carousel --> */}
        </>
    )
}