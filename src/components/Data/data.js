import {
  faSquarespace,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

import {
  faWallet,
  faTree,
  faSocks,
  faMap,
  faGlobe,
  faMountain,
  faBus,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";
import imgTour1 from "../images/tour-1.jpeg";
import imgTour4 from "../images/tour-4.jpeg";
import imgTour5 from "../images/tour-5.jpeg";
import imgTour6 from "../images/tour-6.jpeg";
import japan from "../images/japan.jpg";
import newZealand from "../images/newZealand.jpg";
import logo from "../images/logo.svg";

export const image = logo;

export const pageLinks = [
  {
    id: 1,
    pathLink: "home",
    text: "Home",
  },
  {
    id: 2,
    pathLink: "about",
    text: "About",
  },
  {
    id: 3,
    pathLink: "services",
    text: "Services",
  },
  {
    id: 4,
    pathLink: "tours",
    text: "Tours",
  },
];

export const socialLinks = [
  {
    id: 1,
    pathLink: "https://www.twitter.com",
    icon: faTwitter,
  },
  {
    id: 2,
    pathLink: "https://www.facebook.com",
    icon: faFacebook,
  },
  {
    id: 3,
    pathLink: "https://www.squarespace.com/",
    icon: faSquarespace,
  },
];

export const services = [
  {
    id: 1,
    icon: faWallet,
    title: "Saving Money",
    description:
      "Smart spending, bigger savings—your wallet's best friend awaits",
  },
  {
    id: 2,
    icon: faTree,
    title: "Endless Hiking",
    description: `Go green! Every tap saves a tree, making a difference.`,
  },
  {
    id: 3,
    icon: faSocks,
    title: "Amazing Comfort",
    description: `Step into comfort and style with our trendsetting sock collection`,
  },
];

export const tours = [
  {
    id: 1,
    image: imgTour1,
    date: "august 26th,2020",
    tourTitle: "Tibet Adventure",
    info: "Embark on a mesmerizing Tibet exploration, where the allure of majestic landscapes intertwines with a vibrant cultural tapestry, creating the perfect beginning for an unforgettable journey of discovery and wonder.",
    location: "China",
    duration: 6,
    price: 2100,
    icon: faGlobe,
  },
  {
    id: 2,
    image: imgTour6,
    date: "October 1th, 2020",
    tourTitle: "Best Of Java",
    info: "Discover the captivating Essence of Java, as you immerse yourself in an enchanting travel experience where ancient temples, lush landscapes, and vibrant cultures converge, offering unparalleled beauty and endless avenues for exploration and discovery.",
    location: " Indonesia",
    duration: 11,
    price: 1400,
    icon: faBus,
  },
  {
    id: 3,
    image: imgTour5,
    date: "September 15th, 2020",
    tourTitle: "Explore Hong Kong",
    info: "Explore the vibrant energy of Hong Kong through its dynamic streets, iconic landmarks, and cultural treasures. Immerse yourself in the bustling cityscape where tradition and modernity intertwine, creating an unforgettable journey.",
    location: " Hong Kong",
    duration: 8,
    price: 5000,
    icon: faMap,
  },
  {
    id: 4,
    image: imgTour4,
    date: "December 5th, 2019",
    tourTitle: "Kenya Highlights",
    info: "Embark on an enchanting journey through Kenya Highlights, where the majestic wildlife of the Maasai Mara meets the breathtaking landscapes of Amboseli, creating an unforgettable tapestry of natural wonders.",
    location: "Kenya",
    duration: 20,
    price: 3300,
    icon: faMountain,
  },
  {
    id: 5,
    image: japan,
    date: "November 15th, 2020",
    tourTitle: "Kyoto Essence",
    info: "Japan, a land of contrasts, seamlessly blends ancient traditions with cutting-edge technology. From historic temples in Kyoto to the neon-lit streets of Tokyo, discover a captivating fusion of past and present.",
    location: "Japan",
    duration: 10,
    price: 7200,
    icon: faMountain,
  },
  {
    id: 6,
    image: newZealand,
    date: "March 14th, 2021",
    tourTitle: "Floral Haven",
    info: "Floral Heaven beckons, inviting immersion in vibrant blooms and fragrant blossoms. Wander through lush gardens, where nature's artistry creates a serene haven, a tapestry of botanical beauty awaiting exploration.",
    location: "New Zealand",
    duration: 7,
    price: 10000,
    icon: faLeaf,
  },
];
