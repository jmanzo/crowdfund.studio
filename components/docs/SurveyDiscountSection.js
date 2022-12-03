export default function SurveyDiscountSection () {
    return (
        <div>
            <h4 className="text-cfsBlue text-2xl mb-4">
                We generate a unique, one-time use discount code for each successful backer.
            </h4>
            <p className="mb-4">
                Backers who have successfully paid on Kickstarter or Indiegogo receive a unique discount{' '}
                code generated upon reaching the checkout page of your survey.
            </p>
            <p className="mb-4">
                This discount code is tied to their email, so they <strong>must use the same email to{' '}
                checkout on Shopify as they did to pledge for your project on Kickstarter/Indiegogo.</strong>
            </p>

            <h4 className="text-cfsBlue text-2xl mb-4">
                Errored backers do not get a discount code.
            </h4>
            <p className="mb-4">
                Errored backers (for example those whose cards have expired during the project and forgot{' '}
                to update them) with a ‘Failed’ pledge status, still receive the survey email{' '}
                (free of charge — we don’t charge you for these backers) but do not receive a discount code.
            </p>
            <p className="mb-4">
                This means they will be able to only select add-ons. If you have no add-ons or they don’t{' '}
                select add-ons but click ‘Continue’ on the add-ons page, they will simply be directed to your{' '}
                store’s empty cart.
            </p>
            <p className="mb-4">
                Emailing these backers is a great way to win-back customers who may still want your products{' '}
                but forgot to fix their pledge on Kickstarter.
            </p>
        </div>
    )
}