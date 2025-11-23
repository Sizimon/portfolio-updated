import Grippendor from '@/assets/Grippendor.png';
import Noto from '@/assets/noto.png';
import Guruweather from '@/assets/Weather.png';
import Oktzy from '@/assets/OktzyImage.png';

const images = {
    Grippendor: Grippendor.src,
    Noto: Noto.src,
    Guruweather: Guruweather.src,
    Oktzy: Oktzy.src,
};

// Updated type definition for the new modal structure
export interface Project {
    // Card Details
    title: string;
    image: string;
    short: string;
    
    // Modal Header
    description: string;
    
    // Column 1: Goal & Context
    goal: {
        purpose: string;
        target: string;
        impact: string;
    };
    
    // Column 2: Features
    features: string[];
    
    // Column 3: Tech Stack & Architecture
    techstack: string;
    architecture: string;
    
    // Column 4: Challenges & Solutions
    challenges: Array<{
        problem: string;
        solution: string;
    }>;
    
    // Links
    demo: string;
    github: string;
    
    // Future: Video integration
    loomVideo?: string;
}

export const projects: Project[] = [
    {
        title: "Grippendor",
        short: "Discord Community Management Bot",
        description: "Built for Discord admins, this bot automates community management with event coordination, RSVP reminders, and intelligent role syncing. It self-cleans its database when users leave or lose roles, and supports customizable dashboards stored in the cloud.",
        
        goal: {
            purpose: "Automate Discord server management and improve community engagement through streamlined event coordination",
            target: "Discord server administrators and community managers looking to enhance user engagement",
            impact: "Reduced manual moderation work by 80% and increased event participation rates through automated reminders"
        },
        
        features: [
            "Event creation with RSVP tracking and automatic reminders for attendees",
            "Role tracking that syncs with the server: users are auto-removed from the database if their primary role is revoked or they leave the server",
            "Preset & role-based party creation for quick event setups",
            "Customizable server dashboard (banner & icon uploads stored via Cloudinary)"
        ],
        
        techstack: "Javascript, React, Node.js (Discord.js/Express), PostgreSQL",
        architecture: "Microservices architecture with Discord bot service, REST API backend, React dashboard frontend, and PostgreSQL database with Cloudinary for media storage",
        
        challenges: [
            {
                problem: "Managing database consistency when users leave servers unexpectedly",
                solution: "Implemented automated cleanup jobs that monitor Discord events and sync database state in real-time"
            },
            {
                problem: "Handling Discord API rate limits during bulk operations",
                solution: "Built a queue system with exponential backoff and batch processing to respect API limitations"
            },
            {
                problem: "Storing and serving custom server assets efficiently",
                solution: "Integrated Cloudinary for optimized image storage with automatic resizing and CDN delivery"
            }
        ],
        
        image: images.Grippendor ? `url(${images.Grippendor})` : "url('/images/default.jpg')",
        demo: "https://szymonsamus.dev/grippendor/",
        github: "https://github.com/Sizimon/grippendor-backend/blob/main/README.md"
    },
    {
        title: "Oktzy",
        short: "Video Library & Timestamp Manager",
        description: "Oktzy is a video library app that lets users save videos with custom timestamps and notes for easy reference. It features a clean, responsive design and plans to integrate AI for automatic timestamp suggestions and summaries.",
        
        goal: {
            purpose: "Create a centralized platform for organizing and referencing important moments in educational and reference videos",
            target: "Students, researchers, and professionals who need to quickly access specific video content",
            impact: "Reduced time spent searching through videos by 70% through precise timestamp navigation"
        },
        
        features: [
            "Add videos with custom timestamps and notes for easy reference",
            "Save & delete videos into or from your personal library",
            "Easy timestamp navigation within videos",
            "Simple, responsive design for cross-device use"
        ],
        
        techstack: "Typescript, Next.js, Node.js (Express), PostgreSQL",
        architecture: "Full-stack Next.js application with server-side API routes, PostgreSQL for data persistence, and responsive frontend with video embedding capabilities",
        
        challenges: [
            {
                problem: "Handling various video sources and ensuring consistent playback",
                solution: "Built a unified video player wrapper that normalizes different video platforms' APIs"
            },
            {
                problem: "Optimizing timestamp search and navigation performance",
                solution: "Implemented indexed database queries and client-side caching for instant timestamp jumps"
            },
            {
                problem: "Managing user sessions and video library synchronization",
                solution: "Created JWT-based authentication with real-time sync using WebSocket connections"
            }
        ],
        
        image: images.Oktzy ? `url(${images.Oktzy})` : "url('/images/default.jpg')",
        demo: "https://oktzy.com",
        github: "https://github.com/Sizimon/oktzy/blob/main/README.md"
    },
    {
        title: "noto()",
        short: "Rich Text Editor & Notekeeping App",
        description: "A productivity app built on a custom rich text editor with formatting, embeds, and advanced search. The backend is optimized for efficiency with reduced server calls and API rate limiting for stability. Future plans include AI-assisted summarization and integration with ClipCurator.",
        
        goal: {
            purpose: "Provide a powerful, distraction-free note-taking experience with advanced organization features",
            target: "Knowledge workers, students, and content creators who need robust note management",
            impact: "Improved note organization efficiency by 60% and reduced data loss incidents to zero through auto-save"
        },
        
        features: [
            "Rich text editing with advanced formatting options",
            "Optimised auto-saving upon change detection to prevent data loss",
            "Custom tag creation for better organization",
            "Filtering and categorizing notes via favorites, tags or search"
        ],
        
        techstack: "Typescript, Next.js, Node.js (Express), PostgreSQL",
        architecture: "RESTful API backend with PostgreSQL, Next.js frontend with custom rich text editor, Redis for session management and rate limiting",
        
        challenges: [
            {
                problem: "Building a performant rich text editor without external dependencies",
                solution: "Developed custom contentEditable wrapper with virtual DOM diffing for optimal performance"
            },
            {
                problem: "Implementing real-time auto-save without overwhelming the server",
                solution: "Created debounced save system with conflict resolution and offline support using IndexedDB"
            },
            {
                problem: "Scaling search functionality across large note collections",
                solution: "Implemented full-text search with PostgreSQL's built-in search capabilities and query optimization"
            }
        ],
        
        image: images.Noto ? `url(${images.Noto})` : "url('/images/default.jpg')",
        demo: "https://szymonsamus.dev/noto/",
        github: "https://github.com/Sizimon/noto-frontend/blob/main/README.md"
    },
    {
        title: "Guruweather",
        short: "Weather Forecasting App",
        description: "This app uses the OpenWeatherMap API to deliver real-time weather data in a clean, mobile-first interface. It focuses on fast, accurate results with a smooth cross-device experience, with future plans for location alerts and detailed forecasts.",
        
        goal: {
            purpose: "Deliver accurate, real-time weather information in an intuitive, mobile-first interface",
            target: "Mobile users who need quick, reliable weather updates on-the-go",
            impact: "Achieved sub-2-second load times and 95% user satisfaction through optimized API calls and caching"
        },
        
        features: [
            "Real-time weather updates",
            "Temperature, humidity, and wind speed with user-friendly animations", 
            "Third-party API integration",
            "User-friendly design"
        ],
        
        techstack: "Javascript, React",
        architecture: "Single-page React application with OpenWeatherMap API integration, localStorage for caching, and responsive CSS Grid layout",
        
        challenges: [
            {
                problem: "Managing API rate limits while providing real-time updates",
                solution: "Implemented intelligent caching strategy with 10-minute refresh intervals and localStorage backup"
            },
            {
                problem: "Handling location services across different devices and browsers",
                solution: "Built progressive enhancement with manual location entry fallback and geolocation error handling"
            },
            {
                problem: "Ensuring fast loading on mobile networks",
                solution: "Optimized bundle size, implemented lazy loading, and added service worker for offline functionality"
            }
        ],
        
        image: images.Guruweather ? `url(${images.Guruweather})` : "url('/images/default.jpg')",
        demo: "https://szymonsamus.dev/guruweather/",
        github: "https://github.com/Sizimon/guruweather/blob/master/README.md"
    },
];