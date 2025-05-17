import CausesPage from "@/components/CausesPage/CausesPage";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";

const Causes = () => {
  return (
    <Layout pageTitle="Causes">
      <PageHeader pageTitle="Événements" />
      <CausesPage />
    </Layout>
  );
};

export default Causes;
