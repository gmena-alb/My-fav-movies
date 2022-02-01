import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Card from "./Card"

const AllCards = () => {
  const data = useStaticQuery(query)
  const cards = data?.contentfulLandingPage.cards
  return (
    <AllCardsWrapper className="cards">
      {cards.map(card => {
        return <Card key={card.id} {...card} />
      })}
    </AllCardsWrapper>
  )
}

const query = graphql`
  {
    contentfulLandingPage {
      cards {
        title
        year
        link
        description {
          description
        }
        director
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
          description
        }
        types
        duration
        bigImage {
          file {
            url
          }
        }
      }
    }
  }
`

const AllCardsWrapper = styled.section`
  position: relative;
  display: grid;
  row-gap: 30px;
  margin-top: -5px;
  grid-template-columns: repeat(auto-fit, minmax(337px, 1fr));
  align-items: flex-start;
  max-width: 70rem;
  margin-inline: auto;
`

export default AllCards
