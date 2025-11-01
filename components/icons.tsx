
import React from 'react';

type IconProps = {
  className?: string;
};

export const ClipboardIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C6.095 4.01 5.25 4.973 5.25 6.108V18.75c0 1.243.87 2.25 1.969 2.25H12c.832 0 1.6-.364 2.122-.968" />
  </svg>
);

export const CalendarIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18" />
  </svg>
);

export const ChartBarIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>
);

export const ChatBubbleIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.455.09-.934.09-1.425v-2.909c0-.909.737-1.646 1.646-1.646h4.5c.909 0 1.646.737 1.646 1.646v2.909c0 .533.078 1.053.234 1.541a4.473 4.473 0 001.258 2.215.5.5 0 01.04.706c-.15.185-.357.34-.58.459a9.764 9.764 0 01-2.298.337c-4.97 0-9-3.694-9-8.25s4.03-8.25 9-8.25 9 3.694 9 8.25z" />
  </svg>
);

export const CheckIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const InstagramIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.85-.07-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.585.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.441c-3.149 0-3.509.011-4.73.069-2.734.124-3.953 1.35-4.077 4.077-.058 1.22-.069 1.58-.069 4.73s.011 3.509.069 4.73c.124 2.734 1.343 3.953 4.077 4.077 1.22.058 1.58.069 4.73.069s3.509-.011 4.73-.069c2.734-.124 3.953-1.343 4.077-4.077.058-1.22.069-1.58.069-4.73s-.011-3.509-.069-4.73c-.124-2.734-1.343-3.953-4.077-4.077-1.22-.058-1.58-.069-4.73-.069zm0 4.398c-2.403 0-4.35 1.947-4.35 4.35s1.947 4.35 4.35 4.35 4.35-1.947 4.35-4.35-1.947-4.35-4.35-4.35zm0 7.25c-1.597 0-2.9-1.303-2.9-2.9s1.303-2.9 2.9-2.9 2.9 1.303 2.9 2.9-1.303 2.9-2.9 2.9zm6.35-7.858c-.621 0-1.125.504-1.125 1.125s.504 1.125 1.125 1.125 1.125-.504 1.125-1.125-.504-1.125-1.125-1.125z" />
  </svg>
);

export const StravaIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M15.387 17.944l-3.326-6.67H9.25v6.67h-2.5V6.056h5.237l4.026 8.073h.001L20.04 6.056h2.5v11.888h-2.5v-5.237l-4.653 9.333z" />
  </svg>
);

export const YouTubeIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12.04 4.84A6.2 6.2 0 005.88 11.1a6.2 6.2 0 006.16 6.26 6.2 6.2 0 006.16-6.26 6.2 6.2 0 00-6.16-6.26zM10.14 14.4v-6.6l5.34 3.3-5.34 3.3z" />
        <path d="M21.58 7.02a2.52 2.52 0 00-1.77-1.77C18.25 4.8 12 4.8 12 4.8s-6.25 0-7.81.45a2.52 2.52 0 00-1.77 1.77C2 8.58 2 12 2 12s0 3.42.42 4.98a2.52 2.52 0 001.77 1.77c1.56.45 7.81.45 7.81.45s6.25 0 7.81-.45a2.52 2.52 0 001.77-1.77c.42-1.56.42-4.98.42-4.98s0-3.42-.42-4.98z" />
    </svg>
);

export const TrophyIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9a9.75 9.75 0 100-13.5h9a9.75 9.75 0 100 13.5zM10.5 6.75h3v6h-3v-6z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75V21m-3.75-7.5H6m12 0h-2.25" />
    </svg>
);

export const StarIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.31h5.408a.563.563 0 01.31.96l-4.373 3.184a.563.563 0 00-.18.62l1.625 4.881a.563.563 0 01-.812.622L12 15.34l-4.573 3.321a.563.563 0 01-.812-.622l1.625-4.881a.563.563 0 00-.18-.62l-4.373-3.184a.563.563 0 01.31-.96h5.408a.563.563 0 00.475-.31L11.48 3.5z" />
    </svg>
);

export const PlusCircleIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export const BikeIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18.75a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 18.75a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 10.5h.01M16.5 10.5H18a1.5 1.5 0 011.5 1.5v.659a3.752 3.752 0 01-1.153 2.642l-2.296 2.296" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 15l-4.125-4.125" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 14.25v-3.75a1.5 1.5 0 011.5-1.5h1.125" />
  </svg>
);

export const SwimIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 10.5c3.866 0 7.824.96 11.25 2.25 3.426 1.29 7.176 2.25 11.25 2.25" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15c3.866 0 7.824.96 11.25 2.25 3.426 1.29 7.176 2.25 11.25 2.25" />
  </svg>
);

export const RunIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 4.5a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 10.5l-1.5 1.5 3.75 3.75 1.5-1.5m-3-6l1.5-1.5 5.25 5.25-1.5 1.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 15.75l-1.5 1.5-3.75-3.75L11.25 12" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5l-1.5 1.5-3.75-3.75L15.75 9" />
  </svg>
);