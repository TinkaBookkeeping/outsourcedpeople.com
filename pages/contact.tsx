import type { NextPage } from "next";
import Head from "next/head";
import { LocationMarkerIcon } from "@heroicons/react/outline";
import ContactForm from "../components/forms/contact-us";

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Outsourced People: Contact us</title>
      </Head>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="md:grid md:grid-cols-12 md:gap-6">
          <div
            className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
            data-aos="fade-right"
          >
            <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8 flex-row flex">
              <LocationMarkerIcon className="h-7 mr-2 w-5 text-primary-500" />

              <div>
                <p className="text-xl text-gray-600">
                  Sourced People <br />
                  26/53 Vernon Terrace Teneriffe
                  <br />
                  Brisbane, QLD 4005
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6 ">
            <h1 className="h2 mb-4">Contact Us</h1>
            <p className="text-gray-600 mb-4">
              Get in touch for a free consultation to find out how Sourced
              People can support your business.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
