import React from 'react'
import AdmissionEnquiry from '../contactpages/AdmissionEnquiry'
import ContactInformation from '../contactpages/ContactInformation'

const Contact = () => {
    return (
        <div>

            <AdmissionEnquiry whatsappNumber="919876543210" />
            <ContactInformation
                eyebrow="Get In Touch"
                title="We're here to"
                highlight="help you."
                description="Have a question about admissions, academics or school facilities? Get in touch with our team and we will be happy to assist you."

                address="ABC Public School, Main Road, Amethi, Uttar Pradesh - 227405"

                phone="+91 98765 43210"

                email="info@abcschool.com"

                officeHours={[
                    {
                        day: "Monday - Friday",
                        time: "08:00 AM - 04:00 PM",
                    },
                    {
                        day: "Saturday",
                        time: "08:00 AM - 01:00 PM",
                    },
                    {
                        day: "Sunday",
                        time: "Closed",
                    },
                ]}

                whatsappNumber="919876543210"

                whatsappMessage="Hello, I would like to know more about ABC Public School."
            />

        </div>
    )
}

export default Contact
