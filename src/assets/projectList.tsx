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
            purpose: "To create a modular, automated Discord bot that streamlines community management for gaming groups by handling roles, events, attendance, and analytics with minimal admin effort. The goal is to replace manual coordination with structured, automated systems.",
            target: "Grippendor is designed for gaming communities of any size—from small friend groups to large milsim or MMO communities—who need reliable tools for organising events, forming teams, and tracking participation. It supports multiple Discord servers simultaneously, each with fully isolated configurations.",
            impact: "Grippendor reduces admin workload, improves player engagement, and provides transparent, data-driven insights into community activity. By automating repetitive tasks, communities can focus more on gameplay and less on coordination, ultimately increasing participation, improving event planning, and strengthening long-term retention."
        },

        features: [
            "Dynamic role creation, editing, and deletion for matchmaking and party roles",
            "Role presets for quick squad formations",
            "Event creation and scheduling via dashboard or Discord commands",
            "Automated event announcements with role pings and RSVP tracking",
            "Event reminder notifications for RSVPed users",
            "Dashboard with modules for events, analytics and party management",
            "Multi-guild support with isolated settings for each Discord server",
            "Quality-of-life slash commands such as /create-event, /add-roles and /create-preset",
        ],

        techstack: "Typescript, Next.js, Node.js (Discord.js/Express), PostgreSQL",
        architecture: "Microservices architecture with Discord bot service, REST API backend, Next.js/Tailwind dashboard frontend, PostgreSQL database with Cloudinary for media storage, Docker for containerization & AWS for deployment",

        challenges: [
            {
                problem: "Changes made to Roles and Members after guild initialization were not reflected on the frontend unless a full resync was manually triggered",
                solution: "Used Discord.js event listeners to detect role and member updates in real-time, triggering targeted syncs to update only affected data rather than the entire guild"
            },
            {
                problem: "Event creation required multiple manual steps — writing announcements, tagging roles, manually tracking RSVPs — which admins found tedious.",
                solution: "I designed an event pipeline where admins create an event with /create-event, and the bot automatically formats the embed, pings the correct role, and updates RSVPs as users respond. This made event management almost fully automated."
            },
            {
                problem: "Discords rate limits could theoretically be hit if under heavy usage OR cyber attacks.",
                solution: "Used rate limitting libraries and implemented exponential backoff strategies to gracefully handle rate limit responses from the Discord API, ensuring the bot remains functional even under high load."
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
            purpose: "To create a fast, reliable, developer-focused note-taking app with a rich text editor and tags. Noto is built to streamline documentation, planning, and idea capture for software developers without the clutter of traditional note apps.",
            target: "Noto is designed for developers, students, and technical creators who need a flexible workspace to store notes, code snippets, tasks, and project ideas. It supports individuals with large note libraries who require structured filtering, tagging, and future workflow tools.",
            impact: "Noto improves productivity by combining a clean editor and smart organization. It reduces context-switching, prevents data loss with autosave, and helps users maintain long-term project organization. The result is a modern workspace where developers can think, plan, and build efficiently."
        },

        features: [
            "Rich text editor built with TipTap supporting highlights, lists, embeds, and code blocks",
            "Debounced autosave with local backup to prevent data loss",
            "Tag-based organization system with fast filtering and search",
            "Clean two-panel UI designed for developers and technical note-taking",
            "Server-side validation and permission checks for all note actions",
            "Fast loading performance optimized for large note libraries",
            "Dark/light theme for comfortable long-term use",
            "Next.js frontend with Node.js backend and PostgreSQL database"
        ],

        techstack: "Typescript, Next.js, Node.js (Express), PostgreSQL",
        architecture: "RESTful API backend with PostgreSQL, Next.js frontend with custom rich text editor, Redis for session management and rate limiting",

        challenges: [
            {
                problem: "Developers often write long notes, drafts, or code snippets. Without autosave, losing work due to browser refreshes or tab crashes was a significant risk. Autosaving every keystroke, however, caused excessive API load.",
                solution: "I implemented a debounced autosave system backed by local storage caching. Notes are saved locally instantly but synced to the server only after the user pauses typing. This ensures reliability without overwhelming the backend."
            },
            {
                problem: "Users with large note libraries struggled to find relevant content quickly; simple search wasn't enough, and the UI became cluttered with long note lists.",
                solution: "I introduced a tag-based organizational system with dynamic filtering, color-coded tags, and quick-search. Notes are indexed by tag and title for fast queries. This made the workspace scalable even for users with hundreds of notes."
            },
            {
                problem: "Due to the layout, and UI using a lot of openable menus, UI risked overflowing the viewport on smaller screens or being cropped.",
                solution: "Implemented popup menus using portals that render outside the main DOM hierarchy. This ensures menus are always fully visible regardless of their parent container's size or position."
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