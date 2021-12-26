// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Anshul",
  middleName: "",
  lastName: "Shalia",
  message: " Technology enthusiast and quick learner ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/A1shalia",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/anshul.shalia.5",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/ashalia98/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/anshulshalia/",
    }
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/anshul.jpg"),
  imageSize: 375,
  message:
    "I’m Anshul Shalia, a 2020 graduate from NIT Bhopal in Computer Science and Engineering. I work as a Software Developer with experience in C, C++, Java, Springboot, Jenkins, Groovy, Teamcity, OpenShift, JGit, Maven, Splunk, HTML, CSS. I'm a cycling enthusiast, singer and passionate about bringing out innovation with technology.",
  resume: "https://drive.google.com/file/d/1QDuWU0bDaxUg2g6QE8QyU6hGeWYrd0yq/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: false,
  heading: "Recent Projects",
  gitHubUsername: "hashirshoaeb", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/anshul.jpg"),
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/anshul.jpg"),
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Java", value: 80 },
    { name: "Splunk Monitoring tool", value: 75 },
    { name: "Data Structures", value: 80 },
    { name: "C/C++", value: 80 },
    { name: "OpenShift", value: 70 },
    { name: "TeamCity", value: 60 },
    { name: "HTML/CSS", value: 60 },
    { name: "Jenkins Pipeline as Code", value: 80 },
  ],
  softSkills: [
    { name: "Collaboration", value: 90 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Critical Thinking", value: 80 },
    { name: "Accountability", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "For collaboration and opportunities please feel free to email at",
  email: "anshulshalia@gmail.com"
};

const experiences = {
  show: true,
  heading: "Experience",
  data: [
    {
      role: 'Technology Analyst (Associate Software Engineer)',
      companylogo: require('../assets/img/dblogo.jpg'),
      date: 'August 2020 – Present'
    }
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
