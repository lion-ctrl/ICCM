import Image from 'next/image';
import { breakPoints } from 'styles/variables';

export default function Gallery() {
  const galleryImages = [
    { src: '/assets/img/eagle.jpg', alt: 'image1' },
    { src: '/assets/img/bible.jpg', alt: 'image2' },
    { src: '/assets/img/road.jpg', alt: 'image3' },
    { src: '/assets/img/bible2.jpg', alt: 'image4' },
    { src: '/assets/img/vision.jpg', alt: 'image5' },
    { src: '/assets/img/road.jpg', alt: 'image6' },
  ];

  return (
    <>
      <div className="gallery">
        {galleryImages.map((img, i) => (
          <div
            key={`${img.alt}-${i}`}
            className="gallery-img-container fade-in-active-animation"
          >
            <Image
              src={img.src}
              alt={img.alt}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
      <style jsx>{`
        div.gallery {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 0.5rem;
        }

        div.gallery-img-container {
          position: relative;
          height: 200px;
        }

        @media (min-width: ${breakPoints.sm}) {
          div.gallery-img-container {
            height: 300px;
          }
        }

        @media (min-width: ${breakPoints.md}) {
          div.gallery {
            grid-template-columns: repeat(3, 1fr);
          }

          div.gallery-img-container {
            height: 400px;
          }

          div.gallery-img-container:first-of-type,
          div.gallery-img-container:nth-child(4),
          div.gallery-img-container:nth-child(5) {
            grid-column: span 2;
          }
        }

        @media (min-width: ${breakPoints.lg}) {
          div.gallery-img-container {
            height: 500px;
          }
        }
      `}</style>
    </>
  );
}
