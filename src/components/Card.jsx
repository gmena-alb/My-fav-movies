import React, { useState } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

const Card = ({
  title,
  year,
  description,
  image,
  director,
  types,
  link,
  duration,
  bigImage,
}) => {
  const pathToImage = getImage(image)
  const pathToBigImage = bigImage?.file?.url

  const [isActive, setActive] = useState(false)
  const toggleVisibility = () => {
    setActive(!isActive)
  }

  return (
    <CardWrapper className="card">
      <CardHeader
        className={isActive ? "opened" : ""}
        style={{
          background: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) ), url(${pathToBigImage})`,
        }}
      >
        <div className="movie-data">
          <h2 className="title">{title}</h2>
          <p className="subtitle">
            {year} | {director} | {duration}
          </p>
          <div className="movie-types">
            {types.map((type, index) => {
              return <p key={index}>{type}</p>
            })}
          </div>
          <div className="button" onClick={toggleVisibility}>
            {isActive ? "Hide" : "Know more"}
          </div>
        </div>
      </CardHeader>
      <CardDescription className={isActive ? "active" : ""}>
        <GatsbyImage
          image={pathToImage}
          alt={image.description}
          className="poster-img"
        />
        <p>{description.description}</p>
        <a href={link} target="_blank">
          See on IMDB &gt;&gt;
        </a>
      </CardDescription>
    </CardWrapper>
  )
}

const CardWrapper = styled.div`
  position: relative;
  width: 90%;
  margin-inline: auto;
  font-family: "Montserrat", sans-serif;
  border-radius: 10px;
  background-color: #f1f1fd;
  box-shadow: rgb(50 50 93 / 25%) 0px 6px 12px -2px,
    rgb(0 0 0 / 30%) 0px 3px 7px -3px;
`

const CardHeader = styled.div`
  background-size: cover !important;
  border-radius: 10px;
  display: grid;
  &.opened {
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
  .movie-data {
    display: grid;
    padding: 110px 22px 22px;
    .title {
      color: white;
      font-size: 1.75rem;
      grid-column: 1/3;
      margin-bottom: 5px;
    }
    .subtitle {
      font-size: 0.875rem;
      color: white;
      grid-row: 2;
      grid-column: 1/3;
      margin-bottom: 10px;
      color: #d3d3d3;
    }
    .movie-types {
      display: flex;
      gap: 5px;
      flex-wrap: wrap;
      grid-row: 4;
      grid-column: 1;
      align-self: center;
      p {
        padding: 4px 14px;
        border: 1px solid #d3d3d3;
        border-radius: 15px;
        font-size: 0.8rem;
        color: white;
      }
      p:not(:last-child) {
        margin-right: 3px;
      }
    }
    .button {
      display: inline-block;
      justify-self: right;
      grid-row: 4;
      grid-column: 2;
      align-self: end;
      width: 116px;
      margin-top: 0.4rem;
      padding: 10px;
      background: white;
      border: 1px solid black;
      text-align: center;
      color: black;
    }
  }
`

const CardDescription = styled.div`
  position: relative;
  min-height: 254px;
  display: none;
  margin-top: -1px;
  padding: 22px;
  row-gap: 16px;
  column-gap: 20px;
  font-size: 0.875rem;
  background-color: rgb(0, 0, 0);
  color: #d3d3d3;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  &.active {
    display: grid;
  }
  &:before {
    content: "";
    display: block;
    width: 90%;
    height: 1px;
    background: #3c3c3c;
    left: 16px;
    top: 0;
    position: absolute;
  }
  .poster-img {
    width: 80px;
    aspect-ratio: 2 / 3;
    box-shadow: 0 0 20px -10px rgb(0 0 0 / 50%);
    grid-row: 1;
    grid-column: 1;
    &.opened {
      border-radius: ;
    }
  }
  p {
    grid-row: 1;
    grid-column: 2;
  }
  a {
    display: inline-block;
    align-self: flex-end;
    grid-column: 2;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    color: white;
    text-align: right;
  }
`

export default Card
