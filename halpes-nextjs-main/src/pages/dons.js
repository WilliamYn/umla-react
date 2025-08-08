import DonsPage from "@/components/DonsPage/DonsPage";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";

const Dons = () => {
  return (
    <Layout pageTitle="Dons">
      <PageHeader pageTitle="Faire un don" pageBackground={"/images/page-headers/dons.jpg"} />
      <DonsPage />
    </Layout>
  );
};

export default Dons;
