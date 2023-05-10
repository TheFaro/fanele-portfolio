import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { graphql } from "gatsby";

const BlogPage = ({ data }: { data: any }) => {
  console.table(data.allMdx.edges[0].node.frontmatter);
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {data.allMdx.edges.map((edge: any) => (
          <article key={edge.node.id}>
            <h2>{edge.node.frontmatter.title}</h2>
            <p>Posted: {edge.node.frontmatter.date}</p>
            <p>{edge.node.excerpt}</p>
          </article>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
          }
          id
          excerpt
        }
      }
    }
  }
`;

export const Head = () => <Seo title="My Blog Posts"></Seo>;

export default BlogPage;
