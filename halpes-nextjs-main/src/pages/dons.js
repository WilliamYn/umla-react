import DonsPage from "@/components/DonsPage/DonsPage";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";

const Dons = () => {
  return (
    <Layout pageTitle="Dons">
      <PageHeader pageTitle="Faire un don" />
      <DonsPage />
    </Layout>
  );
};

export default Dons;
