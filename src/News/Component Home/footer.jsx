import {AiOutlineInstagram} from "react-icons/ai";
import {AiFillTwitterCircle} from "react-icons/ai";
import {AiOutlineYoutube} from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#040D12] h-[100px] relative  p-4 flex justify-end">
      <nav className="flex p-2 mt-4 mr-[400px]">
        <div className="copyright text-center flex">
          <h6 className="text-[#EEEDED] font-bold text-l">
            © 2023 Vehicle Store. All Rights Reserved.
          </h6>
        </div>
      </nav>
      <div className="flex items-end gap-x-4 ">
        <Link to={`https://www.instagram.com/prestigemotorcars/`} target="_blank">
        <AiOutlineInstagram color="white" size={28}/>
        </Link>
        <Link to={`https://twitter.com/BCSxPSS_1976`} target="_blank">
        <AiFillTwitterCircle  color="white" size={28}/>
        </Link>
        <Link to={`https://www.youtube.com/@PrestigeProductions`} target="_blank">
        <AiOutlineYoutube color="white" size={28}/>
        </Link>
      </div>
    </div>
  );
};
export default Footer;
