export default function EmailFrequencySection () {
    return (
        <div className="p-5">
            <h4 className="text-cfsBlue text-2xl mb-4 dark:text-white">
                Explaining how frequently backers get emailed and when they stop getting emailed.
            </h4>
            <p className="mb-4">
                Backers get emailed when you launch your survey (after our team does a final check and approves),{' '}
                and from then on in the following cadence:
            </p>
            <ul className="list-disc pl-3 my-5">
                <li>Day 1 (Launch)</li>
                <li>Day 3</li>
                <li>Day 7</li>
                <li>Day 10</li>
                <li>Day 14</li>
                <li>Day 30</li>
                <li>Day 60</li>
                <li>Day 180</li>
                <li>Day 360</li>
            </ul>
            <p className="mb-4">
                <strong>The moment a backer completes their survey, you will see an order show up in Shopify{' '}
                and we will stop emailing that backer. You can verify that this backer is not getting emailed{' '}
                by checking their Customer Profile on Shopify and seeing that they no longer{' '}
                have a ‘survey_incomplete’ tag.</strong>
            </p>
            <p className="mb-4">
                Don’t forget: You can always find a backer’s survey URL and email it to them directly from{' '}
                Shopify (see our “Start Sending Surveys” FAQ section).
            </p>
        </div>
    )
}