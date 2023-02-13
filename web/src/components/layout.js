import React, {useLayoutEffect, useEffect, useRef, useState} from "react";
import { Link } from "gatsby";
import Header from "./header";
import gsap from "gsap";
import HeroCta from "../components/hero-cta";
import {Content} from './layout.styled';
import Footer from "./footer";
import "../styles/layout.css";

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => {

  const scopeRef = useRef(null)
  const svgRef = useRef(null)
  const ctaRef = useRef(null)
  const ctaTween = useRef(null)
  const navigationRef = useRef(null)

  useLayoutEffect(() => {
    let mm = gsap.matchMedia(scopeRef);
  
    mm.add("(min-width: 675px)", () => {
      
      ctaTween.current = gsap.to(ctaRef.current, {
        duration: 0.15,
        scale: 1.2,
        rotation: 5,
        ease: "back",
        paused: true
      });

      // Mouse follow animation 

      let svgns = "http://www.w3.org/2000/svg";
      let root = svgRef.current;
      let ease = 0.75;

      let pointer = { 
        x: window.innerWidth  / 2, 
        y: window.innerHeight / 2 
      };

      window.addEventListener("pointermove", (event) => {
        pointer.x = event.clientX;
        pointer.y = event.clientY;
      });

      let leader = (prop) => {
        return prop === "x" ? pointer.x : pointer.y;
      }

      let total = 50;
      for (let i = 0; i < total; i++) {
        leader = createLine(leader, i);
      }

      function createLine(leader, i) {
        
        let line = document.createElementNS(svgns, "line");
        root.appendChild(line);
        
        gsap.set(line, { x: -1500, y: -750 });
        
        let pos = gsap.getProperty(line);
          
        gsap.to(line, {
          duration: 10000,
          x: "+=150",
          y: "+=10",
          repeat: -1,
          ease: "expo.inOut",
          modifiers: {
            x: () => {        
              let posX = pos("x");
              let leaderX = leader("x");
              let x = posX + (leaderX - posX) * ease;
              line.setAttribute("x2", leaderX - x);
              return x;
            },
            y: () => {        
              let posY = pos("y");
              let leaderY = leader("y");
              let y = posY + (leaderY - posY) * ease;
              line.setAttribute("y2", leaderY - y);
              return y;
            }
          }
        });  
    
        return pos;
      }
  
      // when the matchMedia doesn't match anymore, make sure we revert the text
      return () => {};
    });

    mm.add("(max-width: 675px)", () => {
      // a none animation so the mouse even doesn't fail
      ctaTween.current = gsap.to(ctaRef.current, {
        duration: 0.15,
        scale: 1,
        paused: true
      });

      return () => {};
    });
  
    return () => mm.revert();
  }, []);

  const onMouseEnterHandler = () => {
    ctaTween.current.play();
  };
  const onMouseLeaveHandler = () => {
    ctaTween.current.reverse();
  };

  useEffect(()=>{

    

},[])

  return (
    <div style={{position: 'relative'}} ref={scopeRef}>
      <svg ref={svgRef} className="svgLine"></svg>
      <Link 
        to="/contact"
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}>
        <HeroCta ref={ctaRef} />
      </Link>
      <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} ref={navigationRef}/>
      <Content>{children}</Content>
      <Footer/>
    </div>
  )
};

export default Layout;
