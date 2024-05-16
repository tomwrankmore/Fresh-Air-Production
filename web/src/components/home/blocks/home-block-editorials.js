import React from "react";
import { Link } from "gatsby";
import { StaticImage, GatsbyImage } from "gatsby-plugin-image";

import * as styles from "./home-block-editorials.module.scss";

const HomeBlockEditorials = ({ data }) => {
  return (
    <>
      <div className={styles.editorialsTitleWrapper}>
        <h1>Our Editorials</h1>
        <Link to="/editorials/" className={styles.view_all_editorials}>
          View all Editorials
        </Link>
      </div>
      <div className={styles.editorialsWrapper}>
        <Link
          to={`/editorial/${data.homeFeaturedEditorial.slug.current}`}
          className={styles.featured_editorial_link}
        >
          <div className={styles.editorials_left_col}>
            {data.homeFeaturedEditorial?.heroImage?.asset?.gatsbyImageData && (
              <GatsbyImage
                image={data.homeFeaturedEditorial.heroImage.asset.gatsbyImageData}
                alt={data?.homeFeaturedEditorial?.heroImage?.alt || "Editorial image"}
                placeholder="blurred"
                objectFit="cover"
                className={styles.imgWrapper}
              />
            )}
            <div className={styles.titleWrapper}>
              <h3 className="text-black">{data.homeFeaturedEditorial.title}</h3>
            </div>
          </div>
        </Link>
        <div className={styles.editorials_right_col}>
          <div className={styles.editorials_right_grid}>
            {data.homeEditorials &&
              data.homeEditorials.map(node => (
                <Link
                  to={`/editorial/${node.slug.current}`}
                  className={styles.editorials_link}
                  key={node.id}
                >
                  <div className={styles.post}>
                    <GatsbyImage
                      image={node.previewImage.asset.gatsbyImageData}
                      alt={node?.previewImage?.alt || "editorial image"}
                      placeholder="blurred"
                      objectFit="cover"
                      className={styles.imgWrapper}
                    />
                    <div className={`${styles.titleWrapper} ${styles.titleWrapperRight}`}>
                      <h3>{node.title}</h3>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBlockEditorials;
