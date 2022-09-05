import css from 'styled-jsx/css';
import { breakPoints, colors, fluidFontSizes, fonts } from './variables';

export default css.global`
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;700&display=swap');

  /* ! ****** Reset ****** */
  html {
    box-sizing: border-box;
    font-family: ${fonts.font1};
    font-size: 16px;
    scroll-behavior: smooth;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  body {
    color: ${colors.color3};
    margin: 0;
    padding: 0 0 4rem 0;
    overflow-x: hidden;
    width: 100vw;
  }

  a {
    color: ${colors.color2};
    transition: all 0.5s ease-out;
  }

  a:hover {
    opacity: 0.75;
  }

  h1 {
    margin: 0;
    font-size: ${fluidFontSizes.h1};
  }

  h2 {
    margin: 0;
    font-size: ${fluidFontSizes.h2};
  }

  h3 {
    margin: 0;
    font-size: ${fluidFontSizes.h3};
  }

  h4 {
    margin: 0;
    font-size: ${fluidFontSizes.h4};
  }

  h5 {
    margin: 0;
    font-size: ${fluidFontSizes.h5};
  }

  h6 {
    margin: 0;
    font-size: ${fluidFontSizes.h6};
  }

  img,
  svg {
    max-width: 100%;
    height: auto;
  }

  p {
    font-size: ${fluidFontSizes.p};
    font-weight: 400;
    line-height: 1.5;
  }

  blockquote {
    margin: 0;
  }

  @media (min-width: ${breakPoints.md}) {
    body {
      padding: 4rem 0 0 0;
    }
  }

  /* ! ****** Animations ****** */
  .fade-in {
    animation: fade-in 1s ease-in-out forwards;
  }

  .fade-out {
    animation: fade-out 1s ease-in-out forwards;
  }

  .fade-in-down {
    animation: fade-in-down 1s ease-in-out forwards;
  }

  .fade-out-down {
    animation: fade-out-down 1s ease-in-out forwards;
  }

  /* ? **** active-animation **** */

  /* *** slide-in-left-active *** */
  .slide-in-left-active {
    transform: translateX(-130%);
    transition: transform 1s ease-in-out;
  }

  *.is-active .slide-in-left-active {
    transform: translateX(0%);
  }

  /* *** slide-in-right-active *** */
  .slide-in-right-active {
    transform: translateX(130%);
    transition: transform 1s ease-in-out;
  }

  *.is-active .slide-in-right-active {
    transform: translateX(0%);
  }

  /* *** slide-in-title-active *** */
  .slide-in-title-active {
    overflow: hidden;
    position: relative;
  }

  .slide-in-title-active::before,
  .slide-in-title-active::after {
    background-color: ${colors.color2};
    content: '';
    height: 1px;
    left: 0;
    position: absolute;
    transition: transform 1s ease-in-out;
    width: 100%;
  }

  .slide-in-title-active::before {
    top: 0;
    transform: translateX(-100%);
  }

  .slide-in-title-active::after {
    bottom: 0;
    transform: translateX(100%);
  }

  .slide-in-title-active > div {
    opacity: 0;
    pointer-events: none;
    transition: opacity 1s ease-in-out;
  }

  *.is-active .slide-in-title-active::before,
  *.is-active .slide-in-title-active::after {
    transform: translateX(0%);
  }

  *.is-active .slide-in-title-active > div {
    opacity: 1;
    pointer-events: auto;
  }

  /* *** fade-in-active *** */
  .fade-in-active {
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.5s ease-in-out;
  }

  *.is-active .fade-in-active {
    opacity: 1;
  }

  /* **** keyframes **** */

  /* *** fade-in *** */
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* *** fade-out *** */
  @keyframes fade-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  /* *** fade-in-down *** */
  @keyframes fade-in-down {
    from {
      opacity: 0;
      transform: translateY(-50%);
    }
    to {
      opacity: 1;
      transform: translateY(0%);
    }
  }

  /* *** fade-out-down *** */
  @keyframes fade-out-down {
    from {
      opacity: 1;
      transform: translateY(0%);
    }
    to {
      opacity: 0;
      transform: translateY(50%);
    }
  }

  /* ****** Utilities ****** */
  .container {
    margin-left: auto;
    margin-right: auto;
    max-width: 1200px;
    overflow-x: hidden;
    width: 90%;
  }

  .reverse {
    flex-direction: row-reverse;
  }

  @media (min-width: ${breakPoints.md}) {
    .md-reverse {
      flex-direction: row-reverse !important;
    }
  }

  /* ! ****** Site Styles ****** */
  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 5px;
    height: 5px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: ${colors.color2};
  }
`;
