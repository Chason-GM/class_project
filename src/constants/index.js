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

  collect,
  attend,
  discipline,
  focus,
  zombs,
  mystery,
  final,

  nobi,
  rocket,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "objective",
    title: "Objectives",
  },
  {
    id: "step",
    title: "Steps",
  },
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
    title: "Data Collection",
    subtitle: "Gather images",
    icon: collect,
    iconBg: "white",
    date: "Nov 2024 - March 2025",
  },
  {
    title: "Installs",
    subtitle: "Install important libraries",
    icon: attend,
    iconBg: "#f3f3f3",
    date: "Nov 2024 - March 2025",
  },
  {
    title: "Imports",
    subtitle: "Import important libraries",
    icon: discipline,
    iconBg: "white",
    date: "Nov 2024 - March 2025",
  },
  {
    title: "Convert Images",
    subtitle: ".heic -> .jpg",
    icon: focus,
    iconBg: "#000000",
    date: "Nov 2024 - March 2025",
  },
  {
    title: "Train Test Split",
    subtitle: "80% train 20% test",
    icon: zombs,
    iconBg: "#f3f3f3",
    date: "Nov 2024 - March 2025",
  },
  {
    title: "Train the CNN model",
    subtitle: "Make things work",
    icon: mystery,
    iconBg: "white",
    date: "Nov 2024 - March 2025",
  },
  {
    title: "Save, Export Test",
    subtitle: "Save and export to this web",
    icon: final,
    iconBg: "white",
    date: "Nov 2024 - March 2025",
  },

];


const projects = [
  {
    name: "Nobita Model",
    description:
      "I downloaded 3D model from this website, and displayed on the website.",

    author: "mfxmotions",
    image: nobi,
    source_code_link: "https://sketchfab.com/3d-models/nobita-from-doraemon-f24c818752d846159854501dd49602a3",
    imgSource: sketchfab,
    bg: "bg-white"
  },
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
  {
    name: "Low Poly Rocket",
    description:
      "I downloaded 3D model from this website, and displayed on the website.",
    author: "ThatBrianDude",
    image: rocket,
    source_code_link: "https://sketchfab.com/3d-models/low-poly-rocket-89e69040a4874e789bd8d07f8b94d29a",
    imgSource: sketchfab,
    bg: "bg-white"
  },
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