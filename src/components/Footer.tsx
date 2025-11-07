import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full mt-12 py-6 border-t border-border flex flex-col items-center text-center text-xs text-muted-foreground z-20">
      <div className="flex flex-row gap-4 mb-2">
        <a href="https://github.com/Sizimon" target="_blank" rel="noopener noreferrer" className="uwq:!text-uwq hover:text-pop transition-colors">GitHub</a>
        <a href="mailto:szymonsamus@gmail.com" className="uwq:!text-uwq hover:text-pop transition-colors">Email</a>
        {/* <a href="https://www.linkedin.com/in/szymonsamus/" target="_blank" rel="noopener noreferrer" className="uwq:!text-3xl hover:text-pop transition-colors">LinkedIn</a> */}
      </div>
      <div className='uwq:!text-uwq'>
        &copy; {new Date().getFullYear()} Szymon Samus &mdash; Built with Next.js & Tailwind CSS
      </div>
    </footer>
  );
};

export default Footer;
