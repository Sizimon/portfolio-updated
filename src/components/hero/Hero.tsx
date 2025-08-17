import { AlternatingQuotes } from './AlternatingQuotes';
import HeroDescription from './Description';
import HeroTypewriter from '../../shared/Typewriter';
// import Galaxy from '@/blocks/Backgrounds/Galaxy/Galaxy';

const Hero = () => {
    return (
        <section
            id='me'
            className="relative flex justify-center p-0 bg-background w-full h-lvh z-0"
        >
            {/* Banner Video */}
            <div className="absolute inset-0 w-full h-full z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className='w-full h-full object-cover opacity-65 blur-xs'
                >
                    <source src="/banner.webm" type="video/webm" />
                </video>
            </div>

            <div className="relative flex flex-col z-50 h-full w-5/6 md:w-4/6  justify-center items-center">
                <h1 className='font-alt font-extralight uppercase text-UWQ md:text-5xl UWQ:text-8xl text-center text-pop'>Szymon Samus</h1>
                <HeroTypewriter text={"Full-Stack Developer"} />
                <HeroDescription
                    text="Full Stack Developer blending creativity and code to turn concepts into working, impactful apps. Learning fast, building faster."
                    className="font-alt text-default px-8 md:text-xl UWQ:text-5xl text-center"
                />
                <AlternatingQuotes />
            </div>
        </section>
    )
}



export default Hero;