export const BackgroundVideo = () => {
    return (
        <section className="fixed flex justify-center p-0 bg-background w-full h-lvh z-0">
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
        </section>
    )
}