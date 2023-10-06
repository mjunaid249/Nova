import React from "react";

const Contact = () => {
  return (
    <div className="contact my-[5rem] flex items-center justify-center flex-col h-[50vh]">
      <h1 className="font-extrabold text-4xl text-center py-7">
        Stay <span className="text-red-500">Connected!</span>
      </h1>
      <div className="contact-links flex flex-wrap max-w-[50rem] items-center justify-center">
        <a
          href="https://www.facebook.com/people/Nova-Freight-LLC/100095395518515/"
          target="_blank"
          type="button"
          class="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2"
        >
          <i class="fa-brands fa-square-facebook mx-2"></i>Visit Facebook Page
        </a>
        <a
          href="https://mail.google.com/mail/u/0/#inbox?compose=new"
          target="_blank"
          type="button"
          class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
        >
          <i class="fa-solid fa-envelope mx-2"></i> acc@novafreight.co
        </a>
        <a
          href="https://mail.google.com/mail/u/0/#inbox?compose=new"
          target="_blank"
          type="button"
          class="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2"
        >
          <i class="fa-brands fa-google mx-2"></i> nfreightllc@gmail.com
        </a>
        <a
          type="button"
          class="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2"
        >
          <i class="fa-solid fa-phone mx-2"></i> (307) 487 8241
        </a>
        <a
          type="button"
          class="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2"
        >
          <i class="fa-brands fa-whatsapp mx-2"></i> (307) 487 8241
        </a>
        <a
          href="https://www.google.com/maps/place/30+N+Gould+St,+Sheridan,+WY+82801,+USA/@44.7977708,-106.9549504,17z/data=!3m1!4b1!4m6!3m5!1s0x5335fabc2a66677f:0x8f85bd068d1afb8a!8m2!3d44.7977708!4d-106.9549504!16s%2Fg%2F11c43v9yzm?entry=ttu"
          target="_blank"
          type="button"
          class="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2"
        >
          <i class="fa-solid fa-location-dot mx-2"></i> 30 N Gould St, Sheridan,
          WY 82801, USA
        </a>
      </div>
    </div>
  );
};

export default Contact;
