import React from "react";
import HomeBlockPodcasts from "./blocks/home-block-podcasts";
import HomeHero from "./blocks/home-block-hero";

const ScrollingTextComponent = () => <div>This is Ticker tape Component</div>;

function HomeComponentMapper({ homeBlocks }) {
  return (
    <>
      {homeBlocks.map((block, index) => (
        <div key={index}>
          {block._type === "homeHero" && block.visibleOnPage === true && <HomeHero data={block} />}
          {block._type === "homepagePodcasts" && block.visibleOnPage === true && <HomeBlockPodcasts data={block} />}
          {block._type === "homeTickerTape" && block.visibleOnPage === true && <ScrollingTextComponent />}
        </div>
      ))}
    </>
  );
}

export default HomeComponentMapper;