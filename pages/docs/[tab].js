import Head from "next/head";
import { useRouter } from 'next/router';

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import TabsComponent from "../../components/TabsComponent";

export default function Docs() {
    const router = useRouter();
    const { tab } = router.query;

    console.log('::: tab :::', tab);

    return (
        <>
            <Head>
                <title>Crowdfund Studio - Documentation</title>
                <meta
                    name="description"
                    content="Crowdfund Studio - Documentation"
                />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <div>
                <Navbar />

                {tab ? (
                    <TabsComponent tab={tab} />
                ) : null}
            </div>

            <Footer />
        </>
    )
}
