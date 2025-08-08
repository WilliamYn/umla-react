import ProjetsPage from "@/components/ProjetsPage/ProjetsPage";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";

const Projets = () => {
  return (
    <Layout pageTitle="Projets">
      <PageHeader pageTitle="Nos Projets" />
      <ProjetsPage />
    </Layout>
  );
};

export default Projets;
