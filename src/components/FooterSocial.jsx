import FaceBook from "./SvgComnets/FaceBook";
import Instagram from "./SvgComnets/Instagram";
import LinkIn from "./SvgComnets/LinkIn";
import Twitter from "./SvgComnets/Twitter";

function FooterSocial() {
  return (
    <div className="-mx-3 flex items-center">
      <a
        href="javascript:void(0)"
        className="px-3 text-gray-7 hover:text-white"
      >
        <FaceBook width="22" height="22" />
      </a>
      <a
        href="javascript:void(0)"
        className="px-3 text-gray-7 hover:text-white"
      >
        <Twitter width="22" height="22" />
      </a>
      <a
        href="javascript:void(0)"
        className="px-3 text-gray-7 hover:text-white"
      >
        <Instagram width="22" height="22" />
      </a>
      <a
        href="javascript:void(0)"
        className="px-3 text-gray-7 hover:text-white"
      >
        <LinkIn width="22" height="22" />
      </a>
    </div>
  );
}

export default FooterSocial;
