import { useContext } from "react";
import { ThemeContext } from "../UseContext";

const Footer = () => {

    const theme = useContext(ThemeContext);
    let color = theme.state.theme
    let ACTIONS = theme.ACTIONS;
    
  // console.log(color)
  // console.log(ACTIONS)


  return (
    <div id="footer" className={`   py-4 ${ color === ACTIONS.LIGHT ? "bg-emerald-500" : "bg-stone-700"}`}>
      <p className={` ${ color === ACTIONS.LIGHT ? "text-black" : "text-white"}  flex justify-center mb-0 font-weight-bolder  h5 b `}>
        
        All Copyrights reserved &copy; Rahul
      </p>
    </div>
  );
};

export default Footer;
