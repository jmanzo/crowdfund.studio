import Link from "next/link";

export default function EmailingBackersSection () {
    return (
        <div className="p-5">
            <h4 className="text-cfsBlue text-2xl mb-4">How do I find a backer’s survey URL?</h4>
            <p className="mb-4">Every backer will be assigned a survey URL in their customer profile notes.{' '}
            Search for the backer’s name or email in Shopify, then click{' '}
            <Link href="https://capture.dropbox.com/PJE4bpNMV6azA59d">
                <a className="text-cfsBlue underline" target="_blank">edit</a>    
            </Link> to see the full URL.</p>
            <h4 className="text-cfsBlue text-2xl mb-4">How do I email a backer with their survey URL manually?</h4>
            <p className="mb-4">There are 2 ways to do this:</p>
            <ul className="list-decimal pl-3 my-5">
              <li>
                <p className="mb-4">
                    On the Customers screen on Shopify, you can search for your customer by name or email.{' '}
                    There you’ll see that their email is clickable. Click on this email and you’ll see a pop-up{' '}
                    which allows you to email the customer directly using Shopify Email.
                </p>
              </li>
              <li>
                <p className="mb-4">
                    You can email them directly from your email account and just copy their{' '}
                    survey URL from Shopify.
                </p>
              </li>
            </ul>
        </div>
    )
}