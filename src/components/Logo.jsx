import logo from "../assets/images/logo/logo.svg";

function Logo({ aClassName, imgClassName }) {
  return (
    <a href="#" className={aClassName}>
      <img src={logo} alt="logo" className={imgClassName} />
    </a>
  );
}

export default Logo;
