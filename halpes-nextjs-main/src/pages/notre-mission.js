import CausesDetailsPage from "@/components/NotreMission/NotreMission";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";

const CausesDetails = () => {
  return (
    <Layout pageTitle="Notre mission">
      <PageHeader pageTitle="Notre mission" pageBackground={"/images/page-headers/mission.jpg"} />
      <CausesDetailsPage />
    </Layout>
  );
};

export default CausesDetails;
