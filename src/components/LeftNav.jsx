import React, { useContext } from "react";
import { categories } from "../utils/constant";
import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle } from "react-icons/fi";
import { AppContext } from "../context/AppContext";

const iconMap = {
  AiFillHome,
  MdLocalFireDepartment,
  CgMusicNote,
  FiFilm,
  MdLiveTv,
  IoGameControllerSharp,
  ImNewspaper,
  GiDiamondTrophy,
  GiEclipse,
  RiLightbulbLine,
  FiSettings,
  AiOutlineFlag,
  FiHelpCircle,
  RiFeedbackLine,
};
const LeftNav = () => {
  const { selectCategories, setSelectCategories } = useContext(AppContext);
  return (
    <div className="w-[240px] space-y-1 md:translate-x-0 translate-x-[-240px] bg-black overflow-y-auto text-white p-3">
      {categories.map((category) => {
        const IconComponent = iconMap[category.icon];
        return (
          <>
            <div
              onClick={() => {
                if (category.type == "category") {
                  setSelectCategories(category.name);
                }
              }}
              key={category.name}
              className={`flex items-center h-11 px-4 hover:bg-white/[0.15] ${
                selectCategories == category.name ? "bg-white/[0.15]" : ""
              } space-y-2 cursor-pointer rounded-md`}
            >
              {IconComponent &&
                React.createElement(IconComponent, { size: 18 })}
              <h1 className="ml-6 text-md  " style={{ marginBottom: "6px" }}>
                {category.name == "New" ? "Home" : category.name}
              </h1>
            </div>
            {category.divider && <hr className=" border border-white/[0.2]" />}
          </>
        );
      })}
    </div>
  );
};

export default LeftNav;
