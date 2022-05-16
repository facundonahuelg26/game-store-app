import { useEffect, useRef  } from "react";

export const useSliderTranslate = (time) => {
  
    const slideShow = useRef(null);

    const next = () => {
      const myRef = slideShow.current;
  
      if(myRef.children === null) return;
      
      if(myRef.children.length > 0){
        const firstElement = myRef.children[0];
  
        myRef.style.transition = `300ms ease-out all`;
  
        const itemSize = myRef.children[0].offsetWidth;
        myRef.style.transform = `translateX(-${itemSize}px)`
  
        const myTransition = () => {
          myRef.style.transition = "none";
          myRef.style.transform = `translateX(0)`;
  
          myRef.appendChild(firstElement);
        }
  
        myRef.addEventListener("transitionend", myTransition);
      }
  
    }
  
    useEffect(() => {
      const interval = setInterval(() => {
        next();
      }, time)
    
      return () => clearInterval(interval);
    },[time])
    
  return {slideShow}
}