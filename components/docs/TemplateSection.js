function TemplateSection() {
  return (
    <div className="p-5">    
        <h4 className="text-cfsBlue text-2xl mb-4">
            Customize the email your backers will receive when getting their unique survey URL.
        </h4>
        <p className="mb-4">
            You can customize the image, text and other aspects of the email that your backers will receive{' '}
            with their unique survey URL. Take this opportunity to welcome them and explain what they’ll{' '}
            need to do (in case some backers are first-time backers).
        </p>
        <p className="mb-4">
            Preview the email by sending a test to yourself. The email is sent to the Shopify store{' '}
            owner’s email (you can see who that is by going into Shopify settings).
        </p>
    </div>
  );
}

export default TemplateSection;