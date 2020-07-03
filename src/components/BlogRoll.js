import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

const Post = ({ post }) => {
  const image =
    post.frontmatter.featuredimage &&
    post.frontmatter.featuredimage.childImageSharp.fluid.src;
  const colSpan = post.frontmatter.colspan || 1;
  const rowSpan = post.frontmatter.rowspan || 1;
  const myRef = React.useRef()
  React.useEffect(() => {
    if(myRef.current.innerText){
      console.log("myRef.current.innerText")
      // console.log(myRef.current.innerText)
    } else {
      console.log('post')
      console.log(post)
    }
  })
  return (
    <div
    ref={myRef}
      className={`
                  col-span-2 md:col-span-${colSpan}
                  col-span-2 md:row-span-${rowSpan} 
                  py-4 border-l pl-8 border-gray-300`}
      key={post.id}
    >
      <article
        className={`${post.frontmatter.featuredpost ? "is-featured" : ""}`}
      >
        <header>
          <div>
            <Link to={post.fields.slug}>
              <div className="flex justify-between items-center ">
                <h3 className="text-5xl ">{post.frontmatter.title}</h3>
                <span className="float-r" to={post.fields.slug}>
                  →
                </span>
              </div>
            </Link>
          </div>
        </header>
        <img className="mb-16" src={image} />
        <p className="text-2xl leading-8 py-4 my-4 border-b">
          {post.frontmatter.description}
        </p>

        <p className="text-xl ">{post.excerpt}</p>
      </article>
    </div>
  );
};

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className="grid">
        {posts &&
          posts.map(({ node: post }, index) => {
            return <Post key={index} post={post} />;
          })}
          
      </div>
    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 800)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                colspan
                rowspan
                description
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 1200, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
