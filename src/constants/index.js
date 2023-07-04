import { send, shield, star, netflix, pomodoro, streetfighter, weathersearch} from "../assets";


export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact Me",
  },
];

export const socialLinks = [
  {
    id: "linkedin",
    title: "LinkedIn",
  },
  {
    id: "github",
    title: "GitHub",
  },
  {
    id: "twitter",
    title: "Twitter",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Languages",
    content:
      "Proficient in Python, C++, Java, JavaScript, TypeScript, HTML, CSS, SQL, Verilog",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Frameworks",
    content:
      "Proficient with React.js, Express.js, Django, Streamlit",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Soft Skills",
    content:
      "I am an excellent written and oral communicator, a good collaborator, critical thinker, capable of working in a time efficient manner, and adaptable.",
  },
];

export const projects = [
  {
    title: "Netflix Clone",
    image: netflix,
    id:'netflix',
    description:"Dynamic single-page web application built using JavaScript, HTML and CSS. Utilizes the TMDB API to populate movie objects \
    and display modal window with embedded trailer upon clicking a movie element.",
    githubURL: "https://github.com/kendrewchris/Netflix-Clone",
  },
  {
    title: "Pomodoro Timer",
    image: pomodoro,
    id:'pomodoro',
    description:"Built using React. Productivity timer.",
    githubURL: "https://github.com/kendrewchris/React-Pomodoro",
  },
  {
    title: "Street Fighter Game",
    image: streetfighter,
    id: 'streetfighter',
    description:"Interactive, two-player browser game. Built with JavaScript, HTML and CSS",
    githubURL: "https://github.com/kendrewchris/Street-Fighter-Game",
  },
  {
    title: "Weather Search Application",
    image: weathersearch,
    id: 'weathersearch',
    description:"Single-page web application utilizes the Yahoo Weather API to pull real-time weather data from user-provided query. Valid \
    search terms include cities and specific geographical locations.",
    githubURL: "https://github.com/kendrewchris/Weather-Search-Application",
  }
]





