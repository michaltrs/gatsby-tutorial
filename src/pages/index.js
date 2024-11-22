import * as React from 'react'
import Layout from '../components/layout'

// Define my component
const IndexPage = () => {
  return (
    <Layout pageTitle="Welcom to Misak's Gatsby site!">
      <p>I'm maiking this by following the Gatsby Tutorial.</p>
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Export my component
export default IndexPage