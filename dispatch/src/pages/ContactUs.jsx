


import React from 'react';

function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-[50vh] sm:h-[55vh] md:h-[60vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('https://resolute-logistics.com/optimized/uploads/design/contacts/contact_bg_1366@2x.webp')`,
          backgroundPosition: 'center 20%'
        }}
      >
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 sm:px-6 lg:px-8">
          <div className="absolute top-4 sm:top-6 md:top-8 left-1/2 transform -translate-x-1/2 text-xs sm:text-sm text-gray-400">
            <a href="/" className="hover:text-orange-400 duration-200">
              Truck Dispatch
            </a>
            <span className="mx-1 sm:mx-2">|</span>
            <span>Contacts</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-3 text-center font-bold">
            Contacts
          </h1>

          {/* Description */}
          <div className="max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl text-center">
            <p className="text-xs sm:text-sm md:text-base leading-tight mb-3 sm:mb-4 font-normal px-2">
              You are on the Resolute Logistics company contacts page. Contact us in a convenient way to get
               <a href="/" className='hover:text-orange-400 duration-200'> truck dispatch services </a>
               or clarify any details about the company's work.
            </p>

            {/* Contact Information */}
            <div className="text-xs sm:text-sm mb-3 sm:mb-4 space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <div className="font-medium text-center">
                  <span className="whitespace-nowrap">📍 Address:</span> 11443 SAVANNAH CREEK DR CHARLOTTE, NC 28273
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-2">
                <span className="font-medium">☎️ Phone: </span>
                  +1 (800) 834-1898
              </div>
              
              <div className="flex items-center justify-center space-x-2">
                <span className="font-medium">✉️ Mail: </span>
                  hello@resolute-logistics.com
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-200 font-normal px-2">
              Choose the qualified services of TOP companies in the USA and Canada.
            </p>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3260.8707837654896!2d-80.78934938476213!3d35.16916888030969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8856977b6b0c5e0b%3A0x7b2e9a3b8f8c1c5e!2s11443%20Savannah%20Creek%20Dr%2C%20Charlotte%2C%20NC%2028273%2C%20USA!5e0!3m2!1sen!2sus!4v1641234567890!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'brightness(0.8) contrast(1.1)' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Resolute Logistics Location"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;

