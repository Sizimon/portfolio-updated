'use client';

import { ThemeProvider } from 'next-themes';

export default function CustomThemeProvider({ 
    children 
}: {
    children: React.ReactNode 
}) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            themes={['light']}
            disableTransitionOnChange={false}
        >
            {children}
        </ThemeProvider>
    );
}