import Head from "next/head";
import Link from "next/link";
const ThankYou = () => (
  <>
    <Head>
      <title>Outsourced People: Contact us</title>
    </Head>
    <section className="relative bg-primary-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1
              className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              Thank{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-primary-700">
                you
              </span>{" "}
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="text-xl text-gray-600 mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                We will get back to you very soon.
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div>
                  <Link href="/">
                    <a className="btn text-white bg-primary-600 hover:bg-primary-700 w-full mb-4 sm:w-auto sm:mb-0">
                      Back to home
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div>
            <div
              className="relative flex justify-center mb-8"
              data-aos="zoom-y-out"
              data-aos-delay="450"
            ></div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default ThankYou;
