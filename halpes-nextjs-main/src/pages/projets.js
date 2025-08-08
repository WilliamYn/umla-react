import ProjetsPage from "@/components/ProjetsPage/ProjetsPage";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";
import pages from "@/data/pages.json";

const Projets = () => {
  return (
    <Layout pageTitle={pages.projets.pageTitle}>
      <PageHeader pageTitle={pages.projets.headerTitle} />
      <ProjetsPage />
    </Layout>
  );
};

export default Projets;
