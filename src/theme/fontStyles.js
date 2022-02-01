import { createGlobalStyle } from "styled-components"
import SourceSans from "../fonts/SourceSans3-Bold.ttf"
import Montserrat from "../fonts/Montserrat-Regular.ttf"
import MontserratBold from "../fonts/Montserrat-Bold.ttf"
import MontserratSemiBold from "../fonts/Montserrat-SemiBold.ttf"

const Fonts = createGlobalStyle`

@font-face {
  font-family: 'Source Sans';
  src: url(${SourceSans}) format('truetype');
  font-weight: 700;
}

@font-face {
  font-family: 'Montserrat';
  src: url(${Montserrat}) format('truetype');
  font-weight: 400;
}

@font-face {
  font-family: 'Montserrat';
  src: url(${MontserratSemiBold}) format('truetype');
  font-weight: 600;
}

@font-face {
  font-family: 'Montserrat';
  src: url(${MontserratBold}) format('truetype');
  font-weight: 700;
}
`

export default Fonts
