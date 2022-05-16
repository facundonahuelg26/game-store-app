import React  from "react";
import { useLocation } from "react-router-dom";

export const useOutsideClick = (ref)  => {
  const [open, setOpen] = React.useState(false)
  const {pathname} = useLocation()

  const handleButton = () => {
    setOpen(!open)
  }
  React.useEffect(() => {
   
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false)
      }
    }
    
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref]);

  React.useEffect(() => {
    const changePath = () => {
      if(pathname){
        setOpen(false)
      }
    }
    changePath()
}, [pathname]);

  const handleStopClick = (e) => e.stopPropagation();

  return {open, handleButton, handleStopClick}
}