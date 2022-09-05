// react
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
// componets
import {
  About,
  Home,
  // Book,
  Mission,
  Eye,
  Person,
  GalleryIcon,
  Position,
} from 'components/icons';
// styles
import { breakPoints, colors } from 'styles/variables';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const $menuLinks = Array.from(document.querySelector('nav')!.children);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute('id');
          if (entry.isIntersecting) {
            entry.target.classList.add('is-active');
            const $link = document.querySelector(
              `nav a[href="/${id !== 'inicio' ? `#${id}` : ''}"]`
            )!;
            $link.classList.add('is-active');
          } else {
            const $link = document.querySelector(
              `nav a[href="/${id !== 'inicio' ? `#${id}` : ''}"]`
            )!;
            $link.classList.remove('is-active');
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(document.querySelector('#inicio')!);
    $menuLinks.forEach(($link) => {
      const hash = $link.getAttribute('href')!;
      if (hash.includes('/#')) {
        const $target = document.querySelector(hash.slice(1));
        if ($target) {
          observer.observe($target);
        }
      }
    });
  }, []);

  const menuData = [
    {
      href: '/',
      Icon: Home,
      text: 'Inicio',
    },
    {
      href: '/#nosotros',
      Icon: About,
      text: 'Nosotros',
    },
    {
      href: '/#mision',
      Icon: Mission,
      text: 'Misión',
    },
    {
      href: '/#vision',
      Icon: Eye,
      text: 'Visión',
    },
    {
      href: '/#pastor',
      Icon: Person,
      text: 'Pastor',
    },
    {
      href: '/#galeria',
      Icon: GalleryIcon,
      text: 'Galeria',
    },
    {
      href: '/#ubicacion',
      Icon: Position,
      text: 'Ubicación',
    },
    // {
    //   href: '/biblia',
    //   Icon: Book,
    //   text: 'Biblia',
    // },
  ];

  return (
    <>
      <header>
        <section className="container">
          <Link href="/">
            <a className="header-logo">ICCM</a>
          </Link>
          <button
            type="button"
            title="hamburger"
            className={`header-btn ${isMenuOpen ? 'is-active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="header-hamburger">
              <span className="hamburger-line line1"></span>
              <span className="hamburger-line line2"></span>
              <span className="hamburger-line line3"></span>
            </div>
          </button>
          <nav
            className={isMenuOpen ? 'is-active' : ''}
            onClick={() => setIsMenuOpen(false)}
          >
            {menuData.map((data) => (
              <Link key={`${data.text}`} href={data.href}>
                <a>
                  <data.Icon
                    style={{
                      fill: colors.color1,
                      height: '1rem',
                      marginRight: '.5rem',
                      width: '1rem',
                    }}
                  />
                  {data.text}
                </a>
              </Link>
            ))}
          </nav>
        </section>
      </header>
      <style jsx>{`
        header {
          background-color: ${colors.color4};
          bottom: 0;
          height: 4rem;
          padding: 10px 0;
          position: fixed;
          width: 100vw;
          z-index: 2000;
        }

        section {
          align-items: center;
          display: flex;
          justify-content: space-between;
          position: relative;
        }

        .header-logo {
          align-items: center;
          color: ${colors.color1};
          display: flex;
          font-size: 2rem;
          font-weight: bold;
          justify-content: center;
          text-align: center;
          text-decoration: none;
        }

        .header-btn {
          background-color: ${colors.color4};
          border: none;
          cursor: pointer;
          outline: none;
          padding: 0.5rem;
        }

        .header-btn.is-active .line1 {
          transform: rotate(45deg);
        }

        .header-btn.is-active .line2 {
          transform: scaleY(0);
        }

        .header-btn.is-active .line3 {
          transform: rotate(-45deg);
        }

        .header-hamburger {
          display: flex;
          flex-direction: column;
          height: 26px;
          justify-content: space-between;
          position: relative;
          width: 32px;
          z-index: 2;
        }

        .hamburger-line {
          display: block;
          height: 4px;
          width: 100%;
          border-radius: 10px;
          background-color: ${colors.color1};
        }

        .line1 {
          transform-origin: 0% 0%;
          transition: transform 0.4s ease-in-out;
        }

        .line2 {
          transition: transform 0.2s ease-in-out;
        }

        .line3 {
          transform-origin: 0% 100%;
          transition: transform 0.4s ease-in-out;
        }

        nav {
          align-items: center;
          bottom: 3.8rem;
          background-color: ${colors.color4};
          display: flex;
          flex-direction: column;
          justify-content: center;
          left: 0;
          opacity: 0;
          padding: 1rem 0;
          pointer-events: none;
          position: fixed;
          transition: opacity 0.5s ease-in-out;
          width: 100%;
        }

        nav.is-active {
          opacity: 1;
          pointer-events: auto;
        }

        nav a {
          align-items: center;
          color: ${colors.color1};
          display: flex;
          font-size: 0.8rem;
          font-weight: bold;
          justify-content: flex-start;
          padding: 0.8rem 0;
          position: relative;
          text-align: center;
          text-decoration: none;
        }

        @media (min-width: ${breakPoints.md}) {
          header {
            top: 0;
          }

          section {
            height: 100%;
          }

          button.header-btn {
            display: none;
          }

          nav {
            flex-direction: row;
            opacity: 1;
            padding: 0;
            pointer-events: auto;
            position: static;
            width: auto;
          }

          nav a {
            font-size: 0.7rem;
            overflow: hidden;
            padding-top: 0;
            padding-bottom: 5px;
            margin-right: 0.7rem;
          }

          nav a:last-of-type {
            margin-right: 0;
          }

          nav a::after {
            background-color: ${colors.color2};
            bottom: 0;
            content: '';
            height: 2px;
            left: 0;
            position: absolute;
            transform: translateX(-105%);
            transition: transform 0.5s ease-in-out;
            width: 100%;
          }

          nav a.is-active::after {
            transform: translateX(0%);
          }
        }

        @media (min-width: ${breakPoints.lg}) {
          nav a {
            font-size: 1rem;
            margin-right: 1rem;
          }
        }
      `}</style>
    </>
  );
}
