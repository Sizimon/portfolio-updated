import Grippendor from '@/assets/Grippy_1.png';
import Noto from '@/assets/noto.png';
import Guruweather from '@/assets/Weather_3.png';
import Oktzy from '@/assets/OktzyImage.png';

const images = {
    Grippendor: Grippendor.src,
    Noto: Noto.src,
    Guruweather: Guruweather.src,
    Oktzy: Oktzy.src,
};

export const projects: Array<{
    // Card Details
    title: string;
    image: string;
    short: string;
    
    // Expanded Details
    description: string;
    features: string[];
    techstack: string;
    challenges?: string[];
    demo: string;
    github: string;
    // Add video demo link later?
}> = [
        {
            title: "Grippendor",
            short: "Discord Community Management Bot",
            description: `
                Built for Discord admins, this bot automates community management with event coordination, RSVP reminders, and intelligent role syncing. 
                It self-cleans its database when users leave or lose roles, and supports customizable dashboards stored in the cloud.
            `,
            features: [
                "Event creation with RSVP tracking and automatic reminders for attendees",
                "Role tracking that syncs with the server: users are auto-removed from the database if their primary role is revoked or they leave the server",
                "Preset & role-based party creation for quick event setups",
                "Customizable server dashboard (banner & icon uploads stored via Cloudinary)"
            ],
            techstack: "Javascript, React, Node.js (Discord.js/Express), PostgreSQL",
            image: images.Grippendor ? `url(${images.Grippendor})` : "url('/images/default.jpg')",
            demo: "https://szymonsamus.dev/grippendor/",
            github: "https://github.com/Sizimon/grippendor-backend/blob/main/README.md"
        },
        {
            title: "Oktzy",
            short: "Video Library & Timestamp Manager",
            description: `
                Oktzy is a video library app that lets users save videos with custom timestamps and notes for easy reference. 
                It features a clean, responsive design and plans to integrate AI for automatic timestamp suggestions and summaries.
            `,
            features: [
                "Add videos with custom timestamps and notes for easy reference",
                "Save & delete videos into or from your personal library",
                "Easy timestamp navigation within videos",
                "Simple, responsive design for cross-device use"
            ],
            techstack: "Typescript, Next.js, Node.js (Discord.js/Express), PostgreSQL",
            image: images.Oktzy ? `url(${images.Oktzy})` : "url('/images/default.jpg')",
            demo: "https://oktzy.com",
            github: "https://github.com/Sizimon/oktzy/blob/main/README.md"
        },
        {
            title: "noto()",
            short: "Rich Text Editor & Notekeeping App",
            description: `
                A productivity app built on a custom rich text editor with formatting, embeds, and advanced search. 
                The backend is optimized for efficiency with reduced server calls and API rate limiting for stability. 
                Future plans include AI-assisted summarization and integration with "ClipCurator".
            `,
            features: [
                "Rich text editing with advanced formatting options.",
                "Optimised auto-saving upon change detection to prevent data loss",
                "Custom tag creation for better organization",
                "Filtering and categorizing notes via favorites, tags or search",
            ],
            techstack: "Typescript, Next.js, Node.js (Express), PostgreSQL",
            image: images.Noto ? `url(${images.Noto})` : "url('/images/default.jpg')",
            demo: "https://szymonsamus.dev/noto/",
            github: "https://github.com/Sizimon/noto-frontend/blob/main/README.md"
        },
        {
            title: "Guruweather",
            short: "Weather Forecasting App",
            description: `
                This app uses the OpenWeatherMap API to deliver real-time weather data in a clean, mobile-first interface. 
                It focuses on fast, accurate results with a smooth cross-device experience, with future plans for location alerts and detailed forecasts.
            `,
            features: [
                "Real-time weather updates",
                "Temperature, humidity, and wind speed with user-friendly animations",
                "Third-party API integration",
                "User-friendly design"
            ],
            techstack: "Javascript, React",
            image: images.Guruweather ? `url(${images.Guruweather})` : "url('/images/default.jpg')",
            demo: "https://szymonsamus.dev/guruweather/",
            github: "https://github.com/Sizimon/guruweather/blob/master/README.md"
        },
    ];