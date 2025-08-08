import Link from "next/link";
import React from "react";
import pageHeader from "@/data/pageHeader.json";

const PageHeader = ({ pageTitle = "", pageBackground = "/images/backgrounds/umla-bg-2.jpg" }) => {
  return (
    <section className="page-header">
      <div
        className="page-header__bg"
        style={{ backgroundImage: `url(${pageBackground})` }}
      ></div>
      <div className="container">
        <h2>{pageTitle}</h2>
        <ul className="thm-breadcrumb list-unstyled">
          <li>
            <Link href="/">{pageHeader.homeLabel}</Link>
          </li>
          <li className="color-thm-gray">/</li>
          <li>
            <span>{pageTitle}</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PageHeader;
