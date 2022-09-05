// react
import Image from 'next/image';
// components
import Carousel from 'components/Carousel';
import Gallery from 'components/Gallery';
import Layout from 'components/Layout';
// helpers
import { shimmer, toBase64 } from 'helpers';
// styles
import { breakPoints } from 'styles/variables';
import { MapWithNoSSR } from 'components/Map';

const Home = () => {
  return (
    <Layout>
      <section id="inicio" className="carousel-container">
        <Carousel
          backgroundImages={[
            '/assets/img/eagle.jpg',
            '/assets/img/bible.jpg',
            '/assets/img/road.jpg',
            '/assets/img/bible2.jpg',
          ]}
          content={[
            { text: 'Donde esta el cuerpo se juntarán las Aguilas.' },
            { text: 'Choose the right way 1' },
            { text: 'Choose the right way 2' },
            { text: 'Choose the right way 3' },
          ]}
          contentType="only-text"
          height="100vh"
          width="100vw"
        />
      </section>

      <section id="nosotros" className="container">
        <h2 className="slide-in-title-active">
          <div>NUESTRA IGLESIA</div>
        </h2>
        <div className="section-container">
          <div className="slide-in-left-active">
            <h1>
              Somos una iglesia que cree en Jesús, una iglesia que ama a Dios y
              a las personas.
            </h1>
            <p>
              Se alienta a las personas y los niños de todas las edades a
              aprender sobre su propia fe.
            </p>
          </div>
          <div className="section-image-container slide-in-right-active">
            <Image
              src="/assets/img/logo.jpg"
              alt="logo"
              layout="fill"
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer('100%', '100%')
              )}`}
            />
          </div>
        </div>
      </section>

      <section id="mision" className="container">
        <h2 className="slide-in-title-active">
          <div>Misión</div>
        </h2>
        <div className="section-container md-reverse">
          <div className="slide-in-right-active">
            <h3>
              Establecer y extender el Reino de Dios a través de Congregaciones
              e Institutos de Enseñanzas.
              <br />
              <cite>Mateo 28:19</cite>
            </h3>
          </div>
          <div className="section-image-container slide-in-left-active">
            <Image
              src="/assets/img/mission.png"
              alt="mision"
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer('100%', '100%')
              )}`}
            />
          </div>
        </div>
      </section>

      <section id="vision" className="container">
        <h2 className="slide-in-title-active">
          <div>Visión</div>
        </h2>
        <div className="section-container">
          <div className="slide-in-left-active">
            <h3>
              Formar Hombres y mujeres maduros, capaces de enseñar e implantar
              la palabra de Dios y que estos Produzcan Cambios.
              <br />
              <cite>Efesios 4:11-13</cite>
            </h3>
          </div>
          <div className="section-image-container slide-in-right-active">
            <Image
              src="/assets/img/vision.jpg"
              alt="vision"
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer('100%', '100%')
              )}`}
            />
          </div>
        </div>
      </section>

      <section id="pastor" className="carousel-container">
        <Carousel
          backgroundImages={['/assets/img/vision.jpg']}
          content={[
            {
              text: '“Donde esta el cuerpo se juntarán las Aguilas”',
              author: 'Pastor Enrique Acosta',
              imagePath: '/assets/img/pastor.jpg',
              imageAlt: 'pastor1',
            },
            {
              text: '“Donde esta el cuerpo se juntarán las Aguilas”',
              author: 'Pastor Eudaldo Acosta',
              imagePath: '/assets/img/pastor.jpg',
              imageAlt: 'pastor2',
            },
            {
              text: '“Donde esta el cuerpo se juntarán las Aguilas”',
              author: 'Pastor Daniel Acosta',
              imagePath: '/assets/img/pastor.jpg',
              imageAlt: 'pastor3',
            },
          ]}
          contentType="cite"
          height="25rem"
          width="100vw"
        />
      </section>

      <section id="galeria" className="container">
        <h2 className="slide-in-title-active">
          <div>Galeria</div>
        </h2>
        <Gallery />
      </section>

      <section id="ubicacion" className="container">
        <h2 className="slide-in-title-active">
          <div>Ubicación</div>
        </h2>
        <MapWithNoSSR />
      </section>

      <style jsx>{`
        h1 {
          font-weight: 300;
        }

        h2 {
          font-weight: bold;
          margin-bottom: 2rem;
          padding: 0.5rem 0;
          text-align: center;
          text-transform: uppercase;
        }

        h3 {
          font-weight: 400;
          line-height: 1.5;
        }

        section {
          padding-top: 2rem;
        }

        section#inicio.carousel-container {
          padding: 0;
        }

        div.section-container {
          align-items: center;
          display: flex;
          flex-direction: column;
          row-gap: 1rem;
        }

        div.section-image-container {
          height: 250px;
          position: relative;
          width: 250px;
        }

        @media (min-width: ${breakPoints.sm}) {
          div.section-image-container {
            height: 400px;
            width: 400px;
          }
        }

        @media (min-width: ${breakPoints.md}) {
          section {
            padding-top: 4.5rem;
          }

          div.section-container {
            column-gap: 1rem;
            flex-direction: row;
            justify-content: space-between;
            row-gap: 0;
          }

          div.section-text-container {
            flex: 0 0 50%;
          }

          div.section-image-container {
            flex: 0 0 50%;
            height: 500px;
            width: 500px;
          }
        }
      `}</style>
    </Layout>
  );
};

export default Home;
