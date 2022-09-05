import Image from 'next/image';
// helpers
import { shimmer, toBase64 } from 'helpers';
// styles
import { breakPoints, colors } from 'styles/variables';

export default function Footer() {
  const socialNetWorks = [
    {
      href: 'https://www.instagram.com/iccmvzlaoficial',
      alt: 'instagram',
      src: '/assets/icons/instagram.svg',
    },
    {
      href: 'https://www.facebook.com/iccmvzlaoficial',
      alt: 'facebbook',
      src: '/assets/icons/facebook.svg',
    },
    {
      href: 'https://www.twitter.com/iccmvzlaoficial',
      alt: 'twitter',
      src: '/assets/icons/twitter.svg',
    },
    {
      href: 'https://www.youtube.com/iccmvzlaoficial',
      alt: 'youtube',
      src: '/assets/icons/youtube.svg',
    },
  ];
  return (
    <>
      <footer className="container">
        <h4 className="copy">ICCM - Iglesia Cristiana Central de Maracaibo</h4>
        <section>
          {socialNetWorks.map(({ href, alt, src }) => (
            <a key={alt} href={href} target="_blank" rel="noopener noreferrer">
              <div>
                <Image
                  src={src}
                  alt="instagram"
                  layout="fill"
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(
                    shimmer('100%', '100%')
                  )}`}
                />
              </div>
            </a>
          ))}
        </section>
      </footer>
      <style jsx>{`
        footer {
          align-items: center;
          border-top: thin solid ${colors.color4};
          display: flex;
          flex-direction: column;
          gap: 1rem;
          justify-content: center;
          padding: 1rem 0;
        }

        h4 {
          font-size: clamp(0.5rem, calc(0.46rem + 1.16vw), 1.25rem);
          order: 1;
        }

        section {
          align-items: center;
          display: flex;
          gap: 0.5rem;
          justify-content: center;
          width: 50%;
        }

        a {
          background-color: ${colors.color1};
          border-radius: 50%;
          height: 3rem;
          padding: 0.5rem;
          width: 3rem;
        }

        a > div {
          position: relative;
          width: 2rem;
          height: 2rem;
        }

        @media (min-width: ${breakPoints.md}) {
          footer {
            flex-direction: row;
          }

          h4 {
            order: -1;
            width: 60%;
          }

          section {
            width: 40%;
          }
        }
      `}</style>
    </>
  );
}
