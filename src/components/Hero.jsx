import Navbar from "./Navbar"
import Image from "next/image"
import hero_img from "../assets/desktop/hero-img.svg"
import hero_arrow from '../assets/desktop/hero-arrow.svg'
import { Raleway, Playfair_Display } from "next/font/google"
import Link from "next/link"

const raleway = Raleway({
    subsets: ['latin', 'cyrillic'],
    weight: ['500'],
})

const pf = Playfair_Display({
    subsets: ['latin', 'cyrillic'],
    weight: ['700'],
})

const Hero = () => {
    return (
        <section id="hero" className="w-full h-screen bg-[url('../assets/desktop/hero-bg.svg')] bg-cover bg-center snap-start flex flex-col">
            <Navbar />

            {/* Hero container */}
            <div className="w-full flex px-6 md:px-16 xl:px-24 2xl:px-44 flex-auto">

                {/* Left Half */}
                <div className="w-full lg:w-[51%] flex flex-col justify-center lg:justify-around items-center lg:items-start lg:pr-3">
                    
                    <h1 className="text-white text-3xl md:text-4xl xl:text-[2.65rem] 2xl:text-5xl font-bold leading-8 md:leading-[3rem] tracking-wider drop-shadow-[4px_4px_0_rgba(0,0,0,0.25)] text-center lg:text-start">
                        Мебели по поръчка<br />изработени специално за теб
                    </h1>

                    <p className={`py-20 lg:py-0 lg:pe-10 xl:pe-20 2xl:pe-40 text-white text-justify text-base md:text-xl 2xl:text-[1.375rem] ${raleway.className} leading-6 md:leading-[1.875rem] tracking-[0.012em] md:tracking-wide font-medium`}>
                        В <span className={`${pf.className} font-bold`}>REMTA DESIGN</span> вярваме, че всяка мебел трябва да бъде толкова уникална, колкото и човека, за когото е създадена. Благодарение на дългогодишния ни опит в индустрията безпроблемно създаваме мебели, които съчетават необходимите форма и функция с желания комфорт и стил.
                    </p>

                    {/* Buttons */}
                    <div className="w-full flex flex-col md:flex-row justify-center lg:justify-start items-center">

                        {/* btn to contact */}
                        <Link href='#contact' className="w-[14.375rem] h-auto lg:h-[4.5rem] mb-6 md:mb-0 md:me-[2.6rem] px-[0.5625rem] py-3 lg:py-6 rounded-2xl lg:rounded-[24px] bg-[#FF3131] drop-shadow-[5px_5px_0_rgba(0,0,0,0.25)] flex justify-center items-center hover:scale-105 cursor-pointer">
                            <p className="text-white text-center text-lg lg:text-xl 2xl:text-[1.5rem] lg:leading-[0.9375rem] font-semibold drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)]">Направи заявка</p>
                        </Link>

                        {/* btn to services */}
                        <Link href='#services' className="flex justify-center items-center hover:scale-105 cursor-pointer">
                            <p className="me-2 text-white text-center text-lg lg:text-xl 2xl:text-2xl font-semibold leading-[1.875rem] tracking-tight underline">Нашите услуги</p>
                            <Image
                                src={hero_arrow}
                                alt=""
                                width='1.875rem'
                                height='1.875rem'
                                priority
                            />
                        </Link>

                    </div>
                </div>

                {/* Right Half */}
                <div className="w-[49%] hidden lg:flex justify-start items-center">
                    <Image
                        src={hero_img}
                        alt=""
                        // width='38.3125rem'
                        // height='47.9375rem'
                        width={613}
                        height={767}
                        priority
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero