import MissionComponent from "@/components/NotreMission/MissionSection";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";

const NotreMissionPage = () => {
  return (
    <Layout pageTitle="Notre mission">
      <PageHeader pageTitle="Notre mission" pageBackground={"/images/page-headers/mission.jpg"} />
      <MissionComponent />
    </Layout>
  );
};

export default NotreMissionPage;
