import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import image from "../assets/cherry-horror-film.png"

const Header = () => {
  const data = useStaticQuery(query)
  const { name, title, titleStroke, subtitle } =
    data?.contentfulLandingPage?.header
  return (
    <HeaderWrapper>
      <p className="name">{name}</p>
      <h1>
        {title}
        <span className="stroke"> {titleStroke}</span>
      </h1>
      <h2>{subtitle}</h2>
      <img src={image} alt="" />
    </HeaderWrapper>
  )
}

export const query = graphql`
  query {
    contentfulLandingPage {
      header {
        name
        title
        titleStroke
        subtitle
      }
    }
  }
`

const HeaderWrapper = styled.header`
  position: relative;
  padding-inline: 22px;
  max-width: 70rem;
  margin-inline: auto;
  @media only screen and (min-width: 618px) {
    display: grid;
    grid-template-areas:
      "name name"
      "title image"
      "subtitle subtitle";
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
    margin-bottom: 50px;
  }
  @media only screen and (min-width: 1014px) {
    display: grid;
    grid-template-areas:
      "name name"
      "title image"
      "subtitle image";
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
    margin-bottom: 50px;
  }
  .name {
    font-family: "Montserrat", sans-serif;
    font-size: 1.5rem;
    text-align: center;
    padding-top: 50px;
    position: relative;
    &:after {
      display: block;
      content: "";
      width: 40px;
      height: 3px;
      background: black;
      position: absolute;
      bottom: -15px;
      left: 50%;
      transform: translateX(-50%);
    }
    @media only screen and (min-width: 618px) {
      grid-area: name;
    }
  }
  h1 {
    font-family: "Source Sans", sans-serif;
    font-size: 4rem;
    color: #262524;
    font-weight: 700;
    line-height: 4rem;
    z-index: 1;
    text-align: center;
    margin-top: 5rem;
    .stroke {
      -webkit-text-stroke: 2px black;
      -webkit-text-fill-color: white;
      letter-spacing: 0.1rem;
    }
    @media only screen and (min-width: 618px) {
      grid-area: title;
      padding-inline: 32px;
    }
  }
  h2 {
    font-family: "Montserrat", sans-serif;
    font-size: 1.2rem;
    text-align: center;
    margin-block: 2rem 1.5rem;
    z-index: 1;
    padding-inline: 22px;
    @media only screen and (min-width: 618px) {
      grid-area: subtitle;
      padding-inline: 32px;
    }
  }
  img {
    z-index: 1;
    margin-bottom: 2rem;
    padding: 20px 22px 0;
    @media only screen and (min-width: 618px) {
      grid-area: image;
      padding: 0;
      align-self: flex-end;
    }
  }
`

export default Header
