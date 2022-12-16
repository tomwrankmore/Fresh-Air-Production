import React, {useRef, useState, useEffect} from "react";
import { graphql } from "gatsby";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from "../lib/helpers";
import styled from "styled-components";
import { colors } from "../styles/colors";
import HeroCta from "../components/hero-cta";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import ProjectPreviewGrid from "../components/project-preview-grid";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import Scroll from "../components/Scroll"
import Hero from "../components/hero";
import Podcasts from "../components/home-section-podcasts"
import Marquee from "../components/home-section-marquee"
import Work from "../components/home-section-work"
import Testimonials from "../components/home-section-testimonials";
import Blog from "../components/home-section-blog-grid";
import Editorials from "../components/home-section-editorials";
import TagCloud from "../components/home-section-cloud"

import { ctaAnim, workHorizontalAnim, podcastAnim,  marqueeAnim, cloudMarqueeAnim } from "../animations";

gsap.registerPlugin(ScrollTrigger);

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    projects: allSanitySampleProject(
      limit: 6
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          mainImage {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`;

const IndexPage = props => {
  const { data, errors } = props;

  // GSAP Timeline Refs
const horizontalTl = useRef(null)
const podcastTl = useRef(null)

// Section Refs
const podcastsRef = useRef(null)
const horizontalPanelsRef = useRef(null)
const heroMarqueeRef = useRef(null)
const marqueeRef = useRef(null)
const tagCloudRef = useRef(null)

  useEffect(() => {
      marqueeAnim(heroMarqueeRef.current)
      marqueeAnim(marqueeRef.current)
      podcastAnim(podcastsRef.current, podcastTl.current)
      workHorizontalAnim(horizontalPanelsRef.current, horizontalTl.current)
      cloudMarqueeAnim(tagCloudRef.current)
    }, [horizontalTl, horizontalPanelsRef]
  )

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;
  const projectNodes = (data || {}).projects
    ? mapEdgesToNodes(data.projects)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
    : [];

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  return (
    
      <Layout>
        <SEO title={site.title} description={site.description} keywords={site.keywords} />
        <HeroCta />
        <Container>
          <Hero heroMarqueeRef={heroMarqueeRef} />
          <Podcasts ref={podcastsRef} />
          <Marquee 
            style={{color: colors.FABlue}}
            textContent="whatever you're looking to create, our skilled and experienced production team will build the perfect podcast. whatever" 
            ref={marqueeRef}/>
          <Work ref={horizontalPanelsRef}/>
          <Testimonials />
          <Editorials/>
          {/* <Blog/> */}
          <TagCloud ref={tagCloudRef} />
          {/* {projectNodes && (
            <ProjectPreviewGrid
              title="Latest projects"
              nodes={projectNodes}
              browseMoreHref="/archive/"
            />
          )} */}
        </Container>
      </Layout>
  );
};

export default IndexPage;
