import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const Jumbo = ({ className }) => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "jumbo-darken.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  // Set ImageData.
  const imageData = data.desktop.childImageSharp.fluid

  return (
    <BackgroundImage
      id="home"
      Tag="section"
      className="jumbo flex items-center justify-center text-white text-5xl lg:text-6xl"
      fluid={imageData}
      style={{
        backgroundPosition: 'center top'
      }}
    >
      <h1 className="in-view flex flex-col items-center font-bold"
        style={{
          textShadow: '#000000 0 0 1px',
        }}
      >It's now easier to<u> sell online</u></h1>

    </BackgroundImage>
  )
}


export default Jumbo