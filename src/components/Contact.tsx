'use client';
import React, { useState } from 'react';
import { Textarea } from '@/components/ui/textarea'

export const Contact: React.FC = () => {
    const [result, setResult] = useState<string | null>(null);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setResult('Submitting...');
        const form = event.currentTarget;
        const formData = new FormData(event.currentTarget);

        formData.append('access_key', process.env.NEXT_PUBLIC_CONTACT_API || '');

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
    }


    return (
        <section id="contact" className="relative flex flex-col items-center justify-center mx-auto px-4 h-lvh w-full bg-foreground">
            {/* Background gradient at top */}
            <div className="absolute left-0 right-0 top-0 h-32 pointer-events-none z-20 bg-gradient-to-b from-background to-foreground md:h-[200px]" />

            {/* Contact form using formsubmit to handle emails */}
            <form onSubmit={handleSubmit} className="flex flex-col text-default bg-background p-8 rounded-lg shadow-lg w-full max-w-md mx-auto z-30 gap-4">
                <h2 className="text-3xl mb-4 justify-center text-center font-alt font-light uppercase text-pop">Reach Out!</h2>
                <input type="text" name="name" placeholder="Name" required className="bg-foreground p-2 rounded-full" />
                <input type="email" name="email" placeholder="Email" required className="bg-foreground p-2 rounded-full" />
                <Textarea name="message" minLength={25} placeholder="Your Message" required className="bg-foreground p-2 rounded-lg" />

                {/* Submit button */}
                <button type="submit" className="bg-pop text-background p-2 rounded-full">Send</button>
            </form>
            <span>{result}</span>

            {/* Gradient transition at bottom */}
            <div className="absolute left-0 right-0 bottom-0 h-32 pointer-events-none z-20 bg-gradient-to-t from-background to-foreground md:h-[200px]" />
        </section>
    );
}