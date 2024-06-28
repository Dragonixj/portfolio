import {
    git,
    html,
    javascript,
    reactjs,
    tailwind,
    css,
    testimage,
    shell,
} from '../assets/';

const projects = [
    {
        title: 'AirBnB clone v3',
        desc: 'An airbnb clone',
        techstack: [
            {
                name: 'python',
                color: 'text-[#ffd43b]',
            },
            {
                name: 'html',
                color: 'text-[#e34f26]',
            },
            {
                name: 'css',
                color: 'text-[#1572b6]',
            },
        ],
        open: 'site for deployments',
        link: 'https://github.com/m0nztrum/AirBnB_clone_v3',
        image: testimage,
    },
    {
        title: 'AirBnB clone v4',
        desc: 'An airbnb clone',
        techstack: [
            {
                name: 'python',
                color: 'text-[#ffd43b]',
            },
            {
                name: 'html',
                color: 'text-[#e34f26]',
            },
            {
                name: 'css',
                color: 'text-[#1572b6]',
            },
        ],

        open: 'site for deployments',
        link: 'https://github.com/m0nztrum/AirBnB_clone_v4',
        image: testimage,
    },
    {
        title: 'Simple shell',
        desc: 'A simple unix command line interpreter written fully in C. It prompts the user to input commands, executes and gives output.',
        techstack: [
            {
                name: 'C',
                color: 'text-[#a8b9cc]',
            },
        ],

        open: 'site for deployments',
        link: 'https://github.com/m0nztrum/simple_shell',
        image: shell,
    },
    {
        title: 'portfolio',
        desc: 'Personal portfolio website showcasing my skills and projects.',
        techstack: [
            {
                name: 'react',
                color: 'text-[#61dafb]',
            },
            {
                name: 'tailwindcss',
                color: 'text-[#38bdf8]',
            },
            {
                name: 'javascript',
                color: 'text-[#f7df1e]',
            },
        ],
        open: 'site for deployments',
        link: 'https://github.com/m0nztrum/portfolio',
        image: testimage,
    },
    {
        title: 'flyfare',
        desc: 'Web app to search for cheap flights',
        techstack: [
            {
                name: 'react',
                color: 'text-[#61dafb]',
            },
            {
                name: 'tailwindcss',
                color: 'text-[#38bdf8]',
            },
            {
                name: 'javascript',
                color: 'text-[#f7df1e]',
            },
        ],
        open: 'deployed site',
        link: 'https://github.com/m0nztrum/flyfare',
        image: testimage,
    },
];

const technologies = [
    {
        name: 'HTML 5',
        icon: html,
    },
    {
        name: 'CSS 3',
        icon: css,
    },
    {
        name: 'JavaScript',
        icon: javascript,
    },
    {
        name: 'React JS',
        icon: reactjs,
    },
    {
        name: 'Tailwind CSS',
        icon: tailwind,
    },
    {
        name: 'git',
        icon: git,
    },
];

export { projects, technologies };
