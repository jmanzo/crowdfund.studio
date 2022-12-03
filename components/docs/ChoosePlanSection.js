export default function ChoosePlanSection() {
  return (
    <div className="p-5">
        <h4 className="text-cfsBlue text-2xl mb-4">ChooseTwo plans. Your choice. Free 30-day Trial.</h4>
        <ul className="my-5 list-disc pl-3">
          <li className="mb-4">
            <p>$0.00/backer + 3% of upsells + Standard Monthly Price (cancel anytime).{' '}
            We will charge you 3% of your total upsell purchases. How are upsell purchases calculated?</p>
            <ul className="list-disc pl-3 my-5">
              <li>
                <p>Let’s say John Doe pledged $100 on Kickstarter/Indiegogo, and you plan to charge him for{' '}
                shipping extra on the survey. If he checks out and doesn’t purchase any of{' '}
                the upsells you set up, then we charge $0, nada, zilch. But, if he purchases{' '}
                a $20 upsell, we charge $0.60.</p>
              </li>
              <li>
                <p>We never charge the 3% on shipping costs.</p>
              </li>
            </ul>
          </li>
          <li className="mb-4">
            <p>$0.50/backer + Standard Monthly Price (cancel anytime). With this plan, our fee will{' '}
            be calculated based on the amount of backers that you have on your campaign.</p>
            <ul className="list-disc pl-3 my-5">
              <li>
                <p>You’ll get the option whether or not to send the survey to errored backers, so you can recapture them. If you don’t send to errored backers, we won’t charge you for them.</p>
              </li>
            </ul>
          </li>
        </ul>
    </div>
  );
}