import FaceBook from "./SvgComnets/FaceBook";
import Instagram from "./SvgComnets/Instagram";
import Twitter from "./SvgComnets/Twitter";

function Social() {
  return (
    <div className="flex items-center justify-center gap-5">
      <a href="javascript:void(0)" className="text-dark-6 hover:text-primary">
        <FaceBook width="18" height="18" />
      </a>
      <a href="javascript:void(0)" className="text-dark-6 hover:text-primary">
        <Twitter width="18" height="18" />
      </a>
      <a href="javascript:void(0)" className="text-dark-6 hover:text-primary">
        <Instagram width="18" height="18" />
      </a>
    </div>
  );
}

export default Social;
