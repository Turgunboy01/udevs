// import { Logo } from "../../assets/Svgs.jsx";

import logo from "../../assets/logo.svg";
const Header = () => {
  return (
    <div className="max-w-[1170px] mx-auto px-5">
      <div className="">
        {/* <Logo /> */}
        <img src={logo} alt="" className="w-[96px] h-[26px]" />
      </div>
      <div className="">
        <li>
          <a href="#">Direction</a>
        </li>
      </div>
    </div>
  );
};

export default Header;
