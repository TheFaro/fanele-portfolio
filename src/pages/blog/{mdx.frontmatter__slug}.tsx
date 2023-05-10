import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogPost = ({ data, children }: { data: any; children: any }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);
  return (
    <Layout pageTitle="Super Cool Blog Posts">
      <p>Posted: {data.mdx.frontmatter.date}</p>
      <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_alt} />
      {children}
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        hero_image_alt
        hero_image_credit
        hero_image_credit_link
        slug
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export const Head = () => <Seo title="Super Cool Blog Posts" />;

export default BlogPost;
