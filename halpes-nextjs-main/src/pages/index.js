import CausesOne from "@/components/ProjetsOne/CausesOne";
import Charity from "@/components/Charity/Charity";
import GalleryOne from "@/components/GalleryOne/GalleryOne";
import HelpingOne from "@/components/HelpingOne/HelpingOne";
import HelpThem from "@/components/HelpThem/HelpThem";
import Layout from "@/components/Layout/Layout";
import MainSlider from "@/components/MainSlider/MainSlider";
import ThreeBoxes from "@/components/ThreeBoxes/ThreeBoxes";

const Home = () => {
  return (
    <Layout pageTitle="UMLA">
      <MainSlider />
      <Charity />
      <CausesOne />
      <ThreeBoxes />

      <HelpThem />
      <GalleryOne />
      
      <HelpingOne />
      
    </Layout>
  );
};

export default Home;
