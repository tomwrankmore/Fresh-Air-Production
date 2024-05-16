import React from "react";
import {
  HomeHero,
  HomePodcasts,
  HomeMarquee,
  HomeWeWork,
  HomeClients,
  HomeTestimonials,
  HomeEditorials,
  HomeTagCloud
} from "./blocks/";

function HomeComponentMapper({ homeBlocks }) {
  return (
    <>
      {homeBlocks.map((block, index) => (
        <div key={index}>
          {/* {block._type === "homeHero" && block.visibleOnPage === true && <HomeHero data={block} />} */}
          {block._type === "homepagePodcasts" && block.visibleOnPage === true && (
            <HomePodcasts data={block} />
          )}
          {block._type === "homeTickerTape" && block.visibleOnPage === true && (
            <HomeMarquee textContent={block.homeTickerTapeText} />
          )}
          {block._type === "homeWeWork" && block.visibleOnPage === true && (
            <HomeWeWork data={block} />
          )}
          {block._type === "homeClients" && block.visibleOnPage === true && (
            <HomeClients data={block} />
          )}
          {block._type === "homeTestimonials" && block.visibleOnPage === true && (
            <HomeTestimonials data={block} />
          )}
          {block._type === "homeEditorials" && block.visibleOnPage === true && (
            <HomeEditorials data={block} />
          )}
          {block._type === "homeTagCloud" && block.visibleOnPage === true && (
            <HomeTagCloud data={block} />
          )}
        </div>
      ))}
    </>
  );
}

export default HomeComponentMapper;
