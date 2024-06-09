// import { Logo } from "../../assets/Svgs.jsx";

import logo from "../../assets/logo.svg";
const Header = () => {
  return (
    <div className="py-5 border-b bg-[#fff] fixed w-full z-50">
      <div className="max-w-[1170px] mx-auto px-5 flex justify-between ">
        <div className="">
          {/* <Logo /> */}
          <img src={logo} alt="" className="w-[96px] h-[26px]" />
        </div>
        <div className="flex gap-6 items-center">
          <li>
            <a
              href="#services"
              className="text-[14px] border-b hover:border-b-[#1b5bf7]  font-bold "
            >
              Direction
            </a>
          </li>{" "}
          <li>
            <a
              href="#team"
              className="text-[14px] border-b hover:border-b-[#1b5bf7] font-bold "
            >
              Command
            </a>
          </li>{" "}
          <li>
            <a
              href="#mobile"
              className="text-[14px] border-b hover:border-b-[#1b5bf7] font-bold "
            >
              Services
            </a>
          </li>{" "}
          <li>
            <a
              href="#tools"
              className="text-[14px] border-b hover:border-b-[#1b5bf7] font-bold "
            >
              Tools
            </a>
          </li>{" "}
          <li>
            <a
              href="#clients"
              className="text-[14px] border-b hover:border-b-[#1b5bf7] font-bold "
            >
              Clients
            </a>
          </li>{" "}
          <li>
            <a
              href="#delever"
              className="text-[14px] border-b hover:border-b-[#1b5bf7] font-bold "
            >
              Portfolio
            </a>
          </li>{" "}
          <li>
            <a
              href="#"
              className="text-[14px] border-b hover:border-b-[#1b5bf7] font-bold "
            >
              Language
            </a>
          </li>
          <button className="text-[16px] font-bold rounded-lg bg-[#1b5bf7] px-6 py-2 text-[#fff]">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
