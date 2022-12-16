import React, {useEffect, useRef, useState} from "react";
import { Link } from "gatsby";
import Header from "./header";
import styled from "styled-components";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import CustomBounce from "gsap/CustomBounce";
import useScrollPosition from "../hooks/useScrollPosition";
import "../styles/layout.css";
import Scroll from "./Scroll";
import HeroCta from "../components/hero-cta";
import {Content} from './layout.styled';
import {showNavAnim} from "../animations";
import Footer from "./footer";

gsap.registerPlugin(CustomEase, CustomBounce);

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => {

  const svgRef = useRef(null)
  const ctaRef = useRef(null)
  const ctaTween = useRef(null)
  const navigationRef = useRef(null)

  CustomBounce.create("myBounce", {strength: 0.7, squash: 3});

  useEffect(() => {
    ctaTween.current = gsap.to(ctaRef.current, {
      duration: 0.15,
      scale: 1.2,
      rotation: 5,
      ease: "back",
      paused: true
    });
  }, [])

  const onMouseEnterHandler = () => {
    ctaTween.current.play();
  };
  const onMouseLeaveHandler = () => {
    ctaTween.current.reverse();
  };

  useEffect(()=>{
    showNavAnim(navigationRef.current)
  }, [navigationRef])

  useEffect(()=>{

    let svgns = "http://www.w3.org/2000/svg";
    let root = svgRef.current;
    let ease = 0.75;

    let pointer = { 
      x: window.innerWidth  / 2, 
      y: window.innerHeight / 2 
    };

    window.addEventListener("mousemove", (event) => {
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
},[])
  
  return (
    <div style={{position: 'relative'}}>
      <svg ref={svgRef} className="svgLine"></svg>
      <Link 
        to="/"
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}>
        <HeroCta 
          
          ref={ctaRef}
        />
       </Link>
        <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} ref={navigationRef}/>
        <Content>
          {children}
        </Content>
        <Footer/>
    </div>
  )
};

export default Layout;
