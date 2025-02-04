import UH_logo from './UH_logo.png';
import TU_logo from './TU_logo.png';
import logo_dark from './logo_dark.png';
import profile_img from './profile-img.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
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
import csharp_logo from './csharp_logo.png'
import pytorch_logo from './pytorch_logo.png'
import tensorflow_logo from './tensorflow_logo.png'
import jupyter_logo from './jupyter_logo.png'
import pandas_logo from './pandas_logo.png'
import tableau_logo from './tableau_logo.png'
import mysql_logo from './mysql_logo.png'
import snowflake_logo from './snowflake_logo.png'
import spotfire_logo from './spotfire_logo.png'
import matplotlib_logo from './matplotlib_logo.png'
import skilit_logo from './skilit_logo.png'
import ec2_logo from './ec2_logo.png'
import ecs_logo from './ecs_logo.png'
import ecr_logo from './ecr_logo.png'
import s3_logo from './s3_logo.png'
import sagemaker_logo from './sagemaker_logo.png'
import lambda_logo from './lambda_logo.png'
import cheforge_logo from './cheforge_logo.png'


export const assets = {
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
    csharp_logo,
    pytorch_logo,
    tensorflow_logo,
    jupyter_logo,
    pandas_logo,
    tableau_logo,
    mysql_logo,
    snowflake_logo,
    spotfire_logo,
    matplotlib_logo,
    skilit_logo,
    ec2_logo,
    ecr_logo,
    ecs_logo,
    s3_logo,
    sagemaker_logo,
    lambda_logo,
    cheforge_logo,
    logo_stuti,
    logo_dark,
    profile_img,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    menu_black,
    menu_white,
    close_black,
    close_white,
};

export const eduList = [
    { icon: assets.UH_logo, iconDark: assets.UH_logo, universityName: 'University of Houston', title: 'Masters in Computer Science', description: 'Artificial Intelligence, Machine Learning,  Data Mining, Digital Image Processing, Cloud Computing, Visualization, Statistical Methods in Research, Advanced Numerical Analysis, Cybersecurity' },
    { icon: assets.TU_logo, iconDark: assets.TU_logo,universityName: 'Tribhuvan University: IOE Pulchowk Campus', title: 'Bachelors in Electronics and Communication Engineering', description: 'Object Oriented Programming, Engineering Mathematics (Linear Algebra, Calculus I & II), Discrete Structure, Probability and Statistics, Artificial Intelligence, Data Mining, Digital Signal Processing, Signal Analysis, Database Management Systems, Electronic Devices and Circuits, Embedded Systems, Microprocessor, Computer Network' },
];

export const experiences = [
  {
    icon: assets.cheforge_logo, 
    iconDark: assets.cheforge_logo,
    title: "Machine Learning Engineer",
    company: "Cheforge",
    duration: "Dec 2024 - Present",
    points: [
      "Research on machine learning algorithms for effective training of cooking movements of the cooking robot, ingredients recognition. Potentially train LLMs locally.",
      "Prepare datasets from the RBG and thermal camera of cooking and different recipe testing on the cooking robot.",
      "Assist on hardware integration.",
      "Preparation of website using Next.js and node.js."
    ],
  },
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
      icon: assets.UH_logo, 
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
        icon: assets.Daraz_logo, 
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
        icon: assets.leapfrog_logo, 
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
        { name: "C#", icon: assets.csharp_logo },
        { name: "JavaScript", icon: assets.javascript_logo },
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
        { name: "PyTorch", icon: assets.pytorch_logo},
        { name: "TensorFlow", icon: assets.tensorflow_logo},
        { name: "Jupyter Notebook", icon: jupyter_logo},
        { name: "Computer Vision", icon: null},
        { name: "Generative AI", icon: null},
        { name: "Reinforcement Learning", icon: null},
        { name: "Retrieval-Augmented Generation", icon: null},
        
      ],
    },
    {
      category: "Cloud Computing (AWS)",
      items: [
        { name: "EC2", icon: assets.ec2_logo},
        { name: "S3", icon: assets.s3_logo },
        { name: "SageMaker", icon: assets.sagemaker_logo},
        { name: "Lambda", icon: assets.lambda_logo },
        { name: "ECS", icon: assets.ecs_logo },
        { name: "ECR", icon: assets.ecr_logo },

      ],
    },
    {
      category: "Data Analytics/Visualization",
      items: [
        { name: "SQL", icon: assets.mysql_logo},
        { name: "Snowflake", icon: assets.snowflake_logo},
        { name: "Tableau", icon: assets.tableau_logo},
        { name: "Spotfire", icon: assets.spotfire_logo},
        { name: "Pandas", icon: assets.pandas_logo },
        { name: "Matplotlib", icon: assets.matplotlib_logo },
        { name: "Skilit-Learn", icon: assets.skilit_logo },
      ],
    },

    {
      category: "Others",
      items: [
        { name: "Agile", icon: null},
        { name: "Canva", icon: null},
        { name: "Trello", icon: null},
        { name: "Microsoft Office", icon: null},

        
      ],
    },
  ];


  export const project = [
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
      icon: assets.UH_logo, 
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
        icon: assets.Daraz_logo, 
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
        icon: assets.leapfrog_logo,
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