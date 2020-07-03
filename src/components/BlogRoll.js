import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    console.log(data)

    return (
      <div className='grid'>
        {posts &&
        
          posts.map(({ node: post }) => {
            return(

            <div className="col-span-2 py-4 border-l pl-8 border-gray-300" key={post.id}>
              <article
                className={`${
                  post.frontmatter.featuredpost ? 'is-featured' : ''
                }`}
              >
                <header>
                  <div >
                    <Link
                    
                      to={post.fields.slug}
                    >
                      <div className='flex justify-between text-2xl mb-8'>
                      <h3 className="text-gray-500 ">{post.frontmatter.title}</h3>
                      <Link className='text-turquise'  to={post.fields.slug}>→</Link>
                      </div>
                    </Link>
                    {/* <span> &bull; </span> */}
                    {/* <span className="subtitle is-size-5 is-block">
                      {post.frontmatter.date}
                    </span> */}
                  </div>
                </header>
                <p className='text-xl'>
                  {post.excerpt}   
                </p>
              </article>
       
              
            </div>
          )})}
       </div>
     
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

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
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
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
)
