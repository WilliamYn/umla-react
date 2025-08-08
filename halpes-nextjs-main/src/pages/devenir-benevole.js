import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";
import BecomeVolunteer from "@/components/BecomeVolunteerPage/BecomeVolunteerPage";
import pages from "@/data/pages.json";

const DevenirBenevole = () => {
  return (
    <Layout pageTitle={pages.benevolat.pageTitle}>
      <PageHeader pageTitle={pages.benevolat.headerTitle} pageBackground={"/images/page-headers/benevole.jpg"} />
      <BecomeVolunteer />
    </Layout>
  );
};

export default DevenirBenevole;
