import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const Footer = () => {
  const data = useStaticQuery(query)
  const { text } = data?.contentfulLandingPage?.footer
  return (
    <FooterWrapper>
      <div className="content">{text}</div>
    </FooterWrapper>
  )
}

export const query = graphql`
  query {
    contentfulLandingPage {
      footer {
        text
      }
    }
  }
`

const FooterWrapper = styled.footer`
    color: white;
    font-family: "Source Sans", sans-serif;
    font-size: 1.2rem;
    text-align: center; 
    background-color: #f7f7f7;
    .content {
      padding-block: 40px;
      background-color: #f15a5c;
      max-width: 70rem;
      margin-inline: auto;
      @media only screen and (min-width: 768px) {
          padding-block: 60px;
      }
    }

  }
`

export default Footer
