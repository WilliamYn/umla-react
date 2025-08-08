import { useRootContext } from "@/context/context";
import navItems, { social } from "@/data/NavItems";
import useScroll from "@/hooks/useScroll";
import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";
import NavItem from "./NavItem";

const HeaderOne = () => {
  const { scrollTop } = useScroll(130);
  const { toggleMenu, toggleSearch } = useRootContext();

  return (
    <header className="main-header clearfix">
      <div className="main-header__logo">
        <Link href="/">
          <a>
            <Image src="/images/resources/umla-logo-clear.png" alt="" />
          </a>
        </Link>
      </div>
      <div className="main-menu-wrapper">
        <div className="main-menu-wrapper__top">
          <div className="main-menu-wrapper__top-inner">
            <div className="main-menu-wrapper__left">
              <div className="main-menu-wrapper__left-content">
                <div className="main-menu-wrapper__left-text">
                  <p>Bienvenue chez UMLA</p>
                </div>
                <div className="main-menu-wrapper__left-email-box">
                  <div className="icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="email">
                                      <a href="mailto:umla.mtl@gmail.com">umla.mtl@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="main-menu-wrapper__right">
              <div className="main-menu-wrapper__right-social">
                {social.map(({ icon, link }, index) => (
                  <a href={link} key={index} target="_blank" rel="noreferrer">
                    <i className={`fab ${icon}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="main-menu-wrapper__bottom">
          <nav
            className={
              scrollTop
                ? "stricky-header stricked-menu main-menu stricky-fixed slideInDown animated"
                : "main-menu slideIn animated"
            }
          >
            <div
              className={
                scrollTop
                  ? "sticky-header__content main-menu__inner"
                  : "main-menu__inner"
              }
            >
              <span
                onClick={() => toggleMenu()}
                className="mobile-nav__toggler"
              >
                <i className="fa fa-bars"></i>
              </span>
              <ul className="main-menu__list">
                {navItems.map((navItem) => (
                  <NavItem key={navItem.id} navItem={navItem} />
                ))}
              </ul>
              <div className="main-menu__right">
                <Link href="/dons">
                  <a className="main-menu__donate-btn">
                    <i className="fa fa-heart"></i>Faire un don
                  </a>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default HeaderOne;
