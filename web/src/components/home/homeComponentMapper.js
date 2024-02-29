import React from "react";
import NewHero from "../new-hero";
import HomeBlockPodcasts from "./blocks/home-block-podcasts";

const ScrollingTextComponent = () => <div>This is Ticker tape Component</div>;

function HomeComponentMapper({ homeBlocks }) {
  return (
    <>
      {homeBlocks.map((block, index) => (
        <div key={index}>
          {block._type === "homeHero" && <NewHero data={block} />}
          {block._type === "homepagePodcasts" && <HomeBlockPodcasts data={block} />}
          {block._type === "homeTickerTape" && <ScrollingTextComponent />}
        </div>
      ))}
    </>
  );
}

export default HomeComponentMapper;