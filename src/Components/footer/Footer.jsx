import { FiInstagram } from "react-icons/fi";
import logo from "../../assets/logo.svg";
import { FaTwitter, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-[#f4f7ff] pt-[50px]">
      <div className="max-w-[1170px] mx-auto px-5">
        <div className="flex justify-center">
          <img className="w-[106px]" src={logo} alt="" />
        </div>
        <div className="flex justify-between mt-[44px] mb-[32px] ">
          <div className="">
            <h3 className="text-[20px] font-semibold mb-[15px]">About us</h3>
            <li>
              <a
                href="#"
                className="text-[18px] leading-[32px] hover:underline text-[#1b5bf7]"
              >
                Direction
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-[18px] leading-[32px] hover:underline text-[#1b5bf7]"
              >
                Command
              </a>
            </li>
            <li>
              <a
                className="text-[18px] leading-[32px] hover:underline text-[#1b5bf7]"
                href=""
              >
                Tools
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-[18px] leading-[32px] hover:underline text-[#1b5bf7]"
              >
                Clients
              </a>
            </li>
          </div>
          <div className="">
            <h3 className="text-[20px] font-semibold mb-[15px]">Services </h3>
            <li>
              <a
                href="#"
                className="text-[18px] leading-[32px] hover:underline text-[#1b5bf7]"
              >
                Development of mobile applications
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[18px] leading-[32px] hover:underline text-[#1b5bf7]"
              >
                Development and implementation ERP systems
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[18px] leading-[32px] hover:underline text-[#1b5bf7]"
              >
                User interface, User experience design
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[18px] leading-[32px] hover:underline text-[#1b5bf7]"
              >
                IT consulting
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[18px] leading-[32px] hover:underline text-[#1b5bf7]"
              >
                Optimization IT consulting infrastructure
              </a>
            </li>
          </div>
          <div className="">
            <h3 className="text-[20px] font-semibold mb-[15px]">Portfolio</h3>
            <li>
              <a
                href="#"
                className="text-[18px] leading-[32px] hover:underline text-[#1b5bf7]"
              >
                Delever
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[18px] leading-[32px] hover:underline text-[#1b5bf7]"
              >
                Sms.uz
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[18px] leading-[32px] hover:underline text-[#1b5bf7]"
              >
                Goodzone
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[18px] leading-[32px] hover:underline text-[#1b5bf7]"
              >
                Iman
              </a>
            </li>
          </div>
        </div>
        <hr />
        <div className="py-[25px] flex justify-between">
          <h3 className="text-[#1b5bf7] leading-[24px] text-[14px]">
            © 2024 Udevs. All rights reserved
          </h3>
          <div className="flex gap-4">
            <a
              className="w-[38px] h-[38px] flex justify-center items-center rounded-full text-[#1b5bf7] bg-[#dee7fe]"
              href="#"
            >
              <FiInstagram />
            </a>{" "}
            <a
              className="w-[38px] h-[38px] flex justify-center items-center rounded-full text-[#1b5bf7] bg-[#dee7fe]"
              href="#"
            >
              <FaTwitter />
            </a>{" "}
            <a
              className="w-[38px] h-[38px] flex justify-center items-center rounded-full text-[#1b5bf7] bg-[#dee7fe]"
              href="#"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
