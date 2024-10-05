import logo from "../assets/images/logo/logo.svg";

function Logo() {
  return (
    <a href="#" className="navbar-logo block w-60 max-w-full px-4">
      <img src={logo} alt="logo" className="header-logo h-12" />
    </a>
  );
}

export default Logo;
