import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image'

// Define my component
const IndexPage = () => {
  return (
    <Layout pageTitle="Welcom to Misak's Gatsby site!">
      <p>I'm maiking this by following the Gatsby Tutorial.</p>
      <StaticImage 
        alt="Michal Trs a jeho kluci v ramci kampane pro Movember"
        src="../images/uz_mas_termin_tati.jpg"
      />
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="Home Page"></Seo>

// Export my component
export default IndexPage