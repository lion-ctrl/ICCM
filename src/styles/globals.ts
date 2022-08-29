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
      padding-bottom: 0;
    }
  }

  /* ****** Utilities ****** */
  .container {
    margin-left: auto;
    margin-right: auto;
    max-width: 1200px;
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

  /* ! ****** Animations ****** */

  /* TODO: Mejorar las active animations con las automatics usando los keyframes */

  /* ? **** active-animation **** */
  /* *** slide-in-left-active-animation *** */
  .slide-in-left-active-animation {
    transform: translateX(-130%);
    transition: transform 1s ease-in-out;
  }

  *.is-active .slide-in-left-active-animation {
    transform: translateX(0%);
  }

  /* *** slide-in-right-active-animation *** */
  .slide-in-right-active-animation {
    transform: translateX(130%);
    transition: transform 1s ease-in-out;
  }

  *.is-active .slide-in-right-active-animation {
    transform: translateX(0%);
  }

  /* *** slide-in-title-active-animation *** */
  .slide-in-title-active-animation {
    overflow: hidden;
    position: relative;
  }

  .slide-in-title-active-animation::before,
  .slide-in-title-active-animation::after {
    background-color: ${colors.color2};
    content: '';
    height: 1px;
    left: 0;
    position: absolute;
    transition: transform 1s ease-in-out;
    width: 100%;
  }

  .slide-in-title-active-animation::before {
    top: 0;
    transform: translateX(-100%);
  }

  .slide-in-title-active-animation::after {
    bottom: 0;
    transform: translateX(100%);
  }

  .slide-in-title-active-animation > div {
    opacity: 0;
    pointer-events: none;
    transition: opacity 1s ease-in-out;
  }

  *.is-active .slide-in-title-active-animation::before,
  *.is-active .slide-in-title-active-animation::after {
    transform: translateX(0%);
  }

  *.is-active .slide-in-title-active-animation > div {
    opacity: 1;
    pointer-events: auto;
  }

  /* *** fade-in-active-animation *** */
  .fade-in-active-animation {
    opacity: 0;
    pointer-events: none;
  }

  *.is-active .fade-in-active-animation {
    animation: fade-in-automatic-animation 1s ease-in-out forwards;
  }

  /* ? **** automatic-animation **** */
  /* *** fade-in-automatic-animation *** */
  @keyframes fade-in-automatic-animation {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* *** fade-out-automatic-animation *** */
  @keyframes fade-out-automatic-animation {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  /* *** fade-in-down-automatic-animation *** */
  @keyframes fade-in-down-automatic-animation {
    from {
      opacity: 0;
      transform: translateY(-50%);
    }
    to {
      opacity: 1;
      transform: translateY(0%);
    }
  }

  /* *** fade-out-down-automatic-animation *** */
  @keyframes fade-out-down-automatic-animation {
    from {
      opacity: 1;
      transform: translateY(0%);
    }
    to {
      opacity: 0;
      transform: translateY(50%);
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
