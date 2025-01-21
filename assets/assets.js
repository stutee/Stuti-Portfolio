import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import UH_logo from './UH_logo.png';
import TU_logo from './TU_logo.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import logo_stuti from './logostuti.png';
import sp_logo from './sp_logo.png';
import Daraz_logo from './Daraz_Logo.png';
import leapfrog_logo from './leapfrog_logo.png'
import nodejs_logo from './nodejs_logo.png'
import html_logo from './html_logo.png'
import css_logo from './css_logo.png'
import javascript_logo from './Javascript_logo.png'
import python_logo from './python_logo.png'
import R_logo from './R_logo.png'
import react_logo from './react_logo.png'
import nextjs_logo from './nextjs_logo.png'
import mongodb_logo from './mongodb_logo.png'
import express_logo from './express_logo.png'

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    Daraz_logo,
    TU_logo,
    UH_logo,
    sp_logo,
    leapfrog_logo,
    html_logo,
    css_logo,
    javascript_logo,
    python_logo,
    R_logo,
    nodejs_logo,
    react_logo,
    nextjs_logo,
    mongodb_logo,
    express_logo,

    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_stuti,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
    {
        title: 'Frontend project',
        description: 'Web Design',
        bgImage: '/work-1.png',
    },
    {
        title: 'Geo based app',
        description: 'Mobile App',
        bgImage: '/work-2.png',
    },
    {
        title: 'Photography site',
        description: 'Web Design',
        bgImage: '/work-3.png',
    },
    {
        title: 'UI/UX designing',
        description: 'UI/UX Design',
        bgImage: '/work-4.png',
    },
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
    { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
    { icon: assets.ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
    { icon: assets.graphics_icon, title: 'Graphics design', description: 'Creative design solutions to enhance visual communication...', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript React Js, Next Js' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Computer Science' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const eduList = [
    { icon: assets.UH_logo, iconDark: assets.UH_logo, universityName: 'University of Houston', title: 'Masters in Computer Science', description: 'Artificial Intelligence, Machine Learning,  Data Mining, Digital Image Processing, Cloud Computing, Visualization, Statistical Methods in Research, Advanced Numerical Analysis, Cybersecurity' },
    { icon: assets.TU_logo, iconDark: assets.TU_logo,universityName: 'Tribhuvan University: IOE Pulchowk Campus', title: 'Bachelors in Electronics and Communication Engineering', description: 'Object Oriented Programming, Engineering Mathematics (Linear Algebra, Calculus I & II), Discrete Structure, Probability and Statistics, Artificial Intelligence, Data Mining, Digital Signal Processing, Signal Analysis, Database Management Systems, Electronic Devices and Circuits, Embedded Systems, Microprocessor, Computer Network' },
    //{ icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];

export const experiences = [
    {
      icon: assets.sp_logo, 
      iconDark: assets.sp_logo,
      title: "Product Management Associate Intern",
      company: "S&P Global",
      duration: "Jun 2024 - Aug 2024",
      points: [
        "Created Upstream Emission dashboard in Spotfire, utilizing SQL for analysis and visualization to present to clients.",
        "Performed SQL queries in Snowflake to extract data on gasses emitted during the oil extraction process.",
        "Trained machine learning model using the XGBoost algorithm to select attributes for effectively predicting the optimal position of drilling wells for high production.",
        "Collaborated with the research team to cross-check data obtained from various wells.",
        "Participated in daily sprints (Agile methodology) with Python developers in Poland to engage in daily updates on user stories.",
      ],
    },
    {
      icon: assets.UH_logo, // Add the company logo or image path
      iconDark: assets.UH_logo,
      title: "Virtual Reality Research Assistant",
      company: "University of Houston",
      duration: "Aug 2023 - May 2024",
      points: [
        "Developed an immersive Metaverse application for Meta Quest 2 & 3 (Oculus).",
        "Integrated LiDAR point clouds into mesh environments in Unity, developing interactive features, such as distance calculations, multiplayer support, voice chat, and intuitive UIs for construction engineers and workers.",
      ],
    },

    {
        icon: assets.Daraz_logo, // Add the company logo or image path
        iconDark: assets.Daraz_logo,
        title: "Artificial Intelligence Trainer",
        company: "Daraz (Alibaba Group)",
        duration: "Jul 2022 - Sept 2022",
        points: [
          "Enhanced chatbot resolution rate by 5% through data analysis using SQL, Excel, and Pandas.",
          "Annotated FAQs to improve the chatbot's knowledge base, collaborating with Alibaba's Artificial Intelligence team.",
          "Launched a trial for a 'smart live agent' feature, influencing strategies in regional markets.",
          "Refined user experiences and improved the chatbot's user interface for better usability and met the KPI every time."
        ],
      },
      {
        icon: assets.leapfrog_logo, // Add the company logo or image path
        iconDark: assets.leapfrog_logo,
        title: "Software Engineer Intern",
        company: "Leapfrog Technology Inc",
        duration: "May 2022 - June 2022",
        points: [
          "Prepared responsive design of various web pages from Figma using HTML, CSS, and Javascript.",
          "Algorithm implementation for game development using javascript, HTML, CSS, Node.js and Express.",
        ],
      },
  ];

  export const skillsData = [
    {
      category: "Programming Languages",
      items: [
        { name: "Python", icon: assets.python_logo },
        { name: "R", icon: assets.R_logo},
        { name: "C#", icon: assets.UH_logo },
        { name: "JavaScript", icon: assets.javascript_logo },
        { name: "C++", icon: assets.UH_logo },
      ],
    },
    {
      category: "Full-Stack Development",
      items: [
        { name: "HTML", icon: assets.html_logo },
        { name: "CSS", icon: assets.css_logo},
        { name: "React", icon: assets.react_logo},
        { name: "Next.js", icon: assets.nextjs_logo},
        { name: "Node.js", icon: assets.nodejs_logo },
        { name: "mongoDb", icon: assets.mongodb_logo },
        { name: "express", icon: assets.express_logo }
      ],
    },
    {
      category: "Machine Learning / AI",
      items: [
        { name: "PyTorch", icon: assets.UH_logo},
        { name: "TensorFlow", icon: assets.UH_logo},
        { name: "Computer Vision", icon: assets.UH_logo},
        { name: "Generative AI", icon: assets.UH_logo},
      ],
    },
    {
      category: "Cloud Technologies (AWS)",
      items: [
        { name: "EC2", icon: assets.UH_logo},
        { name: "S3", icon: assets.UH_logo },
        { name: "SageMaker", icon: assets.UH_logo},
        { name: "Lambda", icon: assets.UH_logo },
      ],
    },
    {
      category: "Data Analysis",
      items: [
        { name: "SQL", icon: assets.UH_logo},
        { name: "Snowflake", icon: assets.UH_logo},
        { name: "Tableau", icon: assets.UH_logo},
        { name: "Pandas", icon: assets.UH_logo },
      ],
    },
  ];