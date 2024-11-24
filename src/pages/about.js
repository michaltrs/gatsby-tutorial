import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <p>I was born in 1983 in Karlovy Vary / CZE but I grew up in Prague, where I now live permanently. 
                I graduated in 2008 from the Czech Technical University in Prague. 
                Since 2006 I have been working for the great antivirus company AVAST Software as a virus analyst. 
                In 2010, I married my lovely wife Zuzka. I like mountain biking, snowboarding and travelling.
            </p>

            <p>
                Narodil jsem se v roce 1983 v Karlových Varech v Česku. Vyrůstal jsem v Praze, kde žiji dodnes. 
                V roce 2008 jsem promoval na CVUT. Od roku 2006 pracuji pro skvělou antivirovou společnost AVAST Software jako virový analytik. 
                V roce 2010 jsem se oženil se Zuzkou. Rád jezdím na horském kole, snowboardu a cestuji.
            </p>
        </Layout>
    )
}

export const Head = () => (
    <>
        <Seo title="About Me" />
        <meta name="description" content="Michal Trs 1983" />
    </>
)

export default AboutPage