import { IconType } from "react-icons/lib"
import { RiComputerLine } from 'react-icons/ri';
import { FaCode, FaBrain, FaReact, FaPython, FaJava, FaChrome, FaGithub } from 'react-icons/fa';
import { TbBrandTailwind } from 'react-icons/tb';
import { IoLogoJavascript } from "react-icons/io";
import { SiJsonwebtokens, SiNumpy, SiPandas, SiPostman, SiScikitlearn} from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiOpencv } from "react-icons/si";
import { MdDashboard } from "react-icons/md";
import { SiTableau } from "react-icons/si";



const links = [{ path: '/', title: "About" },{ path: "/experience", title: "Experience" }, { path: '/resume', title: "Resume" }, { path: '/projects', title: "Projects" }
]

interface domain {
    title: string,
    data: string,
    icon: IconType
}

const domains: domain[] = [
    {
        title: "Front-end Development",
        data: "With my skills in HTML, CSS, JavaScript, React and Tailwind CSS, I can create stunning user interfaces.",
        icon: RiComputerLine
    },
    {
        title: "Problem Solving",
        data: "I solve coding problems with Cpp",
        icon: FaCode
    },
    {
        title: "Data Visualization",
        data: "I create data visualizations using Python libraries like Matplotlib and Seaborn ans visualization tools like tableau and powerBI to help understand complex datasets.",
        icon: FaBrain
    },
    {
        title: "Machine Learning",
        data: "I'm currently learning and understanding the concepts machine learning",
        icon: FaBrain
    },
    
]

const data = `Hey! I’m Sayali, a recent Information Technology graduate from International Institute of Information Technology Pune. I enjoy building things with code, solving problems, and exploring different areas of tech — from full-stack development to machine learning and data.

I’ve worked on projects that combine software development with real-world problem solving, and I’m always curious to learn something new and turn ideas into something useful.

When I’m not working, you’ll probably find me exploring new places, trekking, making diy things, drawing or simply enjoying some time around nature. 🌿

I’m currently excited to start my professional journey, take on new challenges, and keep growing along the way.
`;

interface Project {
    name: string;
    description: string;
    image_path: string;
    deployed_url: string;
    github_url: string;
    key_techs: string[];
}


const projects : Project[] =[
    {
        name:'Blood Donation and Management System ',
        description:"Built a full-stack web application to manage blood donations, requests, and inventory across blood banks.",
        deployed_url:"NA",
        github_url:"https://github.com/sayalii2004/blood_donation_and_management_system/",
        key_techs:[' ReactJS', 'NodeJS', 'MySQL', 'Sequelize ORM', 'Rest API', 'JWT tokens'],
        image_path:"/blood-donation.jpg"
    },
    {
        name:'KrishiSathi – Complete Farmer Assistant',
        description:"Developed an integrated platform with AI chatbot, fertilizer recommendation, plant disease detection, government scheme recommendation, and equipment rental system to support farmers with real-time guidance and digital services.",
        deployed_url:"NA",
        github_url:"https://github.com/sayalii2004/",
        key_techs:['ReactJS',"Python Flask", "MySQL","ML"],
        image_path:"/krishisathi.jpeg"
    },
    {
        name:'AI Wine Expert',
        description:"Developed an AI-powered web application for wine producers, quality analysts, and researchers to predict wine quality and provide explainable insights for better quality assessment.",
        deployed_url:"https://ai-wine-expert.vercel.app/",
        github_url:"https://github.com/sayalii2004/AI_wine_expert",
        key_techs:['React.js', 'Flask', 'LightGBM', 'SHAP', 'Scikit-learn'],
        image_path:"/wine_expert.png"
    },
    {
        name:'YouTube Transcipt Summarizer- Chrome Extension',
        description:"Built a responsive Chrome extension that extracts and summarises YouTube video transcripts to provide quick, readable insights.",
        deployed_url:"NA",
        github_url:"https://github.com/sayalii2004/YouTube_Transcript_Summerizer/",
        key_techs:['HTML', 'CSS', 'JavaScript', 'Flask'],
        image_path:"/youtube-summerizer.jpg"
    },
    {
        name:'Portfolio Website',
        description:"Personal Portfolio Website",
        deployed_url:"https://portfoliosite-neon-nine.vercel.app/",
        github_url:"https://github.com/sayalii2004/portfolio_site",
        key_techs:['ReactJS','Tailwind CSS'],
        image_path:"/portfolio.jpeg"
    },
    
]

const resumeDoc = '/CV-web.pdf';



export const allSkills = {
  "Frontend": [
    { name: "HTML", level: "90%", icon: FaHtml5 },
    { name: "CSS", level: "90%", icon: FaCss3Alt },

    { name: "ReactJS", level: "75%", icon: FaReact },
    { name: "JavaScript", level: "80%", icon: IoLogoJavascript },
    { name: "Tailwind CSS", level: "75%", icon: TbBrandTailwind },
    
  ],
  "Database": [

    { name: "MySQL", level: "90%", icon: SiMysql }

  ],
  "ML and data Visualization": [
    { name: "Python", level: "80%", icon: FaPython },
    { name: "Scikit-learn", level: "70%", icon: SiScikitlearn },
    { name: "Matplotlib", level: "75%", icon: SiNumpy },
    { name: "OpenCV", level: "70%", icon: SiOpencv },
    { name: "Numpy", level: "75%", icon: SiNumpy },
    { name: "Pandas", level: "75%", icon: SiPandas},
    { name: "PowerBI", level: "90%", icon: MdDashboard },
    { name: "Tableau", level: "75%", icon: SiTableau }

  ],
  "Languages": [
    { name: "Java", level: "85%", icon: FaJava },
    { name: "Python", level: "80%", icon: FaPython }
  ],
  "DevOps & Tools": [
    { name: "Git / GitHub", level: "90%", icon: FaGithub },
    { name: "Postman", level: "85%", icon: SiPostman },
    { name: "Chrome DevTools", level: "85%", icon: FaChrome },
  ],
  "Auth & Security": [
    { name: "JWT", level: "85%", icon: SiJsonwebtokens },
  ]
};



export const groupedExperience = [
  {
    org: "IEEE Women's Hackathon - Web Queen's Challenge 2025 ",
    
    totalDuration: "Sept 2025",
    roles: [
      {
        title: "Team Lead",
        type: "Full-time",
        period: "Jul 2025 – Present",
        duration: "3 hours",
        description: "Leading a team of 4 members to develop an innovative web application focused on empowering women"
      }
    ]
  }
]

// export const volunteeringExperience = [
//   {
//     role: "Web Dev Lead",
//     org: "GDSC I2IT",
//     period: "Jul 2023 – May 2024",
//     duration: "11 mos",
//     description: "Led GDSC I2IT's web team, conducted MERN bootcamps, and mentored students."
//   }
// ]


export { links, domains, data ,projects , resumeDoc};
export type {  Project};
