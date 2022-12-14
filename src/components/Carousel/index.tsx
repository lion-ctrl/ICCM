// react
import React, { Fragment, useCallback, useState } from 'react';
import Image from 'next/image';
// components
import ProgressBar from './ProgressBar';
// helpers
import { shimmer, toBase64 } from 'helpers';
// styles
import { addOpacity } from 'styles/utils';
import { breakPoints, colors } from 'styles/variables';

export default function Carousel({
  backgroundImages,
  content,
  contentType,
  height,
  width,
}: {
  backgroundImages: string[];
  content: {
    text: string;
    author?: string;
    imagePath?: string;
    imageAlt?: string;
  }[];
  contentType: 'only-text' | 'cite';
  height: string;
  width: string;
}) {
  const [state, setState] = useState<{
    active: number;
    activeContent: number;
    resetInterval: boolean;
    isAnimateContent: boolean;
  }>({
    active: 0,
    activeContent: 0,
    resetInterval: false,
    isAnimateContent: true,
  });

  const AutomaticNextSlide = useCallback(() => {
    setState((state) => ({
      ...state,
      isAnimateContent: false,
      active:
        state.active + 1 >= backgroundImages.length ? 0 : state.active + 1,
    }));

    setTimeout(() => {
      setState((state) => ({
        ...state,
        activeContent:
          state.activeContent + 1 >= content.length
            ? 0
            : state.activeContent + 1,
        isAnimateContent: true,
      }));
    }, 1200);
  }, [backgroundImages.length, content.length]);

  const handleLeft = () => {
    setState((state) => ({
      ...state,
      active:
        state.active - 1 < 0 ? backgroundImages.length - 1 : state.active - 1,
      isAnimateContent: false,
      resetInterval: true,
    }));

    setTimeout(() => {
      setState((state) => ({
        ...state,
        activeContent:
          state.activeContent - 1 < 0
            ? content.length - 1
            : state.activeContent - 1,
        isAnimateContent: true,
        resetInterval: false,
      }));
    }, 1200);
  };

  const handleRight = () => {
    setState((state) => ({
      ...state,
      active:
        state.active + 1 >= backgroundImages.length ? 0 : state.active + 1,
      isAnimateContent: false,
      resetInterval: true,
    }));

    setTimeout(() => {
      setState((state) => ({
        ...state,
        activeContent:
          state.activeContent + 1 >= content.length
            ? 0
            : state.activeContent + 1,
        isAnimateContent: true,
        resetInterval: false,
      }));
    }, 1200);
  };

  return (
    <>
      <div className="carousel">
        <ProgressBar
          resetInterval={state.resetInterval}
          AutomaticNextSlide={AutomaticNextSlide}
        />

        <div className="carousel-slider">
          {backgroundImages.map((bg, i) => (
            <div
              key={`${bg}-${i}`}
              className={`carousel-slide-container ${
                state.active === i ? 'is-active' : 'is-not-active'
              }`}
            >
              <figure>
                <Image
                  src={bg}
                  alt={`image-${i}`}
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(
                    shimmer('100%', '100%')
                  )}`}
                />
              </figure>
            </div>
          ))}
        </div>

        <article>
          {contentType === 'only-text' && (
            <aside className="container">
              <h2
                className={
                  state.isAnimateContent ? 'fade-in-down' : 'fade-out-down'
                }
              >
                {content.map(({ text }, i) => {
                  return state.activeContent === i && text;
                })}
              </h2>
            </aside>
          )}

          {contentType === 'cite' && (
            <aside
              className={`container ${
                state.isAnimateContent ? 'fade-in' : 'fade-out'
              }`}
            >
              {content.map(
                ({ text, author, imagePath, imageAlt }, i) =>
                  state.activeContent === i && (
                    <Fragment key={`${author}-${i}`}>
                      <figure className="text-with-image-container">
                        <Image
                          src={imagePath!}
                          alt={imageAlt!}
                          layout="fill"
                          placeholder="blur"
                          blurDataURL={`data:image/svg+xml;base64,${toBase64(
                            shimmer('100%', '100%')
                          )}`}
                        />
                      </figure>
                      <h2 className="text-with-image-title">
                        <blockquote>{text}</blockquote>
                        <cite>{author}</cite>
                      </h2>
                    </Fragment>
                  )
              )}
            </aside>
          )}
        </article>

        <button type="button" title="next slide" onClick={handleLeft}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button type="button" title="previous slide" onClick={handleRight}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
      <style jsx>{`
        div.carousel {
          position: relative;
          overflow-x: hidden;
          height: ${height};
          width: ${width};
        }

        div.carousel-slider {
          position: relative;
          height: inherit;
          width: inherit;
        }

        div.carousel-slide-container {
          bottom: 0;
          left: 0;
          position: absolute;
          right: 0;
          top: 0;
          transition: opacity 1s ease-in-out;
        }

        div.carousel-slide-container.is-active {
          opacity: 1;
        }

        div.carousel-slide-container.is-not-active {
          opacity: 0;
        }

        figure {
          height: 100%;
          margin: 0;
          padding: 0;
          position: relative;
        }

        article {
          background-color: rgba(0, 0, 0, 0.4);
          bottom: 0;
          left: 0;
          position: absolute;
          right: 0;
          top: 0;
        }

        aside {
          align-items: center;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          height: 100%;
          justify-content: center;
          width: 60%;
        }

        h2 {
          color: ${colors.color1};
          line-height: 1.5;
          text-align: center;
        }

        figure.text-with-image-container {
          flex: 0 0 150px;
          width: 150px;
        }

        h2.text-with-image-title {
          color: ${colors.color1};
          font-weight: 300;
          line-height: 1.25;
          text-align: center;
        }

        h2.text-with-image-title cite {
          border-bottom: thin solid ${colors.color1};
          font-size: clamp(0.67rem, calc(0.46rem + 1.16vw), 1.33rem);
          font-weight: bold;
        }

        button {
          background-color: ${addOpacity({
            color: colors.black,
            opacity: 0.8,
          })};
          border: none;
          border-radius: 50%;
          cursor: pointer;
          height: 2rem;
          outline: none;
          padding: 5px;
          position: absolute;
          top: calc(50% - 18px);
          transition: background-color 0.2s ease;
          width: 2rem;
        }

        button > svg {
          stroke: ${colors.white};
        }

        button:first-of-type {
          left: 1rem;
        }
        button:last-of-type {
          right: 1rem;
        }

        @media (hover: hover) {
          button:hover {
            background-color: ${addOpacity({
              color: colors.black,
              opacity: 1,
            })};
          }
        }

        @media (min-width: ${breakPoints.sm}) {
          aside {
            flex-direction: row;
            width: 80%;
          }

          figure.text-with-image-container {
            flex: 0 0 250px;
            height: 250px;
          }
        }
      `}</style>
    </>
  );
}
