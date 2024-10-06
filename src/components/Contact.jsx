import Address from "./Address";
import MessageBox from "./MessageBox";
import Email from "./SvgComnets/Email";
import Location from "./SvgComnets/Location";

function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-[120px]">
      <div className="absolute left-0 top-0 -z-[1] h-full w-full dark:bg-dark"></div>
      <div className="absolute left-0 top-0 -z-[1] h-1/2 w-full bg-[#E9F9FF] dark:bg-dark-700 lg:h-[45%] xl:h-1/2"></div>
      <div className="container px-4">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="ud-contact-content-wrapper">
              <div className="ud-contact-title mb-12 lg:mb-[150px]">
                <span className="mb-6 block text-base font-medium text-dark dark:text-white">
                  CONTACT US
                </span>
                <h2 className="max-w-[260px] text-[35px] font-semibold leading-[1.14] text-dark dark:text-white">
                  Let&apos;s talk about your problem.
                </h2>
              </div>
              <div className="mb-12 flex flex-wrap justify-between lg:mb-0">
                <Address
                  svg={<Location />}
                  address="Our Location"
                  paragraph="401 Broadway, 24th Floor, Orchard Cloud View, London"
                />
                <Address
                  svg={<Email />}
                  address="How Can We Help?"
                  paragraph="info@yourdomain.com contact@yourdomain.com"
                />
              </div>
            </div>
          </div>
          <MessageBox />
        </div>
      </div>
    </section>
  );
}

export default Contact;
