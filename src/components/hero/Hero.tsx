import HeroDescription from './Description';
import HeroTypewriter from './Typewriter';
import Galaxy from '@/blocks/Backgrounds/Galaxy/Galaxy';

const Hero = () => {
    return (
        <section
            id='me'
            className="relative w-full p-0 bg-background h-lvh z-0"
        >
            {/* Galaxy background */}
            <div className="absolute inset-0 w-full h-full z-0">
                <Galaxy
                    mouseInteraction={false}
                    mouseRepulsion={false}
                    density={0.2}
                    glowIntensity={0.2}
                    saturation={0.7}
                    hueShift={70}
                    twinkleIntensity={0.2}
                    rotationSpeed={0}
                    starSpeed={1}
                    speed={0.5}
                    transparent={true}
                />
            </div>

            <div className="relative flex flex-col z-50 h-full justify-center items-center">
                <h1 className='font-alt font-extralight uppercase text-2xl md:text-5xl 4k:text-9xl text-center text-default'>Szymon Samus</h1>
                <HeroTypewriter text={"Full-Stack Developer"} />
                <HeroDescription
                    text="I am a Junior Software Developer with a passion for bringing ideas to life. Constantly staying updated on the latest trends and eager to contribute to innovative projects."
                    className="font-alt text-default px-8 md:px-64 md:text-xl text-center"
                />
            </div>
        </section>
    )
}



export default Hero;