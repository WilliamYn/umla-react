const navItems = [
  {
    id: 1,
    name: "Accueil",
    href: "/",
    subNavItems: [

    ],
  },
  {
    id: 2,
    name: "Pages",
    href: "",
    subNavItems: [
      { id: 1, name: "A Propos", href: "/about" },
      { id: 2, name: "Bénévoles", href: "/volunteers" },
      { id: 3, name: "Galerie", href: "/gallery" },
    ],
  },
  {
    id: 3,
    name: "Donations",
    href: "/causes",
    subNavItems: [
      { id: 1, name: "Causes", href: "/causes" },
      { id: 2, name: "Causes Details", href: "/causes-details" },
    ],
  },
  {
    id: 4,
    name: "Events",
    href: "/events",
    subNavItems: [
      { id: 1, name: "Events", href: "/events" },
      { id: 2, name: "Event Details", href: "/event-details" },
    ],
  },
  {
    id: 5,
    name: "Devenir bénévole",
    href: "/become-volunteer",
    subNavItems: [
    ],
  },
];

export default navItems;

export const social = [
  { icon: "fa-twitter", link: "" },
  { icon: "fa-facebook-square", link: "" },
  { icon: "fa-dribbble", link: "" },
  { icon: "fa-instagram", link: "" },
];
