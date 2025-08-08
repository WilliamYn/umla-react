import DonsPage from "@/components/DonsPage/DonsPage";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";
import pages from "@/data/pages.json";

const Dons = () => {
  return (
    <Layout pageTitle={pages.dons.pageTitle}>
      <PageHeader pageTitle={pages.dons.headerTitle} pageBackground={"/images/page-headers/dons.jpg"} />
      <DonsPage />
    </Layout>
  );
};

export default Dons;
