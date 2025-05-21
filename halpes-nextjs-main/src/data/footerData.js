import { contact } from "./contactData";

const footerData = {
  ...contact,
  link: "UMLA",
  email: "contact@umla.ca",
  tel: "000-000-0000",
  copyrightYear: new Date().getFullYear(),
  about: "Nous sommes un organisme sans but lucratif qui a pour but de venir en aide aux personnes qui en ont besoin.",
  bottomLogo: "/images/resources/umla-logo-clear.png",
  footerBg: "/images/backgrounds/umla-bg-1.jpg",
  social: [
    {
      id: 1,
      href: "https://www.facebook.com/profile.php?id=61561551389034",
      icon: "fa-facebook-square"
    },
    {
      id: 2,
      href: "https://www.instagram.com/umla_mtl/",
      icon: "fa-instagram"
    },
    {
      id: 3,
      href: "https://www.youtube.com/@umla4051",
      icon: "fa-youtube"
    },
    {
      id: 4,
      href: "https://www.tiktok.com/@umla.mtl",
      icon: "fa-tiktok"
    },
    {
      id: 5,
      href: "https://www.linkedin.com/company/une-main-lave-l%E2%80%99autre/",
      icon: "fa-linkedin"
    }
  ],
  exploreList: [
    {
      id: 1,
      href: "/",
      title: "Accueil"
    },
    {
      id: 2,
      href: "/notre-mission",
      title: "Mission"
    },
    {
      id: 3,
      href: "/devenir-benevole",
      title: "Bénévolat"
    },
    {
      id: 4,
      href: "/projets",
      title: "Projets"
    },
    {
      id: 5,
      href: "/dons",
      title: "Faire un don"
    }
  ]
};

export default footerData;
