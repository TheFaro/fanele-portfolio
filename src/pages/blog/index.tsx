import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { Link, graphql } from "gatsby";

const BlogPage = ({ data }: { data: any }) => {
  console.table(data.allMdx.edges[0].node.frontmatter);
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.edges.map((edge: any) => (
        <article key={edge.node.id}>
          <h2>
            <Link to={`/blog/${edge.node.frontmatter.slug}`}>
              {edge.node.frontmatter.title}
            </Link>
          </h2>
          <p>Posted: {edge.node.frontmatter.date}</p>
          <p>{edge.node.excerpt}</p>
        </article>
      ))}
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
            slug
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
