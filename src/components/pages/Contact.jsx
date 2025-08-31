import React from "react";
import Container from "../Container";
import { IoIosArrowForward } from "react-icons/io";

const Contact = () => {
  return (
    <>
       <div className="py-[100px]">
        <Container>
          <h3 className="font-bold font-dm text-[49px] text-hoverC">Contact</h3>
          <p className="text-textC font-dm text-[12px] mt-5 font-bold flex items-center">
            Home <IoIosArrowForward /> Contact{" "}
          </p>
          <h5 className="font-bold font-dm text-[38px] text-hoverC mt-10">Fill up a Form</h5>
          <form className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-[#E0E0E0] px-4 py-3 w-full"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border border-[#E0E0E0] px-4 py-3 w-full"
              />
              <input
                type="text"
                placeholder="Subject"
                className="border border-[#E0E0E0] px-4 py-3 w-full"
              />
              <textarea
                placeholder="Message"
                className="border border-[#E0E0E0] px-4 py-3 w-full h-[150px]"
              ></textarea>
            </div>
            <button className="mt-5 bg-hoverC text-white font-dm font-bold text-[14px] py-3 px-8">
              Send Message
            </button>

          </form>
          <div className="mt-10">
            <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=new%20market,dhaka+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.mapsdirections.info/fr/calculer-la-population-sur-une-carte">Calculateur de carte de population</a></iframe>
          </div>
        


            
       </Container>
      </div>
    </>
  );
};

export default Contact;
