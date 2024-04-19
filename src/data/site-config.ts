export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'ANTI-VILLAIN',
    subtitle: 'Portfolio of Shawn Coots',
    description: 'The Portfolio of Shawn Coots',
    image: {
        src: '/img/content-index.webp',
        alt: 'ANTI-VILLAIN'
    },
    logo: {
        src: '/img/logo.svg',
        alt: 'ANTI-VILLAIN'
    },
    headerNavLinks: [
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Articles',
            href: '/blog'
        },
        {
            text: 'About',
            href: '/about'
        }
    ],
    footerNavLinks: [
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Articles',
            href: '/blog'
        },{
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    socialLinks: [
        {
            text: 'GitHub',
            href: 'https://github.com/shawncoots'
        },
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/shawncoots/'
        },
        {
            text: 'Instagram',
            href: 'https://www.instagram.com/cootsdaddy/'
        }
    ],
    hero: {
        title: 'Hello There',
        text: "ANTI-VILLAIN is a fictional imprint I use to publish my creative endeavors. I'm a Product Manager by day, aspiring author/artist/musician by night. In my career I've worked as a designer, developer, and product leader. This blog is as random as my interests, so thanks for visiting!",
        image: {
            src: '/img/content-index.webp',
            alt: 'ANTI-VILLAIN'
        },
        actions: [
            {
                text: 'Contact Me',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        title: 'Subscribe to the Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
