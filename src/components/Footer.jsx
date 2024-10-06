import AboutUs from "./AboutUs";
import Blog from "./Blog";
import FooterFeatures from "./FooterFeatures";
import FooterSocial from "./FooterSocial";
import Logo from "./Logo";

function Footer() {
  return (
    <footer className=" relative z-10 bg-[#090E34] pt-20 lg:pt-[100px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-3/12">
            <div className="mb-10 w-full">
              <Logo
                aClassName={"mb-6 inline-block  max-h-[100px]"}
                imgClassName={"max-w-full"}
              />
              <p className="mb-8 lg:max-w-[270px] text-base text-gray-7">
                We create digital experiences for brands and companies by using
                technology.
              </p>
              <FooterSocial />
            </div>
          </div>
          <AboutUs />
          <FooterFeatures />
          <Blog />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
