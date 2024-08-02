import logo from "../assets/images/yt-logo.png";
import mobileLogo from "../assets/images/yt-logo-mobile.png";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { CiBellOn } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { IoMenuOutline } from "react-icons/io5";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Loading from "./Loading";

const Header = () => {
  const { mobileMenu, setMobileMenu, loading } = useContext(AppContext);
  const handleMenu = () => {
    setMobileMenu(!mobileMenu);
  };
  return (
    <div className=" h-14 text-white dark:text-black flex flex-row justify-between items-center dark:bg-black bg-white sticky top-0 z-10 px-5 w-full">
      {loading && <Loading />}
      <div className="flex items-center space-x-3">
        {/* menu */}
        <div
          onClick={() => handleMenu}
          className=" text-white block md:hidden h-10 cursor-pointer"
        >
          <IoMenuOutline size={35} />
        </div>
        {/* logo */}
        <div className="h-10 hidden md:flex">
          <img className="h-8" src={logo} alt="" />
        </div>
        {/* mobile logo */}
        <div className="h-8 md:hidden ">
          <img className="h-8" src={mobileLogo} alt="" />
        </div>
      </div>

      {/* search */}
      <div className="  hidden md:flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className=" px-3 h-10 border border-[#717171] md:w-[500px] focus:border-blue-500  bg-black rounded-l-full text-white outline-none"
        />
        <button className=" bg-[#717171]  text-white h-10 px-3 rounded-r-full">
          <CiSearch size={25} />
        </button>
      </div>

      {/* right */}
      <div className=" text-white flex items-center space-x-3">
        <CiSearch size={25} className=" md:hidden" />
        <MdOutlineOndemandVideo size={25} />
        <CiBellOn size={25} />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAd5avdba8EiOZH8lmV3XshrXx7dKRZvhx-A&s"
          className="size-8 rounded-full"
        />
      </div>
    </div>
  );
};
export default Header;
