/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faAzure } from '@fortawesome/free-solid-svg-icons';

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Janhavi Wagh",
  title: "Hello, I'm Janhavi – a Passionate Software Developer",
  subTitle: emoji(
    "A passionate Frontend Developer 🚀  in building dynamic web and mobile applications using React.js, React Native, and JavaScript. Currently, I'm expanding my skills in backend development to become a well-rounded Full Stack Developer. Eager to learn and collaborate, I am passionate about delivering innovative solutions and exploring new technologies."
  ),
  resumeLink:
    "https://drive.google.com/uc?export=download&id=1tsgJiyjxEgES_xxv7spFX4dno_5F1hrk", // Direct download link
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/JanhaviWagh2003",
  linkedin: "https://www.linkedin.com/in/janhavi-wagh-57083a26a/",
  gmail: "janhaviwagh2003@gmail.com",
  instagram: "https://www.instagram.com/_.janviiii____",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Passionate Full Stack Developer with a strong drive to explore and master diverse technologies.",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
emoji("⚡ Building responsive and dynamic web applications using React.js and JavaScript"),
emoji("⚡ Integration of services such as MySQL, Azure, and Power BI for seamless functionality")

  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fab fa-azure" // Azure icon (Note: Font Awesome might not have this exact icon)
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Power BI",
      fontAwesomeClassname: "fas fa-chart-line"
    }
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Smt. Kashibai Navale College of Engineering Pune",
      logo: require("./assets/images/sinhgad.jpeg"),
      subHeader: "Bachelor of Computer Science and Engineering",
      duration: "August 2022 - June 2025",
      desc: "Pursuing B.E. in Computer Science with hands-on experience in frontend development and data analytics.",
      descBullets: [
       "Built projects using React.js, JavaScript, and MySQL",
        "Created HR Analytics Dashboard in Power BI",
        "Certified in Microsoft Azure Fundamentals",
        "Active member of IEEE, participated in Hackathon 17.0"
      ]
    },
    {
      schoolName: "Government Polytechnic Nashik",
      logo: require("./assets/images/images.jpeg"),
      subHeader: "Diploma in Computer Technology",
      duration: "August 2019 - June 2022",
      desc: "Completed Diploma in Computer Technology with strong foundation in software and web development.",
      descBullets: ["Ranked in top 10% of the class",
        "Learned core subjects like Software Engineering, Web Security, and OS",
        "Built mini projects using HTML, CSS, and Java"]
    },
    {
      schoolName: "S.S.A.Nutan English School Brahmanagaon",
      logo: require("./assets/images/msbte.png"),
      subHeader: "SSC",
      duration: "June 2018 - May 2019",
      desc: "Completed SSC with First class with distinction under Maharashtra State Board.",
      descBullets: ["Strong academic foundation with focus on mathematics and science"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend Development",
      progressPercentage: "85%"
    },
    {
      Stack: "Programming Languages",
      progressPercentage: "75%"
    },
    {
      Stack: "Backend Development",
      progressPercentage: "50%"
    },
    {
      Stack: "Cloud (Microsoft Azure)",
      progressPercentage: "60%"
    },
    {
      Stack: "Data Analytics (Power BI)",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "PowerBI Developer",
      company: "KasNet Technolgies Pvt.Ltd",
      companylogo: require("./assets/images/kasnetCircle.png"),
      date: "dec 2024 – Jan 2025",
      desc: "Developed interactive dashboards and reports using Power BI to provide data-driven insights for business operations and decision-making.",
      descBullets: [
        "Created Power BI dashboards to track business KPIs.",
        "Collaborated with teams to deliver tailored data solutions.",
        "Integrated data from various sources for real-time reporting.",
        "Used DAX and Power Query for data transformation and modeling.",
        "Ensured user-friendly, intuitive visualizations.",
        "Provided Power BI training and support to team members."
      ]
    },
    {
      role: "Front-End Developer",
      company: "CodeSoft",
      companylogo: require("./assets/images/codesoftcircle.jpg"),
      date: "May 2024 – June 2025",
      desc: "Contributed to developing user-friendly, responsive web applications using HTML, CSS, and JavaScript. Collaborated with design and back-end teams to deliver seamless digital experiences.",
      descBullets: [
      "Developed and maintained responsive web pages using HTML5, CSS3, and JavaScript.",
      "Worked with the design team to ensure UI/UX consistency and user-friendly layouts.",
      "Integrated third-party APIs to enhance functionality and user experience.",
      "Ensured cross-browser compatibility and optimized page load times.",
      "Participated in code reviews and continuous improvement processes."
      ]
    },
    
  ]
};



const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Some projects I’ve built for various use cases:",
  projects: [
    {
      image: require("./assets/images/Wanderlust-travel-designs-background1.jpg"),
      projectName: "WonderLust",
      projectDesc:  [ "Developing a Full-stack travel booking platform using the MERN stack",
      "Implementing user authentication, listing creation, and booking functionality",
      "Designing responsive UI with React and Bootsrap",
      "Integrating MongoDB for dynamic data storage and retrieval",],
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
      ]
    },
    {
      image: require("./assets/images/spotify.jpeg"),
      projectName: "spotify Like Musical Clone",
      projectDesc: ["Built a responsive music streaming UI using HTML, CSS, and JavaScript",
      "Integrated audio playback controls for play, pause, and skip",
      "Implemented dynamic playlist rendering and song selection",
      "Styled components to replicate Spotify-like user experience"],
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/JanhaviWagh2003/Spotify-Musical-Clone"
        }
      ]
    },
    {
      image: require("./assets/images/hr.jpg"),
      projectName: "HR Anlytics Dashboard",
      projectDesc: ["Created an interactive dashboard using Power BI for HR professionals",
    "Visualized key HR metrics like employee demographics, attrition, and performance",
    "Used slicers and filters for dynamic data exploration",
    "Enabled data-driven decision making through actionable insights"],
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/JanhaviWagh2003/HR-Analytics"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Microsoft Azure Fundamentals",
      subtitle:
        "Completed Microsoft Azure Fundamentals certification, demonstrating foundational knowledge of cloud services and how they are provided with Microsoft Azure.Gained insights into core Azure services,pricing,& support.",
      image: require("./assets/images/microsoft-azure-logo.png"),
      imageAlt: "Microsoft Azure Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1Mgj8xxEFE1mlaarBF4dm28OmwyJlewf9/view?usp=drive_link" // replace with your actual certification URL
        }
      ]
    },
    {
      title: "IEEE xtreme 17.0",
      subtitle:
        "Participated in the IEEE Xtreme 17.0 Hackathon, a global 24-hour programming competition that challenges teams of IEEE student members to solve a set of programming problems.",
      image: require("./assets/images/ieee-logo.webp"),
      imageAlt: "certificate of Participation",
      footerLink: [
        {
          name: "Letter of Participation",
          url: "https://drive.google.com/file/d/1YnBcw77CMDFHINTY31i5qX3QTc5qvoHZ/view?usp=sharing"
        },
        
      ]
    },
    

    {
      title: "Convene 2025",
      subtitle:  "Participated in ⚡CONVENE 2k25⚡ – the 11th National Level Project Competition & Exhibition, showcasing innovative ideas and technical creativity in a competitive environment.",
      image: require("./assets/images/conevene.jpg"),
      imageAlt: "Conevene Certificate",
      footerLink: [
        {
          name: "Certificate",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};



// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7517404635",
  email_address: "janhaviwagh2003@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
