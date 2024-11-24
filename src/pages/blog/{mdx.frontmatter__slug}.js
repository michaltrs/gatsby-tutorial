import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

export const query = graphql`
    query ($id: String) {
        mdx(id: {eq: $id}) {
            frontmatter {
                date
                title
                hero_image_alt
                hero_image {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
        }
    }
`

const BlogPost = ({ data, children }) => {
    const image = getImage(data.mdx.frontmatter.hero_image)

    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <p>{data.mdx.frontmatter.date}</p>
            <GatsbyImage image={image} alt="{data.mdx.frontmatter.hero_image_alt}"/>
            {children}
        </Layout>
    )
}

export const Head = () => <Seo title="TODO: Nazev expedice"/>

export default BlogPost