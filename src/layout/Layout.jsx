import React from "react"
import Fonts from "../theme/fontStyles"
import GlobalStyles from "../theme/GlobalStyles"
import Footer from "../components/Footer"
import styled from "styled-components"

const Layout = props => {
  return (
    <>
      <GlobalStyles />
      <Fonts />
      <MainSection>
        <>{props.children}</>
      </MainSection>
      <Footer />
    </>
  )
}

const MainSection = styled.main`
  background-color: #f7f7f7;
  padding-block: 30px;
  @media only screen and (min-width: 768px) {
    padding-block: 50px;
  }
`
export default Layout
