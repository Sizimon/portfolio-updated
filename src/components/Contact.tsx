'use client';
import React, { useState } from 'react';
import { Textarea } from '@/components/ui/textarea'
import { ClipLoader } from 'react-spinners';

export const Contact: React.FC = () => {
    const [result, setResult] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        setLoading(true);
        event.preventDefault();
        setResult('Submitting...');
        const form = event.currentTarget;
        const formData = new FormData(event.currentTarget);

        formData.append('access_key', '0a5ad6f0-1d27-4a48-bda3-504b7807a07a');

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();
            if (data.success) {
                setResult('Message sent successfully!');
                form.reset(); // Reset the form
            } else {
                console.log("Error:", data);
                setResult('Failed to send message. Please try again later.');
            }
        } catch (error) {
            console.log("Error:", error);
            setResult('An error occurred. Please try again later.');    
        }
        setLoading(false);
    }

    return (
        <section id="contact" className="relative flex flex-row items-center justify-center mx-auto px-4 h-lvh w-full bg-foreground">
            {/* Background gradient at top */}
            <div className="absolute left-0 right-0 top-0 h-32 pointer-events-none z-20 bg-gradient-to-b from-background to-foreground md:h-[200px]" />

            {/* Contact form using formsubmit to handle emails */}
            <form onSubmit={handleSubmit} className="flex flex-col text-default bg-background p-8 2xl:p-12 rounded-lg 2xl:rounded-2xl shadow-lg w-full 2xl:min-h-4/8 max-w-md 2xl:max-w-4xl z-30 gap-4">
                {/* Result message */}
                {result && <p className="text-center">{result}</p>}
                <h2 className="text-3xl 2xl:text-5xl mb-4 justify-center text-center font-alt font-light uppercase text-pop">Contact me!</h2>
                <input type="text" name="name" placeholder="Name" required className="bg-foreground/20 p-2 rounded-full text-pop caret-pop 2xl:text-4xl" />
                <input type="email" name="email" placeholder="Email" required className="bg-foreground/20 p-2 rounded-full text-pop caret-pop 2xl:text-4xl" />
                <Textarea name="message" minLength={25} placeholder="Your Message" required className="flex-1 bg-foreground/20 p-2 rounded-2xl text-pop caret-pop 2xl:text-4xl" />

                {/* Submit button */}
                { loading ? (
                    <button type='submit' disabled className="bg-pop text-background p-2 rounded-full cursor-not-allowed opacity-50 transition-all duration-300 ease-in-out">
                        {<ClipLoader size={20} color="#000000" />}
                    </button>
                ) : (
                    <button type="submit" className="2xl:text-4xl mx-auto w-1/2 bg-pop text-background p-2 rounded-full hover:brightness-110 cursor-pointer transition-all duration-300 ease-in-out">Send</button>
                )}
            </form>
            {/* Gradient transition at bottom */}
            <div className="absolute left-0 right-0 bottom-0 h-32 pointer-events-none z-20 bg-gradient-to-t from-background to-foreground md:h-[200px]" />
        </section>
    );
}