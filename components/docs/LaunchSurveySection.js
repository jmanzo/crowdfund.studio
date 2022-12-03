import Link from "next/link";

export default function LaunchSurveySection () {
    return (
        <div className="p-5">
            <h4 className="text-cfsBlue text-2xl mb-4 dark:text-white">
                After you click “Turn On” we’ll double check your survey setup and email you when it’s launched.
            </h4>
            <p className="mb-4">
                We want you to be successful, so we do our own audit as a complimentary white-glove setup{' '}
                service. If all looks good, we’ll email you within 48 hours of you requesting and your survey{' '}
                will be launched. Once launched the first email with the survey URL will be sent to your backer.s
            </p>

            <h4 className="text-cfsBlue text-2xl mb-4 dark:text-white">
                Pausing your survey.
            </h4>
            <p className="mb-4">
                If you decide to pause your surveys, you’ll be able to do so via the Pause button on the Launch{' '}
                Surveys page.
            </p>
            <p className="mb-4">
                Pausing should only be used in dire situations as it will not only pause any email sequences but{' '}
                also make the survey URLs inactive, so that your backers see an error when clicking on their links{' '}
                inside the emails.
            </p>
            <p className="mb-4">
                Use this only in critical situations where you must stop backers from checking out.
            </p>

            <h4 className="text-cfsBlue text-2xl mb-4 dark:text-white">
                How do I find a backer’s survey URL?
            </h4>
            <p className="mb-4">
                Every backer will be assigned a survey URL in their customer profile notes. Search for the backer’s{' '}name or email in Shopify, then click{' '}
                <Link href="https://capture.dropbox.com/PJE4bpNMV6azA59d">
                    <a className="text-cfsBlue dark:text-white underline" target="_blank">edit</a>
                </Link>{' '}
                to see the full URL.
            </p>

            <h4 className="text-cfsBlue text-2xl mb-4 dark:text-white">
                How do I email a backer with their survey URL manually?
            </h4>
            <p className="mb-4">
                There are 2 ways to do this:
            </p>
            <ul className="list-decimal pl-3 my-5">
                <li>
                    On the Customers screen on Shopify, you can search for your customer by name or email.{' '}
                    There you’ll see that their email is clickable. Click on this email and you’ll{' '}
                    see a pop-up which allows you to email the customer directly using Shopify Email.
                </li>
                <li>
                    You can email them directly from your email account and just copy their survey URL from Shopify.
                </li>
            </ul>
        </div>
    )
}