import Head from "next/head";

import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

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
