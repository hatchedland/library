import React from "react";
import { SectionTitle } from "../ui/Titles";
import SectionLayout from "../layout/SectionLayout";

const LocationSection: React.FC = () => {
  return (
    <SectionLayout>
      <SectionTitle title="Location" />
      <div className="pb-2">📍 Near Sai City Inter College, Jai Ram Nagar, Fatehpur, Uttar Pradesh 212601</div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2261.5327063127056!2d80.79161689491775!3d25.91723315076004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c9d343ff42ad7%3A0x8d48885a7e85e830!2sChhaya%20Digital%20Library!5e1!3m2!1sen!2sin!4v1753643275001!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{border: 0}}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </SectionLayout>
  );
};

export default LocationSection;
