import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export const getIcon = (type: "left" | "right") => {
  if (type == "left") {
    return (<MdKeyboardArrowLeft size={20} strokeWidth={2} stroke="none" />);
  } else {
    return (<MdKeyboardArrowRight size={20} strokeWidth={2} stroke="none" />); 
  }
};