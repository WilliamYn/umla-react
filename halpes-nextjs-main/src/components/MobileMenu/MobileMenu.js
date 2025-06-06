import { useRootContext } from "@/context/context";
import navItems, { social } from "@/data/NavItems";
import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";
import NavItem from "./NavItem";

const MobileMenu = () => {
  const { toggleMenu, menuStatus } = useRootContext();

  return (
    <div
      className={`mobile-nav__wrapper  animated fadeInLeft${
        menuStatus ? " expanded" : ""
      }`}
    >
      <div
        onClick={() => toggleMenu()}
        className="mobile-nav__overlay mobile-nav__toggler"
      ></div>
      <div className="mobile-nav__content">
        <span
          onClick={() => toggleMenu()}
          className="mobile-nav__close mobile-nav__toggler"
        >
          <i className="fa fa-times"></i>
        </span>

        <div className="logo-box">
          <Link href="/">
            <a aria-label="logo image">
              <Image src="/images/resources/umla-logo-clear.png" width="155" alt="" />
            </a>
          </Link>
        </div>
        <div className="mobile-nav__container">
          <ul className="main-menu__list">
            {navItems.map(({ id, ...item }) => (
              <NavItem key={id} item={item} />
            ))}
          </ul>
        </div>

        <ul className="mobile-nav__contact list-unstyled" style={{ display: "none" }}>
          <li>
            <i className="fa fa-envelope"></i>
                      <a href="mailto:umla.mtl@gmail.com">umla.mtl@gmail.com</a>
          </li>
          <li>
            <i className="fa fa-phone-alt"></i>
            <a href="tel:000-000-0000">000 000 0000</a>
          </li>
        </ul>
        <div className="mobile-nav__top">
          <div className="mobile-nav__social" style={{ display: "none" }}>
            {social.map(({ icon, link }, index) => (
              <a key={index} href={link} className={`fab ${icon}`}></a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
