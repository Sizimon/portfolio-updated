import { AlternatingQuotes } from './AlternatingQuotes';
import HeroDescription from './Description';
import HeroTypewriter from '../../shared/Typewriter';
// import Galaxy from '@/blocks/Backgrounds/Galaxy/Galaxy';

const Hero = () => {
    return (
        <section
            id='me'
            className="relative flex justify-center w-full h-lvh z-0"
        >
            <div className="relative flex flex-col z-50 h-full w-5/6 md:w-4/6  justify-center items-center">
                <h1 className='font-alt font-extralight uppercase text-2xl md:text-5xl uwq:!text-7xl text-center text-pop'>Szymon Samus</h1>
                <HeroTypewriter text={"Full-Stack Developer"} />
                <HeroDescription
                    text="Full Stack Javascript Developer with a passion for overseeing projects from concept to deployment."
                    className="font-alt text-default px-8 md:text-xl uwq:!text-3xl text-center"
                />
                <AlternatingQuotes />
            </div>
        </section>
    )
}



export default Hero;