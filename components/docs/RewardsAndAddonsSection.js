import Link from "next/link";

export default function RewardsAndAddonsSection () {
    return (
        <div className="p-5">
            <h4 className="text-cfsBlue text-2xl mb-4">Mapping Products to Rewards & Add-Ons</h4>
            <p className="mb-4">You can map your Shopify Products to Rewards & Add-Ons only after you{' '}
            <Link href="/docs/link-your-project">
                <a target="_blank">Link Your Project</a>
            </Link>.</p>
            <p className="mb-4">
                As a Shopify store owner, you’ve likely already created products. If not, please see{' '}
                <Link href="https://help.shopify.com/en/manual/products/add-update-products">
                    <a target="_blank">this article</a>    
                </Link>.
            </p>
            <p className="mb-4">
                Once you have products in your Shopify store, you’ll be able to “map” (in other words, link){' '}
                those products to your rewards and add-ons that you offered on your campaign.
            </p>
            <p className="mb-4">
                Simply click the "Rewards & Add-ons" tab in the app, and go ahead mapping them.
            </p>
            <p className="mb-4">
                <strong>Note:</strong> Once you import your products & Add-ons using a CSV file, then you'll{' '}
                see also a product called "Shipping Protection". You're able to use this custom product to map{' '}
                a Shipping Protection option where you can offer a custom shipping protection through your survey.{' '}
                This Shipping Protection fee is not mandatory and your customers will be able to ignore or skip it.
            </p>
        </div>
    )
}