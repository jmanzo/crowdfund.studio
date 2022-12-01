import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

//import dynamic from "next/dynamic";

// const Video = dynamic(() => import("../components/video"));

// const Benefits = dynamic(() => import("../components/benefits"));
// const Footer = dynamic(() => import("../components/footer"));
// const Testimonials = dynamic(() => import("../components/testimonials"));
// const Cta = dynamic(() => import("../components/cta"));
// const Faq = dynamic(() => import("../components/faq"));

// const PopupWidget = dynamic(() => import("../components/popupWidget"));

export default function Home() {
  return (
    <>
      <Head>
        <title>Crowdfund Studio - Agency Crowdfunding Tools, Available Directly To Creators</title>
        <meta
          name="description"
          content="Crowdfund Studio - Agency Crowdfunding Tools, Available Directly To Creators"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="bg-hero bg-cover bg-right-top bg-no-repeat pb-44">
        <Navbar />
        <Hero />
      </div>

      <Footer />
    </>
  );
}
