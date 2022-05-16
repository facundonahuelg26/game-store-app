import React, { useMemo, useRef, useState } from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { ContainerFooterSd, ContentSd, FooterIconsSd, FooterSd } from "./styled-components";
import {MiniSlide} from "./Mini-slide";

const Footer = () => {
  const [isInView, setIsInView] = useState(false);
  const imgSlideRef = useRef(null)

  const callback = (entries) => {
    const [entry] = entries
    setIsInView(entry.isIntersecting)
  }
  
  const options = useMemo(() => {
    return {
      root:null,
      rootMargin:'0px',
      threshold:0.75
    }
  }, [])
  

  React.useEffect(() => {
  
    const observer = new IntersectionObserver(callback, options)
    const currentTarget = imgSlideRef.current
    if(currentTarget) observer.observe(currentTarget)
    return () => {
      if(currentTarget) observer.unobserve(currentTarget)
    }
  }, [imgSlideRef, options])
  return (
    <ContainerFooterSd>
      <div ref={imgSlideRef}>
       <MiniSlide isInView={isInView} />
      </div>
      <FooterSd>
        <ContentSd>
          Gamer Store
          <FooterIconsSd>
            <FaFacebook />
            <GrTwitter />
            <FaInstagram />
            <FaYoutube />
          </FooterIconsSd>
        </ContentSd>
      </FooterSd>
    </ContainerFooterSd>
  );
};

export default Footer;
