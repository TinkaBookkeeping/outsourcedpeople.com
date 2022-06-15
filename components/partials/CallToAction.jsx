import React from 'react';
import Link from 'next/link'
function Newsletter() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">

          {/* CTA box */}
          <div className="relative bg-gray-900 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden" data-aos="zoom-y-out">


            <div className="relative flex flex-col lg:flex-row justify-between items-center">

              {/* CTA content */}
              <div className="text-center lg:text-left lg:max-w-xl">
                <h3 className="h3 text-white mb-2">Lets us help power your business</h3>
                <p className="text-gray-300 text-lg mb-6">Get in touch for a free consultation to find out how Sourced People can support your business.</p>

                {/* CTA form */}
                <Link href="/contact">
                  <a className="btn text-white bg-primary-600 hover:bg-primary-700 shadow">
                  Contact Us</a></Link>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Newsletter;