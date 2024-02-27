import React, { useLayoutEffect, useEffect, useRef, useState } from "react";
import { Script } from "gatsby";
import { Link } from "gatsby";
import Header from "./header";
import gsap from "gsap";
import HeroCta from "../components/hero-cta";
import { Content } from "./layout.styled";
import Footer from "./footer";
import "../styles/layout.css";

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => {
  const scopeRef = useRef(null);
  const svgRef = useRef(null);
  const ctaRef = useRef(null);
  const ctaTween = useRef(null);
  const navigationRef = useRef(null);

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
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
      };

      window.addEventListener("pointermove", event => {
        pointer.x = event.clientX;
        pointer.y = event.clientY;
      });

      let leader = prop => {
        return prop === "x" ? pointer.x : pointer.y;
      };

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

  return (
    <>
      <div style={{ position: "relative", paddingTop: "82px" }} ref={scopeRef}>
        <svg ref={svgRef} className="svgLine"></svg>
        <Link to="/contact" onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
          <HeroCta ref={ctaRef} />
        </Link>
        <Header
          siteTitle={siteTitle}
          onHideNav={onHideNav}
          onShowNav={onShowNav}
          showNav={showNav}
          ref={navigationRef}
        />
        <Content>{children}</Content>
        <Footer />
      </div>

      {/* <!-- Podscribe pixel --> */}
      <Script id="podscribe-pixel-id">
          {`
            (function (w, d) {
              var id = 'podscribe-capture',
              n = 'script';
              var e = d.createElement(n);
              e.id = id;
              e.async = true;
              e.src = 'https://d34r8q7sht0t9k.cloudfront.net/tag.js';
              var s = d.getElementsByTagName(n)[0];
              s.parentNode.insertBefore(e, s);
              e.addEventListener('load', function() {
                w.podscribe('init', { user_id: '5b5e9391-684f-4f68-bf83-f2d963a6d467', advertiser: 'freshair' });
                w.podscribe('view');
              })
            })(window, document);
          `}
        </Script>
      {/* <!-- /Podscribe pixel --> */}
      
      {/* SPOTIFY AD ANALYTICS PIXEL */}
      {/* <Script>{`(function(w, d){var id='spdt-capture', n='script';if (!d.getElementById(id)) {w.spdt = w.spdt || function() { (w.spdt.q = w.spdt.q || []).push(arguments);}; var e = d.createElement(n); e.id = id; e.async=1; e.src = 'https://pixel.byspotify.com/ping.min.js'; var s = d.getElementsByTagName(n)[0]; s.parentNode.insertBefore(e, s); } w.spdt('conf', { key: '4e992a6ef705413fbe4c8768ddc3b801' }); w.spdt('view');})(window, document)`}</Script> */}


      <Script id="spotify-pixel-id">
        {/* Second Spotify pixel Feb 2024 */}
        {`
          (function(w, d){
            var id='spdt-capture', n='script';
            if (!d.getElementById(id)) {
              w.spdt =
                w.spdt ||
                function() {
                  (w.spdt.q = w.spdt.q || []).push(arguments);
                };
              var e = d.createElement(n); e.id = id; e.async=1;
              e.src = 'https://pixel.byspotify.com/ping.min.js';
              var s = d.getElementsByTagName(n)[0];
              s.parentNode.insertBefore(e, s);
            }
            w.spdt('conf', { key: 'f4d14b1d6dd7407f95aa43d929665572' });
            w.spdt('view');
          })(window, document);
        `}
      </Script>
    </>
  );
};

export default Layout;
