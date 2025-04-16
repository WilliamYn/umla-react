import CausesDetailsPage from "@/components/NotreMission/NotreMission";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";

const CausesDetails = () => {
  return (
    <Layout pageTitle="Notre mission">
      <PageHeader pageTitle="Notre mission" />
      <CausesDetailsPage />
    </Layout>
  );
};

export default CausesDetails;
