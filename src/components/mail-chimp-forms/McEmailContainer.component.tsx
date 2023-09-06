import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import CustomForm from "./CustomForm.component";



const McEmailContainer = () => {
  const postUrl = `https://spokesolve.us12.list-manage.com/subscribe/post?u=8774c390c364b689bdbe86d97&id=f72579baee`;
  return (
      <>
      <MailchimpSubscribe
                url={postUrl}
                render={({ subscribe, status, message }) => (
                    <CustomForm
                        status={status} 
                        message={message}
                        onValidated={(formData:any) => subscribe(formData)}
                    />
                )}
            />
        </>
  )
  
};

export default McEmailContainer;
