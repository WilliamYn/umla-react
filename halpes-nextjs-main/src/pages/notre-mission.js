import MissionComponent from "@/components/NotreMission/MissionSection";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";
import pages from "@/data/pages.json";

const NotreMissionPage = () => {
  return (
    <Layout pageTitle={pages.mission.pageTitle}>
      <PageHeader pageTitle={pages.mission.headerTitle} pageBackground={"/images/page-headers/mission.jpg"} />
      <MissionComponent />
    </Layout>
  );
};

export default NotreMissionPage;
