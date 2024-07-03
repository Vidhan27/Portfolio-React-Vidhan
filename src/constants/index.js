import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import wastedonation from "../assets/projects/waste-donation.jpeg";
import portfolio from "../assets/projects/portfolio.png";
import backendinsta from "../assets/projects/backendinsta.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 2 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 2 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Feb 2024- APRIL 2024",
    role: " BACK-END DEVELOPER",
    company: "Divine Connection",
    description: ` Developed robust and efficient server-side applications and
                    implemented APIs and database operations for enhanced
                    functionality.
                    Implemented RESTful API to enhance user experience and
                    engagement
                    Collaborated with team members to integrate front-end
                    components seamlessly with back-end functionalities`,
    technologies: ["Javascript", "React.js", "Node.js", "MongoDB"],
  },

];

export const PROJECTS = [
  {
    title: "WASTE MANAGEMENT WEB APPLICATION",
    image: wastedonation,
    description:
      `Our app tackles e-waste, food waste and Clothes donation simultaneously, connecting users with local e-waste recyclers and facilitating surplus food donations and clothes to those in need.
With just a few taps, users can contribute to a greener future by
 easily disposing of e-waste and donating surplus food, all through
 our intuitive and accessible platform.`,
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  // {
  //   title: "Task Management App",
  //   image: project2,
  //   description:
  //     "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
  //   technologies: ["HTML", "CSS", "Angular", "Firebase"],
  // },
  {
    title: "Portfolio Website",
    image: portfolio,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "TailWind"],
  },
  {
    title: "SOCIAL MEDIA BACKEND",
    image: backendinsta,
    description: `  A social media backend application built with Node.js, Express,
    and MongoDB is a server-side system designed to handle the
    functionalities and data management required for a social media
    platform
    In this backend application, Node.js with Express serves as the
    middleware between the client-side interface (e.g., web or
    mobile app) and the MongoDB database. Express routes are
    defined to handle various HTTP requests (e.g., GET, POST, PUT,
    DELETE) `,
    technologies: ["Node.js","MongoDB", "Express"],
  },
];

export const CONTACT = {
  address: "Naranpura , Ahmedabad , Gujarat , India",
  phoneNo: "+91 99045 58218 ",
  email: "vidhanprajapati27gmail.com",
};
