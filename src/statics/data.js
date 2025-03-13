import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import PublicationImg1 from "../assets/images/research-grp-1-min.jpg";
import PublicationImg2 from "../assets/images/research-grp-2-min.jpg";

export const NAV_LINKS = [
  {
    label: "About",
    link: "#about",
  },
  {
    label: "Work Experience",
    link: "#workExperience",
  },
  {
    label: "Projects",
    link: "#projects",
  },
  {
    label: "Publications",
    link: "#publications",
  },
  {
    label: "Leadership",
    link: "#leadership",
  },
  {
    label: "My Creations",
    link: "#myCreations",
  },
];

export const SOCIAL_MEDIA_ACs = [
  {
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/manav-88/",
  },
  {
    icon: <IoMail />,
    link: "mailto:Manav@ieee.org",
  },
  {
    icon: <FaXTwitter />,
    link: "https://twitter.com/manavmangukiya8",
  },
  {
    icon: <FaGithub />,
    link: "https://github.com/manav88",
  },
  {
    icon: <FaInstagram />,
    link: "https://www.instagram.com/manav_patel18/",
  },
];

export const IEEE_SOU_LEADERSHIPS = [
  {
    title: "Advisory Board",
    description:
      "Served as an Advisory Board Member, providing counsel and guidance to junior members, leveraging senior expertise to support and direct the organization’s initiatives.",
  },
  {
    title: "Technical Committee Chair",
    description:
      "Managed and coordinated AWS and IEEE signal processing society events and workshops, ensuring technical flow and overseeing a committee of 120+ students, while focusing on enhancing members’ technical skills as chair.",
  },
];

export const MY_CREATIONS = [
  {
    topic: "Mother",
    title: "મમ્મી યાદ છે મને",
    link: "https://drive.google.com/file/d/1pBkhnfAjFDSkUzdWJB7dk3A5uN2yJ3ZF/view",
  },
  {
    topic: "Motivation",
    title: "मैंने अबभी हार नहीं मानी है।",
    link: "https://drive.google.com/file/d/16C5ALO6KgSr0J5pbWffxkvEZTiPsZnSX/view",
  },
  {
    topic: "Friendship",
    title: "તું જ છેને?",
    link: "https://drive.google.com/file/d/1Y-V0CVrKgH7XRZAAdlmtZxinftFEi1mc/view",
  },
];

export const PROJECTS = [
   {
    name: "Predictive analysis of real diamonds prices",
    subtitle: "(Industrial Project)",
    description:
      "Led a team of 5 implementing a predictive analytics model for estimating real diamond prices, employing variety of regression algorithms based on characteristics such as carat, cut, color, clarity and many more. Provided actionable insights into key price determinants, empowering stakeholders to make investment decisions.",
    link: null,
  },
  {
    name: "i-SARAL",
    subtitle: "(Lung Anomaly Analysis & Recognition System)",
    description:
      "It is a Deep Learning project to detect Lungs Disease like Pneumonia and Covid19.Achieved accuracy of 93% with deep transfer learning and project got selected for Skill Development center under my leadership. Used one model to detect both the diseases and none possibility by analyzing mixed dataset. Deployed using python Flask and frontend.",
    link: "https://github.com/manav88/i-SARAL",
  },
  {
    name: "Vaksh-DOC",
    subtitle: "(Detection Of Cancer)",
    description:
      "This is a Breast Cancer Detection System using Machine learning. Applied deep learning CNN for image processing of Histopathology images and achieved 91% ccuracy model. Kaggle dataset is used for the training. For classification using Parameter values, XGboost algorithm is used and got 98.28% accuracy. Flask,HTML,CSS are used for deployment in Azure.",
    link: "https://github.com/manav88/VAKSH-DOC",
  },
  {
    name: "New Way2Stay",
    subtitle: "(Dynamic Web Project)",
    description:
      "New Way2Stay offers a seamless interface for both PG/Hostel owners and students, enhancing accessibility and convenience in the housing search process. By fostering direct communication, we bridge the gap between accommodation providers and those seeking housing, ensuring a smooth experience for all parties involved.",
    link: null,
  },
];

export const PUBLICATIONS = [
  {
    title: "Advancing Financial Security",
    link: "https://drive.google.com/file/d/195tJb2TDqBme-P2f89KXrG2zTlXcxyif/view",
    description:
      "Discover how machine learning techniques are revolutionizing financial fraud detection, employing supervised and unsupervised learning methods alongside innovative feature engineering and ensemble approaches to safeguard against fraudulent activities.",

    image: PublicationImg1,
  },
  {
    title: "Breast Cancer Detection",
    link: "https://www.ijraset.com/best-journal/breast-cancer-detection-with-machine-learning",
    description:
      "Published a research paper On International Journal of Research about different algorithms to detect Breast Cancer",

    image: PublicationImg2,
  },
];

export const WORK_EXPERIENCES = [
  {
    duration: "Aug 2024-Present",
    company: "College of Business,CSULB",
    role: "Graduate Assistant",
  },
  {
    duration: "Sep 2022-May 2023",
    company: "SAP India",
    role: "Data Science Intern",
  },

  {
    duration: "Oct 2021-March 2022",
    company: "YBI Foundation",
    role: "Machine Learning Intern",
  },

  {
    duration: "Dec 2021-Jan 2022",
    company: "Microsoft Student Virtual Internship",
    role: "Future Ready Talent Affiliated with Microsoft India,NASSCOM,AICTE",
  },
];
