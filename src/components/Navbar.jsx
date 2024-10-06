import Links from "./Links";
import Logo from "./Logo";
import SingAndLogin from "./SingAndLogin";

export default function Navbar() {
  return (
    <div className="ud-header absolute left-0 top-0 z-40 flex w-full items-center bg-transparent">
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="flex w-full items-center justify-between px-4 py-3">
            <Logo
              aClassName={"navbar-logo block w-60 max-w-full px-4"}
              imgClassName={"header-logo h-12"}
            />

            <Links />

            <SingAndLogin />
          </div>
        </div>
      </div>
    </div>
  );
}
