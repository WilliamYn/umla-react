import BecomeVolunteerPage from "@/components/BecomeVolunteerPage/BecomeVolunteerPage";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";

const BecomeVolunteer = () => {
  return (
    <Layout pageTitle="Bénévolat">
      <PageHeader pageTitle={"Bénévolat"} pageBackground={"/images/page-headers/benevole.jpg"} />
      <BecomeVolunteerPage />
    </Layout>
  );
};

export default BecomeVolunteer;
