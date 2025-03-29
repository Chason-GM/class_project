// exports

import {


  fireship,
  fireshiplogo,
  jsmaster,
  music,

  pixelbay,
  sketchfab,
  sun,
  youtube,
  rbook,
  rmag,
  rlight,
  rcreative,
  attend,
  discipline,
  focus,
  zombs,
  mystery,
  final,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "content",
    title: "Content",
  },
  // {
  //   id: "argument",
  //   title: "Argument",
  // },
  {
    id: 'conclusion',
    title: "Conclusion"
  },

];

const services = [
  {
    title: " ",
    icon: rbook,
  },
  {
    title: "  ",
    icon: rmag,
  },
  {
    title: "   ",
    icon: rcreative,
  },
  {
    title: "    ",
    icon: rlight,
  },
];

const argcon = [
  {
    title: "Attendance",
    subtitle: "I Care",
    icon: attend,
    iconBg: "#f3f3f3",
    date: "Nov 2024 - March 2025",
  },
  {
    title: "Discipline",
    subtitle: "Early Bird",
    icon: discipline,
    iconBg: "#000000",
    date: "Nov 2024 - March 2025",
  },
  {
    title: "Pay Attention",
    subtitle: "Focus",
    icon: focus,
    iconBg: "#f3f3f3",
    date: "Nov 2024 - March 2025",
  },
  {
    title: "Urban Zombie Apocalypse",
    subtitle: "First Homework",
    icon: zombs,
    iconBg: "#000000",
    date: "Nov 2024 - March 2025",
  },
  {
    title: "The Evergreen High Mystery",
    subtitle: "Midterm-project",
    icon: mystery,
    iconBg: "#f3f3f3",
    date: "Nov 2024 - March 2025",
  },
  {
    title: "This 3D Website",
    subtitle: "Final-project",
    icon: final,
    iconBg: "#000000",
    date: "Nov 2024 - March 2025",
  },

];


const projects = [
  // {
  //   name: "Detective Desk",
  //   description:
  //     "I downloaded 3D model from this website, and displayed on the website.",

  //   author: "Josh3Dmodels",
  //   image: desk,
  //   source_code_link: "https://sketchfab.com/3d-models/detectives-desk-0dc230bb8feb45bba007ea174037fcdc/",
  //   imgSource: sketchfab,
  //   bg: "bg-white"
  // },
  {
    name: "JS Mastery",
    description:
      "This is where I learned to create this project 2 years ago..",

    author: "JS Mastery",
    image: jsmaster,
    source_code_link: "https://www.youtube.com/c/JavaScriptMastery",
    imgSource: youtube,
    bg: "bg-white"
  },
  {
    name: "Fireship",
    description:
      "This is the channel that inspired me to revive this old project.",
    author: "Fireship",
    image: fireship,
    source_code_link: "https://www.youtube.com/@Fireship",
    imgSource: fireshiplogo,
    bg: "bg-black"
  },
  {
    name: "Hot sun",
    description:
      "I downloaded 3D model from this website, and displayed on the website.",
    author: "leha_pu",
    image: sun,
    source_code_link: "https://sketchfab.com/3d-models/hot-sun-c3d84ec0290c4a04a23913edb0db3c9a",
    imgSource: sketchfab,
    bg: "bg-white"
  },
  // {
  //   name: "Old Paper",
  //   description:
  //     "I downloaded 3D model from this website, and displayed on the website.",
  //   author: "tukuru_kunn",
  //   image: oldpaper,
  //   source_code_link: "https://sketchfab.com/3d-models/old-paper-0a7cf9d5bf7742b3a711d39eed36332f",
  //   imgSource: sketchfab,
  //   bg: "bg-white"
  // },
  {
    name: "Relaxing Jazz Saxophone",
    description:
      "I downloaded Jazz music from this website, and controlled behind the scene.",
    author: "trtasfiq",
    image: music,
    source_code_link: "https://pixabay.com/users/trtasfiq-43093431/",
    imgSource: pixelbay,
    bg: "bg-white"
  },

];

export { services, argcon, projects };