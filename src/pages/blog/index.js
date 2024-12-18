import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { useStaticQuery } from 'gatsby'

export const query = graphql`
    query {
        allMdx(sort: {frontmatter: {date: DESC}}) {
            nodes {
                frontmatter {
                    title
                    slug
                    date
                }
                id
                excerpt
            }
        }
    }
`


const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="My Blog Posts">
        {
            data.allMdx.nodes.map(node => (
                <article key={node.id}>
                    <Link to={`/blog/${node.frontmatter.slug}`}>
                        <h2>{node.frontmatter.title}</h2>
                    </Link> 
                    <p>Rok expedice: {node.frontmatter.date}</p>
                    <p>{node.excerpt}</p>                
                </article>
            ))
        }    
        </Layout>
    )
}

export const Head = () => <Seo title="My Blog Posts"/>

export default BlogPage