export default function LinkYourProjectSection () {
    return (
        <div className="p-5">
            <h4 className="text-cfsBlue text-2xl mb-4">Link your project.</h4>
            <p className="mb-4">You can link both Kickstarter and Indiegogo projects. Currently we support Indiegogo via{' '}
            account sync and Kickstarter via CSV upload. We are working on building the account sync{' '}
            feature for Kickstarter, but the functionality for you remains the same in the end.</p>
            <p className="mb-4"><strong>Important note:</strong> If you have a Kickstarter project, note that backers{' '}
            have 14 days after their campaign ends to fix their errored payments. That means if you upload{' '}
            your CSV before that mark, some backers will be assigned an “errored pledge” tag in Shopify.{' '}
            To avoid that, we recommend waiting to upload your CSV until 14 days after your campaign ends.{' '}
            DO NOT change any formatting of the CSV file.</p>
        </div>
    )
}