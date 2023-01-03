import React, {useRef, useState, useEffect, useLayoutEffect} from "react";
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
import CentralLogo from "../components/central-logo"
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import ProjectPreviewGrid from "../components/project-preview-grid";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import Scroll from "../components/Scroll"
import Hero from "../components/home/hero";
import Podcasts from "../components/home/home-section-podcasts"
import Marquee from "../components/home/home-section-marquee"
import Work from "../components/home/home-section-work"
import Testimonials from "../components/home/home-section-testimonials";
import Blog from "../components/home/home-section-blog-grid";
import Editorials from "../components/home/home-section-editorials";
import TagCloud from "../components/home/home-section-cloud"

import { centralLogoAnim } from "../animations";

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
const heroTl = useRef(null)
const horizontalTl = useRef(null)
const podcastTl = useRef(null)

// Section Refs
const containerRef = useRef(null)
const heroRef = useRef(null)
const centralLogoRef = useRef(null)
const podcastsRef = useRef(null)
const horizontalPanelsRef = useRef(null)
const heroMarqueeRef = useRef(null)
const marqueeRef = useRef(null)
const tagCloudRef = useRef(null)

  useEffect(() => {
    gsap.set(centralLogoRef.current, {visibility: 'hidden'})
    gsap.to(centralLogoRef.current, {
        autoAlpha: 1,
        scrollTrigger: {
            trigger: podcastsRef.current,
            start: "bottom top",
            toggleActions: "play none none reverse"
          }
    })
  },[])

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
        <Container ref={containerRef}>
          <CentralLogo ref={centralLogoRef}/>
          <Hero ref={heroRef} heroMarqueeRef={heroMarqueeRef} tl={heroTl.current}/>
          <Podcasts ref={podcastsRef} />
          <Marquee 
            style={{color: colors.FABlue}}
            textContent="whatever you're looking to create, our skilled and experienced production team will build the perfect podcast. whatever" 
            ref={marqueeRef}/>
           <Work ref={horizontalPanelsRef} />
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
