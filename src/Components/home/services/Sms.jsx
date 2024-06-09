import img1 from "../../../assets/web.svg";
import img2 from "../../../assets/dev2.svg";
import img3 from "../../../assets/dev3.svg";
import img from "../../../assets/sms.png";
import bg from "../../../assets/bg.jpeg";
import email from "../../../assets/email.svg";
import logo from "../../../../public/sms.svg";
const Sms = () => {
  const designs = [
    {
      id: 1,
      name: "Website",
      img: img1,
    },
    {
      id: 2,
      name: "Admin panel",
      img: img2,
    },
    {
      id: 3,
      name: "Crossplatform",
      img: img3,
    },
  ];

  return (
    <div
      className="py-20"
      style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
    >
      <div className="max-w-[1170px] mx-auto px-5 items-center flex justify-between">
        <div className="w-[48%]">
          <div className="mb-[60px]">
            <img src={logo} alt="" />
          </div>
          <div className="bg-[#dae3fa] py-2 px-4 w-[150px] mt-[10px] rounded-full text-[#1b5bf7] flex items-center gap-2 ">
            <img src={email} alt="" />
            <p>Notification</p>
          </div>
          <p className="mt-[40px] text-[20px] font-semibold leading-[40px] text-[#46445a]">
            Smsuz.uz - It is a platform for bulk SMS messaging.
          </p>
          <h3 className="text-[25px] font-semibold mt-[20px]">What we did?</h3>
          <div className=" grid grid-cols-3 gap-[20px] pt-[20px]">
            {designs.map((item) => (
              <div
                className="w-[150px] h-[118px] rounded-lg bg-[#f4f7ff] p-[10px] pr-[20px]"
                key={item.id}
              >
                <img src={item.img} alt="" />
                <p className="text-[18px] leading-[30px] font-semibold mt-[12px]">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[48%]">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Sms;
